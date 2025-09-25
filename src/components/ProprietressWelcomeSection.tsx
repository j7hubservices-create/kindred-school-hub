import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import proprietressImage from "@/assets/proprietress.jpg";

const ProprietressWelcomeSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proprietress' Welcome Address
          </h2>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            First Term 2025/2026 Academic Session
          </Badge>
        </div>
        
        <Card className="max-w-6xl mx-auto shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img 
                  src={proprietressImage} 
                  alt="Pastor (Mrs) Kehinde Adetuberu - Proprietress"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                />
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary bg-background rounded-full p-1" />
              </div>
            </div>
            <CardTitle className="text-2xl text-foreground">
              Pastor (Mrs) Kehinde Adetuberu
            </CardTitle>
            <p className="text-muted-foreground font-medium">Proprietress</p>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg font-medium text-foreground">
                Distinguished Parents, Guardians, Staff, and Beloved Students,
              </p>
              
              <p>
                It is with great joy and gratitude to God Almighty that I warmly and sincerely welcome you all to the first term of the 2025/2026 academic session.
              </p>
              
              <p>
                To our returning students, welcome back! We are delighted to see your bright faces again, and we trust you had a refreshing holiday. To our new students and parents joining our school family for the first time, we say a heartfelt welcome. You are now part of a nurturing community where excellence, discipline, and character-building remain our watchwords.
              </p>
              
              <p>
                The start of a new academic year is always a season of fresh opportunities. It is a time to set new goals, embrace new challenges, and strive for greater achievements. In Our God Reigns Crystal School, we remain committed to providing a safe, stimulating, and supportive environment where every child can discover and develop their unique potential.
              </p>
              
              <p>
                To our dear teachers and staff, I commend your tireless dedication and commitment. Together, let us continue to inspire, mentor, and guide our students towards academic excellence and moral uprightness. To our parents and guardians, we deeply appreciate your trust and partnership. Your cooperation and support are invaluable as we work hand in hand to shape the future of our children.
              </p>
              
              <p className="text-primary font-medium">
                My admonition to our students this term is simple: be focused, be diligent, and be disciplined. Remember, success comes through hard work, respect, and consistency.
              </p>
              
              <p>
                On behalf of the school management, I wish us all a fruitful, productive, and successful academic session ahead. With God on our side, this year will be filled with testimonies of growth and achievement.
              </p>
              
              <p className="text-lg font-medium text-foreground">
                Once again, welcome to the 2025/2026 academic session.
              </p>
              
              <p className="text-lg font-medium text-foreground">
                Thank you, and God bless you all.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProprietressWelcomeSection;