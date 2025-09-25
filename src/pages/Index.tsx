import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  Award,
  ChevronRight,
  Star,
  Camera,
  ChevronLeft
} from "lucide-react";
import { useState, useEffect } from "react";
import schoolLogoMain from "@/assets/school-logo-main.jpeg";
import schoolFlyer from "@/assets/school-flyer-main.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance gallery slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const galleryImages = [
    { src: "/src/assets/gallery-1.jpg", alt: "Campus view" },
    { src: "/src/assets/gallery-2.jpg", alt: "Students in class" },
    { src: "/src/assets/gallery-3.jpg", alt: "Science laboratory" },
    { src: "/src/assets/gallery-4.jpg", alt: "Library" },
    { src: "/src/assets/gallery-5.jpg", alt: "Sports activities" },
    { src: "/src/assets/gallery-6.jpg", alt: "School events" }
  ];

  const news = [
    {
      title: "New Session Registration Now Open",
      date: "March 15, 2024",
      type: "Admission"
    },
    {
      title: "Outstanding WAEC Results 2023",
      date: "March 10, 2024", 
      type: "Achievement"
    },
    {
      title: "Inter-House Sports Competition",
      date: "March 8, 2024",
      type: "Event"
    }
  ];

  const achievements = [
    { icon: Trophy, title: "100%", subtitle: "WAEC Success Rate" },
    { icon: Award, title: "15+", subtitle: "Years of Excellence" },
    { icon: Users, title: "500+", subtitle: "Happy Students" },
    { icon: Star, title: "95%", subtitle: "University Admission" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={schoolLogoMain} alt="School Logo" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-xl font-bold">Our God Reigns Crystal School</h1>
              <p className="text-sm opacity-90">Excellence in Education</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+234 803 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@ourgodreignscrystal.edu.ng</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Now Enrolling for 2024/2025 Session
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Shaping Tomorrow's
                  <span className="text-primary block">Leaders Today</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Where excellence meets character development in a nurturing Christian environment
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/admissions">
                    Apply for Admission
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link to="/portals">Portal Login</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={schoolFlyer} 
                alt="Our God Reigns Crystal School" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the School */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">About Our School</h2>
            <p className="text-lg text-muted-foreground">
              Our God Reigns Crystal School is committed to providing quality education that nurtures both academic excellence and moral character. We believe in developing well-rounded individuals who will make positive contributions to society.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">
                Read Our Full Story
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements / News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Announcements</h2>
            <p className="text-muted-foreground">Stay updated with our latest news and events</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{item.type}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/blog">View All Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Academics & Admissions */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Academics & Admissions</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Curriculum</h3>
                    <p className="text-muted-foreground">British and Nigerian curriculum with modern teaching methods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Small Class Sizes</h3>
                    <p className="text-muted-foreground">Individual attention with maximum 25 students per class</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">University Preparation</h3>
                    <p className="text-muted-foreground">95% of our graduates gain university admission</p>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link to="/admissions">Apply Now for 2024/2025</Link>
              </Button>
            </div>
            
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Admission Requirements</CardTitle>
                <CardDescription>What you need to join our school family</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Documents Required:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Birth certificate</li>
                    <li>• Previous school reports</li>
                    <li>• Passport photographs</li>
                    <li>• Medical certificate</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/admissions">Download Full Requirements</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements / Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground">Proud moments that define our excellence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <div className="text-3xl font-bold text-primary">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.subtitle}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Campus Tour */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Life</h2>
            <p className="text-muted-foreground">Take a virtual tour of our beautiful facilities</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/gallery">
                <Camera className="h-4 w-4 mr-2" />
                View Complete Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Student Life / Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Life & Activities</h2>
            <p className="text-muted-foreground">Beyond academics - developing well-rounded individuals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Sports Excellence</h3>
                <p className="text-muted-foreground">Football, basketball, athletics, and more competitive sports programs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Clubs & Societies</h3>
                <p className="text-muted-foreground">Debate club, science club, drama society, and cultural activities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Academic Competitions</h3>
                <p className="text-muted-foreground">Mathematics olympiad, spelling bee, and inter-school competitions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="opacity-90">Ready to join our school family? Contact us today</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto">
                <Phone className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="opacity-90">+234 803 123 4567</p>
                <p className="opacity-90">+234 801 234 5678</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="opacity-90">info@ourgodreignscrystal.edu.ng</p>
                <p className="opacity-90">admissions@ourgodreignscrystal.edu.ng</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto">
                <MapPin className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="opacity-90">123 Education Street</p>
                <p className="opacity-90">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <img src={schoolLogoMain} alt="School Logo" className="h-8 w-8 rounded-full" />
              <span className="font-semibold">Our God Reigns Crystal School</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Our God Reigns Crystal School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;