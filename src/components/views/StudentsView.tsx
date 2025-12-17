import { useState } from "react";
import { Search, Filter, Plus, MoreHorizontal, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const students = [
  { id: 1, name: "John Doe", email: "john.doe@college.edu", phone: "+1 234 567 890", department: "Computer Science", year: "3rd Year", status: "Active", gpa: "3.8" },
  { id: 2, name: "Sarah Smith", email: "sarah.smith@college.edu", phone: "+1 234 567 891", department: "Mathematics", year: "2nd Year", status: "Active", gpa: "3.9" },
  { id: 3, name: "Mike Johnson", email: "mike.j@college.edu", phone: "+1 234 567 892", department: "Physics", year: "4th Year", status: "Active", gpa: "3.5" },
  { id: 4, name: "Emily Brown", email: "emily.b@college.edu", phone: "+1 234 567 893", department: "Chemistry", year: "1st Year", status: "Probation", gpa: "2.8" },
  { id: 5, name: "David Wilson", email: "david.w@college.edu", phone: "+1 234 567 894", department: "Computer Science", year: "3rd Year", status: "Active", gpa: "3.6" },
  { id: 6, name: "Lisa Anderson", email: "lisa.a@college.edu", phone: "+1 234 567 895", department: "Biology", year: "2nd Year", status: "Active", gpa: "3.7" },
];

export function StudentsView() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground mt-1">Manage and view all enrolled students</p>
        </div>
        <Button variant="gradient" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Student
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or department..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Students Table */}
      <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Student</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Department</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Year</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">GPA</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{student.name}</p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {student.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-foreground">{student.department}</td>
                  <td className="py-4 px-6 text-sm text-foreground">{student.year}</td>
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{student.gpa}</td>
                  <td className="py-4 px-6">
                    <Badge variant={student.status === "Active" ? "default" : "destructive"}>
                      {student.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
