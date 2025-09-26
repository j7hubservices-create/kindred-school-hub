import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { useState } from "react";
import proprietressImage from "@/assets/proprietress.jpg";

const ProprietressWelcomeSection = () => {
  const [showFullAddress, setShowFullAddress] = useState(false);

  const excerptText = `Distinguished Parents, Guardians, Staff, and Beloved Students,

It is with great joy and gratitude to God Almighty that I warmly and sincerely welcome you all to the first term of the 2025/2026 academic session.

To our returning students, welcome back! We are delighted to see your bright faces again, and we trust you had a refreshing holiday. To our new students and parents joining our school family for the first time, we say a heartfelt welcome. You are now part of a nurturing community where excellence, discipline, and character-building remain our watchwords.`;

  const fullAddress = `Distinguished Parents, Guardians, Staff, and Beloved Students,

It is with great joy and gratitude to God Almighty that I warmly and sincerely welcome you all to the first term of the 2025/2026 academic session.

To our returning students, welcome back! We are delighted to see your bright faces again, and we trust you had a refreshing holiday. To our new students and parents joining our school family for the first time, we say a heartfelt welcome. You are now part of a nurturing community where excellence, discipline, and character-building remain our watchwords.

The start of a new academic year is always a season of fresh opportunities. It is a time to set new goals, embrace new challenges, and strive for greater achievements. In Our God Reigns Crystal School, we remain committed to providing a safe, stimulating, and supportive environment where every child can discover and develop their unique potential.

To our dear teachers and staff, I commend your tireless dedication and commitment. Together, let us continue to inspire, mentor, and guide our students towards academic excellence and moral uprightness. To our parents and guardians, we deeply appreciate your trust and partnership. Your cooperation and support are invaluable as we work hand in hand to shape the future of our children.

My admonition to our students this term is simple: be focused, be diligent, and be disciplined. Remember, success comes through hard work, respect, and consistency.

On behalf of the school management, I wish us all a fruitful, productive, and successful academic session ahead. With God on our side, this year will be filled with testimonies of growth and achievement.

Once again, welcome to the 2025/2026 academic session.

Thank you, and God bless you all.

Pastor (Mrs) Kehinde Adetuberu
Proprietress`;

  return (
    <section className="py-10 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-elegant opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Proprietress' Welcome Address
          </h2>
          <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
            First Term 2025/2026 Academic Session
          </Badge>
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-elegant border-primary/10">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <img 
                    src={proprietressImage} 
                    alt="Proprietress - Pastor (Mrs) Kehinde Adetuberu" 
                    className="w-full max-w-48 h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute -top-3 -right-3">
                    <Quote className="h-8 w-8 text-accent bg-white p-1 rounded-full shadow-md" />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <div className="relative">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {showFullAddress ? fullAddress : excerptText}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div>
                    <p className="font-semibold text-primary text-sm">Pastor (Mrs) Kehinde Adetuberu</p>
                    <p className="text-muted-foreground text-xs">Proprietress</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowFullAddress(!showFullAddress)}
                    className="text-xs"
                  >
                    {showFullAddress ? 'Show Less' : 'Read Full Address'}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProprietressWelcomeSection;