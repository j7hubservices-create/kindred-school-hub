import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, CreditCard, Building2, Wallet } from "lucide-react";
import schoolFeesHero from "@/assets/school-fees-hero.jpg";

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
      note: "Fresh & Returning Students - Payable in 3 installments (whole session)",
      installments: [
        { period: "1st Payment (Sept 23 – Oct 20)", amount: "₦146,000" },
        { period: "2nd Payment (Jan 2 – Jan 24)", amount: "₦138,500" },
        { period: "3rd Payment (Mar 24 – Apr 30)", amount: "₦92,000" }
      ]
    },
    {
      level: "SSS 1 (Science)",
      freshFee: "₦185,500",
      returningFee: "N/A",
      hostelFee: "₦200,000",
      hostelWears: "₦50,000",
      note: "Fresh Students with E-Note & AI (Textbooks not inclusive)"
    },
    {
      level: "SSS 1 (Others)",
      freshFee: "₦175,500",
      returningFee: "N/A",
      hostelFee: "₦200,000",
      hostelWears: "₦50,000",
      note: "Fresh Students with E-Note & AI (Textbooks not inclusive)"
    },
    {
      level: "SSS 2 (Science)",
      freshFee: "₦195,500",
      returningFee: "₦128,500",
      hostelFee: "₦175,000",
      hostelWears: "₦50,000",
      note: "With E-Note & AI (Textbooks not inclusive)"
    },
    {
      level: "SSS 2 (Others)",
      freshFee: "₦185,500",
      returningFee: "₦122,500",
      hostelFee: "₦175,000",
      hostelWears: "₦50,000",
      note: "With E-Note & AI (Textbooks not inclusive)"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <PageHero
        title="Consolidated School Bill"
        subtitle="For the 1st Term 2025/2026 Session"
        description="Comprehensive fee structure and payment information for all levels"
        badge="💰 School Fees Information"
        backgroundImage={schoolFeesHero}
      />

      {/* Fee Structure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {feeStructure.map((fee, index) => (
              <Card key={index} className="shadow-card hover-scale border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <GraduationCap className="h-6 w-6" />
                    {fee.level}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg border border-primary/10">
                      <p className="text-sm text-muted-foreground mb-1">Fresh Students</p>
                      <p className="text-xl font-bold text-primary">{fee.freshFee}</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg border border-primary/10">
                      <p className="text-sm text-muted-foreground mb-1">Returning Students</p>
                      <p className="text-xl font-bold text-primary">{fee.returningFee}</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg border border-primary/10">
                      <p className="text-sm text-muted-foreground mb-1">Hostel Fee (Boarders Only)</p>
                      <p className="text-xl font-bold text-primary">{fee.hostelFee}</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg border border-primary/10">
                      <p className="text-sm text-muted-foreground mb-1">Hostel/Church Wears</p>
                      <p className="text-xl font-bold text-primary">{fee.hostelWears}</p>
                    </div>
                  </div>
                  
                  {fee.installments && (
                    <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                      <h4 className="font-semibold text-secondary mb-3">Payment Installments:</h4>
                      <div className="grid md:grid-cols-3 gap-3">
                        {fee.installments.map((installment, idx) => (
                          <div key={idx} className="text-center p-3 bg-background rounded border">
                            <p className="text-xs text-muted-foreground mb-1">{installment.period}</p>
                            <p className="font-bold text-secondary">{installment.amount}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-sm text-muted-foreground mt-4 italic">{fee.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-accent text-accent-foreground mb-4 px-6 py-3 text-lg font-bold">
                💳 Payment Information
              </Badge>
              <h2 className="text-3xl font-bold text-primary mb-4">How to Make Payment</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card border-accent/20">
                <CardHeader className="bg-accent/5">
                  <CardTitle className="flex items-center gap-3 text-accent">
                    <Building2 className="h-6 w-6" />
                    Bank Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-background rounded-lg border">
                      <p className="text-sm text-muted-foreground">Bank Name</p>
                      <p className="text-lg font-bold text-primary">Access Bank PLC</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                      <p className="text-sm text-muted-foreground">Account Name</p>
                      <p className="text-lg font-bold text-primary">Our God Reigns Crystal School</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                      <p className="text-sm text-muted-foreground">Account Number</p>
                      <p className="text-2xl font-bold text-accent">0039836079</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-secondary/20">
                <CardHeader className="bg-secondary/5">
                  <CardTitle className="flex items-center gap-3 text-secondary">
                    <Wallet className="h-6 w-6" />
                    Payment Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                      <p className="text-card-foreground">All payments must be made before resumption</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                      <p className="text-card-foreground">Payments are non-refundable</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                      <p className="text-card-foreground">Please bring the deposit slip to the school or contact the school when transfer is made to obtain receipt</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Contact Information:</p>
                    <p className="font-semibold text-primary">📞 08027625129, 08033089735</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">School Address</h3>
                  <p className="text-card-foreground">
                    <strong>Our God Reigns Crystal Schools</strong><br />
                    23, Bolanle Awosika Street, Off Borehole B/Stop<br />
                    Ojuore Ota – Ogun State
                  </p>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Thank you and God bless.<br />
                    <strong>Management</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolFees;