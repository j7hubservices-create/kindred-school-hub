import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Play, 
  BookOpen, 
  Users, 
  Clock,
  Award,
  Download,
  Video,
  FileText,
  Headphones
} from "lucide-react";

const ELearning = () => {
  const elearningFeatures = [
    {
      icon: Monitor,
      title: "Interactive Lessons",
      description: "Engaging multimedia content with interactive elements for better understanding"
    },
    {
      icon: Video,
      title: "Video Lectures", 
      description: "High-quality recorded lessons from our experienced teachers"
    },
    {
      icon: FileText,
      title: "Digital Resources",
      description: "Downloadable notes, worksheets, and study materials"
    },
    {
      icon: Users,
      title: "Virtual Classrooms",
      description: "Live online classes with real-time interaction"
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Monitor your learning progress with detailed analytics"
    },
    {
      icon: Headphones,
      title: "Audio Content",
      description: "Podcast-style lessons and audio study materials"
    }
  ];

  const subjects = [
    {
      name: "Mathematics",
      lessons: 45,
      duration: "120 hrs",
      level: "JSS & SSS",
      color: "primary"
    },
    {
      name: "English Language",
      lessons: 38,
      duration: "95 hrs", 
      level: "All Levels",
      color: "secondary"
    },
    {
      name: "Physics",
      lessons: 32,
      duration: "85 hrs",
      level: "SSS Only",
      color: "accent"
    },
    {
      name: "Chemistry",
      lessons: 30,
      duration: "80 hrs",
      level: "SSS Only", 
      color: "primary"
    },
    {
      name: "Biology",
      lessons: 28,
      duration: "75 hrs",
      level: "SSS Only",
      color: "secondary"
    },
    {
      name: "Computer Studies",
      lessons: 25,
      duration: "60 hrs",
      level: "All Levels",
      color: "accent"
    }
  ];

  const learningPaths = [
    {
      title: "WAEC Preparation",
      description: "Comprehensive preparation for West African Examinations Council",
      modules: 12,
      duration: "6 months",
      level: "SSS 3"
    },
    {
      title: "NECO Preparation", 
      description: "National Examinations Council exam preparation course",
      modules: 10,
      duration: "4 months", 
      level: "SSS 3"
    },
    {
      title: "Foundation Studies",
      description: "Building strong academic foundations for junior students", 
      modules: 8,
      duration: "3 months",
      level: "JSS 1-3"
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
            E-Learning Platform
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Learn Anywhere, Anytime</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access quality education through our comprehensive digital learning platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
            >
              View Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Platform Features</h2>
            <p className="text-xl text-muted-foreground">Modern e-learning tools for enhanced education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elearningFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Subjects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Available Subjects</h2>
            <p className="text-xl text-muted-foreground">Comprehensive curriculum coverage for all levels</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{subject.name}</h3>
                    <Badge className={`${
                      subject.color === 'primary' ? 'bg-primary text-primary-foreground' :
                      subject.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                      'bg-accent text-accent-foreground'
                    }`}>
                      {subject.level}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{subject.lessons}</div>
                      <div className="text-sm text-muted-foreground">Lessons</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{subject.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Access Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Learning Paths</h2>
            <p className="text-xl text-muted-foreground">Structured courses for specific goals</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{path.title}</h3>
                  <p className="text-muted-foreground mb-4">{path.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Modules:</span>
                      <span className="font-semibold text-primary">{path.modules}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="font-semibold text-primary">{path.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Level:</span>
                      <Badge className="bg-secondary text-secondary-foreground">{path.level}</Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                    Start Learning Path
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">E-Learning Statistics</h2>
            <p className="text-xl">Digital education impact at Our God Reigns Crystal School</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-lg">Active Students</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">15</div>
              <p className="text-lg">Subject Areas</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">200+</div>
              <p className="text-lg">Video Lessons</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">95%</div>
              <p className="text-lg">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Getting Started</h2>
            <p className="text-xl text-muted-foreground">Simple steps to begin your e-learning journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-card text-center">
              <CardContent className="p-6">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Create Account</h3>
                <p className="text-muted-foreground">Register with your student credentials to access the platform</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card text-center">
              <CardContent className="p-6">
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Choose Subjects</h3>
                <p className="text-muted-foreground">Select your subjects and learning paths based on your level</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card text-center">
              <CardContent className="p-6">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Start Learning</h3>
                <p className="text-muted-foreground">Begin your lessons and track your progress along the way</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8"
            >
              <Download className="h-5 w-5 mr-2" />
              Get Mobile App
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ELearning;