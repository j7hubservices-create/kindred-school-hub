import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Filter } from "lucide-react";
import galleryImage from "@/assets/gallery-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Academic Events", 
    "Awards",
    "Campus Life",
    "Sports",
    "Cultural Activities",
    "General"
  ];

  const galleryItems = [
    {
      id: 1,
      image: galleryImage,
      title: "Academic Excellence Showcase",
      category: "Academic Events"
    },
    {
      id: 2,
      image: gallery1,
      title: "Student Achievement Award",
      category: "Awards"
    },
    {
      id: 3,
      image: gallery2,
      title: "Campus Life Activities",
      category: "Campus Life"
    },
    {
      id: 4,
      image: gallery3,
      title: "Sports Day Competition",
      category: "Sports"
    },
    {
      id: 5,
      image: gallery4,
      title: "Cultural Heritage Celebration",
      category: "Cultural Activities"
    },
    {
      id: 6,
      image: gallery5,
      title: "School Assembly",
      category: "General"
    },
    {
      id: 7,
      image: gallery6,
      title: "Academic Performance Awards",
      category: "Awards"
    },
    {
      id: 8,
      image: galleryImage,
      title: "Student Leadership Training",
      category: "Academic Events"
    },
    {
      id: 9,
      image: gallery1,
      title: "Inter-house Sports",
      category: "Sports"
    },
    {
      id: 10,
      image: gallery2,
      title: "Science Laboratory Session",
      category: "Academic Events"
    },
    {
      id: 11,
      image: gallery3,
      title: "Cultural Dance Performance",
      category: "Cultural Activities"
    },
    {
      id: 12,
      image: gallery4,
      title: "Graduation Ceremony",
      category: "General"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2">
            School Gallery
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Capturing moments of excellence and growth</h1>
          <p className="text-xl mb-8">Celebrating achievements, culture, and academic excellence</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <div className="text-4xl font-bold text-secondary mb-2">36</div>
            <p className="text-lg">Images in Gallery</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground mr-2" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`${
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="border-none shadow-card hover:shadow-school transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary text-primary-foreground mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Eye className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <Badge className="bg-primary/10 text-primary mb-2" variant="secondary">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No images found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">36</div>
              <p className="text-lg">Total Images</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">8</div>
              <p className="text-lg">Categories</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15</div>
              <p className="text-lg">Events Covered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <p className="text-lg">Students Featured</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;