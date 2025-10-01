-- Ensure content_items table exists with correct structure
CREATE TABLE IF NOT EXISTS public.content_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  category_id UUID REFERENCES public.categories(id),
  author_id UUID,
  featured BOOLEAN DEFAULT false,
  content_type TEXT DEFAULT 'news',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (if they don't exist)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'content_items' 
    AND policyname = 'Published content is viewable by everyone'
  ) THEN
    CREATE POLICY "Published content is viewable by everyone"
    ON public.content_items
    FOR SELECT
    USING (status = 'published');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'content_items' 
    AND policyname = 'Authenticated users can create content'
  ) THEN
    CREATE POLICY "Authenticated users can create content"
    ON public.content_items
    FOR INSERT
    WITH CHECK (auth.uid() IS NOT NULL);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'content_items' 
    AND policyname = 'Authors can update their content'
  ) THEN
    CREATE POLICY "Authors can update their content"
    ON public.content_items
    FOR UPDATE
    USING (auth.uid() = author_id OR auth.email() = ANY(ARRAY[
      'jerryemeka22@gmail.com',
      'ogrcs@yahoo.com',
      'j7hubservices@gmail.com',
      'sanyaadetuberu@gmail.com'
    ]));
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'content_items' 
    AND policyname = 'Authors can delete their content'
  ) THEN
    CREATE POLICY "Authors can delete their content"
    ON public.content_items
    FOR DELETE
    USING (auth.uid() = author_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'content_items' 
    AND policyname = 'Admins can manage all content'
  ) THEN
    CREATE POLICY "Admins can manage all content"
    ON public.content_items
    FOR ALL
    USING (auth.uid() IS NOT NULL);
  END IF;
END $$;

-- Ensure results table exists with correct structure  
CREATE TABLE IF NOT EXISTS public.results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  category TEXT NOT NULL DEFAULT 'academic',
  year INTEGER NOT NULL,
  featured BOOLEAN DEFAULT false,
  uploaded_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on results
ALTER TABLE public.results ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for results (if they don't exist)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'results' 
    AND policyname = 'Results are viewable by everyone'
  ) THEN
    CREATE POLICY "Results are viewable by everyone"
    ON public.results
    FOR SELECT
    USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'results' 
    AND policyname = 'Authenticated users can create results'
  ) THEN
    CREATE POLICY "Authenticated users can create results"
    ON public.results
    FOR INSERT
    WITH CHECK (auth.uid() IS NOT NULL);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'results' 
    AND policyname = 'Authenticated users can update results'
  ) THEN
    CREATE POLICY "Authenticated users can update results"
    ON public.results
    FOR UPDATE
    USING (auth.uid() IS NOT NULL);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'results' 
    AND policyname = 'Authenticated users can delete results'
  ) THEN
    CREATE POLICY "Authenticated users can delete results"
    ON public.results
    FOR DELETE
    USING (auth.uid() IS NOT NULL);
  END IF;
END $$;

-- Create or replace updated_at trigger for content_items
CREATE OR REPLACE TRIGGER update_content_items_updated_at
BEFORE UPDATE ON public.content_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create or replace updated_at trigger for results
CREATE OR REPLACE TRIGGER update_results_updated_at
BEFORE UPDATE ON public.results
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();