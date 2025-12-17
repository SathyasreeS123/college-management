import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const scheduleData = [
  { id: 1, time: "08:00 AM", course: "Physics Fundamentals", code: "PHY101", room: "Room 101", instructor: "Dr. Richard Feynman", type: "Lecture" },
  { id: 2, time: "09:00 AM", course: "Introduction to Programming", code: "CS101", room: "Lab 201", instructor: "Dr. Alan Turing", type: "Lab" },
  { id: 3, time: "10:00 AM", course: "Calculus II", code: "MATH201", room: "Room 305", instructor: "Dr. Jane Smith", type: "Lecture" },
  { id: 4, time: "11:00 AM", course: "Data Structures & Algorithms", code: "CS301", room: "Room 202", instructor: "Dr. Donald Knuth", type: "Lecture" },
  { id: 5, time: "01:00 PM", course: "General Chemistry", code: "CHEM101", room: "Lab 102", instructor: "Dr. Marie Curie", type: "Lab" },
  { id: 6, time: "02:00 PM", course: "Molecular Biology", code: "BIO201", room: "Room 401", instructor: "Dr. James Watson", type: "Lecture" },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function ScheduleView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Schedule</h1>
        <p className="text-muted-foreground mt-1">View class schedules and room assignments</p>
      </div>

      {/* Day Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {days.map((day, index) => (
          <button
            key={day}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              index === 0 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Timeline */}
      <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
        <div className="p-4 border-b border-border bg-secondary/30">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">Monday, December 16, 2024</span>
          </div>
        </div>

        <div className="divide-y divide-border">
          {scheduleData.map((item, index) => (
            <div 
              key={item.id} 
              className="p-4 hover:bg-secondary/30 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[80px]">
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <Clock className="h-4 w-4" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{item.course}</h3>
                        <Badge variant="secondary">{item.code}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.instructor}</p>
                    </div>
                    <Badge variant={item.type === "Lab" ? "default" : "outline"}>
                      {item.type}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{item.room}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
