import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { Search, Activity as ActivityIcon, FileText, FolderOpen, Image, Settings, Users } from 'lucide-react';
import { toast } from 'sonner';

interface ActivityLog {
  id: string;
  action: string;
  resource_type: string;
  resource_id: string | null;
  details: any;
  created_at: string;
  user_id: string | null;
}

const Activity = () => {
  const [activities, setActivities] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('all');
  const [resourceFilter, setResourceFilter] = useState('all');

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const { data, error } = await supabase
        .from('activity_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      setActivities(data || []);
    } catch (error) {
      console.error('Error fetching activities:', error);
      toast.error('Failed to load activity log');
    } finally {
      setLoading(false);
    }
  };

  const getActionBadgeColor = (action: string) => {
    switch (action) {
      case 'created':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'updated':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'deleted':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getResourceIcon = (resourceType: string) => {
    switch (resourceType) {
      case 'post':
        return <FileText className="h-4 w-4" />;
      case 'category':
        return <FolderOpen className="h-4 w-4" />;
      case 'gallery_image':
        return <Image className="h-4 w-4" />;
      case 'site_settings':
        return <Settings className="h-4 w-4" />;
      case 'user_role':
        return <Users className="h-4 w-4" />;
      default:
        return <ActivityIcon className="h-4 w-4" />;
    }
  };

  const getResourceTypeDisplay = (resourceType: string) => {
    switch (resourceType) {
      case 'post':
        return 'Post';
      case 'category':
        return 'Category';
      case 'gallery_image':
        return 'Gallery Image';
      case 'site_settings':
        return 'Site Settings';
      case 'user_role':
        return 'User Role';
      default:
        return resourceType;
    }
  };

  const formatActivityDescription = (activity: ActivityLog) => {
    const resourceType = getResourceTypeDisplay(activity.resource_type);
    let description = `${activity.action} ${resourceType}`;
    
    if (activity.details) {
      if (activity.details.title) {
        description += `: ${activity.details.title}`;
      } else if (activity.details.name) {
        description += `: ${activity.details.name}`;
      } else if (activity.details.user_name) {
        description += ` for ${activity.details.user_name}`;
        if (activity.details.old_role && activity.details.new_role) {
          description += ` (${activity.details.old_role} → ${activity.details.new_role})`;
        }
      } else if (activity.details.updated_keys && Array.isArray(activity.details.updated_keys)) {
        description += ` (${activity.details.updated_keys.join(', ')})`;
      }
    }
    
    return description;
  };

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = formatActivityDescription(activity).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === 'all' || activity.action === actionFilter;
    const matchesResource = resourceFilter === 'all' || activity.resource_type === resourceFilter;
    return matchesSearch && matchesAction && matchesResource;
  });

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
        <h2 className="text-3xl font-bold text-gray-800">Activity Log</h2>
        <p className="text-gray-600">Track all admin activities and changes</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={actionFilter} onValueChange={setActionFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by action" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Actions</SelectItem>
            <SelectItem value="created">Created</SelectItem>
            <SelectItem value="updated">Updated</SelectItem>
            <SelectItem value="deleted">Deleted</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={resourceFilter} onValueChange={setResourceFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="post">Posts</SelectItem>
            <SelectItem value="category">Categories</SelectItem>
            <SelectItem value="gallery_image">Gallery</SelectItem>
            <SelectItem value="site_settings">Settings</SelectItem>
            <SelectItem value="user_role">User Roles</SelectItem>
          </SelectContent>
        </Select>
        
        <div className="text-sm text-gray-500 flex items-center">
          {filteredActivities.length} of {activities.length} activities
        </div>
      </div>

      {/* Activities List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ActivityIcon className="h-5 w-5 text-emerald-600" />
            Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredActivities.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No activities found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center border">
                    {getResourceIcon(activity.resource_type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 mb-1">
                          {formatActivityDescription(activity)}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>
                            by Unknown User
                          </span>
                          <span>•</span>
                          <span>
                            {new Date(activity.created_at).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge className={getActionBadgeColor(activity.action)}>
                          {activity.action}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {getResourceTypeDisplay(activity.resource_type)}
                        </Badge>
                      </div>
                    </div>
                    
                    {activity.details && Object.keys(activity.details).length > 0 && (
                      <details className="mt-2">
                        <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
                          View details
                        </summary>
                        <pre className="mt-2 text-xs bg-white p-2 rounded border overflow-x-auto">
                          {JSON.stringify(activity.details, null, 2)}
                        </pre>
                      </details>
                    )}
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

export default Activity;