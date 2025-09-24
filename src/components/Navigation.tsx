import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import schoolLogo from "@/assets/school-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Library", path: "/library" },
    { name: "E-Learning", path: "/e-learning" },
    { name: "School Fees", path: "/school-fees" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const portalItems = [
    { name: "Student Portal", url: "https://ogrcs.edutams.net/student" },
    { name: "Parent Portal", url: "https://ogrcs.edutams.net/parent" },
    { name: "Staff Portal", url: "https://ogrcs.edutams.net/staff" },
    { name: "Admin Portal", path: "/portals" }
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={schoolLogo} 
              alt="Our God Reigns Crystal School Logo" 
              className="h-10 w-10 object-contain"
            />
            <div>
              <h2 className="text-lg font-bold text-primary">Our God Reigns Crystal School</h2>
              <p className="text-xs text-secondary font-medium">Light to the World</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button
                  variant="ghost"
                  className={`text-foreground hover:text-primary hover:bg-primary/10 font-medium ${
                    location.pathname === item.path ? 'text-primary bg-primary/10' : ''
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            
            {/* Portals Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10 font-medium"
              >
                Portals
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
              
              <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {portalItems.map((portal, index) => (
                  <div key={index}>
                    {portal.url ? (
                      <a 
                        href={portal.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
                      >
                        {portal.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link 
                        to={portal.path} 
                        className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
                      >
                        {portal.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background">
              {menuItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-foreground hover:text-primary hover:bg-primary/10 ${
                      location.pathname === item.path ? 'text-primary bg-primary/10' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              
              {/* Mobile Portals */}
              <div className="pt-2 border-t border-border">
                <div className="text-xs font-semibold text-muted-foreground px-3 py-2">PORTALS</div>
                {portalItems.map((portal, index) => (
                  <div key={index}>
                    {portal.url ? (
                      <a 
                        href={portal.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {portal.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link 
                        to={portal.path} 
                        className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {portal.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;