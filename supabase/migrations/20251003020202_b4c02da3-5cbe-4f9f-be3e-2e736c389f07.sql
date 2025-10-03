-- Drop the restrictive update policies
DROP POLICY IF EXISTS "Admins and authors can update content" ON content_items;
DROP POLICY IF EXISTS "Authors can update their content" ON content_items;

-- Create a new update policy that allows whitelisted admins or post authors to update
CREATE POLICY "Admins and authors can update content" 
ON content_items 
FOR UPDATE 
USING (
  (auth.uid() = author_id) OR 
  (auth.email() = ANY (ARRAY[
    'jerryemeka22@gmail.com'::text, 
    'ogrcs@yahoo.com'::text, 
    'j7hubservices@gmail.com'::text, 
    'sanyaadetuberu@gmail.com'::text
  ]))
);

-- Also fix the delete policy
DROP POLICY IF EXISTS "Authors can delete their content" ON content_items;
DROP POLICY IF EXISTS "Authors can delete their own content" ON content_items;

CREATE POLICY "Admins and authors can delete content" 
ON content_items 
FOR DELETE 
USING (
  (auth.uid() = author_id) OR 
  (auth.email() = ANY (ARRAY[
    'jerryemeka22@gmail.com'::text, 
    'ogrcs@yahoo.com'::text, 
    'j7hubservices@gmail.com'::text, 
    'sanyaadetuberu@gmail.com'::text
  ]))
);