import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { FileText, FolderOpen, Image, Users, Activity, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalCategories: number;
  totalImages: number;
  totalUsers: number;
}

interface RecentActivity {
  id: string;
  action: string;
  resource_type: string;
  created_at: string;
  user: {
    full_name: string;
  };
}

interface Post {
  id: string;
  title: string;
  excerpt: string | null;
  created_at: string;
  status: string;
  image_url: string | null;
  profiles: {
    full_name: string;
  } | null;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalCategories: 0,
    totalImages: 0,
    totalUsers: 0
  });
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Use content_items instead of posts
      const { data: posts } = await supabase
        .from('content_items' as any)
        .select('status');
      
      const totalPosts = posts?.length || 0;
      const publishedPosts = posts?.filter((p: any) => p.status === 'published').length || 0;
      const draftPosts = posts?.filter((p: any) => p.status === 'draft').length || 0;

      // Fetch users count
      const { count: usersCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      setStats({
        totalPosts,
        publishedPosts,
        draftPosts,
        totalCategories: 0, // Categories table doesn't exist
        totalImages: 0, // Gallery images table doesn't exist
        totalUsers: usersCount || 0
      });

      // Fetch recent published posts
      const { data: recentPostsData } = await supabase
        .from('content_items' as any)
        .select(`*, profiles:author_id (full_name)`)
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(3);
      
      setRecentPosts((recentPostsData || []) as any);
      setRecentActivities([]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
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
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h2>
        <p className="text-gray-600">Welcome to the school CMS dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-emerald-200 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Posts</CardTitle>
            <FileText className="h-5 w-5 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{stats.totalPosts}</div>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">
                {stats.publishedPosts} Published
              </Badge>
              <Badge variant="outline" className="text-xs">
                {stats.draftPosts} Drafts
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Categories</CardTitle>
            <FolderOpen className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.totalCategories}</div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Gallery Images</CardTitle>
            <Image className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.totalImages}</div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Users</CardTitle>
            <Users className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.totalUsers}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Published Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-emerald-600" />
              Recent Published Posts
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/admin-cms/posts">View All</Link>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recentPosts.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No published posts yet</p>
          ) : (
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-b-0">
                  {post.image_url && (
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs">
                        Published
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {formatDistance(new Date(post.created_at), new Date(), { addSuffix: true })}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-800 line-clamp-1 mb-1">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        By {post.profiles?.full_name || 'Admin'}
                      </span>
                      <Button asChild variant="ghost" size="sm" className="h-auto py-1 px-2">
                        <Link to={`/post/${post.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;