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
        
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src={proprietressImage} 
                    alt="Pastor (Mrs) Kehinde Adetuberu - Proprietress"
                    className="w-20 h-20 rounded-full object-cover border-3 border-primary/20"
                  />
                  <Quote className="absolute -top-1 -left-1 h-6 w-6 text-primary bg-background rounded-full p-1" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    Pastor (Mrs) Kehinde Adetuberu
                  </h3>
                  <p className="text-muted-foreground font-medium">Proprietress</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div className="whitespace-pre-line">
                    {showFullAddress ? fullAddress : excerptText}
                  </div>
                  
                  {!showFullAddress && (
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setShowFullAddress(true)}
                        className="text-primary hover:text-primary"
                      >
                        Read More
                      </Button>
                    </div>
                  )}
                  
                  {showFullAddress && (
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setShowFullAddress(false)}
                        className="text-primary hover:text-primary"
                      >
                        Show Less
                      </Button>
                    </div>
                  )}
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