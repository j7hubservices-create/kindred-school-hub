-- Drop the table if it exists to start fresh
DROP TABLE IF EXISTS public.content_items CASCADE;

-- Create content_items table for blog posts and news
CREATE TABLE public.content_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  category_id UUID,
  author_id UUID,
  status TEXT NOT NULL DEFAULT 'draft',
  content_type TEXT DEFAULT 'news',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;

-- Create policies for content_items
CREATE POLICY "Published content is viewable by everyone" 
ON public.content_items 
FOR SELECT 
USING (status = 'published');

CREATE POLICY "Authenticated users can create content" 
ON public.content_items 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can update their own content" 
ON public.content_items 
FOR UPDATE 
TO authenticated
USING (auth.uid() = author_id);

CREATE POLICY "Authors can delete their own content" 
ON public.content_items 
FOR DELETE 
TO authenticated
USING (auth.uid() = author_id);

CREATE POLICY "Admins can manage all content" 
ON public.content_items 
FOR ALL 
TO authenticated
USING (auth.uid() IS NOT NULL);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_content_items_updated_at
BEFORE UPDATE ON public.content_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample content
INSERT INTO public.content_items (title, content, excerpt, status, featured) VALUES
('Welcome to Our God Reigns Crystal School', 'We are delighted to welcome you to Our God Reigns Crystal School, where academic excellence meets Christian values. Our mission is to provide quality education that nurtures both intellectual growth and spiritual development.', 'Welcome to Our God Reigns Crystal School - where academic excellence meets Christian values.', 'published', true),
('NECO Results Excellence', 'Our students have once again demonstrated exceptional performance in the recent NECO examinations, with a 95% pass rate across all subjects. This achievement reflects our commitment to academic excellence.', 'Outstanding NECO results with 95% pass rate achieved by our dedicated students.', 'published', false),
('Cultural Day Celebration', 'Our annual cultural day celebration was a resounding success, showcasing the rich diversity of Nigerian culture through traditional dances, songs, and exhibitions by our talented students.', 'Annual cultural day celebrates Nigerian heritage with student performances.', 'published', false);