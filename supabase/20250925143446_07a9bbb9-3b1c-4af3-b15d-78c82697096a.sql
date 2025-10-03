-- Fix foreign key relationships

-- Update admin_activities to reference profiles instead of auth.users
ALTER TABLE admin_activities DROP CONSTRAINT IF EXISTS admin_activities_user_id_fkey;
ALTER TABLE admin_activities ADD CONSTRAINT admin_activities_user_id_fkey 
  FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON DELETE SET NULL;

-- Update posts to reference profiles instead of auth.users  
ALTER TABLE posts DROP CONSTRAINT IF EXISTS posts_author_id_fkey;
ALTER TABLE posts ADD CONSTRAINT posts_author_id_fkey 
  FOREIGN KEY (author_id) REFERENCES profiles(user_id) ON DELETE SET NULL;

-- Update gallery_images to reference profiles instead of auth.users
ALTER TABLE gallery_images DROP CONSTRAINT IF EXISTS gallery_images_uploaded_by_fkey;
ALTER TABLE gallery_images ADD CONSTRAINT gallery_images_uploaded_by_fkey 
  FOREIGN KEY (uploaded_by) REFERENCES profiles(user_id) ON DELETE SET NULL;