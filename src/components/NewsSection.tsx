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

const NewsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const staticNews = [
    {
      id: "static-1",
      title: "Miss Adeyemo wins one Million naira prize",
      excerpt: "Congratulations, Miss Adeyemo! You have truly made us all proud and have shown that with dedication, hard work, and quality education, our students can achieve greatness at the national level.",
      featured_image_url: newsAdeyemo,
      published_at: "2025-09-23T00:00:00Z",
      categories: { name: "Achievement", slug: "achievement" },
      profiles: { full_name: "Admin" }
    },
    {
      id: "static-2", 
      title: "Our annual Cultural Heritage Celebration",
      excerpt: "Our annual Cultural Heritage Celebration for the 2024/2025 academic session was a spectacular showcase of Nigerian culture and traditions. Students from all levels participated enthusiastically in various cultural activities.",
      featured_image_url: newsCultural,
      published_at: "2025-09-23T00:00:00Z",
      categories: { name: "Events", slug: "events" },
      profiles: { full_name: "Admin" }
    },
    {
      id: "static-3",
      title: "NECO EXCELLENCE AWARDS 2025",
      excerpt: "Our God Reigns Crystal School was proudly represented at the Learn Africa Education Development Foundation NECO Excellence Awards 2025, where our students and school received national recognition for outstanding academic performance.",
      featured_image_url: newsNeco,
      published_at: "2025-09-23T00:00:00Z",
      categories: { name: "Achievement", slug: "achievement" },
      profiles: { full_name: "Admin" }
    }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`*, categories:category_id (name, slug), profiles:author_id (full_name)`)
        .eq('status', 'published')
        .order('published_at', { ascending: false })
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
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-secondary text-secondary-foreground mb-4 px-6 py-2 text-lg">
            📰 Latest News
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            School News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest happenings, achievements, and events at Our God Reigns Crystal School
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayPosts.map((post) => (
            <Card key={post.id} className="shadow-school hover-scale transition-all duration-300 border-none overflow-hidden group">
              <div className="relative">
                <img 
                  src={post.featured_image_url || "/placeholder.svg"} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {post.categories && (
                    <Badge className="bg-primary text-primary-foreground">
                      {post.categories.name}
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{formatDistance(new Date(post.published_at), new Date(), { addSuffix: true })}</span>
                  <User className="h-4 w-4 ml-2" />
                  <span>{post.profiles?.full_name || 'Admin'}</span>
                </div>
                
                <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <Button asChild variant="ghost" className="text-primary hover:text-secondary p-0 h-auto font-semibold">
                  <Link to="/blog" className="flex items-center gap-2">
                    Read Full Story
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
            <Link to="/blog">
              <ExternalLink className="mr-2 h-5 w-5" />
              View All News & Updates
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Latest News & Events
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Stay updated with our school community
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Link key={index} to="/blog">
              <Card className="border-none shadow-card hover:shadow-school transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-dark p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/blog">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
            >
              View All Posts
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;