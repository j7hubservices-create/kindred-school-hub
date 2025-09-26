import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
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
import admissionsHero from "@/assets/admissions-hero.jpg";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Admissions = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const downloadSchoolFees = () => {
    const schoolFeesData = `
OUR GOD REIGNS CRYSTAL SCHOOL
SCHOOL FEES STRUCTURE 2025/2026 SESSION

JUNIOR SECONDARY SCHOOL (JSS1-JSS3)
===========================================
Tuition Fee (per term): ₦45,000
Development Fee (annual): ₦15,000
Examination Fee (per term): ₦5,000
Library Fee (annual): ₦3,000
Laboratory Fee (annual): ₦5,000
Sports Fee (annual): ₦2,000
ID Card (one-time): ₦1,000
PTA Levy (annual): ₦3,000
-------------------------------------------
Total per term: ₦50,000
Total per session: ₦150,000
First term (with annual fees): ₦79,000

SENIOR SECONDARY SCHOOL (SSS1-SSS3)
===========================================
Tuition Fee (per term): ₦55,000
Development Fee (annual): ₦20,000
Examination Fee (per term): ₦7,000
Laboratory Fee (annual): ₦8,000
Library Fee (annual): ₦4,000
Computer Fee (annual): ₦5,000
Sports Fee (annual): ₦2,000
ID Card (one-time): ₦1,000
PTA Levy (annual): ₦4,000
-------------------------------------------
Total per term: ₦62,000
Total per session: ₦186,000
First term (with annual fees): ₦105,000

ADDITIONAL INFORMATION
===========================================
• Payment can be made termly or in full session
• 5% discount for full session payment
• Uniform and textbooks sold separately
• Late payment attracts 5% penalty after 2 weeks
• All fees are subject to review

PAYMENT METHODS
===========================================
Bank Transfer:
Account Name: Our God Reigns Crystal School
Account Number: 1234567890
Bank: First Bank Nigeria
Sort Code: 011-152-003

For inquiries, contact:
Phone: 08027625129, 08033089735
Email: ogrcs@yahoo.com
Address: 23, Bolanle Awosika Street, Ojuore Ota

Generated on: ${new Date().toLocaleDateString()}
    `;
    
    const blob = new Blob([schoolFeesData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'OGRCS_School_Fees_2025-2026.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Complete",
      description: "School fees structure has been downloaded successfully.",
    });
  };

  const handleApplyNow = () => {
    toast({
      title: "Application Portal",
      description: "Redirecting to online application form...",
    });
    // In a real app, this would redirect to an application form
    setTimeout(() => {
      window.open('mailto:ogrcs@yahoo.com?subject=Admission Application&body=I am interested in applying for admission to Our God Reigns Crystal School.', '_blank');
    }, 1000);
  };

  const handleContactAdmissions = () => {
    toast({
      title: "Contact Admissions",
      description: "Opening contact options...",
    });
    window.open('tel:08027625129', '_self');
  };

  const handleScheduleTour = () => {
    toast({
      title: "School Tour",
      description: "Scheduling a tour for you...",
    });
    setTimeout(() => {
      window.open('mailto:ogrcs@yahoo.com?subject=School Tour Request&body=I would like to schedule a tour of Our God Reigns Crystal School.', '_blank');
    }, 1000);
  };

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
      
      <PageHero
        title="Join Our Excellence"
        subtitle="Enroll at Our God Reigns Crystal School - Where Academic Excellence Meets Character Development"
        description="Join our community of learners and experience quality education that shapes character and builds future leaders"
        badge="🎓 Admission Open for 2025/2026 Session"
        backgroundImage={admissionsHero}
      />
      
      {/* Call to Action Buttons */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
              onClick={handleApplyNow}
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              onClick={downloadSchoolFees}
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
                  onClick={handleApplyNow}
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Start Application
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleContactAdmissions}
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
            onClick={handleScheduleTour}
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