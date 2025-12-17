import { useState } from "react";
import { Search, Plus, Mail, Phone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const faculty = [
  { id: 1, name: "Dr. Alan Turing", email: "a.turing@college.edu", phone: "+1 234 567 800", department: "Computer Science", position: "Professor", courses: 3, status: "Active" },
  { id: 2, name: "Dr. Jane Smith", email: "j.smith@college.edu", phone: "+1 234 567 801", department: "Mathematics", position: "Associate Professor", courses: 2, status: "Active" },
  { id: 3, name: "Dr. Richard Feynman", email: "r.feynman@college.edu", phone: "+1 234 567 802", department: "Physics", position: "Professor", courses: 2, status: "Active" },
  { id: 4, name: "Dr. Donald Knuth", email: "d.knuth@college.edu", phone: "+1 234 567 803", department: "Computer Science", position: "Professor", courses: 1, status: "Active" },
  { id: 5, name: "Dr. Marie Curie", email: "m.curie@college.edu", phone: "+1 234 567 804", department: "Chemistry", position: "Department Head", courses: 2, status: "On Leave" },
  { id: 6, name: "Dr. James Watson", email: "j.watson@college.edu", phone: "+1 234 567 805", department: "Biology", position: "Associate Professor", courses: 2, status: "Active" },
];

export function FacultyView() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = faculty.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Faculty</h1>
          <p className="text-muted-foreground mt-1">Manage faculty members and their assignments</p>
        </div>
        <Button variant="gradient" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Faculty
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search faculty by name or department..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFaculty.map((member, index) => (
          <div 
            key={member.id} 
            className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-primary-foreground">
                  {member.name.split(' ').slice(1).map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground truncate">{member.name}</h3>
                    <p className="text-sm text-primary">{member.position}</p>
                  </div>
                  <Badge variant={member.status === "Active" ? "default" : "secondary"}>
                    {member.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-muted-foreground">{member.department}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{member.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>{member.courses} active courses</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">View Profile</Button>
              <Button variant="secondary" size="sm" className="flex-1">Contact</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
