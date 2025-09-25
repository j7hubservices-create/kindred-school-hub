import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import proprietressImage from "@/assets/proprietress.jpg";

const ProprietressSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Proprietress Welcome */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Proprietress Welcome Address - 2025/2026 Session
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="relative">
                <img 
                  src={proprietressImage} 
                  alt="Pastor (Mrs) Kehinde Adetuberu - Proprietress" 
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-emerald-700">Pastor (Mrs) Kehinde Adetuberu</h3>
                <p className="text-yellow-600 font-semibold">Proprietress</p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <Quote className="h-12 w-12 text-emerald-200 absolute -top-2 -left-2" />
                <div className="pl-8">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "Distinguished Parents, Guardians, Staff, and Beloved Students, It is with great joy and gratitude 
                    to God Almighty that I warmly and sincerely welcome you all to the first term of the 
                    2025/2026 academic session."
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "To our returning students, welcome back! We are delighted to see your bright faces again, 
                    and we trust you had a refreshing holiday. To our new students and parents joining our 
                    school family for the first time, we say a heartfelt welcome."
                  </p>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    "You are now part of a nurturing community where excellence, discipline, and character-building 
                    remain our watchwords. The start of a new academic year is always a season of fresh opportunities."
                  </p>
                  
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    Read Full Address
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietressSection;