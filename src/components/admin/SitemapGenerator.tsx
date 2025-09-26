import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Globe } from 'lucide-react';
import { downloadSitemap } from '@/utils/generateSitemap';
import { toast } from 'sonner';

const SitemapGenerator = () => {
  const [generating, setGenerating] = useState(false);

  const handleGenerateSitemap = async () => {
    setGenerating(true);
    try {
      await downloadSitemap();
      toast.success('Sitemap generated and downloaded successfully!');
    } catch (error) {
      console.error('Error generating sitemap:', error);
      toast.error('Failed to generate sitemap');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          SEO Sitemap Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Generate an XML sitemap containing all your website pages and published blog posts 
          for better search engine optimization.
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium">Includes:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• All static pages (Home, About, Contact, etc.)</li>
            <li>• Published blog posts with original URLs</li>
            <li>• Proper last modified dates and priorities</li>
            <li>• SEO-friendly change frequencies</li>
          </ul>
        </div>

        <Button 
          onClick={handleGenerateSitemap}
          disabled={generating}
          className="w-full"
        >
          <Download className="h-4 w-4 mr-2" />
          {generating ? 'Generating...' : 'Generate & Download Sitemap'}
        </Button>
        
        <div className="text-xs text-muted-foreground">
          Upload the generated sitemap.xml to your website root and submit it to Google Search Console.
        </div>
      </CardContent>
    </Card>
  );
};

export default SitemapGenerator;