import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Upload, 
  UserCheck, 
  CheckCircle,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import graduandsImage from "@/assets/graduands.jpg";
import admissionFlyerImage from "@/assets/admission-flyer-new.jpg";
import principalImage from "@/assets/principal.jpg";
import vicePrincipalImage from "@/assets/vice-principal.jpg";

const Admissions = () => {
  const processSteps = [
    {
      step: "Step 1",
      title: "Application Form",
      description: "Complete and submit the admission application form",
      icon: FileText
    },
    {
      step: "Step 2", 
      title: "Document Submission",
      description: "Submit required documents and credentials",
      icon: Upload
    },
    {
      step: "Step 3",
      title: "Assessment", 
      description: "Take the entrance examination and interview",
      icon: UserCheck
    },
    {
      step: "Step 4",
      title: "Admission",
      description: "Receive admission letter and complete enrollment", 
      icon: CheckCircle
    }
  ];

  const requiredDocs = [
    "Birth Certificate or Declaration of Age",
    "Previous School Report Card/Result", 
    "Transfer Certificate (for transfer students)",
    "Recent Passport Photographs (4 copies)",
    "Medical Report/Health Certificate",
    "Parent/Guardian Identification"
  ];

  const whyChooseUs = [
    "Quality Teaching with experienced educators",
    "Affordable Fee structure for all families", 
    "Computer Based Education with modern facilities",
    "Conducive Learning Environment",
    "Character development with Christian values"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2">
                Admissions Open
              </Badge>
              <h1 className="text-5xl font-bold mb-4">2025/2026 Academic Session</h1>
              <p className="text-2xl mb-6">Into JSS & SSS Classes</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-1">Quality Teaching</h3>
                  <p className="text-sm opacity-90">Experienced educators</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-1">Affordable Fee</h3>
                  <p className="text-sm opacity-90">Quality at reasonable cost</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-1">Computer Based Education</h3>
                  <p className="text-sm opacity-90">Modern learning tools</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-1">Conducive Learning</h3>
                  <p className="text-sm opacity-90">Safe environment</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={graduandsImage} 
                alt="Our God Reigns Crystal School Graduates" 
                className="rounded-2xl shadow-school w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our School Family */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-8">Join Our School Family</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={admissionFlyerImage} 
                alt="Our God Reigns Crystal School - Admission Flyer" 
                className="w-full rounded-2xl shadow-school"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Our God Reigns Crystal School?</h3>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Admission Process</h2>
            <p className="text-xl text-muted-foreground">Simple steps to join our school family</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <Badge className="bg-primary text-primary-foreground mb-4">{process.step}</Badge>
                  <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Admission Requirements</h2>
              <p className="text-lg text-muted-foreground mb-8">Documents needed for successful application</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Required Documents</h3>
              <div className="space-y-3">
                {requiredDocs.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary p-1 rounded flex-shrink-0 mt-1">
                      <FileText className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Important Dates</h3>
              
              <Card className="border-primary/20 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">2025/2026 Session</h4>
                  </div>
                  <p className="text-muted-foreground">Registration ongoing for JSS and SSS classes</p>
                </CardContent>
              </Card>
              
              <Card className="border-secondary/20 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <UserCheck className="h-5 w-5 text-secondary" />
                    <h4 className="font-semibold text-foreground">Entrance Exam</h4>
                  </div>
                  <p className="text-muted-foreground">Dates will be communicated to applicants</p>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold text-foreground">School Resumption</h4>
                  </div>
                  <p className="text-muted-foreground">First term 2025/2026 session</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Admissions Office */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Admissions Office</h2>
            <p className="text-xl">Get in touch for admission inquiries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <img 
                  src={principalImage} 
                  alt="Pastor Joseph Oladele" 
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold mb-1">Pastor Joseph Oladele</h3>
                <p className="text-secondary mb-3">Principal</p>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  +234 814 705 9222
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <img 
                  src={vicePrincipalImage} 
                  alt="Mrs Abosede Taiwo" 
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold mb-1">Mrs Abosede Taiwo</h3>
                <p className="text-secondary mb-3">Vice Principal</p>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  +234 806 779 5900
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-secondary text-secondary-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-1">General Line</h3>
                <p className="text-secondary mb-3">School Office</p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full">
                    +234 802 762 5129
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full">
                    +234 803 308 9735
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-secondary mb-3">Admissions</p>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  ogrcs@yahoo.com
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Apply */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Apply?</h2>
          <p className="text-xl mb-8">Join the Our God Reigns Crystal School family today</p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8"
          >
            Start Application Process
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;