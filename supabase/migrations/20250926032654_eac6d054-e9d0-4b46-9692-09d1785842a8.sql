-- Create content_items table for blog posts and content
CREATE TABLE public.content_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  author_id UUID,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on content_items
ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;

-- Create policies for content_items
CREATE POLICY "Published content is viewable by everyone" 
ON public.content_items 
FOR SELECT 
USING (status = 'published');

CREATE POLICY "Authenticated users can create content" 
ON public.content_items 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can update their own content" 
ON public.content_items 
FOR UPDATE 
USING (auth.uid() = author_id);

CREATE POLICY "Authors can delete their own content" 
ON public.content_items 
FOR DELETE 
USING (auth.uid() = author_id);

-- Create admin policy for all operations
CREATE POLICY "Admins can manage all content" 
ON public.content_items 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create trigger for updated_at
CREATE TRIGGER update_content_items_updated_at
BEFORE UPDATE ON public.content_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for content_items
ALTER PUBLICATION supabase_realtime ADD TABLE public.content_items;

-- Insert some sample content for testing
INSERT INTO public.content_items (title, content, excerpt, status, featured) VALUES
('Welcome to Our School Blog', 'Welcome to the official blog of Our God Reigns Crystal School. Here you will find updates about school activities, achievements, and important announcements.', 'Welcome to our school blog with updates and announcements.', 'published', true),
('Recent School Achievements', 'Our students have achieved remarkable success in various competitions and academic endeavors. We are proud to announce...', 'Our students achieve remarkable success in competitions.', 'published', false),
('Upcoming Events and Activities', 'Mark your calendars for these exciting upcoming events at our school. From sports competitions to academic seminars...', 'Exciting upcoming events and activities at our school.', 'published', false);