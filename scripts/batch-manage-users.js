import 'dotenv/config'        // only needed if running locally
import fs from 'fs'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase with secrets from GitHub Actions or local .env
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// Read users from CSV
function readCsv(path) {
  const raw = fs.readFileSync(path, 'utf8')
  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
  const start = lines[0].toLowerCase().includes('email') ? 1 : 0
  return lines.slice(start).map(line => {
    const [email, password] = line.split(',').map(v => v.trim())
    return { email, password }
  })
}

// Find a user by email
async function findUserByEmail(email) {
  const { data, error } = await supabase.auth.admin.listUsers({ filte
