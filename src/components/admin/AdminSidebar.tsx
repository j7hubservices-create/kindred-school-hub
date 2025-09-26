import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  Image, 
  Settings, 
  Users, 
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const adminMenuItems = [
  { title: "Dashboard", url: "/admin-cms", icon: LayoutDashboard },
  { title: "Posts", url: "/admin-cms/posts", icon: FileText },
  { title: "Categories", url: "/admin-cms/categories", icon: FolderOpen },
  { title: "Gallery", url: "/admin-cms/gallery", icon: Image },
  { title: "Site Settings", url: "/admin-cms/settings", icon: Settings },
  { title: "Users", url: "/admin-cms/users", icon: Users },
  { title: "Activity Log", url: "/admin-cms/activity", icon: Activity },
];

export function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { signOut } = useAuth();

  const isActive = (path: string) => currentPath === path;

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-emerald-100 text-emerald-600 font-medium border-r-2 border-emerald-600" 
      : "hover:bg-gray-100 text-gray-700";

  return (
    <Sidebar className="w-64" collapsible="icon">
      <SidebarContent className="bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-emerald-600">Admin CMS</h2>
            <p className="text-sm text-gray-600">Content Management</p>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={signOut}
            className="w-full text-gray-600 border-gray-300 hover:bg-red-50 hover:text-red-600 hover:border-red-300"
          >
            Sign Out
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}