import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import studentsImage from "@/assets/gallery-1.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Our God Reigns Crystal School
          </h2>
          <p className="text-xl text-emerald-600 font-semibold max-w-2xl mx-auto mb-4">
            A place for academic and moral excellence - Light to the World
          </p>
        </div>
        
        {/* Admission Info */}
        <div className="text-center mb-12">
          <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-2">Admission in Progress</h3>
              <p className="text-lg mb-2">into JSS & SSS Classes</p>
              <p className="text-sm opacity-90">Academic Session 2025/2026</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our God Reigns Crystal School stands as a beacon of excellence in education, dedicated to nurturing young minds with both academic knowledge and moral values. We provide a comprehensive learning environment where students develop critical thinking skills, character, and leadership qualities that will serve them throughout their lives.
            </p>
            
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div>
            <img 
              src={studentsImage} 
              alt="Our God Reigns Crystal School Students"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;