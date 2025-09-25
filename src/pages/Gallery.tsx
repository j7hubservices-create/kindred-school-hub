import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: galleryImage, title: "School Activities" },
    { id: 2, image: gallery1, title: "Academic Excellence" },
    { id: 3, image: gallery2, title: "Student Life" },
    { id: 4, image: gallery3, title: "Sports Events" },
    { id: 5, image: gallery4, title: "Cultural Activities" },
    { id: 6, image: gallery5, title: "Graduation Ceremony" },
    { id: 7, image: gallery6, title: "Award Ceremony" },
    { id: 8, image: galleryGraduation1, title: "Graduation Day Celebration" },
    { id: 9, image: galleryGraduation2, title: "Award Presentation" },
    { id: 10, image: galleryGraduation3, title: "Group Graduation Photo" },
    { id: 11, image: galleryStudents1, title: "School Assembly" },
    { id: 12, image: galleryStudents2, title: "Student Performance" },
    { id: 13, image: galleryStudents3, title: "Choir Performance" },
    { id: 14, image: galleryStaff, title: "School Leadership" }
  ];

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-emerald-600">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">Image 1 of {galleryItems.length}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;