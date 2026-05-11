-- Programator Personal Database Schema
-- Run this in Supabase SQL Editor to setup all tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- SERVICES TABLE
-- ============================================================================
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  icon VARCHAR(50),
  features JSONB DEFAULT '[]'::jsonb,
  image_url VARCHAR(500),
  meta_title VARCHAR(255),
  meta_description VARCHAR(500),
  meta_keywords VARCHAR(255),
  price_starts_at DECIMAL(10, 2),
  availability VARCHAR(50) DEFAULT 'available',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- CASE STUDIES TABLE
-- ============================================================================
CREATE TABLE case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  client_industry VARCHAR(100),
  client_size VARCHAR(50), -- small, medium, enterprise
  description TEXT NOT NULL,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results JSONB DEFAULT '{}', -- { revenue_increase: "45%", time_saved: "200hrs/month", etc }
  results_description TEXT,
  services_used JSONB DEFAULT '[]'::jsonb, -- array of service IDs or names
  featured_image_url VARCHAR(500),
  gallery_images JSONB DEFAULT '[]'::jsonb,
  testimonial_quote TEXT,
  testimonial_author VARCHAR(255),
  testimonial_role VARCHAR(255),
  meta_title VARCHAR(255),
  meta_description VARCHAR(500),
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- BLOG ARTICLES TABLE
-- ============================================================================
CREATE TABLE blog_articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt VARCHAR(500),
  content TEXT NOT NULL,
  author_name VARCHAR(255) DEFAULT 'Programator Personal',
  author_image VARCHAR(500),
  featured_image VARCHAR(500),
  featured_image_alt VARCHAR(255),
  category VARCHAR(100),
  tags JSONB DEFAULT '[]'::jsonb,
  keywords VARCHAR(255),
  reading_time_minutes INTEGER,
  views_count INTEGER DEFAULT 0,
  meta_title VARCHAR(255),
  meta_description VARCHAR(500),
  meta_keywords VARCHAR(255),
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- TEAM MEMBERS TABLE
-- ============================================================================
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  bio TEXT,
  image_url VARCHAR(500),
  email VARCHAR(255),
  expertise JSONB DEFAULT '[]'::jsonb, -- array of skills
  social_links JSONB DEFAULT '{}', -- { github: "...", linkedin: "...", twitter: "..." }
  sort_order INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- TESTIMONIALS TABLE
-- ============================================================================
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name VARCHAR(255) NOT NULL,
  client_company VARCHAR(255),
  client_role VARCHAR(255),
  client_image VARCHAR(500),
  quote TEXT NOT NULL,
  rating INTEGER DEFAULT 5, -- 1-5 stars
  service_type VARCHAR(100),
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- FAQ TABLE
-- ============================================================================
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question VARCHAR(500) NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100),
  sort_order INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- PRICING TIERS TABLE
-- ============================================================================
CREATE TABLE pricing_tiers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  billing_period VARCHAR(50) DEFAULT 'month', -- month, year, one-time
  features JSONB DEFAULT '[]'::jsonb, -- array of feature strings
  highlighted BOOLEAN DEFAULT false,
  call_to_action VARCHAR(255) DEFAULT 'Get Started',
  sort_order INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- CONTACT SUBMISSIONS (Leads)
-- ============================================================================
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(20),
  message TEXT NOT NULL,
  subject VARCHAR(255),
  service_interested VARCHAR(100),
  budget VARCHAR(50),
  timeline VARCHAR(100),
  status VARCHAR(50) DEFAULT 'new', -- new, contacted, qualified, converted, archived
  source VARCHAR(100) DEFAULT 'contact_form', -- contact_form, website, referral, etc
  notes TEXT,
  assigned_to VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- NEWSLETTER SUBSCRIPTIONS
-- ============================================================================
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  company VARCHAR(255),
  industry VARCHAR(100),
  interests JSONB DEFAULT '[]'::jsonb,
  status VARCHAR(50) DEFAULT 'active', -- active, inactive, unsubscribed
  confirmation_token VARCHAR(500),
  confirmed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- ANALYTICS EVENTS
-- ============================================================================
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_name VARCHAR(255) NOT NULL,
  event_type VARCHAR(100), -- page_view, form_submission, cta_click, etc
  page_url VARCHAR(500),
  user_identifier VARCHAR(255), -- GA session ID or anonymous ID
  properties JSONB DEFAULT '{}'::jsonb,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- PAGES SEO METADATA
-- ============================================================================
CREATE TABLE pages_seo (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_path VARCHAR(255) UNIQUE NOT NULL,
  page_title VARCHAR(255),
  meta_description VARCHAR(500),
  meta_keywords VARCHAR(255),
  og_title VARCHAR(255),
  og_description VARCHAR(500),
  og_image VARCHAR(500),
  canonical_url VARCHAR(500),
  robot_directives VARCHAR(100) DEFAULT 'index, follow',
  is_published BOOLEAN DEFAULT true,
  last_modified TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- INDEXES for performance
-- ============================================================================
CREATE INDEX idx_case_studies_slug ON case_studies(slug);
CREATE INDEX idx_case_studies_featured ON case_studies(featured);
CREATE INDEX idx_blog_articles_slug ON blog_articles(slug);
CREATE INDEX idx_blog_articles_published ON blog_articles(published);
CREATE INDEX idx_blog_articles_category ON blog_articles(category);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX idx_analytics_events_timestamp ON analytics_events(timestamp);
CREATE INDEX idx_analytics_events_event_name ON analytics_events(event_name);

-- ============================================================================
-- SEED DATA - Initial Content
-- ============================================================================

-- Services
INSERT INTO services (slug, title, description, long_description, features, icon, price_starts_at, sort_order) VALUES
('custom-web-development', 'Custom Web Development', 'Tailored web applications built with modern tech stack', 'We build scalable, high-performance web applications from scratch using Next.js, React, TypeScript, and cloud infrastructure. Perfect for startups and enterprises.', '["Responsive Design", "API Development", "Database Design", "SEO Optimization"]'::jsonb, 'code', 5000, 1),
('crm-systems', 'CRM Systems', 'Customer relationship management solutions tailored to your business', 'Custom CRM platforms that streamline sales, marketing, and customer service. Integrates with your existing tools.', '["Lead Management", "Sales Pipeline", "Automation", "Reporting"]'::jsonb, 'users', 8000, 2),
('system-integration', 'System Integration', 'Connect your disparate systems seamlessly', 'API integrations, data synchronization, and middleware solutions that connect your business tools.', '["API Development", "Real-time Sync", "Data Migration", "Custom Workflows"]'::jsonb, 'link', 4000, 3),
('mobile-applications', 'Mobile Applications', 'iOS and Android apps for your business', 'Native and cross-platform mobile applications that extend your business reach.', '["iOS/Android", "Cross-platform", "Offline Support", "Push Notifications"]'::jsonb, 'smartphone', 6000, 4),
('consulting-strategy', 'Tech Consulting & Strategy', 'Expert guidance for your digital transformation', 'Technology strategy, architecture consulting, and digital transformation planning.', '["Architecture Design", "Tech Stack Selection", "Roadmap Planning", "Team Scaling"]'::jsonb, 'briefcase', 2000, 5);

-- Blog Article Placeholders
INSERT INTO blog_articles (slug, title, excerpt, content, author_name, category, tags, reading_time_minutes, published_at) VALUES
('top-10-it-solutions-sme', 'Top 10 IT Solutions SME-urile Trebuie să Implementeze', 'Descoperă cele mai importante soluții IT care pot transforma operațiunile tale', '[Article content will be added via ChatGPT]', 'Programator Personal', 'business', '["smb", "technology", "growth"]'::jsonb, 8, NOW()),
('choosing-right-crm', 'Cum să Alegi CRM-ul Potrivit pentru Compania Ta', 'Ghid complet pentru selectarea unui sistem CRM care se potrivește cu nevoile tale', '[Article content will be added via ChatGPT]', 'Programator Personal', 'technology', '["crm", "business", "decision-making"]'::jsonb, 10, NOW()),
('custom-vs-saas', 'Custom Software vs SaaS: Care Este Potrivit pentru Tine?', 'Analiză aprofundată a costurilor, beneficiilor și trade-off-urilor', '[Article content will be added via ChatGPT]', 'Programator Personal', 'business', '["software", "comparison", "strategy"]'::jsonb, 12, NOW()),
('api-integration-guide', 'Ghid Complet: Integrări API pentru Enterprise', 'Best practices pentru conectarea sistemelor tale existente', '[Article content will be added via ChatGPT]', 'Programator Personal', 'technology', '["api", "integration", "technical"]'::jsonb, 15, NOW()),
('digital-transformation', 'Transformarea Digitală: Pasul cu Pasul', 'Cum să modernizezi operațiunile companiei în era digitală', '[Article content will be added via ChatGPT]', 'Programator Personal', 'business', '["transformation", "strategy", "growth"]'::jsonb, 14, NOW());

-- Sample Testimonials
INSERT INTO testimonials (client_name, client_company, client_role, quote, rating, featured) VALUES
('Ionut Popescu', 'TechStart Romania', 'CEO', 'Echipa a transformat viziunea noastră în realitate. Aplicația web développată depășeste toate așteptările. Recomand cu încredere!', 5, true),
('Maria Cristescu', 'E-Commerce Plus', 'Director Marketing', 'Integrarea sistemelor a salvat mii de ore de lucru manual. ROI-ul a fost vizibil în prima lună.', 5, true),
('Alexandru Dumitru', 'Consulting Group', 'CTO', 'Profesionismul și atenția la detaliu sunt remarcabile. Au explicat fiecare decizie tehnică cu claritate.', 5, true);

-- FAQ
INSERT INTO faqs (question, answer, category, sort_order) VALUES
('Care este procesul de dezvoltare?', 'Pornim cu o consultație gratuită pentru a înțelege nevoile tale. Apoi facem o propunere detaliată, stabilim un calendar și muncim în sprint-uri. Ai acces complet la progres prin zilele muncii.', 'process', 1),
('Cât costă un proiect?', 'Costul variază în funcție de complexitate, durată și tehnologiile necesare. Ofertele noastre sunt personalizate. După consultație, vei ști exact la ce să te aștepți.', 'pricing', 2),
('Care sunt timpii de livrare tipici?', 'Un site web standard: 4-8 săptămâni. Un CRM custom: 8-12 săptămâni. Un proiect de integrare: 2-6 săptămâni. Discutăm despre calendare realiste de la început.', 'process', 3),
('Cum se asigură calitatea codului?', 'Folosim TypeScript, linting, testing automated, și code reviews. Fiecare feature este testat înainte de lansare. Continuăm sprijinul și optimizarea după lansare.', 'technical', 4),
('Care este politica de suport după lansare?', 'Includem suport de 30 de zile. După aceea, oferim planuri de suport lunar flexibile. Bugs critice sunt rezolvate imediat.', 'support', 5);

-- Sample Pricing Tiers
INSERT INTO pricing_tiers (name, description, price, billing_period, features, highlighted, sort_order) VALUES
('Starter', 'Perfect pentru proiecte mici și MVP', 2500, 'one-time', '["Up to 5 pages", "Basic SEO", "Mobile Responsive", "1 month support"]'::jsonb, false, 1),
('Professional', 'Pentru aplicații medii și business growth', 7500, 'one-time', '["Up to 25 pages", "Full SEO Optimization", "API Integration", "3 months support", "Performance Optimization"]'::jsonb, true, 2),
('Enterprise', 'Custom solutions pentru companii mari', 15000, 'one-time', '["Unlimited pages", "Advanced SEO", "Multiple integrations", "6 months support", "Dedicated developer", "Analytics & Monitoring"]'::jsonb, false, 3),
('Ongoing Support', 'Monthly support și maintenance', 500, 'month', '["Bug fixes", "Performance optimization", "Security updates", "New features development", "Unlimited revisions"]'::jsonb, false, 4);
