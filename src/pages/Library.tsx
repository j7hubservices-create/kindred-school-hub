import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Book, 
  BookOpen, 
  Users, 
  Clock, 
  Wifi,
  Computer,
  Search,
  Download,
  Globe,
  Laptop,
  BookMarked,
  Library as LibraryIcon,
  MapPin,
  Phone
} from "lucide-react";

const Library = () => {
  const libraryServices = [
    {
      icon: BookOpen,
      title: "Academic Resources",
      items: ["Textbooks for all subjects", "Reference materials", "Past question papers", "Educational magazines", "Research journals"]
    },
    {
      icon: Computer,
      title: "Digital Services", 
      items: ["Computer access", "Internet research", "Digital library resources", "Online databases", "Educational software"]
    },
    {
      icon: Users,
      title: "Study Facilities",
      items: ["Individual study desks", "Group study areas", "Silent reading zones", "Discussion rooms", "Research assistance"]
    },
    {
      icon: Globe,
      title: "Online Resources",
      items: ["E-books collection", "Digital magazines", "Online journals", "Educational videos", "Virtual library tours"]
    }
  ];

  const libraryRules = [
    "Maintain silence in the library",
    "Return books on or before due date", 
    "Handle books and materials with care",
    "No food or drinks allowed inside",
    "Use computers for educational purposes only",
    "Respect other students' study time"
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "7:30 AM - 4:30 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Public Holidays", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-diagonal opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-6 py-3 text-lg font-semibold animate-fade-in">
            📚 Learning Resource Center
          </Badge>
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">School Library</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Your gateway to knowledge, research, and academic excellence - where learning comes alive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Catalog
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Library Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Library Statistics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">8,000+</h3>
                <p className="text-muted-foreground">Books Collection</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">80</h3>
                <p className="text-muted-foreground">Study Seats</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <Laptop className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">20</h3>
                <p className="text-muted-foreground">Computer Stations</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">Free</h3>
                <p className="text-muted-foreground">Wi-Fi Access</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Library Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Library Services & Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resources and services to support your academic journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {libraryServices.map((service, index) => (
              <Card key={index} className="border-primary/20 shadow-card hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <service.icon className="h-8 w-8" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours & Rules */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Operating Hours */}
            <Card className="border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Clock className="h-6 w-6" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-background rounded-lg border">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <Badge variant="outline" className="text-primary font-semibold">
                      {schedule.hours}
                    </Badge>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground">
                    <strong>Extended Hours:</strong> During examination periods, the library 
                    operates extended hours to support students' academic needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Library Rules */}
            <Card className="border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <BookMarked className="h-6 w-6" />
                  Library Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {libraryRules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg border">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{rule}</span>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                  <p className="text-sm text-muted-foreground">
                    <strong>Borrowing Policy:</strong> Students can borrow up to 3 books for 2 weeks. 
                    Renewals are available if no other students have requested the same book.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Collections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Special Collections</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated resources for enhanced learning experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <LibraryIcon className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">JAMB/WAEC Collection</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive collection of past questions, textbooks, and study materials for external examinations.
                </p>
                <Badge className="bg-primary/10 text-primary">500+ Resources</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Career Guidance</h3>
                <p className="text-muted-foreground mb-6">
                  Books and resources on career choices, university admissions, and professional development.
                </p>
                <Badge className="bg-secondary/10 text-secondary">200+ Guides</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <Computer className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Digital Archive</h3>
                <p className="text-muted-foreground mb-6">
                  Digital collection of school publications, yearbooks, and historical documents.
                </p>
                <Badge className="bg-accent/10 text-accent">Growing Collection</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Librarian */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Need Library Assistance?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Our experienced librarians are here to help you find resources and support your research needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-2">Call Library</h3>
              <div className="space-y-1">
                <a href="tel:08027625129" className="block hover:text-accent transition-colors">08027625129</a>
                <a href="tel:08033089735" className="block hover:text-accent transition-colors">08033089735</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-2">Visit Library</h3>
              <p>Ground Floor, Main Building</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Book a Research Session
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Library Handbook
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;