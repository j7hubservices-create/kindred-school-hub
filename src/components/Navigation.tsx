import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    { name: "Portals", path: "/portals" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;