import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
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
  alt_text: string | null;
  image_url: string;
  caption: string | null;
  tags: string[] | null;
}

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  // Static gallery items as fallback
  const staticGalleryItems = [
    { id: "static-1", image: galleryImage, title: "School Activities", image_url: galleryImage, alt_text: "School Activities", caption: null, tags: null },
    { id: "static-2", image: gallery1, title: "Academic Excellence", image_url: gallery1, alt_text: "Academic Excellence", caption: null, tags: null },
    { id: "static-3", image: gallery2, title: "Student Life", image_url: gallery2, alt_text: "Student Life", caption: null, tags: null },
    { id: "static-4", image: gallery3, title: "Sports Events", image_url: gallery3, alt_text: "Sports Events", caption: null, tags: null },
    { id: "static-5", image: gallery4, title: "Cultural Activities", image_url: gallery4, alt_text: "Cultural Activities", caption: null, tags: null },
    { id: "static-6", image: gallery5, title: "Graduation Ceremony", image_url: gallery5, alt_text: "Graduation Ceremony", caption: null, tags: null },
    { id: "static-7", image: gallery6, title: "Award Ceremony", image_url: gallery6, alt_text: "Award Ceremony", caption: null, tags: null },
    { id: "static-8", image: galleryGraduation1, title: "Graduation Day Celebration", image_url: galleryGraduation1, alt_text: "Graduation Day Celebration", caption: null, tags: null },
    { id: "static-9", image: galleryGraduation2, title: "Award Presentation", image_url: galleryGraduation2, alt_text: "Award Presentation", caption: null, tags: null },
    { id: "static-10", image: galleryGraduation3, title: "Group Graduation Photo", image_url: galleryGraduation3, alt_text: "Group Graduation Photo", caption: null, tags: null },
    { id: "static-11", image: galleryStudents1, title: "School Assembly", image_url: galleryStudents1, alt_text: "School Assembly", caption: null, tags: null },
    { id: "static-12", image: galleryStudents2, title: "Student Performance", image_url: galleryStudents2, alt_text: "Student Performance", caption: null, tags: null },
    { id: "static-13", image: galleryStudents3, title: "Choir Performance", image_url: galleryStudents3, alt_text: "Choir Performance", caption: null, tags: null },
    { id: "static-14", image: galleryStaff, title: "School Leadership", image_url: galleryStaff, alt_text: "School Leadership", caption: null, tags: null }
  ];

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGalleryImages(data || []);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    } finally {
      setLoading(false);
    }
  };

  // Combine database images with static images
  const allGalleryItems = [...galleryImages, ...staticGalleryItems];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            School Gallery
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Campus Life & Gallery</h1>
          <p className="text-xl mb-8">Discover life at Our God Reigns Crystal School</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allGalleryItems.map((item) => (
                  <Card key={item.id} className="border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img 
                        src={item.image_url} 
                        alt={item.alt_text || item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-emerald-600">{item.title}</h3>
                      {item.caption && (
                        <p className="text-sm text-gray-600 mt-2">{item.caption}</p>
                      )}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600">Showing {allGalleryItems.length} images</p>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;