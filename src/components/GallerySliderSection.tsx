import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Camera, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

// Import static gallery images
import galleryImage from "@/assets/gallery-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import galleryGraduation1 from "@/assets/gallery-graduation-1.jpg";
import galleryGraduation2 from "@/assets/gallery-graduation-2.jpg";
import galleryGraduation3 from "@/assets/gallery-graduation-3.jpg";
import galleryStudents1 from "@/assets/gallery-students-1.jpg";
import galleryStudents2 from "@/assets/gallery-students-2.jpg";
import galleryStudents3 from "@/assets/gallery-students-3.jpg";
import galleryStaff from "@/assets/gallery-staff.jpg";

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  alt_text: string | null;
}

const GallerySliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  // Static images for fallback
  const staticImages: GalleryImage[] = [
    { id: "static-1", title: "School Activities", image_url: galleryImage, alt_text: "School Activities" },
    { id: "static-2", title: "Academic Excellence", image_url: gallery1, alt_text: "Academic Excellence" },
    { id: "static-3", title: "Student Life", image_url: gallery2, alt_text: "Student Life" },
    { id: "static-4", title: "Sports Events", image_url: gallery3, alt_text: "Sports Events" },
    { id: "static-5", title: "Cultural Activities", image_url: gallery4, alt_text: "Cultural Activities" },
    { id: "static-6", title: "Graduation Ceremony", image_url: gallery5, alt_text: "Graduation Ceremony" },
    { id: "static-7", title: "Award Ceremony", image_url: gallery6, alt_text: "Award Ceremony" },
    { id: "static-8", title: "Graduation Day", image_url: galleryGraduation1, alt_text: "Graduation Day" },
    { id: "static-9", title: "Award Presentation", image_url: galleryGraduation2, alt_text: "Award Presentation" },
    { id: "static-10", title: "Group Photo", image_url: galleryGraduation3, alt_text: "Group Photo" },
    { id: "static-11", title: "School Assembly", image_url: galleryStudents1, alt_text: "School Assembly" },
    { id: "static-12", title: "Student Performance", image_url: galleryStudents2, alt_text: "Student Performance" },
    { id: "static-13", title: "Choir Performance", image_url: galleryStudents3, alt_text: "Choir Performance" },
    { id: "static-14", title: "School Leadership", image_url: galleryStaff, alt_text: "School Leadership" }
  ];

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(allImages.length, 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const fetchGalleryImages = async () => {
    try {
      // Use static images for now since gallery_images table doesn't exist
      setGalleryImages([]);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    }
  };

  const allImages = [...galleryImages, ...staticImages];
  const visibleImages = allImages.slice(currentSlide, currentSlide + 4);
  
  if (visibleImages.length < 4 && allImages.length > 4) {
    const remaining = 4 - visibleImages.length;
    visibleImages.push(...allImages.slice(0, remaining));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(allImages.length, 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allImages.length) % Math.max(allImages.length, 1));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent text-accent-foreground mb-4 px-6 py-2 text-lg">
            📸 Campus Life
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            School Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover life at Our God Reigns Crystal School through our vibrant campus moments
          </p>
        </div>

        <div className="relative">
          {/* Gallery Slider */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {visibleImages.map((image, index) => (
              <Card key={`${image.id}-${index}`} className="group overflow-hidden hover-scale shadow-card">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.image_url}
                      alt={image.alt_text || image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                      <h3 className="text-primary-foreground font-semibold text-sm">{image.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-primary-foreground border-none hover:bg-primary-dark shadow-school"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-primary-foreground border-none hover:bg-primary-dark shadow-school"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Gallery Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {Array.from({ length: Math.ceil(allImages.length / 4) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(currentSlide / 4) === index ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
              onClick={() => setCurrentSlide(index * 4)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
          >
            <Link to="/gallery">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Complete Gallery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySliderSection;