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
import schoolLogo from "@/assets/school-logo-new.jpeg";

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
    { name: "Our Results", path: "/results" },
    { name: "E-Learning", path: "/e-learning" },
    { name: "Library", path: "/library" },
  ];

  const portalItems = [
    { name: "Student Portal", path: "https://ogrcs.edutams.net/" },
    { name: "Staff Portal", path: "https://ogrcs.edutams.net/" },
    { name: "Library", path: "/library" },
    { name: "Admin Portal", path: "/admin-cms" },
  ];

  return (
    <nav className="bg-primary-foreground shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Empty space where logo was - now just for layout */}
          <div className="flex-1 md:flex-none">
          </div>

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
                    {item.path.startsWith('http') ? (
                      <a href={item.path} target="_blank" rel="noopener noreferrer" className="text-card-foreground hover:text-primary">
                        {item.name}
                      </a>
                    ) : (
                      <Link to={item.path} className="text-card-foreground hover:text-primary">
                        {item.name}
                      </Link>
                    )}
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
                  className="block px-4 py-3 text-primary hover:text-secondary hover:bg-muted/50 rounded-lg font-semibold text-base touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                <p className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">About</p>
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-primary hover:text-secondary hover:bg-muted/50 rounded-lg text-base touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-border pt-4 mt-4">
                <p className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Portals</p>
                {portalItems.map((item) => (
                  item.path.startsWith('http') ? (
                    <a
                      key={item.name}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-primary hover:text-secondary hover:bg-muted/50 rounded-lg text-base touch-manipulation"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-3 text-primary hover:text-secondary hover:bg-muted/50 rounded-lg text-base touch-manipulation"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
              <div className="pt-4 mt-4">
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg py-4 touch-manipulation">
                  <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>🚀 Apply Now</Link>
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