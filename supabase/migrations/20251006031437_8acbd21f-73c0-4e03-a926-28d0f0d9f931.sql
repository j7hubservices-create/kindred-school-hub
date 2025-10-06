-- Add category_id column to content_items if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'content_items' 
    AND column_name = 'category_id'
  ) THEN
    ALTER TABLE public.content_items 
    ADD COLUMN category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL;
  END IF;
END $$;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_content_items_category_id ON public.content_items(category_id);