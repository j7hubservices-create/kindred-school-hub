import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <PageHero
        title="Get in Touch"
        subtitle="We're here to help and answer any questions you might have"
        description="Connect with our friendly team for admissions, information, or any support you need"
        badge="📞 Contact Us"
        backgroundImage={contactHero}
      />

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-card hover:shadow-school transition-shadow">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Phone Numbers</h3>
                <div className="space-y-2">
                  <a href="tel:+2348027625129" className="block text-muted-foreground hover:text-primary transition-colors">
                    +234 802 762 5129
                  </a>
                  <a href="tel:+2348033089735" className="block text-muted-foreground hover:text-primary transition-colors">
                    +234 803 308 9735
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-school transition-shadow">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Email</h3>
                <a href="mailto:ogrcs@yahoo.com" className="text-muted-foreground hover:text-secondary transition-colors">
                  ogrcs@yahoo.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-school transition-shadow">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Address</h3>
                <p className="text-muted-foreground">
                  23, Bolanle Awosika Street,<br />
                  off Ilogbo Road, Borehole,<br />
                  Ota, Ogun State
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-school transition-shadow">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Office Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday</p>
                  <p>8:00 AM - 4:00 PM</p>
                  <p className="text-sm">Term Time Only</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground">We'd love to hear from you</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
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