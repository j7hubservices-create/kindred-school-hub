import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const AdminCMS = () => {
  const { user, profile, loading, logout } = useAuth();

  // ✅ Check if the logged-in user is an admin
  const isAdmin = user?.user_metadata?.role === 'admin';

  useEffect(() => {
    if (!loading && user && !isAdmin) {
      toast.error('Access denied. Admin privileges required.');
    }
  }, [loading, user, isAdmin]);

  if (loading) {
    return (
      <div className="m
