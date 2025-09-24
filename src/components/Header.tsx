import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      {/* Top Contact Bar */}
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2 lg:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 802 762 5129</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 803 308 9735</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>ogrcs@yahoo.com</span>
              </div>
            </div>
            
            {/* Session Info */}
            <div className="text-center lg:text-right">
              <div className="font-medium">Academic Session 2025/2026 - Light to the World</div>
            </div>
          </div>
          
          {/* Address */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>23, Bolanle Awosika Street, off Ilogbo Road, Borehole, Ota, Ogun State</span>
          </div>
        </div>
      </div>
      
      {/* Admission Alert */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto px-4 text-center">
          <div className="font-semibold">Admission Open for 2025/2026 Session</div>
        </div>
      </div>
    </div>
  );
};

export default Header;