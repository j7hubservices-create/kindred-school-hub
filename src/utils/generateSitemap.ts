import { supabase } from '@/integrations/supabase/client';

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = async (): Promise<string> => {
  const baseUrl = window.location.origin;
  const entries: SitemapEntry[] = [];

  // Static pages
  const staticPages = [
    { path: '/', priority: 1.0, changefreq: 'daily' as const },
    { path: '/about', priority: 0.9, changefreq: 'monthly' as const },
    { path: '/admissions', priority: 0.9, changefreq: 'monthly' as const },
    { path: '/achievements', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/gallery', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/blog', priority: 0.9, changefreq: 'daily' as const },
    { path: '/contact', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/leadership', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/library', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/elearning', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/portals', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/results', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/school-fees', priority: 0.7, changefreq: 'monthly' as const }
  ];

  staticPages.forEach(page => {
    entries.push({
      loc: `${baseUrl}${page.path}`,
      lastmod: new Date().toISOString(),
      changefreq: page.changefreq,
      priority: page.priority
    });
  });

  try {
    // Fetch published blog posts
    const { data: posts } = await supabase
      .from('content_items')
      .select('title, created_at, updated_at')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (posts) {
      posts.forEach(post => {
        const slug = post.title
          .toLowerCase()
          .replace(/[^a-z0-9 -]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();

        entries.push({
          loc: `${baseUrl}/blog/${slug}`,
          lastmod: post.updated_at || post.created_at,
          changefreq: 'monthly',
          priority: 0.8
        });
      });
    }
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

export const downloadSitemap = async () => {
  try {
    const xml = await generateSitemap();
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};