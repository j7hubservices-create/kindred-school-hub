import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Plus, Trash2, Upload, X } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  created_at: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    image_url: ''
  });
  const [uploading, setUploading] = useState(false);
  const [bulkUploading, setBulkUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { profile } = useAuth();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('gallery')
        .getPublicUrl(fileName);

      setFormData({ ...formData, image_url: data.publicUrl });
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleBulkFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length !== files.length) {
      toast.error('Some files were skipped as they are not images');
    }
    
    setSelectedFiles(imageFiles);
  };

  const handleBulkUpload = async () => {
    if (selectedFiles.length === 0) {
      toast.error('Please select images to upload');
      return;
    }

    setBulkUploading(true);
    let successCount = 0;
    let failCount = 0;

    try {
      for (const file of selectedFiles) {
        try {
          const fileExt = file.name.split('.').pop();
          const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

          // Upload to storage
          const { error: uploadError } = await supabase.storage
            .from('gallery')
            .upload(fileName, file);

          if (uploadError) throw uploadError;

          const { data } = supabase.storage
            .from('gallery')
            .getPublicUrl(fileName);

          // Save to database
          const { error: dbError } = await supabase
            .from('gallery')
            .insert([
              {
                title: file.name.split('.')[0].replace(/[_-]/g, ' '),
                image_url: data.publicUrl,
                uploaded_by: profile?.user_id
              }
            ]);

          if (dbError) throw dbError;
          successCount++;
        } catch (error) {
          console.error('Error uploading file:', file.name, error);
          failCount++;
        }
      }

      if (successCount > 0) {
        toast.success(`Successfully uploaded ${successCount} image${successCount > 1 ? 's' : ''}`);
        fetchImages();
        setSelectedFiles([]);
      }
      
      if (failCount > 0) {
        toast.error(`Failed to upload ${failCount} image${failCount > 1 ? 's' : ''}`);
      }
    } catch (error) {
      console.error('Bulk upload error:', error);
      toast.error('Bulk upload failed');
    } finally {
      setBulkUploading(false);
    }
  };

  const removeBulkFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.image_url) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const { error } = await supabase
        .from('gallery')
        .insert([
          {
            title: formData.title,
            image_url: formData.image_url,
            uploaded_by: profile?.user_id
          }
        ]);

      if (error) throw error;

      toast.success('Image added successfully');
      setDialogOpen(false);
      setFormData({ title: '', image_url: '' });
      fetchImages();
    } catch (error) {
      console.error('Error saving image:', error);
      toast.error('Failed to save image');
    }
  };

  const handleDelete = async (imageId: string) => {
    try {
      const { error } = await supabase
        .from('gallery')
        .delete()
        .eq('id', imageId);

      if (error) throw error;

      toast.success('Image deleted successfully');
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Failed to delete image');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p className="text-muted-foreground">Manage your school gallery images</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Image
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('bulk-upload')?.click()}
            disabled={bulkUploading}
          >
            <Upload className="h-4 w-4 mr-2" />
            Bulk Upload
          </Button>
          <input
            id="bulk-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleBulkFileSelect}
            className="hidden"
          />
        </div>
      </div>

      {/* Bulk Upload Preview */}
      {selectedFiles.length > 0 && (
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Selected Images ({selectedFiles.length})</h3>
              <Button 
                onClick={handleBulkUpload} 
                disabled={bulkUploading}
                className="bg-primary"
              >
                {bulkUploading ? 'Uploading...' : 'Upload All'}
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {selectedFiles.map((file, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-20 object-cover rounded border"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeBulkFile(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                  <p className="text-xs mt-1 truncate">{file.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.length === 0 ? (
          <div className="col-span-full">
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">No images found</p>
                <Button onClick={() => setDialogOpen(true)} className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add your first image
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          images.map((image) => (
            <Card key={image.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-video relative mb-4 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                <h3 className="font-semibold text-sm mb-3 line-clamp-2">{image.title}</h3>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {new Date(image.created_at).toLocaleDateString()}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(image.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Add Image Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add New Image</DialogTitle>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter image title"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image_file">Upload Image</Label>
                <Input
                  id="image_file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="cursor-pointer"
                />
                {uploading && <p className="text-sm text-muted-foreground">Uploading...</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="image_url">Or enter image URL</Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={uploading}>
                Add Image
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;