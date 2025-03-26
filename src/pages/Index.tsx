
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Hero from "@/components/home/Hero";
import FeaturedTherapists from "@/components/home/FeaturedTherapists";
import HowItWorks from "@/components/home/HowItWorks";
import AuthModal from "@/components/auth/AuthModal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageSquare, HeartHandshake, Star } from "lucide-react";

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"login" | "signup">("login");

  const openLoginModal = () => {
    setAuthModalTab("login");
    setAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setAuthModalTab("signup");
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Featured Therapists */}
        <FeaturedTherapists />

        {/* How It Works */}
        <HowItWorks />

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefits of Therapy</h2>
              <p className="text-xl text-slate-600">
                Discover how therapy through MindNest can help you live a more fulfilling life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <MessageSquare className="h-6 w-6 text-mindnest-600" />,
                  title: "Improved Communication",
                  description: "Develop clearer ways to express your needs and understand others."
                },
                {
                  icon: <HeartHandshake className="h-6 w-6 text-mindnest-600" />,
                  title: "Better Relationships",
                  description: "Build healthier connections with partners, family, friends, and colleagues."
                },
                {
                  icon: <Star className="h-6 w-6 text-mindnest-600" />,
                  title: "Enhanced Self-Awareness",
                  description: "Gain insights into your patterns, strengths, and areas for growth."
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-mindnest-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to="/therapists">
                <Button size="lg" className="rounded-full">
                  Find Your Therapist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-slate-600">
                Real stories from people who found the right therapist on MindNest
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  text: "Finding my therapist on MindNest changed my life. The matching process was so personalized, and I felt comfortable from our very first session.",
                  name: "Sarah T.",
                  location: "Chicago, IL"
                },
                {
                  text: "After struggling with anxiety for years, I finally found a therapist who understands me. The online sessions fit perfectly into my busy schedule.",
                  name: "Michael R.",
                  location: "Seattle, WA"
                },
                {
                  text: "As someone who was skeptical about therapy, MindNest made the process so easy and comfortable. My therapist has helped me navigate some difficult life transitions.",
                  name: "Jennifer K.",
                  location: "Austin, TX"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center mt-4 pt-4 border-t border-slate-100">
                    <div className="bg-mindnest-100 h-10 w-10 rounded-full flex items-center justify-center text-mindnest-700 font-medium mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-mindnest-500 to-mindnest-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to start your therapy journey?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands who have found the right therapist and started their path to better mental wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openSignupModal}
                  size="lg" 
                  variant="default" 
                  className="bg-white text-mindnest-600 hover:bg-white/90 rounded-full"
                >
                  Create an Account
                </Button>
                <Button 
                  onClick={openLoginModal}
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 rounded-full"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authModalTab}
      />
    </div>
  );
};

export default Index;
