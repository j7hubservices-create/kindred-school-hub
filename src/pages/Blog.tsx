import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import newsAdeyemoImage from "@/assets/news-adeyemo.jpg";
import newsCulturalImage from "@/assets/news-cultural.jpg";
import newsNecoImage from "@/assets/news-neco.jpg";

const Blog = () => {
  const newsItems = [
    {
      id: 1,
      image: newsAdeyemoImage,
      category: "News",
      date: "9/23/2025",
      title: "Miss Adeyemo wins one Million naira prize",
      excerpt: "Congratulations, Miss Adeyemo! You have truly made us all proud and have shown that with dedication, hard work, and quality education, our students can achieve greatness at the national level."
    },
    {
      id: 2,
      image: newsCulturalImage,
      category: "News",
      date: "9/23/2025",
      title: "Our annual Cultural Heritage Celebration",
      excerpt: "Our annual Cultural Heritage Celebration for the 2024/2025 academic session was a spectacular showcase of Nigerian culture and traditions. Students from all levels participated enthusiastically in various cultural activities."
    },
    {
      id: 3,
      image: newsNecoImage,
      category: "News",
      date: "9/23/2025",
      title: "NECO EXCELLENCE AWARDS 2025",
      excerpt: "Our God Reigns Crystal School was proudly represented at the Learn Africa Education Development Foundation NECO Excellence Awards 2025, where our students and school received national recognition for outstanding academic performance."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            Latest News
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Latest News & Events</h1>
          <p className="text-xl mb-8">Stay updated with our school community</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-emerald-600 mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;