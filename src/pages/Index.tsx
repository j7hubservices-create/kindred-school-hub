import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import schoolLogo from "@/assets/school-logo-main.jpeg";
import galleryImage from "@/assets/gallery-students-1.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-diagonal opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img 
                  src={schoolLogo} 
                  alt="Our God Reigns Crystal School" 
                  className="h-20 w-20 rounded-full shadow-school"
                />
                <div className="ml-4">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                    Our God Reigns Crystal School
                  </h1>
                  <p className="text-xl text-accent font-semibold">Light to the World</p>
                </div>
              </div>
              
              <p className="text-lg mb-8 opacity-90">
                A place for academic and moral excellence where every child discovers their potential
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link to="/admissions">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/portals">Portal Login</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={galleryImage} 
                alt="Students at Our God Reigns Crystal School" 
                className="rounded-xl shadow-school max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About School - Short Intro */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Our School</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our God Reigns Crystal School is committed to providing quality education that combines 
              academic excellence with moral development, preparing students for a successful future.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proprietress Welcome Address */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge className="bg-primary text-primary-foreground mb-4">
                  Welcome Address
                </Badge>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Proprietress' Welcome Address
                </h2>
                <p className="text-muted-foreground">First Term of 2025/2026 Academic Session</p>
              </div>
              
              <div className="prose prose-green max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  <strong>Distinguished Parents, Guardians, Staff, and Beloved Students,</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  It is with great joy and gratitude to God Almighty that I warmly and sincerely welcome 
                  you all to the first term of the 2025/2026 academic session.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To our returning students, welcome back! We are delighted to see your bright faces again, 
                  and we trust you had a refreshing holiday. To our new students and parents joining our 
                  school family for the first time, we say a heartfelt welcome.
                </p>
                
                <div className="text-center mt-6">
                  <p className="text-foreground font-semibold">
                    Pastor (Mrs) Kehinde Adetuberu
                  </p>
                  <p className="text-muted-foreground text-sm">Proprietress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Announcements / News */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest News & Announcements</h2>
            <p className="text-muted-foreground">Stay updated with school activities and important notices</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-school transition-shadow">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Academic Session 2025/2026</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  First term begins with new opportunities for excellence
                </p>
                <Badge variant="outline">Latest</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-school transition-shadow">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Admission in Progress</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  JSS & SSS classes accepting new students
                </p>
                <Badge variant="outline">Ongoing</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-school transition-shadow">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Excellence Awards</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Celebrating outstanding student achievements
                </p>
                <Badge variant="outline">Achievement</Badge>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/blog">View All News <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Academics & Admissions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <BookOpen className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Academic Programs</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive curriculum from JSS to SSS with focus on academic excellence 
                  and character development.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Junior Secondary School (JSS 1-3)
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Senior Secondary School (SSS 1-3)
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Quality Teaching & Computer Based Education
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card bg-gradient-accent text-white">
              <CardContent className="p-8">
                <GraduationCap className="h-12 w-12 text-white mb-6" />
                <h3 className="text-2xl font-bold mb-4">Admissions Open</h3>
                <p className="mb-6 opacity-90">
                  Join our school family and experience quality education in a conducive 
                  learning environment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Affordable School Fees
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Experienced Teachers
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Conducive Learning Environment
                  </li>
                </ul>
                <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
                  <Link to="/admissions">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Life / Activities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Student Life & Activities</h2>
            <p className="text-muted-foreground">Holistic development through diverse programs</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-school transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Leadership</h3>
                <p className="text-muted-foreground text-sm">Student council and leadership programs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-school transition-shadow">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Sports</h3>
                <p className="text-muted-foreground text-sm">Football and various athletic activities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-school transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Academics</h3>
                <p className="text-muted-foreground text-sm">Quiz competitions and academic clubs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-school transition-shadow">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Character</h3>
                <p className="text-muted-foreground text-sm">Moral education and character building</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements / Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-muted-foreground">Excellence recognized across all areas</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">WAEC Pass Rate</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">85%</div>
                <div className="text-muted-foreground">Credit Passes</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-muted-foreground">Awards Won</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">University Admission</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/achievements">View All Achievements <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery / Campus Tour */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Campus Gallery</h2>
            <p className="text-muted-foreground">Take a virtual tour of our facilities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden hover:shadow-school transition-shadow">
              <img 
                src="/src/assets/gallery-students-1.jpg" 
                alt="Students in classroom" 
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover:shadow-school transition-shadow">
              <img 
                src="/src/assets/gallery-students-2.jpg" 
                alt="School activities" 
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover:shadow-school transition-shadow">
              <img 
                src="/src/assets/gallery-students-3.jpg" 
                alt="Campus facilities" 
                className="w-full h-48 object-cover"
              />
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild>
              <Link to="/gallery">View Full Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Posts */}
      <BlogPreviewSection />

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground">Get in touch with us today</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">08027625129</p>
                <p className="text-muted-foreground">08033089735</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">ogrcs@yahoo.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">
                  23, Bolanle Awosika Street, Ojuore Ota
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;