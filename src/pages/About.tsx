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
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            About Our School
          </Badge>
          <h1 className="text-5xl font-bold mb-4">About Our God Reigns Crystal School</h1>
          <p className="text-xl mb-8">A place for academic and moral excellence - Light to the World</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">
              Academic Session 2025/2026
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our God Reigns Crystal School stands as a beacon of excellence in education, dedicated to nurturing young minds with both academic knowledge and moral values. We provide a comprehensive learning environment where students develop critical thinking skills, character, and leadership qualities that will serve them throughout their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide qualitative and affordable education. To raise God fearing leaders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To maintain high standard at all times. To always ensure that our services are not overpriced. To nurture our students in the way of the Lord. To mentor our students to occupy leadership positions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;