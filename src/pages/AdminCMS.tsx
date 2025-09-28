import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const AdminCMS = () => {
  const { user, setUser, profile, loading } = useAuth(); // make sure setUser is available
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(!!user);

  // ✅ Whitelist of allowed admin emails
  const allowedAdmins = [
    'jerryemeka22@gmail.com',
    'ogrcs@yahoo.com',
    'j7hubservices@gmail.com',
    'sanyaadetuberu@gmail.com'
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    if (!allowedAdmins.includes(email)) {
      toast.error('Access denied. Admin privileges required.');
      return;
    }

    if (password !== 'admin123') {
      toast.error('Incorrect password.');
      return;
    }

    // ✅ Set user in context
    setUser({ email, full_name: 'Admin' });
    setLoggedIn(true);
    toast.success('Login successful!');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!loggedIn) {
    // ✅ Show login form
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-80"
        >
          <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // ✅ Logged-in admin dashboard
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
