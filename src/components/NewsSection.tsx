import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import newsAdeyemo from "@/assets/news-adeyemo.jpg";
import newsCultural from "@/assets/news-cultural.jpg"; 
import newsNeco from "@/assets/news-neco.jpg";

const NewsSection = () => {
  const newsItems = [
    {
      image: newsAdeyemo,
      title: "Miss Adeyemo wins one Million naira prize",
      excerpt: "Congratulations, Miss Adeyemo! You have truly made us all proud and have shown that with dedication, hard work, and quality education, our students can achieve greatness at the national level.",
      date: "9/23/2025",
      category: "News"
    },
    {
      image: newsCultural,
      title: "Our annual Cultural Heritage Celebration", 
      excerpt: "Our annual Cultural Heritage Celebration for the 2024/2025 academic session was a spectacular showcase of Nigerian culture and traditions. Students from all levels participated enthusiastically in various cultural activities.",
      date: "9/23/2025",
      category: "News"
    },
    {
      image: newsNeco,
      title: "NECO EXCELLENCE AWARDS 2025",
      excerpt: "Our God Reigns Crystal School was proudly represented at the Learn Africa Education Development Foundation NECO Excellence Awards 2025, where our students and school received national recognition for outstanding academic performance.",
      date: "9/23/2025", 
      category: "News"
    }
  ];

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