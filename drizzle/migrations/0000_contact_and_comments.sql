CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  country text CHECK (char_length(country) <= 80),
  project_type text CHECK (char_length(project_type) <= 80),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send a message" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 60),
  country text CHECK (char_length(country) <= 60),
  body text NOT NULL CHECK (char_length(body) BETWEEN 1 AND 500),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.comments TO anon, authenticated;
GRANT ALL ON public.comments TO service_role;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Comments are public" ON public.comments FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can comment" ON public.comments FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX comments_created_idx ON public.comments (created_at DESC);
ALTER PUBLICATION supabase_realtime ADD TABLE public.comments;

INSERT INTO public.comments (name, country, body) VALUES
('Mohd Sufyaan Sayeed', 'India', 'Sawaa Enterprises built raahehidayath.online for me — fast, beautiful and exactly what I imagined. Highly recommended!'),
('Mohammed Ibrahim', 'India', 'islamicauthenticknowledge.online was delivered with care and real professionalism. The site runs smoothly on every device.'),
('Syed Abdul Wahab', 'India', 'Every project we ship is built to perform worldwide. Proud of the 30+ websites our team has delivered.');