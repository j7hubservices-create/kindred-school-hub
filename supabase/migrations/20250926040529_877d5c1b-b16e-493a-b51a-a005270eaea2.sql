-- Add missing status column to content_items table
ALTER TABLE public.content_items 
ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived'));