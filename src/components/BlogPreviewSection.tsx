import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url: string | null;
  created_at: string;
  profiles: {
    full_name: string;
  } | null;
}

const BlogPreviewSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Static news as fallback - cleared as requested
  const staticNews: Post[] = [];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Mock data for now
    const mockPosts = [
      {
        id: "1",
        title: "Welcome to Our God Reigns Crystal School",
        content: "We are delighted to welcome you to Our God Reigns Crystal School, where academic excellence meets Christian values.",
        excerpt: "Welcome to Our God Reigns Crystal School - where academic excellence meets Christian values.",
        image_url: "/src/assets/news-adeyemo.jpg",
        created_at: new Date().toISOString(),
        profiles: { full_name: "Admin" }
      },
      {
        id: "2", 
        title: "NECO Results Excellence",
        content: "Our students have achieved outstanding results in the recent NECO examinations.",
        excerpt: "Outstanding NECO results with 95% pass rate achieved by our students.",
        image_url: "/src/assets/news-neco.jpg",
        created_at: new Date().toISOString(),
        profiles: { full_name: "Admin" }
      },
      {
        id: "3",
        title: "Cultural Day Celebration", 
        content: "Our annual cultural day was a celebration of Nigerian heritage and diversity.",
        excerpt: "Annual cultural day celebrates Nigerian heritage with student performances.",
        image_url: "/src/assets/news-cultural.jpg",
        created_at: new Date().toISOString(),
        profiles: { full_name: "Admin" }
      }
    ];
    
    setPosts(mockPosts);
    setLoading(false);
  };

  const displayPosts = posts.length > 0 ? posts : staticNews;

  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-secondary text-secondary-foreground mb-4 px-6 py-2 text-lg">
            📰 Latest News & Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            School News & Blog
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and important announcements from our school community
          </p>
        </div>

        {displayPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayPosts.map((post) => (
            <Card key={post.id} className="shadow-card hover-scale transition-all duration-300 border-primary/20 overflow-hidden">
              <div className="relative">
                {post.image_url && (
                  <img 
                    src={post.image_url} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/src/assets/news-cultural.jpg';
                    }}
                  />
                )}
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  News
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(post.created_at), 'MMM dd, yyyy')}</span>
                  </div>
                  {post.profiles && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.profiles.full_name}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/5"
                >
                  <Link to={`/post/${post.id}`} className="flex items-center gap-2">
                    Read Full Story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Newspaper className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No News Posts Yet</h3>
              <p className="text-muted-foreground">New posts will appear here once they are published.</p>
            </div>
          </div>
        )}

        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
          >
            <Link to="/blog" className="flex items-center gap-2">
              <Newspaper className="h-5 w-5" />
              View All News & Updates
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;