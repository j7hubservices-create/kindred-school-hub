import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Calendar,
  GraduationCap,
  Users
} from "lucide-react";
import proprietressImage from "@/assets/proprietress.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const officeHours = [
    {
      days: "Monday - Friday",
      hours: "8:00 AM - 4:00 PM",
      type: "Regular Hours",
      icon: Clock
    },
    {
      days: "Saturday", 
      hours: "9:00 AM - 2:00 PM",
      type: "Limited Hours",
      icon: Clock
    },
    {
      days: "Sunday",
      hours: "Closed",
      type: "Closed",
      icon: Clock
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Visit",
      description: "Book a tour of our facilities",
      icon: Calendar,
      color: "primary"
    },
    {
      title: "Apply for Admission",
      description: "Start your application process",
      icon: GraduationCap,
      color: "secondary"
    },
    {
      title: "Parent Portal",
      description: "Access student information",
      icon: Users,
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2">
            Contact Us
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Get in touch with Our God Reigns Crystal School</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to answer your questions and support your educational journey
          </p>
        </div>
      </section>

      {/* Leadership Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <img 
            src={proprietressImage} 
            alt="Our God Reigns Crystal School Leadership" 
            className="w-64 h-64 rounded-full mx-auto object-cover shadow-school mb-8"
          />
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Connect?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our leadership team is committed to providing you with the information and support you need.
          </p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <Card className="border-none shadow-school">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="inquiryType" className="text-foreground">Inquiry Type</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="academic">Academic Information</SelectItem>
                          <SelectItem value="fees">Fee Information</SelectItem>
                          <SelectItem value="parent">Parent Concern</SelectItem>
                          <SelectItem value="staff">Staff Application</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch with us through any of these channels
              </p>
              
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">School Address</h3>
                        <p className="text-muted-foreground">
                          23, Bolanle Awosika Street, off Ilogbo Road, Borehole, Ota, Ogun State
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-secondary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary text-secondary-foreground p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Phone Numbers</h3>
                        <p className="text-muted-foreground">08027625129, 08033089735</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Email Address</h3>
                        <p className="text-muted-foreground">ogrcs@yahoo.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Office Hours</h3>
                        <div className="space-y-2">
                          <p className="text-muted-foreground">
                            Monday - Friday: 8:00 AM - 4:00 PM<br />
                            Saturday: 9:00 AM - 2:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Office Hours</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {officeHours.map((schedule, index) => (
              <Card key={index} className="border-none shadow-card text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <schedule.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{schedule.days}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{schedule.hours}</p>
                  <Badge className={`${
                    schedule.type === "Regular Hours" ? "bg-primary text-primary-foreground" :
                    schedule.type === "Limited Hours" ? "bg-secondary text-secondary-foreground" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {schedule.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Actions</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300 text-center group cursor-pointer">
                <CardContent className="p-6">
                  <div className={`
                    ${action.color === 'primary' ? 'bg-primary text-primary-foreground' : ''}
                    ${action.color === 'secondary' ? 'bg-secondary text-secondary-foreground' : ''}
                    ${action.color === 'accent' ? 'bg-accent text-accent-foreground' : ''}
                    w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300
                  `}>
                    <action.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{action.title}</h3>
                  <p className="text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-xl mb-8">23, Bolanle Awosika Street, off Ilogbo Road, Borehole, Ota, Ogun State</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-lg mb-4">Interactive map will be available here</p>
            <p className="text-sm opacity-90">Connect to maps service to show exact location</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;