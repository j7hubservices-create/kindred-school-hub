import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Search, 
  Clock, 
  Users, 
  Wifi,
  Computer,
  BookMarked,
  Library as LibraryIcon
} from "lucide-react";

const Library = () => {
  const libraryFeatures = [
    {
      icon: BookOpen,
      title: "Extensive Book Collection",
      description: "Over 5,000 books covering all subjects and reading levels"
    },
    {
      icon: Computer,
      title: "Digital Resources",
      description: "Access to online databases, e-books, and digital journals"
    },
    {
      icon: Wifi,
      title: "Free WiFi Access",
      description: "High-speed internet for research and online learning"
    },
    {
      icon: Users,
      title: "Study Areas",
      description: "Quiet individual and group study spaces available"
    },
    {
      icon: BookMarked,
      title: "Reference Section",
      description: "Comprehensive reference materials and encyclopedias"
    },
    {
      icon: LibraryIcon,
      title: "Librarian Support",
      description: "Professional assistance with research and book recommendations"
    }
  ];

  const libraryHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 4:00 PM", status: "Open" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM", status: "Limited" },
    { day: "Sunday", hours: "Closed", status: "Closed" }
  ];

  const collections = [
    {
      category: "Science & Mathematics",
      books: "1,200+",
      description: "Physics, Chemistry, Biology, Mathematics textbooks and references"
    },
    {
      category: "Literature & Languages", 
      books: "800+",
      description: "English Literature, Nigerian Literature, Language learning materials"
    },
    {
      category: "Social Studies",
      books: "600+", 
      description: "History, Geography, Government, Economics resources"
    },
    {
      category: "Religious Studies",
      books: "400+",
      description: "Christian Religious Knowledge, Islamic Studies, Moral Education"
    },
    {
      category: "General Knowledge",
      books: "500+",
      description: "Encyclopedias, Dictionaries, General reference materials"
    },
    {
      category: "Journals & Magazines",
      books: "200+",
      description: "Educational journals, current affairs magazines, periodicals"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2">
            School Library
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Knowledge Center</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your gateway to unlimited learning resources and academic excellence
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search library catalog..." 
                className="pl-10 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Library Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Library Features</h2>
            <p className="text-xl text-muted-foreground">Modern facilities for enhanced learning experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraryFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Collections</h2>
            <p className="text-xl text-muted-foreground">Comprehensive resources across all academic subjects</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{collection.category}</h3>
                    <Badge className="bg-primary text-primary-foreground">{collection.books}</Badge>
                  </div>
                  <p className="text-muted-foreground">{collection.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Library Hours */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Library Hours</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our library is open during regular school hours and provides extended access for research and study.
              </p>
              
              <div className="space-y-4">
                {libraryHours.map((schedule, index) => (
                  <Card key={index} className="border-none shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold text-foreground">{schedule.day}</h3>
                            <p className="text-muted-foreground">{schedule.hours}</p>
                          </div>
                        </div>
                        <Badge className={`${
                          schedule.status === 'Open' ? 'bg-primary text-primary-foreground' :
                          schedule.status === 'Limited' ? 'bg-secondary text-secondary-foreground' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {schedule.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Library Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">5,000+</div>
                  <p className="text-lg">Total Books</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                  <p className="text-lg">Seating Capacity</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">200+</div>
                  <p className="text-lg">Monthly Visitors</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                  <p className="text-lg">Digital Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Rules */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Library Guidelines</h2>
            <p className="text-xl text-muted-foreground">Please observe these rules for everyone's benefit</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Do's</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="bg-primary text-primary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">Maintain silence in study areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-primary text-primary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">Return books on time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-primary text-primary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">Handle books with care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-primary text-primary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">Ask librarian for assistance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-secondary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Don'ts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="bg-secondary text-secondary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">No eating or drinking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-secondary text-secondary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">No loud conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-secondary text-secondary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">Don't damage or write in books</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-secondary text-secondary-foreground p-1 rounded-full flex-shrink-0 mt-1">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">No mobile phone usage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;