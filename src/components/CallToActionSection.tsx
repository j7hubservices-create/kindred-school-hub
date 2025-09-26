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
    <section className="py-5 bg-gradient-to-br from-emerald-600/90 to-green-700/90 text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${schoolFlyer})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-3 items-center">
          {/* Left - Flyer Image */}
          <div className="relative order-last lg:order-first">
            <div className="relative max-w-xs mx-auto">
              <img 
                src={schoolFlyer} 
                alt="Our God Reigns Crystal School - Green Flyer"
                className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating admission badge */}
              <div className="absolute -top-1 -right-1 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                2025/2026
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left space-y-2">
            <GraduationCap className="h-8 w-8 mx-auto lg:mx-0 mb-2 text-emerald-300" />
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Enroll Your Child Today!
            </h2>
            <p className="text-sm mb-3 opacity-90 leading-relaxed">
              Give your child the foundation for success with quality education at Our God Reigns Crystal School
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-scale transition-all duration-200">
                  <CardContent className="p-2 text-center">
                    <benefit.icon className="h-4 w-4 mx-auto mb-1 text-emerald-300" />
                    <p className="font-semibold text-xs">{benefit.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-1 justify-center lg:justify-start">
              <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-2 h-auto text-sm">
                <Link to="/admissions" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Apply Now
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
              
              <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700 font-bold px-4 py-2 h-auto text-sm">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  School Tour
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-2 mt-3 max-w-3xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-2 text-center">
              <Phone className="h-4 w-4 mx-auto mb-1 text-emerald-300" />
              <h3 className="font-bold mb-1 text-xs">Call Us</h3>
              <div className="text-xs space-y-0.5">
                <a href="tel:08027625129" className="block hover:text-emerald-300 transition-colors">08027625129</a>
                <a href="tel:08033089735" className="block hover:text-emerald-300 transition-colors">08033089735</a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-2 text-center">
              <Calendar className="h-4 w-4 mx-auto mb-1 text-emerald-300" />
              <h3 className="font-bold mb-1 text-xs">Visit Campus</h3>
              <p className="text-xs">23, Bolanle Awosika Street<br />Ojuore Ota</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-2 text-center">
              <GraduationCap className="h-4 w-4 mx-auto mb-1 text-emerald-300" />
              <h3 className="font-bold mb-1 text-xs">Online Application</h3>
              <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-2 py-1">
                <Link to="/admissions">Apply</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-3">
          <Card className="bg-emerald-500 text-white p-2 inline-block">
            <p className="font-bold text-sm">🎓 Admission in Progress!</p>
            <p className="text-xs">Limited spaces available for 2025/2026 session.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;