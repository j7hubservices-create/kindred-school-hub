import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

const AdminLogin = () => {
  const { signInWithEmail } = useAuth(); // Your auth context
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const allowedAdmins = [
    'jerryemeka22@gmail.com',
    'ogrcs@yahoo.com',
    'j7hubservices@gmail.com',
    'sanyaadetuberu@gmail.com'
  ];

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!allowedAdmins.includes(email)) {
      toast.error('Access denied. Admin privileges required.');
      return;
    }

    // ✅ Default password check
    if (password !== 'admin123') {
      toast.error('Incorrect password');
      return;
    }

    try {
      await signInWithEmail(email, password); // replace with your auth method
      toast.success('Login successful!');
      navigate('/admin'); // redirect to admin dashboard
    } catch (err) {
      toast.error('Login failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
