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
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Ensure a profile exists for the current user and seed an admin if none exists
  const ensureProfileAndAdmin = async (userId: string, email?: string, fullName?: string) => {
    try {
      // Try to get existing profile
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (!existingProfile) {
        // Check how many profiles exist to decide first admin
        const { count } = await supabase
          .from('profiles')
          .select('id', { count: 'exact', head: true });

        const role = (count ?? 0) === 0 ? 'admin' : 'student';

        const { data: inserted } = await supabase
          .from('profiles')
          .insert({
            user_id: userId,
            full_name: fullName || email || 'User',
            email: email || null,
            role
          })
          .select()
          .single();

        if (inserted) setProfile(inserted);
      } else {
        // Ensure at least one admin exists. If none, promote this profile
        const { count: adminCount } = await supabase
          .from('profiles')
          .select('id', { count: 'exact', head: true })
          .eq('role', 'admin');

        if ((adminCount ?? 0) === 0 && existingProfile.role !== 'admin') {
          const { data: updated } = await supabase
            .from('profiles')
            .update({ role: 'admin' })
            .eq('user_id', userId)
            .select()
            .single();
          if (updated) setProfile(updated);
          else setProfile(existingProfile);
        } else {
          setProfile(existingProfile);
        }
      }
    } catch (err) {
      // Fallback – keep loading minimal and avoid blocking UI
      console.error('ensureProfileAndAdmin error', err);
    }
  };

  const isAdmin = profile?.role === 'admin';
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

  const value = {
    user,
    session,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    isAdmin
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