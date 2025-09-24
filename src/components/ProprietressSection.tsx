import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import proprietressImage from "@/assets/proprietress.jpg";

const ProprietressSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Our Vision & Mission
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Our God Reigns Crystal School stands as a beacon of excellence in education
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            We provide a comprehensive learning environment where students develop critical thinking skills, 
            character, and leadership qualities that will serve them throughout their lives.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
          >
            Learn More About Us
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-primary text-primary-foreground p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To provide qualitative and affordable education. To raise God fearing leaders.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary text-secondary-foreground p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To maintain high standard at all times. To always ensure that our services are not overpriced. 
                To nurture our students in the way of the Lord. To mentor our students to occupy leadership positions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Proprietress Welcome */}
        <div className="bg-background rounded-2xl shadow-school p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Proprietress Welcome Address - 2025/2026 Session
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="relative">
                <img 
                  src={proprietressImage} 
                  alt="Pastor (Mrs) Kehinde Adetuberu - Proprietress" 
                  className="w-full rounded-2xl shadow-card"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-primary">Pastor (Mrs) Kehinde Adetuberu</h3>
                <p className="text-secondary font-semibold">Proprietress</p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <Quote className="h-12 w-12 text-primary/20 absolute -top-2 -left-2" />
                <div className="pl-8">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    "Distinguished Parents, Guardians, Staff, and Beloved Students, It is with great joy and gratitude 
                    to God Almighty that I warmly and sincerely welcome you all to the first term of the 
                    2025/2026 academic session."
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    "To our returning students, welcome back! We are delighted to see your bright faces again, 
                    and we trust you had a refreshing holiday. To our new students and parents joining our 
                    school family for the first time, we say a heartfelt welcome."
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    "You are now part of a nurturing community where excellence, discipline, and character-building 
                    remain our watchwords. The start of a new academic year is always a season of fresh opportunities."
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
                  >
                    Read Full Address
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietressSection;