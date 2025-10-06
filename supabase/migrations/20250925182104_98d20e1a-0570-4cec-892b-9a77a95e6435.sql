-- Create gallery storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);

-- Create gallery table for metadata
CREATE TABLE public.gallery (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  uploaded_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on gallery table
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Create policies for gallery table
CREATE POLICY "Anyone can view gallery images" 
ON public.gallery 
FOR SELECT 
USING (true);

CREATE POLICY "Admin and teachers can manage gallery" 
ON public.gallery 
FOR ALL 
USING (get_current_user_role() = ANY (ARRAY['admin'::user_role, 'teacher'::user_role]));

-- Create storage policies for gallery bucket
CREATE POLICY "Gallery images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gallery');

CREATE POLICY "Admin and teachers can upload to gallery" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'gallery' AND get_current_user_role() = ANY (ARRAY['admin'::user_role, 'teacher'::user_role]));

CREATE POLICY "Admin and teachers can update gallery files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'gallery' AND get_current_user_role() = ANY (ARRAY['admin'::user_role, 'teacher'::user_role]));

CREATE POLICY "Admin and teachers can delete gallery files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'gallery' AND get_current_user_role() = ANY (ARRAY['admin'::user_role, 'teacher'::user_role]));

-- Create trigger for updated_at
CREATE TRIGGER update_gallery_updated_at
BEFORE UPDATE ON public.gallery
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();