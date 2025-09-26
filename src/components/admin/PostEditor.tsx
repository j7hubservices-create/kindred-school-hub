import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Save, 
  Eye, 
  Upload,
  Calendar,
  Tag,
  Settings,
  ArrowLeft,
  Clock
} from 'lucide-react';
import { toast } from 'sonner';

interface PostEditorProps {
  postId?: string;
  mode: 'create' | 'edit';
}

interface PostData {
  title: string;
  content: string;
  excerpt: string;
  image_url?: string;
  status: string;
}

const PostEditor = ({ postId, mode }: PostEditorProps) => {
  const [postData, setPostData] = useState<PostData>({
    title: '',
    content: '',
    excerpt: '',
    image_url: '',
    status: 'draft'
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { profile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === 'edit' && postId) {
      fetchPost();
    }
  }, [mode, postId]);

  const fetchPost = async () => {
    if (!postId) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('content_items')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;

      setPostData({
        title: data.title || '',
        content: data.content || '',
        excerpt: data.excerpt || '',
        image_url: data.image_url || '',
        status: data.status || 'draft'
      });
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `posts/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('gallery')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
      return null;
    }
  };

  const handleSave = async (publishStatus: string = postData.status) => {
    setSaving(true);
    try {
      let imageUrl = postData.image_url;

      // Upload image if new file selected
      if (imageFile) {
        const uploadedUrl = await handleImageUpload(imageFile);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }

      const submitData = {
        title: postData.title,
        content: postData.content,
        excerpt: postData.excerpt,
        image_url: imageUrl,
        status: publishStatus,
        author_id: profile?.user_id || null
      };

      if (mode === 'edit' && postId) {
        const { error } = await supabase
          .from('content_items')
          .update(submitData)
          .eq('id', postId);

        if (error) throw error;
        toast.success('Post updated successfully');
      } else {
        const { error } = await supabase
          .from('content_items')
          .insert({
            ...submitData,
            content_type: 'news'
          });

        if (error) throw error;
        toast.success('Post created successfully');
      }

      navigate('/admin-cms/posts');
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/admin-cms/posts')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {mode === 'edit' ? 'Edit Post' : 'Create New Post'}
            </h1>
            <div className="flex items-center space-x-2 mt-1">
              <Badge className={getStatusColor(postData.status)}>
                {postData.status}
              </Badge>
              <span className="text-sm text-gray-500">
                <Clock className="h-3 w-3 inline mr-1" />
                Last saved: just now
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            onClick={() => handleSave('draft')}
            disabled={saving}
          >
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button
            onClick={() => handleSave('published')}
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {saving ? 'Publishing...' : 'Publish'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Title */}
          <Card>
            <CardContent className="p-6">
              <Input
                placeholder="Enter post title..."
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                className="text-2xl font-bold border-none p-0 text-gray-900 placeholder:text-gray-400"
              />
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your post content here..."
                value={postData.content}
                onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                className="min-h-[400px] text-base"
              />
            </CardContent>
          </Card>

          {/* Excerpt */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Excerpt</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write a brief excerpt for your post..."
                value={postData.excerpt}
                onChange={(e) => setPostData({ ...postData, excerpt: e.target.value })}
                className="min-h-[100px]"
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Publish</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Status</label>
                <select
                  value={postData.status}
                  onChange={(e) => setPostData({ ...postData, status: e.target.value })}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Publish immediately</span>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>Featured Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {postData.image_url && (
                <div className="relative">
                  <img
                    src={postData.image_url}
                    alt="Featured"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setImageFile(file);
                      // Preview the image
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setPostData({ ...postData, image_url: e.target?.result as string });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Tag className="h-4 w-4" />
                <span>Categories</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">News</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Announcements</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Events</span>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;