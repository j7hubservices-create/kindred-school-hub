import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            Contact Us
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl mb-8">We're here to help and answer any questions you might have</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Phone</h3>
                <p className="text-gray-700">+234 802 762 5129</p>
                <p className="text-gray-700">+234 803 308 9735</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Email</h3>
                <p className="text-gray-700">ogrcs@yahoo.com</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Address</h3>
                <p className="text-gray-700">23, Bolanle Awosika Street, off Ilogbo Road, Borehole, Ota, Ogun State</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;