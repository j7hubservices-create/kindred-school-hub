-- Create a table for results and awards
CREATE TABLE public.results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  category TEXT NOT NULL DEFAULT 'academic', -- academic, sports, competition, award
  year INTEGER NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  uploaded_by UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE public.results ENABLE ROW LEVEL SECURITY;

-- Create policies for results access
CREATE POLICY "Results are viewable by everyone" 
ON public.results 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can create results" 
ON public.results 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update results" 
ON public.results 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete results" 
ON public.results 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_results_updated_at
BEFORE UPDATE ON public.results
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();