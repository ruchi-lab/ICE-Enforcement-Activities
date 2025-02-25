import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://irdhikhtcsfqbjekbyxv.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZGhpa2h0Y3NmcWJqZWtieXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMDc2MTcsImV4cCI6MjA1NDg4MzYxN30.qcDbcBWPwpCfpF2V_xG5jwrYjZT_ErWk7TVDEYZC28w";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY); 