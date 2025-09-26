import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Upload, X } from 'lucide-react';

interface PostFormProps {
  initialData?: {
    id?: string;
    title?: string;
    content?: string;
    excerpt?: string;
    image_url?: string;
    status?: 'draft' | 'published' | 'archived';
  };
  isEditing?: boolean;
}

interface Category {
  id: string;
  name: string;
}

const PostForm = ({ initialData, isEditing = false }: PostFormProps) => {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    excerpt: initialData?.excerpt || '',
    featured_image_url: initialData?.image_url || '',
    status: initialData?.status || 'draft' as 'draft' | 'published' | 'archived'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
      .substring(0, 100);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length > 200) {
      newErrors.title = 'Title must be less than 200 characters';
    }
    
    if (formData.excerpt && formData.excerpt.length > 500) {
      newErrors.excerpt = 'Excerpt must be less than 500 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

      setFormData({ ...formData, featured_image_url: data.publicUrl });
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, featured_image_url: '' });
  };

  const handleSubmit = async (publishNow: boolean = false) => {
    if (!validateForm()) return;
    
    setLoading(true);
    setErrors({});

    try {
      const postData = {
        title: formData.title.trim(),
        content: formData.content.trim(),
        excerpt: formData.excerpt?.trim() || null,
        image_url: formData.featured_image_url || null,
        author_id: profile?.user_id || null,
        // Use published status if publishNow is true, otherwise use form status
        ...(publishNow ? { status: 'published' } : { status: formData.status })
      };

      let result;
      
      if (isEditing && initialData?.id) {
        // Update existing post
        result = await supabase
          .from('content_items')
          .update(postData)
          .eq('id', initialData.id)
          .select()
          .single();
      } else {
        // Create new post - use insert without selecting first
        result = await supabase
          .from('content_items')
          .insert(postData);
      }

      if (result.error) throw result.error;

      toast.success(`Post ${isEditing ? 'updated' : 'created'} successfully`);
      navigate('/admin-cms/posts');
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast.error(`Failed to ${isEditing ? 'update' : 'create'} post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className={errors.title ? 'border-red-500' : ''}
            placeholder="Enter post title..."
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className={errors.excerpt ? 'border-red-500' : ''}
            placeholder="Write a compelling excerpt..."
            rows={3}
          />
          {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt}</p>}
          <p className="text-xs text-gray-500">
            {formData.excerpt.length}/500 characters
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="featured_image">Featured Image</Label>
          {formData.featured_image_url ? (
            <div className="space-y-2">
              <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
                <img
                  src={formData.featured_image_url}
                  alt="Featured image preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Input
                id="featured_image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="cursor-pointer"
                disabled={uploading}
              />
              {uploading && <p className="text-sm text-muted-foreground">Uploading...</p>}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Or enter image URL:</p>
                <Input
                  type="url"
                  value={formData.featured_image_url}
                  onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="mt-2"
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Write your post content..."
            rows={12}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status} onValueChange={(value: any) => setFormData({ ...formData, status: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border shadow-lg z-[100]">
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/admin-cms/posts')}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => handleSubmit(false)}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save as Draft'}
          </Button>
          <Button
            type="button"
            onClick={() => handleSubmit(true)}
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {loading ? 'Publishing...' : 'Publish Now'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostForm;