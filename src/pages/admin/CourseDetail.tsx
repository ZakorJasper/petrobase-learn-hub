import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, Users, Calendar, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CourseSchedule {
  week: string;
  topic: string;
  date: string;
}

interface LiveClass {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  status: "scheduled" | "live" | "completed";
}

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  enrolledStudents: number;
  status: "active" | "draft" | "archived";
  description: string;
  schedule?: CourseSchedule[];
  liveClasses?: LiveClass[];
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "HSE Level I",
    category: "Health, Safety & Environment",
    duration: "3 weeks",
    level: "Beginner",
    enrolledStudents: 24,
    status: "active",
    description: "Foundational health, safety, and environment training covering workplace safety protocols, hazard identification, risk assessment, and emergency response procedures.",
    schedule: [
      { week: "Week 1", topic: "Introduction to HSE", date: "2025-12-17" },
      { week: "Week 2", topic: "Risk Assessment", date: "2025-12-24" },
      { week: "Week 3", topic: "Emergency Response", date: "2025-12-31" },
    ],
    liveClasses: [
      { id: "1", title: "HSE Level I - Session 1", date: "2025-12-17", time: "10:00 AM", duration: "2 hours", status: "scheduled" },
      { id: "2", title: "HSE Level I - Session 2", date: "2025-12-24", time: "10:00 AM", duration: "2 hours", status: "scheduled" },
    ],
  },
  {
    id: "2",
    title: "NDT Level II - Ultrasonic Testing",
    category: "Non-Destructive Testing",
    duration: "4 weeks",
    level: "Intermediate",
    enrolledStudents: 15,
    status: "active",
    description: "Advanced ultrasonic testing techniques and certification",
    schedule: [
      { week: "Week 1", topic: "UT Fundamentals", date: "2025-12-18" },
      { week: "Week 2", topic: "Equipment Operation", date: "2025-12-25" },
    ],
    liveClasses: [],
  },
];

const AdminCourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h2>
          <Button onClick={() => navigate("/admin/courses")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: Course["status"]) => {
    const variants = {
      active: "default",
      draft: "secondary",
      archived: "outline",
    };
    return (
      <Badge variant={variants[status] as any}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getLiveClassStatusBadge = (status: LiveClass["status"]) => {
    const variants: Record<LiveClass["status"], string> = {
      scheduled: "secondary",
      live: "default",
      completed: "outline",
    };
    const colors: Record<LiveClass["status"], string> = {
      scheduled: "bg-blue-500/10 text-blue-600 border-blue-200",
      live: "bg-green-500/10 text-green-600 border-green-200",
      completed: "",
    };
    return (
      <Badge variant={variants[status] as any} className={colors[status]}>
        {status === "live" && <span className="mr-1 h-2 w-2 bg-green-600 rounded-full animate-pulse" />}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate("/admin/courses")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">Edit Course</Button>
          <Button>Enroll Students</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary">{course.title}</h1>
          <p className="text-muted-foreground mt-2">{course.description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{course.category}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{course.enrolledStudents} students enrolled</span>
          </div>
          <Badge variant="outline">{course.level}</Badge>
          {getStatusBadge(course.status)}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Course Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            {course.schedule && course.schedule.length > 0 ? (
              <div className="space-y-4">
                {course.schedule.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex-shrink-0 w-20">
                      <Badge variant="outline">{item.week}</Badge>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.topic}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">
                No schedule available for this course yet.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Live Classes ({course.liveClasses?.length || 0})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {course.liveClasses && course.liveClasses.length > 0 ? (
              <div className="space-y-3">
                {course.liveClasses.map((liveClass) => (
                  <div key={liveClass.id} className="p-3 border border-border rounded-lg space-y-2">
                    <div className="flex items-start justify-between">
                      <p className="font-medium text-sm">{liveClass.title}</p>
                      {getLiveClassStatusBadge(liveClass.status)}
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{new Date(liveClass.date).toLocaleDateString()}</span>
                      <span>{liveClass.time}</span>
                      <span>{liveClass.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">
                No live classes scheduled yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enrolled Students</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Enrollment Date</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Student enrollment data will be displayed here.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCourseDetail;
