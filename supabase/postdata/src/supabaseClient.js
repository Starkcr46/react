import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aibayjvbxtxrqmkeoxog.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpYmF5anZieHR4cnFta2VveG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MTU0NDUsImV4cCI6MjA2MDI5MTQ0NX0.ahkG50_LZupYlRQ24BSu_yXclemGrXt_-uJ5x87DqjE';

export const supabase = createClient(supabaseUrl, supabaseKey);
