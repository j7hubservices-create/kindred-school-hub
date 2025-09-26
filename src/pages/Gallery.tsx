import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface GalleryImage {
  id: string;
  title: string;
  alt_text: string | null;
  image_url: string;
}

const Gallery = () => {
  // Static gallery images for demo
  const galleryImages = [
    {
      id: '1',
      title: 'School Students in Green Uniforms',
      alt_text: 'Students performing at school event',
      image_url: '/src/assets/students-background.jpg'
    },
    {
      id: '2', 
      title: 'School Building',
      alt_text: 'Main school building',
      image_url: '/src/assets/school-facilities.jpg'
    },
    {
      id: '3',
      title: 'Graduation Ceremony',
      alt_text: 'Students during graduation',
      image_url: '/src/assets/graduands.jpg'
    }
  ];

  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(galleryImages.length, 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % Math.max(galleryImages.length, 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <Navigation />
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <PageHero
        title="Campus Life & Gallery"
        subtitle="Discover life at Our God Reigns Crystal School"
        badge="📸 School Gallery"
      />

      {/* Gallery Slider */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {galleryImages.length > 0 ? (
            <div className="relative max-w-6xl mx-auto">
              {/* Main Slider */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={image.id} className="w-full flex-shrink-0 relative">
                      <img
                        src={image.image_url}
                        alt={image.alt_text || image.title}
                        className="w-full h-[500px] md:h-[600px] object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                            {image.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-primary-foreground/80">
                              Image {index + 1} of {galleryImages.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {galleryImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background"
                      onClick={prevSlide}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background"
                      onClick={nextSlide}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {galleryImages.length > 1 && (
                <div className="flex justify-center space-x-2 mb-8 overflow-x-auto pb-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => goToSlide(index)}
                      className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        currentSlide === index 
                          ? 'border-primary shadow-lg scale-110' 
                          : 'border-muted-foreground/30 hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={image.image_url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Slide Indicators */}
              {galleryImages.length > 1 && (
                <div className="flex justify-center space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <Camera className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">No Images Yet</h3>
              <p className="text-muted-foreground text-lg">
                Gallery images will appear here once they are uploaded by the administrator.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;