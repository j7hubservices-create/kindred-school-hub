import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PostView from "./pages/PostView";
import Library from "./pages/Library";
import ELearning from "./pages/ELearning";
import SchoolFees from "./pages/SchoolFees";
import Portals from "./pages/Portals";
import Auth from "./pages/Auth";
import AdminCMS from "./pages/AdminCMS";
import Dashboard from "./pages/admin/Dashboard";
import Posts from "./pages/admin/Posts";
import CreatePost from "./pages/admin/CreatePost";
import EditPost from "./pages/admin/EditPost";
import Categories from "./pages/admin/Categories";
import SiteSettings from "./pages/admin/SiteSettings";
import AdminGallery from "./pages/admin/Gallery";
import Users from "./pages/admin/Users";
import Activity from "./pages/admin/Activity";
import Achievements from "./pages/Achievements";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/post/:slug" element={<PostView />} />
      <Route path="/library" element={<Library />} />
      <Route path="/e-learning" element={<ELearning />} />
      <Route path="/school-fees" element={<SchoolFees />} />
      <Route path="/portals" element={<Portals />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin-cms" element={<AdminCMS />}>
        <Route index element={<Dashboard />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/create" element={<CreatePost />} />
        <Route path="posts/:id/edit" element={<EditPost />} />
        <Route path="categories" element={<Categories />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="settings" element={<SiteSettings />} />
        <Route path="users" element={<Users />} />
        <Route path="activity" element={<Activity />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
