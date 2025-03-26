
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Star, 
  MapPin, 
  Video, 
  Clock, 
  Calendar as CalendarIcon, 
  ChevronRight, 
  MessageSquare, 
  Languages, 
  BookOpen,
  CheckCircle2,
  Heart
} from "lucide-react";

// Mock therapist details
const therapistData = {
  id: 1,
  name: "Dr. Sarah Johnson",
  avatar: "https://i.pravatar.cc/300?img=1",
  title: "Licensed Psychologist, PhD",
  specialties: ["Anxiety", "Depression", "Trauma", "PTSD", "Stress", "Life Transitions"],
  rating: 4.9,
  reviewCount: 127,
  location: "New York, NY",
  online: true,
  price: "$120",
  yearsExperience: 12,
  languages: ["English", "Spanish"],
  education: [
    { degree: "PhD in Clinical Psychology", institution: "Columbia University", year: 2011 },
    { degree: "MA in Psychology", institution: "New York University", year: 2007 },
    { degree: "BA in Psychology", institution: "University of Michigan", year: 2005 }
  ],
  licenses: ["Licensed Psychologist - NY #12345", "National Certified Counselor #54321"],
  insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "United Healthcare"],
  about: "I'm a licensed clinical psychologist with over 12 years of experience treating individuals struggling with anxiety, depression, trauma, and life transitions. My approach combines evidence-based techniques such as Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), and mindfulness practices.\n\nI believe therapy should be a collaborative process where we work together to understand your unique challenges and develop practical strategies to help you thrive. My goal is to create a warm, non-judgmental space where you feel safe to explore your thoughts, feelings, and experiences.\n\nWhether you're going through a difficult life transition, managing chronic stress, or seeking to understand yourself better, I'm here to support you on your journey toward healing and growth.",
  approach: "My therapeutic approach is integrative, drawing primarily from evidence-based modalities including Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), and mindfulness-based interventions. I tailor my approach to meet each client's unique needs and goals.\n\nI view therapy as a collaborative process and believe that the therapeutic relationship is a powerful vehicle for change. Throughout our work together, I'll help you identify patterns that may be keeping you stuck, develop practical coping strategies, and build resilience for long-term growth.",
  reviews: [
    {
      id: 1,
      name: "Jessica M.",
      rating: 5,
      date: "October 10, 2023",
      content: "Dr. Johnson has been incredibly helpful in my journey with anxiety. She's knowledgeable, compassionate, and provides practical tools I can use in my daily life. After six months of working with her, I've seen significant improvements in my ability to manage stress and worry."
    },
    {
      id: 2,
      name: "Robert T.",
      rating: 5,
      date: "August 22, 2023",
      content: "I started seeing Dr. Johnson after a traumatic experience. Her expertise in trauma treatment has been life-changing. She created a safe space for me to process my experiences and has guided me toward healing with patience and understanding."
    },
    {
      id: 3,
      name: "Maya K.",
      rating: 4,
      date: "July 5, 2023",
      content: "Dr. Johnson is thoughtful and insightful. She's helped me understand patterns in my relationships and develop healthier communication skills. The only reason for 4 stars instead of 5 is that sometimes the online platform has technical issues, but that's not her fault."
    }
  ],
  availability: {
    monday: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
    tuesday: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
    wednesday: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
    thursday: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
    friday: ["9:00 AM", "11:00 AM", "2:00 PM"]
  }
};

const TherapistProfile = () => {
  const { id } = useParams();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [sessionType, setSessionType] = useState<string>("video");
  
  // In a real app, you would fetch the therapist data based on the ID
  const therapist = therapistData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <div className="mb-6 flex items-center text-sm text-slate-500">
              <Link to="/" className="hover:text-mindnest-600">Home</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link to="/therapists" className="hover:text-mindnest-600">Therapists</Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-slate-900">{therapist.name}</span>
            </div>

            {/* Profile Header */}
            <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 lg:w-1/4">
                  <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={therapist.avatar}
                      alt={therapist.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-3 right-3">
                      <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                        <Heart className="h-5 w-5 text-slate-700" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 lg:w-3/4">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{therapist.name}</h1>
                      <p className="text-slate-600 mb-3">{therapist.title}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex items-center text-yellow-400 mr-3">
                          <Star className="h-5 w-5 fill-yellow-400" />
                          <span className="ml-1 font-medium text-slate-900">{therapist.rating}</span>
                          <span className="text-slate-500 ml-1">({therapist.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center text-slate-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{therapist.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {therapist.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="rounded-full">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="flex items-center">
                          <div className="bg-mindnest-50 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                            <Clock className="h-5 w-5 text-mindnest-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{therapist.yearsExperience} Years</p>
                            <p className="text-xs text-slate-500">Experience</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="bg-mindnest-50 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                            <Video className="h-5 w-5 text-mindnest-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">Online</p>
                            <p className="text-xs text-slate-500">Sessions</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="bg-mindnest-50 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                            <Languages className="h-5 w-5 text-mindnest-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{therapist.languages.join(", ")}</p>
                            <p className="text-xs text-slate-500">Languages</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="bg-mindnest-50 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                            <BookOpen className="h-5 w-5 text-mindnest-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">PhD, MA</p>
                            <p className="text-xs text-slate-500">Education</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
                      <p className="text-slate-500 text-sm mb-1">Session starts from</p>
                      <p className="text-2xl font-bold text-slate-900 mb-3">{therapist.price}</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="rounded-full">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Book Session
                        </Button>
                        <Button variant="outline" className="rounded-full">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - About, Reviews, etc. */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="approach">Approach</TabsTrigger>
                    <TabsTrigger value="credentials">Credentials</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">About Dr. Sarah</h2>
                    <div className="text-slate-700 space-y-4">
                      {therapist.about.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="approach" className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">Therapeutic Approach</h2>
                    <div className="text-slate-700 space-y-4">
                      {therapist.approach.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="credentials" className="glass-card rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">Education & Credentials</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-slate-900 mb-3">Education</h3>
                      <div className="space-y-4">
                        {therapist.education.map((edu, idx) => (
                          <div key={idx} className="flex">
                            <div className="bg-mindnest-50 w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-mindnest-700 font-medium">{edu.year}</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{edu.degree}</p>
                              <p className="text-slate-600">{edu.institution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-slate-900 mb-3">Licenses & Certifications</h3>
                      <ul className="space-y-2">
                        {therapist.licenses.map((license, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-mindnest-600 mr-2 mt-0.5" />
                            <span className="text-slate-700">{license}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-3">Insurance Accepted</h3>
                      <div className="flex flex-wrap gap-2">
                        {therapist.insuranceAccepted.map((insurance, idx) => (
                          <Badge key={idx} variant="outline" className="bg-slate-50">
                            {insurance}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="glass-card rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-slate-900">Client Reviews</h2>
                      <div className="flex items-center">
                        <div className="flex items-center text-yellow-400 mr-2">
                          <Star className="h-5 w-5 fill-yellow-400" />
                          <span className="ml-1 font-medium text-slate-900">{therapist.rating}</span>
                        </div>
                        <span className="text-slate-500">({therapist.reviewCount} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {therapist.reviews.map((review) => (
                        <div key={review.id} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-medium text-slate-900">{review.name}</p>
                              <p className="text-sm text-slate-500">{review.date}</p>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, idx) => (
                                <Star 
                                  key={idx} 
                                  className={`h-4 w-4 ${idx < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-700">{review.content}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <Button variant="outline" className="rounded-full">
                        View All Reviews
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Column - Booking */}
              <div>
                <div className="glass-card rounded-xl p-6 mb-6 sticky top-24">
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">Book a Session</h2>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-slate-900 mb-2">Select Session Type</h3>
                    <Select value={sessionType} onValueChange={setSessionType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Session</SelectItem>
                        <SelectItem value="in-person">In-Person Session</SelectItem>
                        <SelectItem value="phone">Phone Session</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-slate-900 mb-2">Select Date</h3>
                    <div className="border border-slate-200 rounded-lg p-3">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-slate-900 mb-2">Available Time Slots</h3>
                    {date && (
                      <div className="grid grid-cols-2 gap-2">
                        {therapist.availability.monday.map((time, idx) => (
                          <Button
                            key={idx}
                            variant={timeSlot === time ? "default" : "outline"}
                            className="rounded-lg"
                            onClick={() => setTimeSlot(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-slate-100 pt-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-600">Session fee</span>
                      <span className="font-medium">{therapist.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Platform fee</span>
                      <span className="text-slate-500">$5.00</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center font-medium text-lg mb-6">
                    <span>Total</span>
                    <span>$125.00</span>
                  </div>
                  
                  <Button className="w-full rounded-xl">
                    Book Appointment
                  </Button>
                  
                  <p className="text-xs text-center text-slate-500 mt-4">
                    You won't be charged until after your appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TherapistProfile;
