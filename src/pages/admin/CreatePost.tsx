import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { z } from 'zod';
import { ArrowLeft, Upload, X } from 'lucide-react';

const postSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  slug: z.string().min(1, 'URL slug is required').max(100, 'Slug must be less than 100 characters'),
  excerpt: z.string().max(500, 'Excerpt must be less than 500 characters').optional(),
  content: z.string().optional(),
  category_id: z.string().uuid('Please select a valid category').optional(),
  status: z.enum(['draft', 'published', 'archived'])
});

interface Category {
  id: string;
  name: string;
}

const CreatePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { profile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image_url: '',
    category_id: '',
    status: 'draft' as 'draft' | 'published' | 'archived'
  });
  const [errors, setErrors] = useState<any>({});
  const isEditing = Boolean(id);

  useEffect(() => {
    fetchCategories();
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
    }
  };

  const fetchPost = async (postId: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('content_items')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          title: data.title || '',
          slug: generateSlug(data.title || ''),
          excerpt: data.excerpt || '',
          content: data.content || '',
          featured_image_url: data.image_url || '',
          category_id: data.category_id || '',
          status: (data.status as 'draft' | 'published' | 'archived') || 'draft'
        });
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
      .substring(0, 100);
  };

  const handleTitleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      title: value,
      slug: generateSlug(value)
    }));
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

  const handleSubmit = async (e: React.FormEvent, publishNow: boolean = false) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const submitData = {
        ...formData,
        status: publishNow ? 'published' as const : formData.status,
        category_id: formData.category_id || null
      };

      postSchema.parse(submitData);

      let data, error;

      if (isEditing && id) {
        // Update existing post
        const result = await supabase
          .from('content_items')
          .update({
            title: submitData.title,
            content: submitData.content,
            excerpt: submitData.excerpt,
            image_url: submitData.featured_image_url || null,
            status: submitData.status
          })
          .eq('id', id)
          .select()
          .single();
        
        data = result.data;
        error = result.error;
      } else {
        // Create new post - use minimal required fields only
        const result = await supabase
          .from('content_items')
          .insert({
            title: submitData.title,
            content: submitData.content,
            excerpt: submitData.excerpt,
            image_url: submitData.featured_image_url || null,
            author_id: profile?.user_id || null,
            content_type: 'news'
          })
          .select()
          .single();
        
        data = result.data;
        error = result.error;
        
        // Update with status if creation succeeded and status is not draft
        if (!error && data && submitData.status !== 'draft') {
          await supabase
            .from('content_items')
            .update({ status: submitData.status })
            .eq('id', data.id);
        }
      }

      if (error) throw error;

      toast.success(`Post ${isEditing ? 'updated' : 'created'} successfully`);
      navigate('/admin-cms/posts');
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
        console.error('Error creating post:', error);
        toast.error('Failed to create post');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={() => navigate('/admin-cms/posts')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {isEditing ? 'Edit Post' : 'Create New Post'}
          </h2>
          <p className="text-gray-600">
            {isEditing ? 'Update an existing blog post or article' : 'Add a new blog post or article'}
          </p>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className={errors.title ? 'border-red-500' : ''}
                  placeholder="Enter post title..."
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className={errors.slug ? 'border-red-500' : ''}
                  placeholder="post-url-slug"
                />
                {errors.slug && <p className="text-red-500 text-sm">{errors.slug}</p>}
              </div>
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
                className={errors.content ? 'border-red-500' : ''}
                placeholder="Write your post content..."
                rows={12}
              />
              {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category_id} onValueChange={(value) => setFormData({ ...formData, category_id: value })}>
                  <SelectTrigger className={errors.category_id ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-[100]">
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <SelectItem key={category.id} value={category.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          {category.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="no-categories" disabled>
                        No categories available
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                {errors.category_id && <p className="text-red-500 text-sm">{errors.category_id}</p>}
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
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/admin-cms/posts')}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="outline"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save as Draft'}
          </Button>
          <Button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {loading ? 'Publishing...' : 'Publish Now'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;