import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Building, DollarSign } from "lucide-react";

const SchoolFees = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            School Fees
          </Badge>
          <h1 className="text-5xl font-bold mb-4">School Fee Structure</h1>
          <p className="text-xl mb-8">Academic Session 2025/2026 - Affordable Quality Education</p>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">Junior Secondary (JSS 1-3)</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">₦50,000</div>
                <p className="text-gray-600 mb-6">Per Academic Session</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  Pay Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">Senior Secondary (SSS 1-3)</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">₦60,000</div>
                <p className="text-gray-600 mb-6">Per Academic Session</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  Pay Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-600 text-center mb-12">Payment Methods</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <CreditCard className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Online Payment</h3>
                <p className="text-gray-700">Pay securely online with your debit/credit card</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <Building className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Bank Transfer</h3>
                <p className="text-gray-700">Transfer directly to our bank account</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <DollarSign className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Cash Payment</h3>
                <p className="text-gray-700">Pay in cash at the school office</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolFees;