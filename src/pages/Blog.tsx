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
  // Static posts for demo
  const posts = [
    {
      id: '1',
      title: 'Welcome to the New Academic Session 2025/2026',
      excerpt: 'We are excited to welcome all students back for another amazing year of learning and growth.',
      content: null,
      image_url: '/src/assets/school-students-background.jpg',
      created_at: new Date().toISOString(),
      profiles: { full_name: 'Admin' }
    },
    {
      id: '2', 
      title: 'Outstanding Academic Results',
      excerpt: 'Our students have achieved remarkable results in their recent examinations.',
      content: null,
      image_url: '/src/assets/graduands.jpg',
      created_at: new Date(Date.now() - 86400000).toISOString(),
      profiles: { full_name: 'Admin' }
    }
  ];

  const [loading, setLoading] = useState(false);

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