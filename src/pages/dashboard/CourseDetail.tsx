import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, FileText, Video, BookOpen } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock course data
  const courses = [
    {
      id: 1,
      title: "HSE Level II",
      progress: 75,
      status: "In Progress",
      nextClass: "Tomorrow, 10:00 AM",
      instructor: "Dr. Emeka Nwosu",
      materials: 12,
      description: "Advanced Health, Safety & Environment management for supervisory roles in industrial settings.",
      schedule: [
        { week: 1, topic: "Advanced Risk Management", date: "Jan 15-19, 2025" },
        { week: 2, topic: "Incident Investigation", date: "Jan 22-26, 2025" },
        { week: 3, topic: "Safety Audits & HSE Legislation", date: "Jan 29 - Feb 2, 2025" },
      ],
      duration: "3 weeks",
    },
    {
      id: 2,
      title: "NDT Level I",
      progress: 100,
      status: "Completed",
      completedDate: "Dec 15, 2024",
      instructor: "Engr. Oluchi Ibe",
      materials: 15,
      description: "Introduction to Non-Destructive Testing techniques and equipment.",
      schedule: [
        { week: 1, topic: "Visual Inspection & UT", date: "Nov 18-22, 2024" },
        { week: 2, topic: "Radiographic & Magnetic Testing", date: "Nov 25-29, 2024" },
        { week: 3, topic: "Dye Penetrant & Certification", date: "Dec 2-6, 2024" },
      ],
      duration: "3 weeks",
    },
    {
      id: 3,
      title: "AutoCAD 2D/3D",
      progress: 35,
      status: "In Progress",
      nextClass: "Jan 20, 2025, 2:00 PM",
      instructor: "Engr. David Okon",
      materials: 20,
      description: "Comprehensive AutoCAD training for engineering design and drafting.",
      schedule: [
        { week: 1, topic: "2D Drawing Basics", date: "Jan 8-12, 2025" },
        { week: 2, topic: "Advanced 2D & Layers", date: "Jan 15-19, 2025" },
        { week: 3, topic: "3D Modeling Introduction", date: "Jan 22-26, 2025" },
        { week: 4, topic: "3D Advanced & Rendering", date: "Jan 29 - Feb 2, 2025" },
        { week: 5, topic: "Layouts & Plotting", date: "Feb 5-9, 2025" },
        { week: 6, topic: "Project & Certification", date: "Feb 12-16, 2025" },
      ],
      duration: "6 weeks",
    },
  ];

  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <Button onClick={() => navigate("/dashboard/my-courses")}>
            Back to My Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <Button variant="ghost" onClick={() => navigate("/dashboard/my-courses")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to My Courses
      </Button>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">
                    Instructor: {course.instructor}
                  </p>
                  <Badge variant={course.status === "Completed" ? "default" : "secondary"}>
                    {course.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  Course Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Course Schedule
                </h3>
                <div className="space-y-3">
                  {course.schedule.map((week) => (
                    <Card key={week.week} className="border-border">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold">Week {week.week}: {week.topic}</p>
                            <p className="text-sm text-muted-foreground mt-1">{week.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardContent className="p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Duration</span>
                </div>
                <p className="text-xl font-bold">{course.duration}</p>
              </div>

              {course.nextClass && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Next Class</span>
                  </div>
                  <p className="text-sm font-semibold">{course.nextClass}</p>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Materials</span>
                </div>
                <p className="text-xl font-bold">{course.materials}</p>
              </div>

              {course.status === "In Progress" && (
                <Button className="w-full" size="lg">
                  <Video className="mr-2 h-4 w-4" />
                  Join Live Class
                </Button>
              )}

              <Button variant="outline" className="w-full" size="lg">
                <FileText className="mr-2 h-4 w-4" />
                View Materials
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;