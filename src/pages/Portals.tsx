import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Users, 
  User, 
  GraduationCap,
  ArrowRight,
  Shield,
  BookOpen,
  BarChart3,
  Calendar
} from "lucide-react";

const Portals = () => {
  const portals = [
    {
      title: "Admin Portal",
      description: "Complete school administration and management system",
      icon: Settings,
      color: "primary",
      link: "/portals/admin",
      features: [
        "Student Records Management",
        "Staff Administration", 
        "Financial Reports",
        "Academic Analytics",
        "System Configuration"
      ],
      users: "Administrators Only"
    },
    {
      title: "Staff Portal", 
      description: "Teachers and staff resources and management tools",
      icon: Users,
      color: "secondary",
      link: "/portals/staff",
      features: [
        "Class Management",
        "Grade Entry System",
        "Attendance Tracking",
        "Lesson Planning",
        "Student Reports"
      ],
      users: "Teaching & Non-Teaching Staff"
    },
    {
      title: "Parent Portal",
      description: "Monitor your child's academic progress and school activities", 
      icon: User,
      color: "accent",
      link: "/portals/parent",
      features: [
        "Student Progress Tracking",
        "Report Card Access", 
        "Fee Payment History",
        "School Announcements",
        "Parent-Teacher Communication"
      ],
      users: "Parents & Guardians"
    },
    {
      title: "Student Portal",
      description: "Access learning materials, grades, and school information",
      icon: GraduationCap,
      color: "primary",
      link: "/portals/student",
      features: [
        "Course Materials Access",
        "Grade Viewing",
        "Assignment Submission",
        "Class Timetable",
        "School Calendar"
      ],
      users: "All Students"
    }
  ];

  const portalStats = [
    { label: "Active Users", value: "847", description: "Students, staff, and parents" },
    { label: "Daily Logins", value: "450+", description: "Average portal usage" },
    { label: "Success Rate", value: "99.8%", description: "System uptime" },
    { label: "Features", value: "25+", description: "Available portal features" }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Authentication", 
      description: "Multi-factor authentication and secure login protocols"
    },
    {
      icon: BookOpen,
      title: "Role-Based Access",
      description: "Different access levels based on user roles and permissions"
    },
    {
      icon: BarChart3,
      title: "Activity Monitoring",
      description: "Comprehensive logging and monitoring of all portal activities"
    },
    {
      icon: Calendar,
      title: "Regular Updates",
      description: "Continuous security updates and feature enhancements"
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
            School Portals
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Digital School Management</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comprehensive portal system for students, parents, staff, and administrators
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <p className="text-lg">Portal Access Available</p>
          </div>
        </div>
      </section>

      {/* Portal Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Available Portals</h2>
            <p className="text-xl text-muted-foreground">Choose your portal to access relevant features and information</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {portals.map((portal, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`
                      ${portal.color === 'primary' ? 'bg-primary text-primary-foreground' : ''}
                      ${portal.color === 'secondary' ? 'bg-secondary text-secondary-foreground' : ''}
                      ${portal.color === 'accent' ? 'bg-accent text-accent-foreground' : ''}
                      w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                    `}>
                      <portal.icon className="h-8 w-8" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{portal.title}</h3>
                      <p className="text-muted-foreground mb-4">{portal.description}</p>
                      
                      <Badge className="mb-4 bg-muted text-muted-foreground">
                        {portal.users}
                      </Badge>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {portal.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className={`
                          w-full group-hover:translate-x-1 transition-transform duration-300
                          ${portal.color === 'primary' ? 'bg-primary hover:bg-primary-dark text-primary-foreground' : ''}
                          ${portal.color === 'secondary' ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground' : ''}
                          ${portal.color === 'accent' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}
                        `}
                      >
                        Access {portal.title}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Portal Statistics</h2>
            <p className="text-xl text-muted-foreground">Usage and performance metrics</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {portalStats.map((stat, index) => (
              <Card key={index} className="border-none shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Security & Privacy</h2>
            <p className="text-xl text-muted-foreground">Your data is protected with enterprise-grade security</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Our support team is available to help you navigate the portal system
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                <p className="mb-4 opacity-90">Get help with login issues and technical problems</p>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">User Guide</h3>
                <p className="mb-4 opacity-90">Step-by-step instructions for using portal features</p>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Guide
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Training Videos</h3>
                <p className="mb-4 opacity-90">Watch tutorial videos for comprehensive portal training</p>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Quick Portal Access</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Select your role to access the appropriate portal
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Student Login
            </Button>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              <User className="h-5 w-5 mr-2" />
              Parent Login
            </Button>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8"
            >
              <Users className="h-5 w-5 mr-2" />
              Staff Login
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portals;