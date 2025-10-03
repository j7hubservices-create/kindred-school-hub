import { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const AdminCMS = () => {
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();

  // ✅ Whitelist of allowed admin emails
  const allowedAdmins = [
    'jerryemeka22@gmail.com',
    'ogrcs@yahoo.com',
    'j7hubservices@gmail.com',
    'sanyaadetuberu@gmail.com'
  ];

  const isWhitelisted = allowedAdmins.includes(user?.email);

  useEffect(() => {
    if (!loading && user && !isWhitelisted) {
      toast.error('Access denied. Admin privileges required.');
    }
  }, [loading, user, isWhitelisted]);

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

  const handleTryAgain = async () => {
    await signOut();
    navigate('/auth');
  };

  if (!isWhitelisted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
            <p className="text-gray-600 mb-2">You need admin privileges to access this area.</p>
            <p className="text-sm text-gray-500">Logged in as: {user?.email}</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleTryAgain}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Try Different Account
            </button>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col w-full">
          <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 sticky top-0 z-10">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-semibold text-gray-800">
                School CMS Dashboard
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 hidden sm:block">
                  Welcome, {profile?.full_name || 'Admin'}
                </span>
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-4 sm:p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminCMS;
