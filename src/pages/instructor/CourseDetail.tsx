import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Users,
  Calendar,
  Award,
  Video,
  FileText,
  Download,
  Target,
  CheckCircle,
  GraduationCap,
  Building,
} from "lucide-react";

const InstructorCourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Mock course data - in a real app, fetch based on courseId
  const course = {
    id: courseId,
    title: "HSE Level 1 - Health, Safety & Environment",
    category: "Health & Safety",
    duration: "4 weeks",
    students: 45,
    status: "Active",
    price: "₦150,000",
    description:
      "Comprehensive HSE training course covering fundamental principles and practices for workplace safety in the oil and gas industry.",
    scope:
      "Introduction to HSE principles, hazard identification, risk assessment, safety procedures, emergency response, and safety culture.",
    competence: "Basic HSE awareness and fundamental safety practices",
    entryRequirements: "Basic education and English proficiency",
    accreditation: "International Institute of Risk and Safety Management",
    schedule: [
      { id: "1", week: "Week 1", topic: "Introduction to HSE Principles", date: "Dec 17, 2025" },
      { id: "2", week: "Week 2", topic: "Hazard Identification & Risk Assessment", date: "Dec 24, 2025" },
      { id: "3", week: "Week 3", topic: "Safety Procedures & PPE", date: "Dec 31, 2025" },
      { id: "4", week: "Week 4", topic: "Emergency Response & Final Assessment", date: "Jan 7, 2026" },
    ],
    liveClasses: [
      { id: "1", title: "Week 1 - Introduction Session", date: "Dec 17, 2025", time: "10:00 AM", platform: "Zoom" },
      { id: "2", title: "Week 2 - Practical Workshop", date: "Dec 24, 2025", time: "10:00 AM", platform: "Google Meet" },
      { id: "3", title: "Week 4 - Final Review", date: "Jan 7, 2026", time: "10:00 AM", platform: "Zoom" },
    ],
    materials: [
      { id: "1", name: "HSE Fundamentals Guide.pdf", type: "PDF", size: "2.5 MB" },
      { id: "2", name: "Risk Assessment Template.xlsx", type: "Excel", size: "156 KB" },
      { id: "3", name: "Week 1 Lecture Video.mp4", type: "Video", size: "450 MB" },
      { id: "4", name: "Safety Procedures Handbook.pdf", type: "PDF", size: "3.2 MB" },
    ],
  };

  return (
    <div className="p-6">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate("/instructor/courses")}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Courses
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <p className="text-muted-foreground mt-1">{course.category}</p>
                </div>
                <Badge variant={course.status === "Active" ? "default" : "secondary"}>
                  {course.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{course.students} students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>{course.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Scope */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Course Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{course.scope}</p>
            </CardContent>
          </Card>

          {/* Competence & Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Competence Developed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.competence}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Entry Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.entryRequirements}</p>
              </CardContent>
            </Card>
          </div>

          {/* Accreditation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-amber-600" />
                Accreditation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{course.accreditation}</p>
            </CardContent>
          </Card>

          {/* Course Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Course Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.schedule.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{item.week}</Badge>
                      <span className="font-medium">{item.topic}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-600" />
                Scheduled Live Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.liveClasses.map((liveClass) => (
                  <div
                    key={liveClass.id}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{liveClass.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {liveClass.date} at {liveClass.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{liveClass.platform}</Badge>
                      <Button size="sm">Start Class</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Video className="h-4 w-4 mr-2" />
                Schedule Live Class
              </Button>
              <Button className="w-full" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Upload Material
              </Button>
              <Button className="w-full" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                View Students
              </Button>
              <Button className="w-full" variant="outline">
                <Award className="h-4 w-4 mr-2" />
                Issue Certificates
              </Button>
            </CardContent>
          </Card>

          {/* Course Materials */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Course Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.materials.map((material) => (
                  <div
                    key={material.id}
                    className="flex items-center justify-between p-2 bg-muted/50 rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{material.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {material.type} • {material.size}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Student Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Student Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Enrolled</span>
                  <span className="font-medium">{course.students}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Completed</span>
                  <span className="font-medium text-green-600">32</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">In Progress</span>
                  <span className="font-medium text-blue-600">10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Not Started</span>
                  <span className="font-medium text-amber-600">3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InstructorCourseDetail;
