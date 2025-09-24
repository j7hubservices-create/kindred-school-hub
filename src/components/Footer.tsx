import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Admissions", path: "/admissions" }, 
    { name: "Academic Programs", path: "/about" },
    { name: "School Fees", path: "/school-fees" },
    { name: "E-Learning Portal", path: "/e-learning" },
    { name: "Student Portal", path: "/portals" },
    { name: "Staff Portal", path: "/portals" },
    { name: "Gallery", path: "/gallery" },
    { name: "News & Events", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];

  const academicPrograms = [
    "Junior Secondary (JSS 1-3)",
    "Senior Secondary (SSS 1-3)", 
    "WAEC Preparation",
    "NECO Preparation",
    "Computer Studies",
    "Sciences",
    "Arts",
    "Commercial Studies"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={schoolLogo} 
                alt="Our God Reigns Crystal School Logo" 
                className="h-12 w-12 object-contain filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Our God Reigns Crystal School</h3>
                <p className="text-sm opacity-90">Light to the World</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Nurturing tomorrow's leaders with integrity, knowledge, and divine purpose. 
              Academic excellence meets Christian values.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <Button variant="ghost" className="h-auto p-0 text-sm opacity-90 hover:opacity-100 hover:bg-transparent">
                      {link.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Academic Programs</h4>
            <ul className="space-y-2">
              {academicPrograms.map((program, index) => (
                <li key={index} className="text-sm opacity-90">
                  {program}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  23, Bolanle Awosika Street,<br />
                  off Ilogbo Road, Borehole,<br />
                  Ota, Ogun State, Nigeria
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <div className="text-sm opacity-90">
                  +234 802 762 5129<br />
                  +234 803 308 9735
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm opacity-90">ogrcs@yahoo.com</span>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <div className="text-sm opacity-90">
                Monday - Friday: 8:00 AM - 4:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-light/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-90">
              © 2025 Our God Reigns Crystal School. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm opacity-90">
              <Link to="/admissions">
                <Button variant="ghost" className="h-auto p-0 text-sm opacity-90 hover:opacity-100 hover:bg-transparent">
                  Privacy Policy
                </Button>
              </Link>
              <Link to="/admissions">
                <Button variant="ghost" className="h-auto p-0 text-sm opacity-90 hover:opacity-100 hover:bg-transparent">
                  Terms of Service
                </Button>
              </Link>
              <Link to="/admissions">
                <Button variant="ghost" className="h-auto p-0 text-sm opacity-90 hover:opacity-100 hover:bg-transparent">
                  Admission Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;