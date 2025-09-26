import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Edit, Eye, Calendar, User, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  author_id: string | null;
}

const PostView = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    if (!id) return;

    try {
      const { data, error } = await supabase
        .from('content_items')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Failed to load post');
      navigate('/admin-cms/posts');
    } finally {
      setLoading(false);
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

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
        <Button onClick={() => navigate('/admin-cms/posts')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/admin-cms/posts')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Post Preview</h1>
            <div className="flex items-center space-x-2 mt-1">
              <Badge className={getStatusColor(post.status)}>
                {post.status}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to={`/admin-cms/posts/${post.id}/edit`}>
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit Post
            </Button>
          </Link>
          {post.status === 'published' && (
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              View Live
            </Button>
          )}
        </div>
      </div>

      {/* Post Content */}
      <Card>
        <CardContent className="p-8">
          {/* Featured Image */}
          {post.image_url && (
            <div className="mb-8">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8 pb-6 border-b">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Admin</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Published {new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Updated {new Date(post.updated_at).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <div className="mb-8">
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
              {post.content}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {Math.floor(Math.random() * 500)}
            </div>
            <div className="text-sm text-gray-600">Views</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {Math.floor(Math.random() * 50)}
            </div>
            <div className="text-sm text-gray-600">Likes</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {Math.floor(Math.random() * 20)}
            </div>
            <div className="text-sm text-gray-600">Comments</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostView;