import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Plus, Search, Edit, Trash2, Upload, Eye } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { z } from 'zod';

const imageSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  alt_text: z.string().max(200, 'Alt text must be less than 200 characters').optional(),
  caption: z.string().max(500, 'Caption must be less than 500 characters').optional(),
  image_url: z.string().url('Must be a valid URL')
});

interface GalleryImage {
  id: string;
  title: string;
  alt_text: string | null;
  image_url: string;
  caption: string | null;
  tags: string[] | null;
  created_at: string;
  uploader_profiles: {
    full_name: string;
  } | null;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    alt_text: '',
    image_url: '',
    caption: '',
    tags: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [uploading, setUploading] = useState(false);
  const { profile } = useAuth();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select(`
          *
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const mappedImages = data?.map(item => ({
        ...item,
        uploader_profiles: null
      })) || [];
      
      setImages(mappedImages);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Failed to load gallery images');
    } finally {
      setLoading(false);
    }
  };

  const openCreateDialog = () => {
    setEditingImage(null);
    setFormData({ title: '', alt_text: '', image_url: '', caption: '', tags: '' });
    setErrors({});
    setDialogOpen(true);
  };

  const openEditDialog = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData({
      title: image.title,
      alt_text: image.alt_text || '',
      image_url: image.image_url,
      caption: image.caption || '',
      tags: image.tags?.join(', ') || ''
    });
    setErrors({});
    setDialogOpen(true);
  };

  const openPreviewDialog = (image: GalleryImage) => {
    setPreviewImage(image);
    setPreviewDialogOpen(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = fileName;

      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('gallery')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: publicUrl });
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const submitData = {
        ...formData,
        alt_text: formData.alt_text || null,
        caption: formData.caption || null,
      };

      imageSchema.parse(submitData);

      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      if (editingImage) {
        // Update existing image
        const { error } = await supabase
          .from('gallery_images')
          .update({
            ...submitData,
            tags: tagsArray.length > 0 ? tagsArray : null
          })
          .eq('id', editingImage.id);

        if (error) throw error;

        // Log activity
        await supabase
          .from('admin_activities')
          .insert({
            user_id: profile?.user_id,
            action: 'updated',
            resource_type: 'gallery_image',
            resource_id: editingImage.id,
            details: { title: formData.title }
          });

        toast.success('Image updated successfully');
      } else {
        // Create new image
        const { data, error } = await supabase
          .from('gallery_images')
          .insert({
            ...submitData,
            tags: tagsArray.length > 0 ? tagsArray : null,
            uploaded_by: profile?.user_id
          })
          .select()
          .single();

        if (error) throw error;

        // Log activity
        await supabase
          .from('admin_activities')
          .insert({
            user_id: profile?.user_id,
            action: 'created',
            resource_type: 'gallery_image',
            resource_id: data.id,
            details: { title: formData.title }
          });

        toast.success('Image added successfully');
      }

      setDialogOpen(false);
      fetchImages();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: any = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error('Error saving image:', error);
        toast.error('Failed to save image');
      }
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    try {
      const { error } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', imageId);

      if (error) throw error;

      // Log activity
      await supabase
        .from('admin_activities')
        .insert({
          user_id: profile?.user_id,
          action: 'deleted',
          resource_type: 'gallery_image',
          resource_id: imageId
        });

      setImages(images.filter(img => img.id !== imageId));
      toast.success('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Failed to delete image');
    } finally {
      setDeleteDialogOpen(false);
      setImageToDelete(null);
    }
  };

  const filteredImages = images.filter(image =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.caption?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
          <p className="text-gray-600">Manage your school gallery images</p>
        </div>
        <Button onClick={openCreateDialog} className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Image
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="text-sm text-gray-500">
          {filteredImages.length} of {images.length} images
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.length === 0 ? (
          <div className="col-span-full">
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500">No images found</p>
              </CardContent>
            </Card>
          </div>
        ) : (
          filteredImages.map((image) => (
            <Card key={image.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-video relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={image.image_url}
                    alt={image.alt_text || image.title}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openPreviewDialog(image)}
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                    <Button variant="secondary" size="sm" onClick={() => openPreviewDialog(image)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
                
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{image.title}</h3>
                
                {image.caption && (
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{image.caption}</p>
                )}
                
                {image.tags && image.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {image.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {image.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{image.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    by {image.uploader_profiles?.full_name || 'Unknown'}
                  </div>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" onClick={() => openEditDialog(image)}>
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setImageToDelete(image.id);
                        setDeleteDialogOpen(true);
                      }}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>
                {editingImage ? 'Edit Image' : 'Add New Image'}
              </DialogTitle>
              <DialogDescription>
                {editingImage ? 'Update the image details.' : 'Add a new image to your gallery.'}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="image_file">Upload Image *</Label>
                <Input
                  id="image_file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="cursor-pointer"
                />
                {uploading && <p className="text-blue-500 text-sm">Uploading...</p>}
                <Label htmlFor="image_url" className="text-sm text-gray-500">Or enter image URL</Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className={errors.image_url ? 'border-red-500' : ''}
                  placeholder="https://example.com/image.jpg"
                />
                {errors.image_url && <p className="text-red-500 text-sm">{errors.image_url}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={errors.title ? 'border-red-500' : ''}
                  placeholder="Image title"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="alt_text">Alt Text</Label>
                <Input
                  id="alt_text"
                  value={formData.alt_text}
                  onChange={(e) => setFormData({ ...formData, alt_text: e.target.value })}
                  className={errors.alt_text ? 'border-red-500' : ''}
                  placeholder="Descriptive alt text for accessibility"
                />
                {errors.alt_text && <p className="text-red-500 text-sm">{errors.alt_text}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="caption">Caption</Label>
                <Textarea
                  id="caption"
                  value={formData.caption}
                  onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                  className={errors.caption ? 'border-red-500' : ''}
                  placeholder="Optional image caption"
                  rows={2}
                />
                {errors.caption && <p className="text-red-500 text-sm">{errors.caption}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="event, graduation, sports, culture"
                />
                <p className="text-xs text-gray-500">Separate multiple tags with commas</p>
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                {editingImage ? 'Update Image' : 'Add Image'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={previewDialogOpen} onOpenChange={setPreviewDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          {previewImage && (
            <>
              <DialogHeader>
                <DialogTitle>{previewImage.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={previewImage.image_url}
                    alt={previewImage.alt_text || previewImage.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                {previewImage.caption && (
                  <p className="text-sm text-gray-600">{previewImage.caption}</p>
                )}
                {previewImage.tags && previewImage.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {previewImage.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the image from your gallery.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => imageToDelete && handleDeleteImage(imageToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Gallery;