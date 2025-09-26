import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, BookOpen, Video, Users } from "lucide-react";
import elearningHero from "@/assets/elearning-hero.jpg";

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
      
      <PageHero
        title="Digital Learning Experience"
        subtitle="Modern education for the digital age"
        description="Interactive online classes, digital resources, and collaborative learning opportunities"
        badge="💻 E-Learning Platform"
        backgroundImage={elearningHero}
      />

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
          
          {/* JSS Subjects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Junior Secondary School (JSS)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                "English",
                "Mathematics", 
                "Basic Science and Technology",
                "National Value Education",
                "Pre-Vocational Studies",
                "Business Studies",
                "Cultural And Creative Arts",
                "Yoruba",
                "Christian Religious Studies",
                "Computer Studies",
                "History"
              ].map((subject, index) => (
                <Card key={index} className="border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-emerald-600 mb-2">{subject}</h4>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full text-sm">
                      Access Course
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* SSS Subjects */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Senior Secondary School (SSS)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                "English Language",
                "Mathematics",
                "Civic Education", 
                "Trade Subject (Bookkeeping)",
                "Physics",
                "Chemistry",
                "Biology",
                "Agric Science",
                "Further Mathematics",
                "Economics",
                "Government",
                "CRS",
                "Literature in English",
                "Yoruba", 
                "Commerce",
                "Office Practice",
                "Computer",
                "Financial Accounting"
              ].map((subject, index) => (
                <Card key={index} className="border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-emerald-600 mb-2">{subject}</h4>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full text-sm">
                      Access Course
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ELearning;