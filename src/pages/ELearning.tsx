import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, BookOpen, Video, Users } from "lucide-react";

const ELearning = () => {
  const features = [
    {
      icon: Monitor,
      title: "Online Classes",
      description: "Interactive virtual classrooms with qualified teachers"
    },
    {
      icon: BookOpen,
      title: "Digital Resources",
      description: "Access to comprehensive study materials and e-books"
    },
    {
      icon: Video,
      title: "Video Lessons", 
      description: "Recorded lessons available for replay and review"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Group projects and peer-to-peer learning opportunities"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            E-Learning Platform
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Digital Learning Experience</h1>
          <p className="text-xl mb-8">Modern education for the digital age</p>
          
          <Button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3">
            Access Platform
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-600 text-center mb-12">Platform Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center border-emerald-200 shadow-lg">
                  <CardContent className="p-8">
                    <IconComponent className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-emerald-600 mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-600 text-center mb-12">Available Subjects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Mathematics</h3>
                <p className="text-gray-600 mb-4">Comprehensive math curriculum from basic to advanced topics</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  Access Course
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">English Language</h3>
                <p className="text-gray-600 mb-4">Language arts, literature, and communication skills</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  Access Course
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Sciences</h3>
                <p className="text-gray-600 mb-4">Physics, Chemistry, Biology with practical sessions</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  Access Course
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ELearning;