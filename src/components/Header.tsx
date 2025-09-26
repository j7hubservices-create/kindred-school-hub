import { Phone, Mail, MapPin } from "lucide-react";
import schoolLogo from "@/assets/school-logo-new.jpeg";

const Header = () => {
  return (
    <header className="bg-white text-primary py-2 md:py-3 sticky top-0 z-50 shadow-sm border-b border-primary/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
            <img 
              src={schoolLogo} 
              alt="Our God Reigns Crystal School Logo" 
              className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover shadow-card flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-sm md:text-xl font-bold truncate">Our God Reigns Crystal School</h1>
              <p className="text-primary/70 text-xs md:text-sm font-medium hidden sm:block">Light to the World</p>
            </div>
          </div>
          
          <div className="hidden xl:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <div className="space-y-1">
                <a href="tel:+2348027625129" className="block hover:text-primary/70 transition-colors">08027625129</a>
                <a href="tel:+2348033089735" className="block hover:text-primary/70 transition-colors">08033089735</a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="mailto:ogrcs@yahoo.com" className="hover:text-primary/70 transition-colors">ogrcs@yahoo.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-xs">23, Bolanle Awosika Street, Ojuore Ota</span>
            </div>
          </div>
          
          <div className="text-right hidden lg:block xl:min-w-0 xl:flex-shrink-0">
            <div className="text-primary font-bold text-xs md:text-sm">Academic Session 2025/2026</div>
            <div className="text-xs opacity-90 hidden xl:block">...a place for academic and moral excellence</div>
          </div>
          
          {/* Mobile Contact Info */}
          <div className="lg:hidden xl:hidden">
            <div className="text-right">
              <div className="text-primary font-bold text-xs">2025/2026</div>
              <a href="tel:+2348027625129" className="text-xs opacity-90 hover:text-primary/70">08027625129</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;