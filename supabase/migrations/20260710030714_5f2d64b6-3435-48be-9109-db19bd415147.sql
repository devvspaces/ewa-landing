
CREATE TYPE public.waitlist_role AS ENUM ('customer','pro');

CREATE TABLE public.waitlist_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  first_name text,
  role public.waitlist_role,
  zip text,
  utm jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.waitlist_signups TO anon, authenticated;
GRANT ALL ON public.waitlist_signups TO service_role;
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can join waitlist" ON public.waitlist_signups
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.pro_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  services text[] NOT NULL DEFAULT '{}',
  boroughs text[] NOT NULL DEFAULT '{}',
  instagram text,
  utm jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.pro_applications TO anon, authenticated;
GRANT ALL ON public.pro_applications TO service_role;
ALTER TABLE public.pro_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can apply as pro" ON public.pro_applications
  FOR INSERT TO anon, authenticated WITH CHECK (true);
