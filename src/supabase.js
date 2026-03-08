import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tiriekihoeqhymszyibq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcmlla2lob2VxaHltc3p5aWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMzIzODgsImV4cCI6MjA4NTgwODM4OH0.YvPiGP7A_1MY0aGafcA_LRmcpE4sMhOacPJG1EqU72M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
