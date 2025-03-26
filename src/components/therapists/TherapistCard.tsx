
import { Link } from "react-router-dom";
import { Star, MapPin, Video, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface Therapist {
  id: number;
  name: string;
  avatar: string;
  title: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  location: string;
  online: boolean;
  price: string;
  description?: string;
}

interface TherapistCardProps {
  therapist: Therapist;
  featured?: boolean;
}

const TherapistCard = ({ therapist, featured = false }: TherapistCardProps) => {
  return (
    <Link 
      to={`/therapist/${therapist.id}`} 
      className={`block transition-all duration-300 ${featured ? 'transform hover:-translate-y-1' : ''}`}
    >
      <div className={`glass-card rounded-2xl overflow-hidden ${featured ? 'border-mindnest-200' : ''} hover:shadow-lg transition-shadow duration-300`}>
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
          
          {therapist.description && (
            <p className="mt-3 text-sm text-slate-600 line-clamp-2">{therapist.description}</p>
          )}
          
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
};

export default TherapistCard;
