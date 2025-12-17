import { useState } from "react";
import { Search, Plus, Users, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const courses = [
  { id: 1, code: "CS101", name: "Introduction to Programming", department: "Computer Science", credits: 4, students: 120, instructor: "Dr. Alan Turing", schedule: "Mon, Wed 10:00 AM", status: "Active" },
  { id: 2, code: "MATH201", name: "Calculus II", department: "Mathematics", credits: 3, students: 85, instructor: "Dr. Jane Smith", schedule: "Tue, Thu 2:00 PM", status: "Active" },
  { id: 3, code: "PHY101", name: "Physics Fundamentals", department: "Physics", credits: 4, students: 95, instructor: "Dr. Richard Feynman", schedule: "Mon, Wed, Fri 9:00 AM", status: "Active" },
  { id: 4, code: "CS301", name: "Data Structures & Algorithms", department: "Computer Science", credits: 4, students: 65, instructor: "Dr. Donald Knuth", schedule: "Tue, Thu 11:00 AM", status: "Active" },
  { id: 5, code: "CHEM101", name: "General Chemistry", department: "Chemistry", credits: 3, students: 110, instructor: "Dr. Marie Curie", schedule: "Mon, Wed 1:00 PM", status: "Full" },
  { id: 6, code: "BIO201", name: "Molecular Biology", department: "Biology", credits: 4, students: 45, instructor: "Dr. James Watson", schedule: "Wed, Fri 3:00 PM", status: "Active" },
];

export function CoursesView() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Courses</h1>
          <p className="text-muted-foreground mt-1">View and manage all courses offered</p>
        </div>
        <Button variant="gradient" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Course
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search courses by name, code, or department..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course, index) => (
          <div 
            key={course.id} 
            className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 cursor-pointer group animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge variant="secondary" className="mb-2">{course.code}</Badge>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {course.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{course.department}</p>
              </div>
              <Badge variant={course.status === "Active" ? "default" : "destructive"}>
                {course.status}
              </Badge>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{course.students} students enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{course.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>{course.credits} credits</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Instructor: <span className="text-foreground font-medium">{course.instructor}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
