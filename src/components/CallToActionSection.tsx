import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Phone, 
  Calendar,
  ArrowRight,
  Star,
  Users,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  const benefits = [
    { icon: Star, text: "Quality Education" },
    { icon: Users, text: "Experienced Teachers" },
    { icon: Trophy, text: "Proven Results" },
    { icon: GraduationCap, text: "Holistic Development" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enroll Your Child Today!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Give your child the foundation for success with quality education, 
            character development, and a nurturing learning environment at Our God Reigns Crystal School
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-scale transition-all duration-200">
              <CardContent className="p-6 text-center">
                <benefit.icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                <p className="font-semibold">{benefit.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 h-auto">
              <Link to="/admissions" className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Apply for Admission
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-4 h-auto">
              <Link to="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule School Tour
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">Call Us Now</h3>
              <p className="text-sm opacity-90 mb-3">Speak with our admission team</p>
              <div className="text-sm">
                <div>08027625129</div>
                <div>08033089735</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">Visit Our Campus</h3>
              <p className="text-sm opacity-90 mb-3">See our facilities firsthand</p>
              <p className="text-sm">23, Bolanle Awosika Street<br />Ojuore Ota</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <GraduationCap className="h-8 w-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">Online Application</h3>
              <p className="text-sm opacity-90 mb-3">Apply from the comfort of home</p>
              <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/admissions">Start Application</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="bg-accent text-accent-foreground p-6 inline-block">
            <p className="font-bold text-lg mb-2">🎓 Admission in Progress!</p>
            <p className="text-sm">Limited spaces available for 2025/2026 session. Apply now to secure your child's spot.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;