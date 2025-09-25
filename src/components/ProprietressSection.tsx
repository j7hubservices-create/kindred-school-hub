import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart } from "lucide-react";
import proprietressImage from "@/assets/proprietress.jpg";

const ProprietressSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-secondary text-secondary-foreground mb-4 px-6 py-2 text-lg">
            🌟 Message from Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Proprietress' Welcome Address
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            For the First Term of 2025/2026 Academic Session
          </p>
        </div>
        
        <Card className="bg-card shadow-school hover-scale transition-all duration-300 border-none">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 bg-primary/5 p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <img 
                      src={proprietressImage} 
                      alt="Pastor (Mrs) Kehinde Adetuberu - Proprietress" 
                      className="w-48 h-48 rounded-full shadow-school mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground rounded-full p-3">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Pastor (Mrs) Kehinde Adetuberu
                    </h3>
                    <Badge className="bg-accent text-accent-foreground font-bold">
                      Proprietress
                    </Badge>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Contact:</p>
                      <p className="font-semibold text-primary text-sm">📞 08027625129, 08033089735</p>
                      <p className="font-semibold text-primary text-sm">📍 23, Bolanle Awosika Street, Off Borehole B/Stop, Ojuore Ota – Ogun State</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="relative">
                  <Quote className="h-16 w-16 text-secondary/30 absolute -top-4 -left-4" />
                  <div className="space-y-6 text-lg leading-relaxed text-card-foreground pl-8">
                    <p className="font-semibold text-primary">
                      "Distinguished Parents, Guardians, Staff, and Beloved Students, It is with great joy and gratitude 
                      to God Almighty that I warmly and sincerely welcome you all to the first term of the 
                      2025/2026 academic session."
                    </p>
                    
                    <p>
                      "To our returning students, welcome back! We are delighted to see your bright faces again, 
                      and we trust you had a refreshing holiday. To our new students and parents joining our 
                      school family for the first time, we say a heartfelt welcome."
                    </p>
                    
                    <p>
                      "You are now part of a nurturing community where excellence, discipline, and character-building 
                      remain our watchwords. The start of a new academic year is always a season of fresh opportunities."
                    </p>

                    <p>
                      "It is a time to set new goals, embrace new challenges, and strive for greater achievements. In Our God Reigns Crystal School, we remain committed to providing a safe, stimulating, and supportive environment where every child can discover and develop their unique potential."
                    </p>

                    <p>
                      "To our dear teachers and staff, I commend your tireless dedication and commitment. Together, let us continue to inspire, mentor, and guide our students towards academic excellence and moral uprightness."
                    </p>

                    <p className="font-semibold text-primary">
                      "My admonition to our students this term is simple: be focused, be diligent, and be disciplined. Remember, success comes through hard work, respect, and consistency."
                    </p>
                    
                    <div className="pt-6">
                      <Button 
                        size="lg"
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
                      >
                        📖 Read Full Address
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProprietressSection;