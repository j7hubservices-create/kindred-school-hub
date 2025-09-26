-- Add missing columns one by one
ALTER TABLE public.content_items 
ADD COLUMN IF NOT EXISTS content_type text DEFAULT 'news';

-- Update existing records
UPDATE public.content_items 
SET content_type = 'news' 
WHERE content_type IS NULL;

-- Add year column to results table  
ALTER TABLE public.results 
ADD COLUMN IF NOT EXISTS year integer DEFAULT 2025;