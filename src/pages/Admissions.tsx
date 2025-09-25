import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import admissionFlyerImage from "@/assets/admission-flyer-new.jpg";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            Admission Open for 2025/2026 Session
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Join Our School Family</h1>
          <p className="text-xl mb-8">Academic Session 2025/2026 - Light to the World</p>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-emerald-600 mb-6">Admission in Progress</h2>
              <p className="text-lg text-gray-700 mb-4">into JSS & SSS Classes</p>
              <p className="text-2xl font-bold text-yellow-600 mb-6">Academic Session 2025/2026</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-100 text-emerald-700">JSS & SSS</Badge>
                  <span className="text-gray-700">Available Classes</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge className="bg-yellow-100 text-yellow-700">Excellence</Badge>
                  <span className="text-gray-700">Academic Record</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white mr-4">
                  Apply for Admission
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src={admissionFlyerImage} 
                alt="Our God Reigns Crystal School - Admission in Progress" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;