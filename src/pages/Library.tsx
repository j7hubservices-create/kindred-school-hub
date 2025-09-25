import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, BookOpen, Users, Clock } from "lucide-react";

const Library = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            School Library
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Our Library</h1>
          <p className="text-xl mb-8">A place of learning and discovery</p>
        </div>
      </section>

      {/* Library Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <Book className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">5,000+</h3>
                <p className="text-gray-700">Books Collection</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">50+</h3>
                <p className="text-gray-700">Study Seats</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Quiet</h3>
                <p className="text-gray-700">Study Environment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Mon-Fri</h3>
                <p className="text-gray-700">8AM - 4PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Library Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-600 text-center mb-12">Library Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">Academic Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Textbooks for all subjects</li>
                  <li>• Reference materials</li>
                  <li>• Past question papers</li>
                  <li>• Educational magazines</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">Study Facilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Individual study desks</li>
                  <li>• Group study areas</li>
                  <li>• Computer access</li>
                  <li>• Research assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;