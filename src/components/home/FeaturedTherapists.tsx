
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Video, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Therapist mock data
const featuredTherapists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    avatar: "https://i.pravatar.cc/300?img=1",
    title: "Licensed Psychologist",
    specialties: ["Anxiety", "Depression", "Trauma"],
    rating: 4.9,
    reviewCount: 127,
    location: "New York, NY",
    online: true,
    price: "$120"
  },
  {
    id: 2,
    name: "Michael Chen, LMFT",
    avatar: "https://i.pravatar.cc/300?img=3",
    title: "Marriage & Family Therapist",
    specialties: ["Couples Therapy", "Relationship Issues", "Family Conflict"],
    rating: 4.8,
    reviewCount: 93,
    location: "Los Angeles, CA",
    online: true,
    price: "$110"
  },
  {
    id: 3,
    name: "Emily Winters, LCSW",
    avatar: "https://i.pravatar.cc/300?img=5",
    title: "Clinical Social Worker",
    specialties: ["Grief", "Life Transitions", "Self-Esteem"],
    rating: 5.0,
    reviewCount: 64,
    location: "Chicago, IL",
    online: true,
    price: "$95"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    avatar: "https://i.pravatar.cc/300?img=8",
    title: "Psychiatrist",
    specialties: ["Medication Management", "Bipolar Disorder", "ADHD"],
    rating: 4.7,
    reviewCount: 112,
    location: "Boston, MA",
    online: true,
    price: "$150"
  },
  {
    id: 5,
    name: "Sophia Garcia, LPC",
    avatar: "https://i.pravatar.cc/300?img=9",
    title: "Licensed Professional Counselor",
    specialties: ["Stress", "Mindfulness", "Work-Life Balance"],
    rating: 4.9,
    reviewCount: 78,
    location: "Denver, CO",
    online: true,
    price: "$100"
  },
  {
    id: 6,
    name: "Dr. Marcus Brown",
    avatar: "https://i.pravatar.cc/300?img=11",
    title: "Clinical Psychologist",
    specialties: ["Trauma", "PTSD", "Anxiety"],
    rating: 4.8,
    reviewCount: 156,
    location: "Seattle, WA",
    online: true,
    price: "$130"
  }
];

const FeaturedTherapists = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  
  // Update display count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigatePrev = () => {
    setCurrentIdx((prevIdx) => (prevIdx > 0 ? prevIdx - 1 : prevIdx));
  };

  const navigateNext = () => {
    setCurrentIdx((prevIdx) => 
      prevIdx + displayCount < featuredTherapists.length ? prevIdx + 1 : prevIdx
    );
  };

  const visibleTherapists = featuredTherapists.slice(
    currentIdx, 
    currentIdx + displayCount
  );

  const TherapistCard = ({ therapist }) => (
    <Link to={`/therapist/${therapist.id}`} className="block">
      <div className="glass-card rounded-2xl overflow-hidden hover-scale">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
              <AvatarImage src={therapist.avatar} alt={therapist.name} />
              <AvatarFallback className="bg-mindnest-100 text-mindnest-800">
                {therapist.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{therapist.name}</h3>
                  <p className="text-sm text-slate-500">{therapist.title}</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-slate-900">{therapist.rating}</span>
                  <span className="text-xs text-slate-500 ml-1">({therapist.reviewCount})</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-1">
            {therapist.specialties.map((specialty, idx) => (
              <Badge key={idx} variant="secondary" className="rounded-full text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
          
          <div className="mt-4 flex items-center text-sm text-slate-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{therapist.location}</span>
          </div>
          
          <div className="mt-1 flex items-center text-sm text-slate-500">
            <Video className="h-4 w-4 mr-1" />
            <span>Online sessions available</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500">Session from</span>
              <p className="font-semibold text-slate-900">{therapist.price}</p>
            </div>
            <Button size="sm" className="rounded-full">
              <Calendar className="h-4 w-4 mr-1" />
              Book Session
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Therapists</h2>
            <p className="text-slate-600">Highly-rated professionals ready to help</p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={navigatePrev}
              disabled={currentIdx === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={navigateNext}
              disabled={currentIdx + displayCount >= featuredTherapists.length}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTherapists.map((therapist) => (
            <div key={therapist.id} className="opacity-0 animate-fade-in animate-slide-in">
              <TherapistCard therapist={therapist} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/therapists">
            <Button variant="outline" size="lg" className="rounded-full">
              View All Therapists
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTherapists;
