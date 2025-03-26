
import { Link } from "react-router-dom";
import { Heart, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold bg-gradient-to-r from-mindnest-600 to-mindnest-800 bg-clip-text text-transparent">
                MindNest
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs">
              Connecting you with the perfect mental health professional to support your journey.
            </p>
            <div className="flex space-x-4 text-slate-400">
              <a href="#" className="hover:text-mindnest-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-mindnest-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-mindnest-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-mindnest-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/therapists" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Find a Therapist
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 mb-4">For Therapists</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/join" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Join as Therapist
                </Link>
              </li>
              <li>
                <Link to="/therapist-faq" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Therapist FAQs
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Business Resources
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 hover:text-mindnest-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} MindNest. All rights reserved.
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <span className="text-xs text-slate-400 flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> for better mental health
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
