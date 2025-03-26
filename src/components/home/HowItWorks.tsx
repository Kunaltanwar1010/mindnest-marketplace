
import { CheckCircle2, Search, Calendar, Video } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-mindnest-600" />,
      title: "Find the right therapist",
      description: "Browse detailed profiles, specialties, approaches, and reviews to find your perfect match."
    },
    {
      icon: <Calendar className="h-8 w-8 text-mindnest-600" />,
      title: "Book your session",
      description: "Select a convenient time from your therapist's available schedule in just a few clicks."
    },
    {
      icon: <Video className="h-8 w-8 text-mindnest-600" />,
      title: "Connect securely",
      description: "Meet via our secure video platform or in-person based on your preference and needs."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How MindNest Works</h2>
          <p className="text-xl text-slate-600">
            Simple, secure, and designed with your mental wellness journey in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-mindnest-50 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-mindnest-50 to-mindnest-100 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="opacity-0 animate-fade-in">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why clients choose MindNest</h3>
              <ul className="space-y-4">
                {[
                  "Personalized matching with the right therapist",
                  "Flexible scheduling that works with your life",
                  "Options for both virtual and in-person sessions",
                  "Secure, HIPAA-compliant platform",
                  "Verified, licensed professionals only"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-mindnest-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-2xl opacity-0 animate-fade-in animate-delay-200">
              <img 
                src="https://i.pravatar.cc/800?img=36" 
                alt="Therapy session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
