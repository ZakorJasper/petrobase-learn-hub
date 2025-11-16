import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Video, FileText, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const navigate = useNavigate();
  
  const enrolledCourses = [
    {
      id: 1,
      title: "HSE Level II",
      progress: 75,
      status: "In Progress",
      nextClass: "Tomorrow, 10:00 AM",
      instructor: "Dr. Emeka Nwosu",
      materials: 12,
    },
    {
      id: 2,
      title: "NDT Level I",
      progress: 100,
      status: "Completed",
      completedDate: "Dec 15, 2024",
      instructor: "Engr. Oluchi Ibe",
      materials: 15,
    },
    {
      id: 3,
      title: "AutoCAD 2D/3D",
      progress: 35,
      status: "In Progress",
      nextClass: "Jan 20, 2025, 2:00 PM",
      instructor: "Engr. David Okon",
      materials: 20,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          My Enrolled Courses
        </h2>
        <p className="text-muted-foreground">
          Manage your active and completed courses
        </p>
      </div>

      <div className="space-y-4">
        {enrolledCourses.map((course) => (
          <Card key={course.id} className="border-border hover:shadow-custom transition-all">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Instructor: {course.instructor}
                    </p>
                    <div className="flex gap-2">
                      <Badge
                        variant={
                          course.status === "Completed" ? "default" : "secondary"
                        }
                      >
                        {course.status}
                      </Badge>
                      {course.nextClass && (
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {course.nextClass}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {course.status === "In Progress" && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-primary to-secondary"
                      >
                        <Video className="mr-2 h-4 w-4" />
                        Join Live Class
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => navigate(`/dashboard/my-courses/${course.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="flex gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>{course.materials} Materials</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Course Progress</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
