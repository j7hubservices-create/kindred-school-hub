import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Upload, ImagePlus, Trash2, Camera } from 'lucide-react';

const Gallery = () => {
  const { user } = useAuth();
  const [uploadingImages, setUploadingImages] = useState(false);
  const [images, setImages] = useState([]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploadingImages(true);
    try {
      // Placeholder for image upload functionality
      toast.info("Image upload will be available once database is configured");
    } catch (error) {
      console.error('Error uploading images:', error);
      toast.error('Failed to upload images');
    } finally {
      setUploadingImages(false);
    }
  };

  const handleBulkFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      toast.error('Please select image files only');
      return;
    }

    if (imageFiles.length > 10) {
      toast.error('Maximum 10 images can be uploaded at once');
      return;
    }

    // Placeholder for bulk upload
    toast.info("Bulk upload will be available once database is configured");
  };

  const handleDeleteImage = async (imageId: string) => {
    try {
      // Placeholder for delete functionality
      toast.info("Delete functionality will be available once database is configured");
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Failed to delete image');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Gallery Management</h2>
          <p className="text-gray-600">Upload and manage gallery images</p>
        </div>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Images
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="single-upload">Single Image Upload</Label>
              <div className="flex items-center gap-4 mt-2">
                <Input
                  id="single-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploadingImages}
                />
                <Button
                  type="button"
                  variant="outline"
                  disabled={uploadingImages}
                  onClick={() => document.getElementById('single-upload')?.click()}
                >
                  <ImagePlus className="h-4 w-4 mr-2" />
                  {uploadingImages ? "Uploading..." : "Choose Image"}
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="bulk-upload">Bulk Upload (Max 10 images)</Label>
              <div className="flex items-center gap-4 mt-2">
                <Input
                  id="bulk-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleBulkFileSelect}
                  disabled={uploadingImages}
                />
                <Button
                  type="button"
                  variant="outline"
                  disabled={uploadingImages}
                  onClick={() => document.getElementById('bulk-upload')?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {uploadingImages ? "Uploading..." : "Choose Images"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gallery Images */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Gallery Images ({images.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {images.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No images yet</h3>
              <p className="text-gray-500">Upload your first image to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {images.map((image: any) => (
                <div key={image.id} className="group relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={image.image_url}
                      alt={image.title || 'Gallery image'}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteImage(image.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {image.title && (
                    <p className="mt-2 text-sm text-gray-600 text-center truncate">
                      {image.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;