import { createClient } from '@supabase/supabase-js';

// Initialize Supabase using GitHub Actions secrets
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Define your 7 users with default password admin123
const users = [
  { email: "jerryemeka22@gmail.com", password: "admin123" },
  { email: "j7hubservices@gmail.com", password: "admin123" },
  { email: "ogrcs@yahoo.com", password: "admin123" },
  { email: "sanyaadetuberu@gmail.com", password: "admin123" },

  // Placeholders for 3 more users (edit emails if needed)
  { email: "user5@example.com", password: "admin123" },
  { email: "user6@example.com", password: "admin123" },
  { email: "user7@example.com", password: "admin123" }
];

async function main() {
  for (const { email, password } of users) {
    try {
      const { data: existingUsers, error } = await supabase.auth.admin.listUsers({ filter: `email=eq.${email}` });
      if (error) throw error;

      if (existingUsers.length) {
        // Update password if user already exists
        await supabase.auth.admin.updateUserById(existingUsers[0].id, { password });
        console.log(`Updated password for ${email}`);
      } else {
        // Create user if they don't exist
        await supabase.auth.admin.createUser({ email, password });
        console.log(`Created user ${email}`);
      }
    } catch (err) {
      console.error(`Error for ${email}:`, err.message);
    }
  }
}

main();
