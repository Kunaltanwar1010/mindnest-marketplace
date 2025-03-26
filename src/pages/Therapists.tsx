
import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import TherapistCard, { Therapist } from "@/components/therapists/TherapistCard";
import SearchBar from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, MapPin, SlidersHorizontal, X } from "lucide-react";

// Mock therapist data
const mockTherapists: Therapist[] = [
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
    price: "$120",
    description: "I specialize in evidence-based therapies for anxiety, depression, and trauma. My approach is warm, collaborative, and focused on building practical skills for lasting change."
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
    price: "$110",
    description: "With over 15 years of experience working with couples and families, I help clients improve communication, rebuild trust, and strengthen their relationships."
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
    price: "$95",
    description: "I provide a supportive environment to process grief, navigate major life changes, and build authentic self-confidence. My approach is compassionate and strength-based."
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
    price: "$150",
    description: "Board-certified psychiatrist specializing in medication management for mood disorders, ADHD, and anxiety. I take a holistic approach that considers all aspects of your well-being."
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
    price: "$100",
    description: "I help busy professionals manage stress, practice mindfulness, and create healthier work-life boundaries. My therapy style is practical, solution-focused, and empowering."
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
    price: "$130",
    description: "Specialized in trauma treatment using evidence-based approaches like EMDR and CBT. I create a safe, empathetic space for healing and recovery."
  },
  {
    id: 7,
    name: "Rebecca Taylor, PhD",
    avatar: "https://i.pravatar.cc/300?img=10",
    title: "Clinical Psychologist",
    specialties: ["Depression", "Anxiety", "Women's Issues"],
    rating: 4.9,
    reviewCount: 89,
    location: "Austin, TX",
    online: true,
    price: "$125",
    description: "As a psychologist with over a decade of experience, I help clients overcome depression, manage anxiety, and navigate challenges unique to women."
  },
  {
    id: 8,
    name: "David Martinez, LMHC",
    avatar: "https://i.pravatar.cc/300?img=12",
    title: "Mental Health Counselor",
    specialties: ["Addiction", "Substance Abuse", "Recovery"],
    rating: 4.7,
    reviewCount: 72,
    location: "Miami, FL",
    online: true,
    price: "$90",
    description: "Specializing in addiction treatment and recovery support. I use a compassionate, non-judgmental approach to help clients achieve lasting sobriety and wellness."
  }
];

const Therapists = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [availableNow, setAvailableNow] = useState(false);
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("recommended");

  const handleSearch = (query: string, loc: string) => {
    setSearchQuery(query);
    setLocation(loc);
    console.log("Searching for:", query, "in", loc);
  };

  const toggleSpecialty = (specialty: string) => {
    if (specialties.includes(specialty)) {
      setSpecialties(specialties.filter(s => s !== specialty));
    } else {
      setSpecialties([...specialties, specialty]);
    }
  };

  const clearFilters = () => {
    setPriceRange([50, 200]);
    setOnlineOnly(false);
    setAvailableNow(false);
    setSpecialties([]);
    setSortBy("recommended");
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Find Your Therapist</h1>
              <p className="text-slate-600">
                Connect with licensed therapists who specialize in what you need
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button onClick={toggleFilters} variant="outline" className="rounded-full">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {(onlineOnly || availableNow || specialties.length > 0) && (
                  <span className="ml-2 bg-mindnest-100 text-mindnest-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    {onlineOnly ? 1 : 0 + availableNow ? 1 : 0 + specialties.length}
                  </span>
                )}
              </Button>
            </div>
          </div>

          <SearchBar onSearch={handleSearch} className="mb-8" />

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 glass-card rounded-xl p-5">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold text-slate-900">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-slate-500 hover:text-slate-700 p-0 h-auto"
                  >
                    Clear all
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Price Range</h4>
                    <Slider
                      value={priceRange}
                      min={50}
                      max={200}
                      step={5}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">${priceRange[0]}</span>
                      <span className="text-sm text-slate-600">${priceRange[1]}+</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Session Type</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="online-only" 
                          checked={onlineOnly}
                          onCheckedChange={(checked) => setOnlineOnly(checked as boolean)}
                        />
                        <label
                          htmlFor="online-only"
                          className="text-sm text-slate-700 cursor-pointer"
                        >
                          Online sessions only
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="available-now" 
                          checked={availableNow}
                          onCheckedChange={(checked) => setAvailableNow(checked as boolean)}
                        />
                        <label
                          htmlFor="available-now"
                          className="text-sm text-slate-700 cursor-pointer"
                        >
                          Available today
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Specialties</h4>
                    <div className="space-y-2">
                      {["Anxiety", "Depression", "Trauma", "Relationships", "LGBTQ+", "Grief", "Stress"].map((specialty) => (
                        <div key={specialty} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`specialty-${specialty}`} 
                            checked={specialties.includes(specialty)}
                            onCheckedChange={() => toggleSpecialty(specialty)}
                          />
                          <label
                            htmlFor={`specialty-${specialty}`}
                            className="text-sm text-slate-700 cursor-pointer"
                          >
                            {specialty}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Location</h4>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        placeholder="City, State, or Zip"
                        className="pl-9"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Filters - Mobile */}
            <div 
              className={`lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ${
                isFilterOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={toggleFilters}></div>
              <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl overflow-y-auto">
                <div className="p-5 border-b border-slate-200 flex justify-between items-center">
                  <h3 className="font-semibold text-slate-900">Filters</h3>
                  <Button variant="ghost" size="icon" onClick={toggleFilters}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-5 space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Price Range</h4>
                    <Slider
                      value={priceRange}
                      min={50}
                      max={200}
                      step={5}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">${priceRange[0]}</span>
                      <span className="text-sm text-slate-600">${priceRange[1]}+</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Session Type</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-online-only" 
                          checked={onlineOnly}
                          onCheckedChange={(checked) => setOnlineOnly(checked as boolean)}
                        />
                        <label
                          htmlFor="mobile-online-only"
                          className="text-sm text-slate-700 cursor-pointer"
                        >
                          Online sessions only
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="mobile-available-now" 
                          checked={availableNow}
                          onCheckedChange={(checked) => setAvailableNow(checked as boolean)}
                        />
                        <label
                          htmlFor="mobile-available-now"
                          className="text-sm text-slate-700 cursor-pointer"
                        >
                          Available today
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Specialties</h4>
                    <div className="space-y-2">
                      {["Anxiety", "Depression", "Trauma", "Relationships", "LGBTQ+", "Grief", "Stress"].map((specialty) => (
                        <div key={specialty} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`mobile-specialty-${specialty}`} 
                            checked={specialties.includes(specialty)}
                            onCheckedChange={() => toggleSpecialty(specialty)}
                          />
                          <label
                            htmlFor={`mobile-specialty-${specialty}`}
                            className="text-sm text-slate-700 cursor-pointer"
                          >
                            {specialty}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Location</h4>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        placeholder="City, State, or Zip"
                        className="pl-9"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-3">
                    <Button onClick={toggleFilters} className="w-full">
                      Apply Filters
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={clearFilters}
                      className="w-full"
                    >
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Therapist Listings */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-slate-500">
                  Showing {mockTherapists.length} therapists
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-slate-700 mr-2">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockTherapists.map((therapist, index) => (
                  <div 
                    key={therapist.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TherapistCard therapist={therapist} />
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Button variant="outline" size="lg" className="rounded-full">
                  Load More Therapists
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Therapists;
