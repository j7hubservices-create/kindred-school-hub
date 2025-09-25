import { Phone, Mail, MapPin } from "lucide-react";
import schoolLogo from "@/assets/school-logo-main.jpeg";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={schoolLogo} 
              alt="Our God Reigns Crystal School Logo" 
              className="h-14 w-14 rounded-full object-cover shadow-card"
            />
            <div>
              <h1 className="text-2xl font-bold">Our God Reigns Crystal School</h1>
              <p className="text-secondary text-lg font-semibold">Light to the World</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-secondary" />
              <div className="space-y-1">
                <a href="tel:+2348027625129" className="block hover:text-secondary transition-colors">08027625129</a>
                <a href="tel:+2348033089735" className="block hover:text-secondary transition-colors">08033089735</a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-secondary" />
              <a href="mailto:ogrcs@yahoo.com" className="hover:text-secondary transition-colors">ogrcs@yahoo.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-xs">23, Bolanle Awosika Street, Ojuore Ota</span>
            </div>
          </div>
          
          <div className="text-right hidden md:block">
            <div className="text-secondary font-bold text-sm">Academic Session 2025/2026</div>
            <div className="text-xs opacity-90">...a place for academic and moral excellence</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;