import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const AdminCMS = () => {
  const { user, profile, loading, isAdmin } = useAuth();
  const isWhitelisted = user?.email === 'jerryemeka22@gmail.com';

  useEffect(() => {
    if (!loading && user && !(isAdmin || isWhitelisted)) {
      toast.error('Access denied. Admin privileges required.');
    }
  }, [loading, user, isAdmin, isWhitelisted]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!(isAdmin || isWhitelisted)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">You need admin privileges to access this area.</p>
          <button
            onClick={() => window.history.back()}
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-semibold text-gray-800">
                School CMS Dashboard
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Welcome, {profile?.full_name || 'Admin'}
                </span>
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminCMS;