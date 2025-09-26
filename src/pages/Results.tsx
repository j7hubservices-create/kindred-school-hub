import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal, Calendar } from "lucide-react";
import resultsHeroImage from "@/assets/achievements-hero.jpg";

interface Result {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  category: string;
  year: number;
  featured: boolean;
  created_at: string;
}

const Results = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const { data, error } = await supabase
        .from('results')
        .select('*')
        .order('year', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResults(data || []);
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return Trophy;
      case 'sports':
        return Medal;
      case 'competition':
        return Star;
      case 'award':
        return Award;
      default:
        return Trophy;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'sports':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'competition':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'award':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const featuredResults = results.filter(result => result.featured);
  const regularResults = results.filter(result => !result.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <PageHero
        title="Our Results & Awards"
        subtitle="Celebrating Academic Excellence and Outstanding Achievements"
        backgroundImage={resultsHeroImage}
      />

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading results...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12">
            <Trophy className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No Results Yet</h3>
            <p className="text-muted-foreground">Results and awards will appear here once they are added.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Results */}
            {featuredResults.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                  ⭐ Featured Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResults.map((result) => {
                    const IconComponent = getCategoryIcon(result.category);
                    return (
                      <Card key={result.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                        {result.image_url && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={result.image_url}
                              alt={result.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <Badge className={getCategoryColor(result.category)}>
                              <IconComponent className="w-3 h-3 mr-1" />
                              {result.category.charAt(0).toUpperCase() + result.category.slice(1)}
                            </Badge>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {result.year}
                            </div>
                          </div>
                          <h3 className="font-bold text-lg text-primary mb-2">{result.title}</h3>
                          {result.description && (
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {result.description}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Regular Results */}
            {regularResults.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                  🏆 All Results & Awards
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularResults.map((result) => {
                    const IconComponent = getCategoryIcon(result.category);
                    return (
                      <Card key={result.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        {result.image_url && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={result.image_url}
                              alt={result.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <Badge className={getCategoryColor(result.category)}>
                              <IconComponent className="w-3 h-3 mr-1" />
                              {result.category.charAt(0).toUpperCase() + result.category.slice(1)}
                            </Badge>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {result.year}
                            </div>
                          </div>
                          <h3 className="font-bold text-lg text-primary mb-2">{result.title}</h3>
                          {result.description && (
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {result.description}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Results;