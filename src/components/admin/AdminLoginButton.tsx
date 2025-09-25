import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const AdminLoginButton = () => {
  return (
    <Link to="/auth">
      <Button 
        variant="outline"
        size="sm"
        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
      >
        <Shield className="h-4 w-4 mr-2" />
        Admin Login
      </Button>
    </Link>
  );
};

export default AdminLoginButton;