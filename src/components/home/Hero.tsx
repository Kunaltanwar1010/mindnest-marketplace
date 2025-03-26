
import { useState } from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-mindnest-100 -top-48 -right-24 blur-3xl opacity-60"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-mindnest-200 bottom-0 left-0 blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Your path to 
            <span className="bg-gradient-to-r from-mindnest-600 to-mindnest-800 bg-clip-text text-transparent"> mental wellness </span> 
            starts here
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect with qualified mental health professionals who are the perfect match for your unique needs and journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in animate-delay-200">
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                <Input
                  className="pl-10 pr-4 py-6 w-full text-slate-900 placeholder:text-slate-400 rounded-xl border-slate-200 hover:border-slate-300 focus-visible:ring-mindnest-500"
                  placeholder="Search by specialty, issue, or therapist name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex-grow relative">
                <MapPin className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                <Input
                  className="pl-10 pr-4 py-6 w-full text-slate-900 placeholder:text-slate-400 rounded-xl border-slate-200 hover:border-slate-300 focus-visible:ring-mindnest-500"
                  placeholder="Location (City, State, or Zip)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <Button className="h-auto py-6 px-8 rounded-xl text-base font-medium transition-all">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-slate-500 mr-2 mt-1">Popular:</span>
              <Button variant="outline" size="sm" className="rounded-full text-sm">
                Anxiety
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-sm">
                Depression
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-sm">
                Trauma
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-sm">
                Couples Therapy
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-sm">
                Online Sessions
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>Already working with a therapist? <a href="/login" className="text-mindnest-600 hover:text-mindnest-700 font-medium">Sign in</a> to book your next appointment</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-0 animate-fade-in animate-delay-300">
          <div className="text-center">
            <div className="bg-mindnest-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <div className="bg-mindnest-100 w-10 h-10 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-mindnest-600" />
              </div>
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-900 block mb-1">5,000+</span>
              Therapy Sessions
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-mindnest-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <div className="bg-mindnest-100 w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-mindnest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-900 block mb-1">800+</span>
              Licensed Therapists
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-mindnest-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <div className="bg-mindnest-100 w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-mindnest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-900 block mb-1">100%</span>
              Licensed Providers
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-mindnest-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <div className="bg-mindnest-100 w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-mindnest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-medium text-slate-900 block mb-1">4.9/5</span>
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
