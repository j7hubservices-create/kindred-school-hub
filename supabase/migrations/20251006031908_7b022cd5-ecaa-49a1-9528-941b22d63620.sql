-- Add missing columns to content_items if they don't exist
DO $$ 
BEGIN
  -- Add status column if missing
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'content_items' 
    AND column_name = 'status'
  ) THEN
    ALTER TABLE public.content_items ADD COLUMN status text NOT NULL DEFAULT 'draft';
    CREATE INDEX idx_content_items_status ON public.content_items(status);
  END IF;

  -- Add content column if missing
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'content_items' 
    AND column_name = 'content'
  ) THEN
    ALTER TABLE public.content_items ADD COLUMN content text NOT NULL DEFAULT '';
  END IF;

  -- Add excerpt column if missing
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'content_items' 
    AND column_name = 'excerpt'
  ) THEN
    ALTER TABLE public.content_items ADD COLUMN excerpt text;
  END IF;

  -- Add content_type column if missing
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'content_items' 
    AND column_name = 'content_type'
  ) THEN
    ALTER TABLE public.content_items ADD COLUMN content_type text DEFAULT 'news';
  END IF;

  -- Add featured column if missing
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'content_items' 
    AND column_name = 'featured'
  ) THEN
    ALTER TABLE public.content_items ADD COLUMN featured boolean DEFAULT false;
  END IF;
END $$;

-- Ensure RLS policies exist
DROP POLICY IF EXISTS "Published content is viewable by everyone" ON public.content_items;
CREATE POLICY "Published content is viewable by everyone" 
ON public.content_items 
FOR SELECT 
USING (status = 'published');

DROP POLICY IF EXISTS "Authenticated users can create content" ON public.content_items;
CREATE POLICY "Authenticated users can create content" 
ON public.content_items 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Admins and authors can update content" ON public.content_items;
CREATE POLICY "Admins and authors can update content" 
ON public.content_items 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);