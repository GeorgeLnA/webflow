-- Add Location column to infinitespa_all_leads table
-- Location is used by:
--   - Hero form: stores selected location (US, Canada, Other)
--   - Dealer form: stores selected country (US, Canada, Other)
--   - Contact/Booking forms: NULL (no location field)
ALTER TABLE public.infinitespa_all_leads
ADD COLUMN IF NOT EXISTS "Location" text NULL;

-- Optional: Add index on Location for better query performance
CREATE INDEX IF NOT EXISTS idx_infinitespa_all_leads_location 
ON public.infinitespa_all_leads("Location");
