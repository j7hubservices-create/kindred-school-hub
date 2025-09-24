import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Award, 
  Users, 
  Shield, 
  Lightbulb, 
  Target 
} from "lucide-react";
import chairmanImage from "@/assets/chairman.jpg";
import proprietressImage from "@/assets/proprietress.jpg";
import principalImage from "@/assets/principal.jpg";
import vicePrincipalImage from "@/assets/vice-principal.jpg";

const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Christian Values",
      description: "Building character on the foundation of Christian principles and moral excellence"
    },
    {
      icon: Award,
      title: "Academic Excellence", 
      description: "Consistent outstanding performance in national examinations and competitions"
    },
    {
      icon: Users,
      title: "Holistic Development",
      description: "Nurturing intellectual, spiritual, social, and physical growth in every student"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding the highest standards of honesty, transparency, and ethical conduct"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern teaching methods and educational technologies"
    },
    {
      icon: Target,
      title: "Leadership",
      description: "Developing future leaders who will make positive impacts in society"
    }
  ];

  const leadership = [
    {
      name: "Pastor Akinsanya Aderemi Adetuberu (FCA)",
      title: "Chairman",
      image: chairmanImage,
      description: "Leading with vision and integrity, Pastor Adetuberu brings decades of experience in education and spiritual leadership to guide the school's strategic direction."
    },
    {
      name: "Pastor (Mrs) Kehinde Adetuberu",
      title: "Proprietress", 
      image: proprietressImage,
      description: "As the driving force behind Our God Reigns Crystal School, Pastor Mrs Adetuberu is passionate about providing quality education that transforms lives."
    },
    {
      name: "Pastor Joseph Oladele",
      title: "Principal",
      image: principalImage,
      description: "With extensive experience in educational administration, Pastor Oladele ensures academic excellence while maintaining our core values."
    },
    {
      name: "Mrs Abosede Taiwo",
      title: "Vice Principal",
      image: vicePrincipalImage,
      description: "Supporting the academic vision and ensuring smooth daily operations for optimal learning experiences."
    }
  ];

  const stats = [
    { number: "847", label: "Total Students", subtitle: "Across all levels" },
    { number: "42", label: "Teaching Staff", subtitle: "Qualified educators" },
    { number: "98%", label: "Success Rate", subtitle: "WAEC & NECO" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2">
            About Our School
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Light to the World</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A place for academic and moral excellence
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-primary text-primary-foreground p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be a leading educational institution that produces academically excellent and morally upright 
                  individuals who serve as beacons of light in their communities and the world at large, making 
                  positive impacts through their knowledge, character, and Christian values.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary text-secondary-foreground p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To provide quality education that combines academic excellence with strong Christian values, 
                  nurturing young minds to become responsible leaders and positive change agents in society while 
                  maintaining the highest standards of moral and intellectual development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our God Reigns Crystal School was established with a divine vision to create an institution where 
                academic excellence meets moral development. Founded on the principles of Christian education, our 
                school has grown to become a beacon of hope and excellence in the educational landscape of Ogun State and Nigeria.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Located at 23, Bolanle Awosika Street, off Ilogbo Road, Borehole, Ota, Ogun State, our institution 
                serves as a nurturing ground for young minds seeking both intellectual growth and character development. 
                Our motto, "Light to the World," reflects our commitment to producing graduates who illuminate their 
                communities with knowledge, wisdom, and Christian values.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, we have consistently maintained high academic standards while ensuring that our students 
                develop strong moral foundations. Our success is evidenced by outstanding performances in national 
                examinations, including WAEC and NECO, and the recognition our students receive in various academic 
                competitions and awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Meet the dedicated leaders shaping our educational vision</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <Badge className="bg-primary text-primary-foreground mb-3">
                    {leader.title}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Academic Excellence</h2>
            <p className="text-xl">Comprehensive education from nursery to senior secondary level</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-secondary mb-2">{stat.number}</div>
                <h3 className="text-2xl font-semibold mb-1">{stat.label}</h3>
                <p className="opacity-90">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;