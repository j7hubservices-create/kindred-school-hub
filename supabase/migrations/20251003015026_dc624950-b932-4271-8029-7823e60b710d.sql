-- Add status column to content_items table
ALTER TABLE public.content_items 
ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'draft';

-- Update any existing records that might have been created
UPDATE public.content_items 
SET status = 'published' 
WHERE status IS NULL OR status = '';

-- Add check constraint for valid status values
ALTER TABLE public.content_items 
ADD CONSTRAINT content_items_status_check 
CHECK (status IN ('draft', 'published', 'archived'));

-- Update RLS policy to use status instead of published
DROP POLICY IF EXISTS "Published content is viewable by everyone" ON public.content_items;

CREATE POLICY "Published content is viewable by everyone" 
ON public.content_items 
FOR SELECT 
USING (status = 'published');