import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-accent text-accent-foreground mb-6 px-6 py-3 text-lg font-bold">
            🏫 About Our School
          </Badge>
          <h1 className="text-5xl font-bold mb-4">About Our God Reigns Crystal School</h1>
          <p className="text-xl mb-8">A place for academic and moral excellence - Light to the World</p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-card-foreground leading-relaxed">
                  To provide qualitative and affordable education. To raise God fearing leaders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-secondary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                <p className="text-card-foreground leading-relaxed">
                  To maintain high standard at all times. To always ensure that our services are not overpriced. To nurture our students in the way of the Lord. To mentor our students to occupy leadership positions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced About Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground px-4 py-2">
                📍 Our Location
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Academic Session 2025/2026
              </h2>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p className="text-lg">
                  Our God Reigns Crystal School stands as a beacon of excellence in education, located at <strong>23, Bolanle Awosika Street, Ojuore Ota</strong>. We are dedicated to nurturing young minds with both academic knowledge and moral values.
                </p>
                <p>
                  We provide a comprehensive learning environment where students develop critical thinking skills, character, and leadership qualities that will serve them throughout their lives.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="italic text-primary font-medium">
                    "...a place for academic and moral excellence - Light to the World"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-card border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Address:</span>
                      <span className="font-medium">23, Bolanle Awosika Street, Ojuore Ota</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium">08027625129, 08033089735</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-medium">ogrcs@yahoo.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Session:</span>
                      <span className="font-medium">2025/2026</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default About;