
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/70 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold bg-gradient-to-r from-mindnest-600 to-mindnest-800 bg-clip-text text-transparent">
              MindNest
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/therapists"
              className="text-slate-600 hover:text-mindnest-600 transition-colors"
            >
              Find Therapists
            </Link>
            <Link
              to="/about"
              className="text-slate-600 hover:text-mindnest-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/join"
              className="text-slate-600 hover:text-mindnest-600 transition-colors"
            >
              Join as Therapist
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="outline" size="sm" className="rounded-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            
            {isLoggedIn ? (
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="rounded-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" size="sm" className="rounded-full">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-mindnest-600 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-4 py-4 space-y-3 bg-white/90 backdrop-blur-lg">
          <Link
            to="/therapists"
            className="block py-2 text-slate-600 hover:text-mindnest-600"
            onClick={() => setIsOpen(false)}
          >
            Find Therapists
          </Link>
          <Link
            to="/about"
            className="block py-2 text-slate-600 hover:text-mindnest-600"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link
            to="/join"
            className="block py-2 text-slate-600 hover:text-mindnest-600"
            onClick={() => setIsOpen(false)}
          >
            Join as Therapist
          </Link>
          <div className="pt-2 border-t border-slate-200">
            {isLoggedIn ? (
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-start rounded-full mt-2">
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full rounded-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
