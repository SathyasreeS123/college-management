import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Faculty Meeting",
    date: "Dec 18, 2024",
    time: "10:00 AM",
    location: "Conference Room A"
  },
  {
    id: 2,
    title: "Student Orientation",
    date: "Dec 20, 2024",
    time: "9:00 AM",
    location: "Main Auditorium"
  },
  {
    id: 3,
    title: "Semester Exams Begin",
    date: "Dec 22, 2024",
    time: "8:00 AM",
    location: "All Blocks"
  },
];

export function UpcomingEvents() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-slide-up" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Events</h3>
        <Calendar className="h-5 w-5 text-muted-foreground" />
      </div>
      
      <div className="space-y-4">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
          >
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {event.title}
            </h4>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span>{event.date} • {event.time}</span>
            </div>
            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{event.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
