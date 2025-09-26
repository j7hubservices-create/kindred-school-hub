import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { formatDistance } from "date-fns";
import newsAdeyemo from "@/assets/news-adeyemo.jpg";
import newsCultural from "@/assets/news-cultural.jpg";
import newsNeco from "@/assets/news-neco.jpg";

const NewsSection = ({ id }: { id?: string }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const staticNews = [
    {
      id: "static-1",
      title: "Miss Adeyemo wins one Million naira prize",
      excerpt: "Congratulations, Miss Adeyemo! You have truly made us all proud and have shown that with dedication, hard work, and quality education, our students can achieve greatness at the national level.",
      image_url: newsAdeyemo,
      created_at: "2025-09-23T00:00:00Z",
      profiles: { full_name: "Admin" }
    },
    {
      id: "static-2", 
      title: "Our annual Cultural Heritage Celebration",
      excerpt: "Our annual Cultural Heritage Celebration for the 2024/2025 academic session was a spectacular showcase of Nigerian culture and traditions. Students from all levels participated enthusiastically in various cultural activities.",
      image_url: newsCultural,
      created_at: "2025-09-23T00:00:00Z",
      profiles: { full_name: "Admin" }
    },
    {
      id: "static-3",
      title: "NECO EXCELLENCE AWARDS 2025",
      excerpt: "Our God Reigns Crystal School was proudly represented at the Learn Africa Education Development Foundation NECO Excellence Awards 2025, where our students and school received national recognition for outstanding academic performance.",
      image_url: newsNeco,
      created_at: "2025-09-23T00:00:00Z",
      profiles: { full_name: "Admin" }
    }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('content_items')
        .select('id, title, excerpt, content, image_url, created_at')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(3);
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const displayPosts = posts.length > 0 ? posts : staticNews;

  return (
    <section id={id} className="py-12 bg-gradient-to-r from-primary/15 via-secondary/10 to-primary/25 relative">
      <div className="absolute inset-0 bg-gradient-subtle opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <Badge className="bg-primary text-primary-foreground mb-3 px-4 py-2 shadow-sm">
            📰 Latest News
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            School News & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest happenings and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayPosts.map((post) => (
            <Card key={post.id} className="shadow-school hover-scale transition-all duration-300 border-none overflow-hidden group">
              <div className="relative">
                <img 
                  src={post.image_url || "/placeholder.svg"} 
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    News
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <CalendarDays className="h-3 w-3" />
                  <span>{formatDistance(new Date(post.created_at), new Date(), { addSuffix: true })}</span>
                </div>
                
                <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                
                <Button asChild variant="ghost" className="text-primary hover:text-secondary p-0 h-auto font-semibold text-sm">
                  <Link to="/blog" className="flex items-center gap-2">
                    Read More
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
            <Link to="/blog">
              <ExternalLink className="mr-2 h-4 w-4" />
              View All News
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;