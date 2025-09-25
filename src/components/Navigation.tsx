import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo-new.jpeg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Library", path: "/library" },
    { name: "E-Learning", path: "/e-learning" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-primary-foreground shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1 md:flex-none">
            <img 
              src={schoolLogo} 
              alt="Our God Reigns Crystal School Logo" 
              className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <h2 className="text-sm md:text-lg font-bold text-primary truncate">Our God Reigns Crystal School</h2>
              <p className="text-xs text-secondary font-medium hidden sm:block">Light to the World</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-primary hover:text-accent font-semibold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <Link to="/portals">Portals</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover:text-secondary p-2 -mr-2 touch-manipulation"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border animate-fade-in">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 text-primary hover:text-accent hover:bg-muted/50 rounded-lg font-semibold text-base touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-4 touch-manipulation">
                  <Link to="/portals" onClick={() => setIsMobileMenuOpen(false)}>Portals</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;