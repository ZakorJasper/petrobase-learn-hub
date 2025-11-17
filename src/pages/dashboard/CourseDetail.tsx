import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, FileText, Video, BookOpen, Download, Award, GraduationCap, FileCheck } from "lucide-react";

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
      courseScope: "Introduction to HSE principles, hazard identification, risk assessment, safety procedures, emergency response, and safety culture.",
      competenceDeveloped: "Basic HSE awareness and fundamental safety practices",
      entryRequirements: "Basic education and English proficiency",
      accreditation: "International Institute of Risk and Safety Management",
      schedule: [
        { week: 1, topic: "Advanced Risk Management", date: "Jan 15-19, 2025" },
        { week: 2, topic: "Incident Investigation", date: "Jan 22-26, 2025" },
        { week: 3, topic: "Safety Audits & HSE Legislation", date: "Jan 29 - Feb 2, 2025" },
      ],
      duration: "3 weeks",
      courseMaterials: [
        { id: "1", name: "HSE Level II Course Manual", type: "PDF", size: "6.5 MB", uploadDate: "2025-01-10" },
        { id: "2", name: "Risk Management Handbook", type: "PDF", size: "4.2 MB", uploadDate: "2025-01-10" },
        { id: "3", name: "HSE Legislation Guide", type: "PDF", size: "3.1 MB", uploadDate: "2025-01-12" },
      ],
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
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FileCheck className="mr-2 h-5 w-5 text-primary" />
                  Course Scope
                </h3>
                <p className="text-muted-foreground leading-relaxed">{course.courseScope}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Competence Developed
                </h3>
                <p className="text-muted-foreground leading-relaxed">{course.competenceDeveloped}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FileCheck className="mr-2 h-5 w-5 text-primary" />
                  Entry Requirements
                </h3>
                <p className="text-muted-foreground leading-relaxed">{course.entryRequirements}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  Accreditation
                </h3>
                <p className="text-muted-foreground leading-relaxed">{course.accreditation}</p>
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

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Download className="mr-2 h-5 w-5 text-primary" />
                  Course Materials
                </h3>
                <div className="space-y-3">
                  {course.courseMaterials?.map((material) => (
                    <Card key={material.id} className="border-border hover:bg-accent/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-semibold">{material.name}</p>
                            <div className="flex gap-3 text-xs text-muted-foreground mt-1">
                              <span>{material.type}</span>
                              <span>•</span>
                              <span>{material.size}</span>
                              <span>•</span>
                              <span>{new Date(material.uploadDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
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