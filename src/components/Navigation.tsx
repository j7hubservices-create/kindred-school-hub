import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import schoolLogo from "@/assets/school-logo-main.jpeg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Admissions", path: "/admissions" },
    { name: "School Fees", path: "/school-fees" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutItems = [
    { name: "About School", path: "/about" },
    { name: "Leadership Team", path: "/leadership" },
    { name: "E-Learning", path: "/e-learning" },
    { name: "Library", path: "/library" },
  ];

  const portalItems = [
    { name: "Student Portal", path: "/e-learning" },
    { name: "Library", path: "/library" },
    { name: "Staff Portal", path: "/portals" },
    { name: "Admin Portal", path: "/admin-cms/dashboard" },
  ];

  return (
    <nav className="bg-primary-foreground shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={schoolLogo} 
              alt="Our God Reigns Crystal School Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-bold text-primary">Our God Reigns Crystal School</h2>
              <p className="text-xs text-secondary font-medium">Light to the World</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-primary hover:text-secondary font-semibold transition-colors story-link"
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary hover:text-secondary font-semibold">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border shadow-school">
                {aboutItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.path} className="text-card-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary hover:text-secondary font-semibold">
                  Portals <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border shadow-school">
                {portalItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.path} className="text-card-foreground hover:text-primary">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
              <Link to="/admissions">🚀 Apply Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover:text-secondary"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-primary hover:text-secondary font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border pt-2 mt-2">
                <p className="px-3 py-1 text-sm font-semibold text-muted-foreground">About</p>
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 text-primary hover:text-secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-border pt-2 mt-2">
                <p className="px-3 py-1 text-sm font-semibold text-muted-foreground">Portals</p>
                {portalItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 text-primary hover:text-secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
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