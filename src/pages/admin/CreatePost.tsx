import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import PostForm from '@/components/admin/PostForm';

const CreatePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState<any>(null);
  const isEditing = Boolean(id);

  useEffect(() => {
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  const fetchPost = async (postId: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('content_items')
        .select('*')
        .eq('id', postId)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setInitialData({
          id: data.id,
          title: data.title || '',
          content: data.content || '',
          excerpt: data.excerpt || '',
          image_url: data.image_url || '',
          status: data.status || 'draft'
        });
      } else {
        toast.error('Post not found');
        navigate('/admin-cms/posts');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Failed to load post');
      navigate('/admin-cms/posts');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

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

      <PostForm 
        initialData={initialData} 
        isEditing={isEditing}
      />
    </div>
  );
};

export default CreatePost;