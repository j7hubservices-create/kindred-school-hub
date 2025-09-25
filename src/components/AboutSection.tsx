import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Globe, 
  ChevronRight, 
  Award, 
  Heart, 
  Target, 
  Shield,
  Lightbulb,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import principalImage from "@/assets/principal.jpg";
import chairmanImage from "@/assets/chairman.jpg";
import vicePrincipalImage from "@/assets/vice-principal.jpg";
import schoolStudentsBackground from "@/assets/school-students-background.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "800+", description: "Across JSS & SSS" },
    { icon: GraduationCap, label: "Proud Graduates", value: "2000+", description: "Since 2014" },
    { icon: Award, label: "Excellence Awards", value: "50+", description: "Academic & Moral" },
    { icon: Star, label: "Years of Service", value: "10+", description: "Transforming Lives" }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Faith & Character",
      description: "Building strong Christian values and moral foundations in every student."
    },
    {
      icon: Lightbulb,
      title: "Academic Excellence",
      description: "Providing quality education that prepares students for higher learning and life success."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Creating a secure, nurturing space where every child can learn and grow confidently."
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Fostering intellectual, spiritual, physical, and social growth in all our students."
    }
  ];

  const keyHighlights = [
    {
      title: "Complete Secondary Education",
      description: "Full JSS 1-3 and SSS 1-3 programs with WAEC/NECO preparation"
    },
    {
      title: "Technology Integration",
      description: "Modern E-Note system and AI-enhanced learning experiences"
    },
    {
      title: "Qualified Teaching Staff",
      description: "Experienced, dedicated educators committed to student success"
    },
    {
      title: "Character Development",
      description: "Strong emphasis on moral values, discipline, and leadership skills"
    },
    {
      title: "Extracurricular Activities",
      description: "Sports, cultural events, and academic competitions to build well-rounded students"
    },
    {
      title: "Small Class Sizes",
      description: "Personalized attention ensuring every student reaches their potential"
    }
  ];

  const leadership = [
    {
      name: "Principal",
      image: principalImage,
      title: "Academic Leadership",
      description: "Guiding educational excellence"
    },
    {
      name: "Chairman",
      image: chairmanImage,
      title: "Board Leadership",
      description: "Strategic vision & governance"
    },
    {
      name: "Vice Principal",
      image: vicePrincipalImage,
      title: "Administrative Leadership",
      description: "Operations & student affairs"
    }
  ];

  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${schoolStudentsBackground})`,
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-white/95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-accent text-accent-foreground mb-4 px-6 py-2 text-lg shadow-accent">
            🏫 About Our School
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Excellence in Education Since 2014
          </h2>
          <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
            Our God Reigns Crystal School is a beacon of academic excellence and moral integrity, 
            committed to nurturing young minds and shaping future leaders through quality education 
            rooted in Christian values and community spirit.
          </p>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 shadow-school hover-scale border-none bg-white/90 backdrop-blur-sm">
              <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-foreground font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>


        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Our God Reigns Crystal School
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover-scale border-none bg-white/90 backdrop-blur-sm">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* School Mission & Vision Highlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-card border border-accent/20">
              <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Our Vision
              </h4>
              <p className="text-foreground leading-relaxed">
                To provide qualitative and affordable education. To raise God fearing leaders.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-card border border-primary/10">
              <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Our Mission
              </h4>
              <p className="text-foreground leading-relaxed">
                To maintain high standard at all times. To always ensure that our services are not overpriced. 
                To nurture our students in the way of the Lord. To mentor our students to occupy leadership positions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-6">
              What Makes Us Different?
            </h3>
            
            <div className="space-y-4">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-card">
                  <ChevronRight className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-primary mb-1">{highlight.title}</h5>
                    <p className="text-sm text-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;