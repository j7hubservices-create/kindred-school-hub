import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistance } from "date-fns";
import { supabase } from "@/integrations/supabase/client";

interface Post {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  created_at: string;
  profiles: {
    full_name: string;
  } | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Mock data for now
    const mockPosts = [
      {
        id: "1",
        title: "Welcome to Our God Reigns Crystal School",
        content: "We are delighted to welcome you to Our God Reigns Crystal School, where academic excellence meets Christian values. Our mission is to provide quality education that nurtures both intellectual growth and spiritual development.",
        excerpt: "Welcome to Our God Reigns Crystal School - where academic excellence meets Christian values.",
        image_url: "/src/assets/news-adeyemo.jpg",
        created_at: new Date().toISOString(),
        profiles: { full_name: "Admin" }
      },
      {
        id: "2",
        title: "NECO Results Excellence", 
        content: "Our students have once again demonstrated exceptional performance in the recent NECO examinations, with a 95% pass rate across all subjects. This achievement reflects our commitment to academic excellence.",
        excerpt: "Outstanding NECO results with 95% pass rate achieved by our dedicated students.",
        image_url: "/src/assets/news-neco.jpg",
        created_at: new Date().toISOString(),
        profiles: { full_name: "Admin" }
      },
      {
        id: "3",
        title: "Cultural Day Celebration",
        content: "Our annual cultural day celebration was a resounding success, showcasing the rich diversity of Nigerian culture through traditional dances, songs, and exhibitions by our talented students.",
        excerpt: "Annual cultural day celebrates Nigerian heritage with student performances.",
        image_url: "/src/assets/news-cultural.jpg", 
        created_at: new Date().toISOString(),
        profiles: { full_name: "Admin" }
      }
    ];
    
    setPosts(mockPosts);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <PageHero
        title="Our God Reigns Blog"
        subtitle="Stay updated with the latest news and events from our school"
        badge="📰 School News & Updates"
      />

      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-muted-foreground mb-4">No posts available yet</h3>
              <p className="text-muted-foreground">Check back later for updates and news from our school.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="shadow-card hover:shadow-school transition-shadow border-primary/20">
                  {post.image_url && (
                    <div className="relative">
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        News
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDistance(new Date(post.created_at), new Date(), { addSuffix: true })}
                      </span>
                    </div>
                    <CardTitle className="text-primary hover:text-primary/80 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {post.excerpt && (
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        By {post.profiles?.full_name || 'Admin'}
                      </span>
                      <Button asChild size="sm" variant="outline">
                        <Link to={`/post/${post.id}`}>
                          Read More →
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;