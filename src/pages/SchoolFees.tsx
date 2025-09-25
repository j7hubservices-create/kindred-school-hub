import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, CreditCard, Building2, Wallet } from "lucide-react";

const SchoolFees = () => {
  const feeStructure = [
    {
      level: "JSS 1",
      freshFee: "₦161,500",
      returningFee: "N/A",
      hostelFee: "₦200,000",
      hostelWears: "₦50,000",
      note: "Fresh Students with E-Note & AI (Textbooks not inclusive)"
    },
    {
      level: "JSS 2", 
      freshFee: "₦175,500",
      returningFee: "₦115,500",
      hostelFee: "₦200,000",
      hostelWears: "₦50,000",
      note: "With E-Note & AI"
    },
    {
      level: "JSS 3",
      freshFee: "₦420,000",
      returningFee: "₦420,000", 
      hostelFee: "₦200,000",
      hostelWears: "₦50,000",
      note: "Payable in 3 installments (whole session)",
      installments: [
        { period: "1st Payment (Sept 23 – Oct 20)", amount: "₦146,000" },
        { period: "2nd Payment (Jan 2 – Jan 24)", amount: "₦138,500" },
        { period: "3rd Payment (Mar 24 – Apr 30)", amount: "₦92,000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-6 py-3 text-lg font-bold">
            💰 School Fees Information
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Consolidated School Bill</h1>
          <p className="text-xl mb-4">For the 1st Term 2025/2026 Session</p>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {feeStructure.map((fee, index) => (
              <Card key={index} className="shadow-card hover-scale">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <GraduationCap className="h-6 w-6" />
                    {fee.level}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Fresh Students</p>
                      <p className="text-xl font-bold text-primary">{fee.freshFee}</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Returning Students</p>
                      <p className="text-xl font-bold text-primary">{fee.returningFee}</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Hostel Fee</p>
                      <p className="text-xl font-bold text-primary">{fee.hostelFee}</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Hostel/Church Wears</p>
                      <p className="text-xl font-bold text-primary">{fee.hostelWears}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolFees;