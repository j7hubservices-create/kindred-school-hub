-- Add missing columns to existing tables

-- Add missing columns to posts table
ALTER TABLE posts ADD COLUMN IF NOT EXISTS slug TEXT;

-- Add missing columns to gallery_images table  
ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS alt_text TEXT;
ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS caption TEXT;
ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS tags TEXT[];
ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS uploaded_by UUID REFERENCES auth.users(id);

-- Add missing columns to admin_activities table
ALTER TABLE admin_activities ADD COLUMN IF NOT EXISTS resource_type TEXT;
ALTER TABLE admin_activities ADD COLUMN IF NOT EXISTS resource_id UUID;

-- Create site_settings table for CMS functionality
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT NOT NULL UNIQUE,
  setting_value TEXT,
  setting_type TEXT DEFAULT 'text',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on site_settings
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create policy for site_settings (admin only)
CREATE POLICY "Site settings are viewable by admins only" 
ON public.site_settings 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.role = 'admin'
));

CREATE POLICY "Site settings are editable by admins only" 
ON public.site_settings 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.role = 'admin'
));

-- Create trigger for site_settings updated_at
CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Update posts with slugs based on titles (for existing posts)
UPDATE posts SET slug = LOWER(REPLACE(REPLACE(title, ' ', '-'), '''', '')) WHERE slug IS NULL;

-- Insert default site settings
INSERT INTO public.site_settings (setting_key, setting_value, setting_type, description) VALUES
  ('school_name', 'Our God Reigns Crystal School', 'text', 'School name'),
  ('school_motto', 'Light to the World', 'text', 'School motto'),
  ('school_address', '23, Bolanle Awosika Street, Off Borehole B/Stop, Ojuore Ota – Ogun State', 'text', 'School address'),
  ('school_phone', '08027625129, 08033089735', 'text', 'School phone numbers'),
  ('school_email', 'info@ogrcrystalschool.edu.ng', 'email', 'School email'),
  ('academic_session', '2025/2026', 'text', 'Current academic session')
ON CONFLICT (setting_key) DO NOTHING;