import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Calculator, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Download,
  Receipt,
  Banknote
} from "lucide-react";

const SchoolFees = () => {
  const feeStructure = [
    {
      level: "JSS 1",
      tuition: "₦120,000",
      development: "₦25,000", 
      total: "₦145,000",
      description: "First term of Junior Secondary School"
    },
    {
      level: "JSS 2", 
      tuition: "₦115,000",
      development: "₦20,000",
      total: "₦135,000", 
      description: "Second year Junior Secondary"
    },
    {
      level: "JSS 3",
      tuition: "₦115,000", 
      development: "₦20,000",
      total: "₦135,000",
      description: "Final year Junior Secondary"
    },
    {
      level: "SSS 1",
      tuition: "₦140,000",
      development: "₦30,000", 
      total: "₦170,000",
      description: "First year Senior Secondary"
    },
    {
      level: "SSS 2",
      tuition: "₦135,000",
      development: "₦25,000",
      total: "₦160,000",
      description: "Second year Senior Secondary" 
    },
    {
      level: "SSS 3",
      tuition: "₦135,000",
      development: "₦25,000", 
      total: "₦160,000",
      description: "Final year Senior Secondary"
    }
  ];

  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Online Payment",
      description: "Pay securely online with debit/credit cards",
      status: "Available"
    },
    {
      icon: Banknote,
      title: "Bank Transfer", 
      description: "Direct bank transfer to school account",
      status: "Available"
    },
    {
      icon: Receipt,
      title: "Cash Payment",
      description: "Pay in cash at the school bursar's office", 
      status: "Available"
    }
  ];

  const additionalFees = [
    { item: "Registration Fee (New Students)", amount: "₦15,000" },
    { item: "Examination Fee", amount: "₦10,000" },
    { item: "Sports Levy", amount: "₦5,000" },
    { item: "Library Fee", amount: "₦3,000" },
    { item: "Laboratory Fee (Science Students)", amount: "₦12,000" },
    { item: "Computer Fee", amount: "₦8,000" }
  ];

  const paymentSchedule = [
    {
      term: "First Term",
      dueDate: "September 15, 2025",
      percentage: "40%",
      status: "Due"
    },
    {
      term: "Second Term", 
      dueDate: "January 15, 2026",
      percentage: "30%",
      status: "Upcoming"
    },
    {
      term: "Third Term",
      dueDate: "April 15, 2026", 
      percentage: "30%",
      status: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2">
            School Fees 2025/2026
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Affordable Quality Education</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transparent fee structure for exceptional educational value
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold text-secondary mb-2">Academic Session</div>
            <p className="text-lg">2025/2026</p>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Fee Structure</h2>
            <p className="text-xl text-muted-foreground">Detailed breakdown by class level</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeStructure.map((fee, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-2">{fee.level}</h3>
                    <p className="text-muted-foreground">{fee.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tuition Fee:</span>
                      <span className="font-semibold text-foreground">{fee.tuition}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Development Levy:</span>
                      <span className="font-semibold text-foreground">{fee.development}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-foreground">Total:</span>
                        <span className="text-2xl font-bold text-primary">{fee.total}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Payment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Payment Methods</h2>
            <p className="text-xl text-muted-foreground">Convenient ways to pay your school fees</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <Badge className="bg-primary text-primary-foreground">{method.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Bank Details</h3>
                <div className="text-left space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bank Name:</span>
                    <span className="font-semibold">First Bank of Nigeria</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Name:</span>
                    <span className="font-semibold">Our God Reigns Crystal School</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="font-semibold">2345678901</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Additional Fees</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Optional and mandatory additional charges
              </p>
              
              <div className="space-y-4">
                {additionalFees.map((fee, index) => (
                  <Card key={index} className="border-none shadow-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">{fee.item}</span>
                        <span className="font-semibold text-primary">{fee.amount}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Payment Schedule</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Installment payment options available
              </p>
              
              <div className="space-y-4">
                {paymentSchedule.map((schedule, index) => (
                  <Card key={index} className="border-none shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground">{schedule.term}</h3>
                        <Badge className={`${
                          schedule.status === 'Due' ? 'bg-secondary text-secondary-foreground' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {schedule.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{schedule.dueDate}</span>
                        </div>
                        <span className="font-semibold text-primary">{schedule.percentage}</span>
                      </div>
                    </CardContent>  
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Policies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Payment Policies</h2>
            <p className="text-xl text-muted-foreground">Important information regarding fee payments</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Payment Benefits</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Early payment discount of 5% available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Flexible installment payment plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Sibling discount of 10% for second child</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Digital payment receipts provided</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold text-foreground">Important Notes</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Late payment attracts 5% penalty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Fees are non-refundable after term begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Students may be suspended for non-payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">All payments must be confirmed before resumption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make Payment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose your preferred payment method and secure your child's education today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Pay Online Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Fee Receipt
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolFees;