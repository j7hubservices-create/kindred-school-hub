-- Add status column to content_items table
ALTER TABLE public.content_items 
ADD COLUMN IF NOT EXISTS status text DEFAULT 'draft';

-- Add check constraint for status values
ALTER TABLE public.content_items 
ADD CONSTRAINT check_status_values 
CHECK (status IN ('draft', 'published', 'archived'));

-- Update existing records to have published status
UPDATE public.content_items 
SET status = 'published' 
WHERE status IS NULL;

-- Set NOT NULL constraint after updating existing records
ALTER TABLE public.content_items 
ALTER COLUMN status SET NOT NULL;