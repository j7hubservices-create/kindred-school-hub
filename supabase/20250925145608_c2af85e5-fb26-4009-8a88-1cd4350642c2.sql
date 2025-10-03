-- Fix RLS policies for gallery_images table
DROP POLICY IF EXISTS "Users can view gallery images" ON public.gallery_images;
DROP POLICY IF EXISTS "Admins can manage gallery images" ON public.gallery_images;

-- Create simple policies for gallery_images
CREATE POLICY "Anyone can view gallery images" 
ON public.gallery_images 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can insert gallery images" 
ON public.gallery_images 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admins can update gallery images" 
ON public.gallery_images 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admins can delete gallery images" 
ON public.gallery_images 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role = 'admin'
  )
);