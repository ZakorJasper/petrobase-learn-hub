import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Users, GraduationCap, TrendingUp, Clock, Eye, Mail } from "lucide-react";

interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  enrolledDate: string;
  progress: number;
  status: "Active" | "Completed" | "Inactive";
  lastActive: string;
}

const InstructorStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");

  const students: Student[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      course: "HSE Level 1",
      enrolledDate: "Nov 15, 2025",
      progress: 75,
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      course: "HSE Level 1",
      enrolledDate: "Nov 18, 2025",
      progress: 45,
      status: "Active",
      lastActive: "1 day ago",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      course: "NDT Level 1",
      enrolledDate: "Oct 20, 2025",
      progress: 100,
      status: "Completed",
      lastActive: "3 days ago",
    },
    {
      id: "4",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      course: "Crane Operations",
      enrolledDate: "Dec 1, 2025",
      progress: 20,
      status: "Active",
      lastActive: "5 hours ago",
    },
    {
      id: "5",
      name: "David Brown",
      email: "david.brown@example.com",
      course: "HSE Level 1",
      enrolledDate: "Sep 10, 2025",
      progress: 100,
      status: "Completed",
      lastActive: "1 week ago",
    },
    {
      id: "6",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      course: "NDT Level 1",
      enrolledDate: "Nov 25, 2025",
      progress: 60,
      status: "Active",
      lastActive: "3 hours ago",
    },
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = courseFilter === "all" || student.course === courseFilter;
    return matchesSearch && matchesCourse;
  });

  const courses = [...new Set(students.map((s) => s.course))];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-heading font-bold">My Students</h2>
        <p className="text-muted-foreground">Track and manage students in your courses</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{students.length}</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {students.filter((s) => s.status === "Active").length}
                </p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {students.filter((s) => s.status === "Completed").length}
                </p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)}%
                </p>
                <p className="text-sm text-muted-foreground">Avg. Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={courseFilter} onValueChange={setCourseFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Enrolled</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.enrolledDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={student.progress} className="w-20 h-2" />
                      <span className="text-sm">{student.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">{student.lastActive}</span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        student.status === "Completed"
                          ? "default"
                          : student.status === "Active"
                          ? "secondary"
                          : "outline"
                      }
                      className={student.status === "Completed" ? "bg-green-600" : ""}
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstructorStudents;
