import { Badge } from "@/components/ui/badge";
import studentsBackground from "@/assets/students-background.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  backgroundImage?: string;
}

const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  badge,
  backgroundImage = studentsBackground 
}: PageHeroProps) => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {/* Green Transparent Overlay */}
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="absolute inset-0 bg-gradient-diagonal opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto text-primary-foreground">
          {badge && (
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold mb-6 inline-flex">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <div className="text-xl md:text-2xl font-bold text-secondary mb-4">
              {subtitle}
            </div>
          )}
          
          {description && (
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;