import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import newsAdeyemo from "@/assets/news-adeyemo.jpg";
import newsCultural from "@/assets/news-cultural.jpg";
import newsNeco from "@/assets/news-neco.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: newsAdeyemo,
      title: "Miss Adeyemo wins one Million naira prize",
      excerpt: "Congratulations, Miss Adeyemo! You have truly made us all proud and have shown that with dedication, hard work, and quality education, our students can achieve greatness at the national level.",
      fullContent: "Our God Reigns Crystal School is immensely proud to announce that Miss Adeyemo, one of our outstanding students, has won a prestigious one million naira prize in a national academic competition. This remarkable achievement is a testament to our commitment to academic excellence and the quality of education we provide. Miss Adeyemo's success demonstrates how dedication, hard work, and quality education can lead to extraordinary achievements at the national level.",
      date: "9/23/2025",
      category: "News",
      author: "School Administration"
    },
    {
      id: 2,
      image: newsCultural,
      title: "Our annual Cultural Heritage Celebration",
      excerpt: "Our annual Cultural Heritage Celebration for the 2024/2025 academic session was a spectacular showcase of Nigerian culture and traditions. Students from all levels participated enthusiastically in various cultural activities.",
      fullContent: "The annual Cultural Heritage Celebration at Our God Reigns Crystal School was a vibrant display of Nigerian culture and traditions. Students from JSS1 to SSS3 participated in various cultural activities including traditional dances, poetry recitation, cultural fashion show, and traditional food exhibition. The event aimed to preserve our rich cultural heritage while promoting unity and understanding among students from diverse backgrounds.",
      date: "9/23/2025",
      category: "News",
      author: "Cultural Committee"
    },
    {
      id: 3,
      image: newsNeco,
      title: "NECO EXCELLENCE AWARDS 2025",
      excerpt: "Our God Reigns Crystal School was proudly represented at the Learn Africa Education Development Foundation NECO Excellence Awards 2025, where our students and school received national recognition for outstanding academic performance.",
      fullContent: "We are thrilled to announce that Our God Reigns Crystal School received national recognition at the Learn Africa Education Development Foundation NECO Excellence Awards 2025. This prestigious award acknowledges our outstanding performance in the National Examinations Council (NECO) examinations and reinforces our position as a leading educational institution committed to academic excellence.",
      date: "9/23/2025",
      category: "News",
      author: "Academic Office"
    }
  ];

  const categories = ["All", "News", "Events", "Academic", "Awards", "Activities"];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2">
            School Blog
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Our God Reigns Crystal School
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search blog posts..." 
                className="pl-10 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "ghost"}
                size="sm"
                className={`${
                  index === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Post</h2>
          </div>
          
          <Card className="border-none shadow-school overflow-hidden max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                  <Badge variant="outline" className="ml-2">{blogPosts[0].category}</Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">By {blogPosts[0].author}</span>
                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Posts</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-none shadow-card hover:shadow-school transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">By {post.author}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-dark p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates from Our God Reigns Crystal School
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Showing 3 of 15 posts
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
          >
            Load More Posts
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;