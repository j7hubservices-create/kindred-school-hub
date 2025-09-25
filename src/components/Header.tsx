import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-emerald-700 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-2 lg:mb-0">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+2348027625129" className="hover:underline">+234 802 762 5129</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+2348033089735" className="hover:underline">+234 803 308 9735</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:ogrcs@yahoo.com" className="hover:underline">ogrcs@yahoo.com</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden lg:inline">23, Bolanle Awosika Street, off Ilogbo Road, Borehole, Ota, Ogun State</span>
          </div>
        </div>
        <div className="text-center lg:text-right">
          <div className="font-semibold">Academic Session 2025/2026 - Light to the World</div>
        </div>
      </div>
    </header>
  );
};

export default Header;