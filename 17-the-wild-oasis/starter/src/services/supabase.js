import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mollghsenzjvsbzsaxdz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbGxnaHNlbnpqdnNienNheGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3NzYxNDEsImV4cCI6MjAxMjM1MjE0MX0.8u5035IO9zXEBOkzmEax4Jb6Yf1LQMuxy4AwPHGFqI4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
