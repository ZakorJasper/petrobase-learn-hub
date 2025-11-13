import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, FileText, BarChart3, Video } from "lucide-react";

const Overview = () => {
  const user = {
    name: "John Doe",
    enrolledCourses: 3,
    completedCourses: 1,
    certificates: 1,
  };

  const courses = [
    {
      id: 1,
      title: "HSE Level II",
      progress: 75,
      status: "In Progress",
      nextClass: "Tomorrow, 10:00 AM",
    },
    {
      id: 2,
      title: "NDT Level I",
      progress: 100,
      status: "Completed",
      completedDate: "Dec 15, 2024",
    },
    {
      id: 3,
      title: "AutoCAD 2D/3D",
      progress: 35,
      status: "In Progress",
      nextClass: "Jan 20, 2025, 2:00 PM",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          Welcome back, {user.name}!
        </h2>
        <p className="text-muted-foreground">
          Track your learning progress and manage your courses
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">{user.enrolledCourses}</p>
                <p className="text-sm text-muted-foreground">Active Courses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">{user.completedCourses}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">{user.certificates}</p>
                <p className="text-sm text-muted-foreground">Certificates</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-muted-foreground">Avg. Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Courses */}
      <div className="space-y-4">
        <h3 className="text-xl font-heading font-semibold">My Active Courses</h3>
        {courses.map((course) => (
          <Card key={course.id} className="border-border hover:shadow-custom transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {course.title}
                  </h3>
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
                        Next: {course.nextClass}
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
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Overview;
