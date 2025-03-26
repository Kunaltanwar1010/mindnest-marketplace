
import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void;
  className?: string;
  compact?: boolean;
}

const SearchBar = ({ onSearch, className = "", compact = false }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, location);
    }
  };

  if (compact) {
    return (
      <form onSubmit={handleSearch} className={`flex items-center ${className}`}>
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            className="pl-9 py-2 pr-3 rounded-l-full rounded-r-none border-r-0"
            placeholder="Search therapists..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button type="submit" className="rounded-l-none rounded-r-full">
          Search
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSearch} className={`glass-card rounded-xl p-3 md:p-4 ${className}`}>
      <div className="flex flex-col md:flex-row gap-2 md:gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input
            className="pl-10 py-6 pr-4 rounded-xl"
            placeholder="Search by specialty, issue, or therapist name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input
            className="pl-10 py-6 pr-4 rounded-xl"
            placeholder="Location (City, State, or Zip)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <Button type="submit" className="h-auto md:h-full py-4 md:py-0 px-6 rounded-xl" size="lg">
          Search
        </Button>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <Filter className="h-3 w-3 mr-1" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="rounded-full hidden md:flex">
            Online Only
          </Button>
          <Button variant="outline" size="sm" className="rounded-full hidden lg:flex">
            Available Today
          </Button>
        </div>
        <div className="text-xs text-slate-500 hidden md:block">
          <span>Showing all therapists in your area</span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
