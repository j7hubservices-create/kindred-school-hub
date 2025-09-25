import { Phone, Mail, MapPin } from "lucide-react";
import schoolLogo from "@/assets/school-logo-new.jpeg";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+234 803 308 9735 / +234 802 762 5129</span>
            </div>
            <div className="flex items-center space-x-2 hidden md:flex">
              <Mail className="h-4 w-4" />
              <span>ogrcs@yahoo.com</span>
            </div>
          </div>
          
          <div className="text-right">
            <span>23, Bolanle Awosika Street, Off Ilogbo Road, Ota, Ogun State</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;