import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import HeroSection from "@/components/HeroSection";
import ProprietressWelcomeSection from "@/components/ProprietressWelcomeSection";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About School - Short Intro */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">About Our School</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Our God Reigns Crystal School is committed to providing quality education that combines 
              academic excellence with moral development, preparing students for a successful future.
            </p>
            <Button asChild variant="outline" className="touch-manipulation">
              <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proprietress Welcome Address */}
      <ProprietressWelcomeSection />

      {/* Announcements / News */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Latest News & Announcements</h2>
            <p className="text-sm md:text-base text-muted-foreground">Stay updated with school activities and important notices</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="hover:shadow-school transition-shadow touch-manipulation">
              <CardContent className="p-4 md:p-6">
                <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Academic Session 2025/2026</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                  First term begins with new opportunities for excellence
                </p>
                <Badge variant="outline" className="text-xs">Latest</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-school transition-shadow touch-manipulation">
              <CardContent className="p-4 md:p-6">
                <Trophy className="h-6 w-6 md:h-8 md:w-8 text-accent mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Admission in Progress</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                  JSS & SSS classes accepting new students
                </p>
                <Badge variant="outline" className="text-xs">Ongoing</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-school transition-shadow touch-manipulation sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 md:p-6">
                <Star className="h-6 w-6 md:h-8 md:w-8 text-secondary mb-3 md:mb-4" />
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Excellence Awards</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                  Celebrating outstanding student achievements
                </p>
                <Badge variant="outline" className="text-xs">Achievement</Badge>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <Button asChild variant="outline" className="touch-manipulation">
              <Link to="/blog">View All News <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Academics & Admissions */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <Card className="shadow-card">
              <CardContent className="p-6 md:p-8">
                <BookOpen className="h-8 w-8 md:h-12 md:w-12 text-primary mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Academic Programs</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  Comprehensive curriculum from JSS to SSS with focus on academic excellence 
                  and character development.
                </p>
                <ul className="space-y-2 mb-4 md:mb-6">
                  <li className="flex items-center text-sm md:text-base text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Junior Secondary School (JSS 1-3)
                  </li>
                  <li className="flex items-center text-sm md:text-base text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Senior Secondary School (SSS 1-3)
                  </li>
                  <li className="flex items-center text-sm md:text-base text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Quality Teaching & Computer Based Education
                  </li>
                </ul>
                <Button asChild className="touch-manipulation">
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card bg-gradient-accent text-white">
              <CardContent className="p-6 md:p-8">
                <GraduationCap className="h-8 w-8 md:h-12 md:w-12 text-white mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Admissions Open</h3>
                <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base leading-relaxed">
                  Join our school family and experience quality education in a conducive 
                  learning environment.
                </p>
                <ul className="space-y-2 mb-4 md:mb-6">
                  <li className="flex items-center text-sm md:text-base">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    Affordable School Fees
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    Experienced Teachers
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    Conducive Learning Environment
                  </li>
                </ul>
                <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 touch-manipulation w-full sm:w-auto">
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