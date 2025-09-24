import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mrs. Adebayo Folake",
      role: "Parent",
      content: "OGRCS has been a blessing to our family. My daughter not only excelled academically but also developed strong moral values. The teachers are dedicated and the Christian environment is exactly what we wanted for our child.",
      rating: 5,
      year: "Parent since 2020"
    },
    {
      name: "David Okonkwo",
      role: "Alumni (Class of 2023)",
      content: "The foundation I received at OGRCS prepared me well for university. The teachers went beyond academics to shape our character. I'm grateful for the values instilled in me during my time there.",
      rating: 5,
      year: "Now at University of Lagos"
    },
    {
      name: "Mr. & Mrs. Johnson",
      role: "Parents",
      content: "We chose OGRCS for its reputation and Christian values. Our twin boys have thrived here, not just in academics but in sports and leadership. The school truly develops the whole child.",
      rating: 5,
      year: "Parents since 2019"
    },
    {
      name: "Grace Adeyemi", 
      role: "Alumni (Class of 2022)",
      content: "OGRCS gave me confidence and prepared me for JAMB excellently. I scored 298 in UTME and I'm now studying Medicine. The school's motto 'Light to the World' truly reflects what they do for students.",
      rating: 5,
      year: "Now at University of Ibadan"
    },
    {
      name: "Pastor & Mrs. Okafor",
      role: "Parents",
      content: "As a pastor, finding a school that shares our Christian values was important. OGRCS has exceeded our expectations. Our children are not just academically sound but spiritually grounded.",
      rating: 5,
      year: "Parents since 2018"
    },
    {
      name: "Samuel Ikechukwu",
      role: "Alumni (Class of 2021)",
      content: "The discipline and work ethic I learned at OGRCS have been invaluable in my university studies. The teachers were patient and helped me overcome my challenges in Mathematics and Sciences.",
      rating: 5,
      year: "Now at Covenant University"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from parents, students, and alumni about their experience at Our God Reigns Crystal School.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none shadow-card hover:shadow-school transition-all duration-300 group relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Stars Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.year}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the OGRCS difference and give your child the best educational foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/admissions" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover-scale"
              >
                Start Application Process
              </a>
              <a 
                href="/contact" 
                className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover-scale"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;