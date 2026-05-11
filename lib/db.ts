import { supabase } from './supabase';

// ============================================================================
// SERVICES
// ============================================================================
export async function getServices() {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('availability', 'available')
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// ============================================================================
// CASE STUDIES
// ============================================================================
export async function getCaseStudies(limit?: number) {
  try {
    let query = supabase
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export async function getFeaturedCaseStudies(limit = 3) {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching featured case studies:', error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) throw error;
    return data || null;
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
}

// ============================================================================
// BLOG ARTICLES
// ============================================================================
export async function getBlogArticles(limit?: number, category?: string) {
  try {
    let query = supabase
      .from('blog_articles')
      .select('*')
      .eq('published', true);

    if (category) {
      query = query.eq('category', category);
    }

    query = query.order('published_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching blog articles:', error);
    return [];
  }
}

export async function getFeaturedArticles(limit = 3) {
  try {
    const { data, error } = await supabase
      .from('blog_articles')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching featured articles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('blog_articles')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) throw error;
    return data || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// ============================================================================
// TESTIMONIALS
// ============================================================================
export async function getTestimonials(limit?: number) {
  try {
    let query = supabase
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export async function getFeaturedTestimonials(limit = 3) {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('sort_order', { ascending: true })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    return [];
  }
}

// ============================================================================
// PRICING TIERS
// ============================================================================
export async function getPricingTiers() {
  try {
    const { data, error } = await supabase
      .from('pricing_tiers')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching pricing tiers:', error);
    return [];
  }
}

// ============================================================================
// TEAM MEMBERS
// ============================================================================
export async function getTeamMembers() {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

// ============================================================================
// FAQS
// ============================================================================
export async function getFAQs(category?: string) {
  try {
    let query = supabase
      .from('faqs')
      .select('*')
      .eq('published', true);

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query.order('sort_order', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

// ============================================================================
// CONTACT SUBMISSIONS (Leads)
// ============================================================================
export async function submitContactForm(formData: {
  first_name: string;
  last_name?: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  subject?: string;
  service_interested?: string;
  budget?: string;
  timeline?: string;
}) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          ...formData,
          status: 'new',
          source: 'contact_form',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: data?.[0] };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
}

// ============================================================================
// NEWSLETTER SUBSCRIPTIONS
// ============================================================================
export async function subscribeNewsletter(email: string, name?: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          name: name || null,
          status: 'active',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: data?.[0] };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error };
  }
}

// ============================================================================
// ANALYTICS
// ============================================================================
export async function trackEvent(eventData: {
  event_name: string;
  event_type?: string;
  page_url?: string;
  user_identifier?: string;
  properties?: Record<string, unknown>;
}) {
  try {
    const { error } = await supabase.from('analytics_events').insert([eventData]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error tracking event:', error);
    return { success: false, error };
  }
}