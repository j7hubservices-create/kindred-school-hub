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
import schoolFlyer from "@/assets/school-flyer-main.jpg";

const CallToActionSection = () => {
  const benefits = [
    { icon: Star, text: "Quality Education" },
    { icon: Users, text: "Experienced Teachers" },
    { icon: Trophy, text: "Proven Results" },
    { icon: GraduationCap, text: "Holistic Development" }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-emerald-600/90 to-green-700/90 text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${schoolFlyer})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left - Flyer Image */}
          <div className="relative order-last lg:order-first">
            <div className="relative max-w-md mx-auto">
              <img 
                src={schoolFlyer} 
                alt="Our God Reigns Crystal School - Green Flyer"
                className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating admission badge */}
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                2025/2026 Session
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left space-y-3">
            <GraduationCap className="h-12 w-12 mx-auto lg:mx-0 mb-3 text-emerald-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Enroll Your Child Today!
            </h2>
            <p className="text-lg mb-4 opacity-90 leading-relaxed">
              Give your child the foundation for success with quality education, 
              character development, and a nurturing learning environment at Our God Reigns Crystal School
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-scale transition-all duration-200">
                  <CardContent className="p-3 text-center">
                    <benefit.icon className="h-6 w-6 mx-auto mb-1.5 text-emerald-300" />
                    <p className="font-semibold text-sm">{benefit.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 h-auto">
                <Link to="/admissions" className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Apply for Admission
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700 font-bold px-6 py-3 h-auto">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule School Tour
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mt-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-3 text-center">
              <Phone className="h-6 w-6 mx-auto mb-2 text-emerald-300" />
              <h3 className="font-bold mb-1 text-sm">Call Us Now</h3>
              <p className="text-xs opacity-90 mb-1.5">Speak with our admission team</p>
              <div className="text-xs space-y-0.5">
                <a href="tel:08027625129" className="block hover:text-emerald-300 transition-colors">08027625129</a>
                <a href="tel:08033089735" className="block hover:text-emerald-300 transition-colors">08033089735</a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-3 text-center">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-emerald-300" />
              <h3 className="font-bold mb-1 text-sm">Visit Our Campus</h3>
              <p className="text-xs opacity-90 mb-1.5">See our facilities firsthand</p>
              <p className="text-xs">23, Bolanle Awosika Street<br />Ojuore Ota</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-3 text-center">
              <GraduationCap className="h-6 w-6 mx-auto mb-2 text-emerald-300" />
              <h3 className="font-bold mb-1 text-sm">Online Application</h3>
              <p className="text-xs opacity-90 mb-1.5">Apply from the comfort of home</p>
              <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs">
                <Link to="/admissions">Start Application</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6">
          <Card className="bg-emerald-500 text-white p-3 inline-block">
            <p className="font-bold mb-1">🎓 Admission in Progress!</p>
            <p className="text-sm">Limited spaces available for 2025/2026 session. Apply now to secure your child's spot.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;