import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  Calendar,
  FileText,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";
import admissionFlyerImage from "@/assets/admission-flyer-new.jpg";
import schoolLogoMain from "@/assets/school-logo-main.jpeg";

const Admissions = () => {
  const admissionRequirements = [
    "Birth Certificate or Age Declaration",
    "Previous School Report Card/Results",
    "Passport Photographs (4 copies)",
    "Medical Certificate",
    "Parent/Guardian Valid ID",
    "Transfer Certificate (if applicable)"
  ];

  const admissionProcess = [
    {
      step: "1",
      title: "Application Form",
      description: "Complete and submit the admission application form"
    },
    {
      step: "2", 
      title: "Document Submission",
      description: "Submit all required documents for verification"
    },
    {
      step: "3",
      title: "Assessment/Interview",
      description: "Participate in academic assessment and interview"
    },
    {
      step: "4",
      title: "Admission Decision",
      description: "Receive admission decision and enrollment details"
    }
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
            🎓 Admission Open for 2025/2026 Session
          </Badge>
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">Join Our Excellence</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Enroll at Our God Reigns Crystal School - Where Academic Excellence Meets Character Development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">JSS & SSS</h3>
                <p className="text-muted-foreground">Available Classes</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Happy Students</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years Excellence</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 shadow-card hover-scale">
              <CardContent className="p-8">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">98%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Admission Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
                  Academic Session 2025/2026
                </Badge>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Admission in Progress
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join our community of learners and experience quality education that shapes character and builds future leaders.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality Education</h3>
                    <p className="text-muted-foreground">Comprehensive curriculum designed for academic excellence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Character Development</h3>
                    <p className="text-muted-foreground">Holistic approach to building moral and ethical values</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Modern Facilities</h3>
                    <p className="text-muted-foreground">State-of-the-art classrooms and learning resources</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Start Application
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Admissions
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={admissionFlyerImage} 
                alt="Our God Reigns Crystal School - Admission Flyer" 
                className="w-full rounded-2xl shadow-school hover-scale"
              />
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-card border">
                <img 
                  src={schoolLogoMain} 
                  alt="School Logo"
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Admission Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to join our academic community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((item) => (
              <Card key={item.step} className="text-center border-primary/20 shadow-card hover-scale">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Important Dates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <Card className="border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <FileText className="h-6 w-6" />
                  Admission Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {admissionRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All documents must be certified true copies. 
                    Original documents will be required for verification during enrollment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card className="border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">Application Deadline</span>
                    <Badge variant="outline" className="text-primary">August 15, 2025</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">Assessment Period</span>
                    <Badge variant="outline" className="text-primary">August 20-25, 2025</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">Admission Results</span>
                    <Badge variant="outline" className="text-primary">August 30, 2025</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">Resumption Date</span>
                    <Badge className="bg-primary text-primary-foreground">September 15, 2025</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Need More Information?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Our admissions team is ready to help you with any questions about the application process.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <div className="space-y-1">
                <a href="tel:08027625129" className="block hover:text-accent transition-colors">08027625129</a>
                <a href="tel:08033089735" className="block hover:text-accent transition-colors">08033089735</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:ogrcs@yahoo.com" className="hover:text-accent transition-colors">ogrcs@yahoo.com</a>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p>23, Bolanle Awosika Street, Ojuore Ota</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4"
          >
            <Clock className="mr-2 h-5 w-5" />
            Schedule a School Tour
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;