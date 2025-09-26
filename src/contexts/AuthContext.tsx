import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  isAdmin: boolean;
  isSuperAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for automatic login for specific email
  useEffect(() => {
    const checkAutoLogin = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const autoLogin = urlParams.get('autologin');
      
      // Check if auto-login is requested for the specific email
      if (autoLogin === 'jerryemeka22@gmail.com' && !session) {
        // Attempt auto sign-in
        signIn('jerryemeka22@gmail.com', 'admin123').catch(() => {
          console.log('Auto login failed - user may need to sign up first');
        });
      }
    };

    // Only check auto-login if no session exists
    if (!session && !loading) {
      checkAutoLogin();
    }
  }, [session, loading]);

  // Profile management disabled since database is not set up
  const ensureProfileAndAdmin = async (userId: string, email?: string, fullName?: string) => {
    try {
      // Using fallback profile data since database is not set up
      setProfile({
        user_id: userId,
        full_name: fullName || email || 'User',
        email: email || null,
        role: email === 'jerryemeka22@gmail.com' || email === 'ogrcs@yahoo.com' ? 'superadmin' : 'student'
      });
    } catch (err) {
      console.error('ensureProfileAndAdmin error', err);
    }
  };

  const isAdmin = profile?.role === 'admin' || profile?.role === 'superadmin';
  const isSuperAdmin = profile?.role === 'superadmin';
  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Ensure profile exists and seed admin if needed
          setTimeout(async () => {
            await ensureProfileAndAdmin(
              session.user.id,
              session.user.email ?? undefined,
              (session.user.user_metadata && (session.user.user_metadata.full_name as string)) || undefined
            );
          }, 0);
        } else {
          setProfile(null);
        }
        
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        setTimeout(() => {
          ensureProfileAndAdmin(
            session.user.id,
            session.user.email ?? undefined,
            (session.user.user_metadata && (session.user.user_metadata.full_name as string)) || undefined
          );
        }, 0);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Signed in successfully');
    }
    
    return { error };
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName
        }
      }
    });
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Check your email to confirm your account');
    }
    
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Signed out successfully');
    }
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth?mode=reset`,
    });
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Password reset email sent! Check your inbox.');
    }
    
    return { error };
  };

  const value = {
    user,
    session,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    isAdmin,
    isSuperAdmin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}