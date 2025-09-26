import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import schoolLogo from "@/assets/school-logo-main.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const portals = [
    { name: "Admin Portal", path: "/admin", internal: true },
    { name: "Staff Portal", url: "https://ogrcs.edutams.net/" },
    { name: "Parent Portal", url: "https://ogrcs.edutams.net/" },
    { name: "Student Portal", url: "https://ogrcs.edutams.net/" }
  ];

  return (
    <footer className="bg-gradient-to-br from-emerald-600 to-yellow-500 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <img 
                src={schoolLogo} 
                alt="Our God Reigns Crystal School Logo" 
                className="h-16 w-16 object-contain bg-white p-2 rounded"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Our God Reigns</h3>
                <h3 className="text-xl font-bold text-white">Crystal School</h3>
                <p className="text-yellow-300 text-sm font-medium">Light to the World</p>
              </div>
            </div>
            
            <p className="text-sm text-white/90 leading-relaxed">
              A place for academic and moral excellence, committed to nurturing young minds with Christian values and academic excellence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-white/90 hover:text-yellow-300 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Portals */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Portals</h4>
            <ul className="space-y-2">
               {portals.map((portal, index) => (
                <li key={index}>
                  {portal.internal ? (
                    <Link 
                      to={portal.path}
                      className="text-white/90 hover:text-yellow-300 transition-colors cursor-pointer"
                    >
                      {portal.name}
                    </Link>
                  ) : (
                    <a 
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-yellow-300 transition-colors cursor-pointer"
                    >
                      {portal.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Contact Us</h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-yellow-300" />
                <div className="text-sm text-white/90">
                  23, Bolanle Awosika Street, off Ilogbo Road, Borehole, Ota, Ogun State
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-300" />
                <div className="text-sm text-white/90 space-x-2">
                  <a href="tel:08027625129" className="hover:text-yellow-300 transition-colors">08027625129</a>
                  <span>,</span>
                  <a href="tel:08033089735" className="hover:text-yellow-300 transition-colors">08033089735</a>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yellow-300" />
                <a href="mailto:ogrcs@yahoo.com" className="text-sm text-white/90 hover:text-yellow-300 transition-colors">ogrcs@yahoo.com</a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <Button size="sm" variant="ghost" className="text-white hover:text-yellow-300 p-1">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-yellow-300 p-1">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-yellow-300 p-1">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-yellow-300 p-1">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/80">
              © 2025 Our God Reigns Crystal School. All rights reserved.
            </div>
            <div className="text-sm text-white/80">
              Developed by: <span className="text-yellow-300">Jerry Emeka <a href="tel:08134813380" className="hover:underline">08134813380</a></span> | <a href="https://jthub.com/contact-us" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">jThub.com/contact-us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;