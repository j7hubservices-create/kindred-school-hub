import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

const Navigation = () => {
  const navItems = [
    "Home",
    "About", 
    "Admissions",
    "Library",
    "E-Learning",
    "School Fees",
    "Portals",
    "Gallery",
    "Blog",
    "Contact"
  ];

  return (
    <nav className="bg-white shadow-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={schoolLogo} 
              alt="Our God Reigns Crystal School Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Our God Reigns Crystal School</h1>
              <p className="text-sm text-muted-foreground">Light to the World</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-foreground hover:text-primary font-medium"
              >
                {item}
              </Button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;