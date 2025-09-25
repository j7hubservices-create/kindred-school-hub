import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import schoolLogo from '@/assets/school-logo-main.jpeg';

const AdminLoginButton = () => {
  return (
    <Link to="/auth">
      <Button 
        variant="outline"
        size="sm"
        className="border-primary text-primary hover:bg-primary/10 flex items-center gap-2"
      >
        <img 
          src={schoolLogo} 
          alt="School Logo" 
          className="h-4 w-4 rounded-full object-cover"
        />
        <Shield className="h-4 w-4" />
        Admin Login
      </Button>
    </Link>
  );
};

export default AdminLoginButton;