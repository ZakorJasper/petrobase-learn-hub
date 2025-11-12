import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Video, 
  Award, 
  FileText, 
  CreditCard,
  User,
  LogOut,
  BarChart3
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    enrolledCourses: 3,
    completedCourses: 1,
    certificates: 1
  };

  const courses = [
    {
      id: 1,
      title: "HSE Level II",
      progress: 75,
      status: "In Progress",
      nextClass: "Tomorrow, 10:00 AM"
    },
    {
      id: 2,
      title: "NDT Level I",
      progress: 100,
      status: "Completed",
      completedDate: "Dec 15, 2024"
    },
    {
      id: 3,
      title: "AutoCAD 2D/3D",
      progress: 35,
      status: "In Progress",
      nextClass: "Jan 20, 2025, 2:00 PM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-heading font-bold text-primary mb-2">Welcome back, {user.name}!</h1>
              <p className="text-muted-foreground">Track your learning progress and manage your courses</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
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

            {/* Main Content Tabs */}
            <Tabs defaultValue="courses" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl">
                <TabsTrigger value="courses">My Courses</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              {/* My Courses Tab */}
              <TabsContent value="courses" className="space-y-6">
                {courses.map((course) => (
                  <Card key={course.id} className="border-border hover:shadow-custom transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-heading font-semibold mb-2">{course.title}</h3>
                          <div className="flex gap-2">
                            <Badge variant={course.status === "Completed" ? "default" : "secondary"}>
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
                            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
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
              </TabsContent>

              {/* Certificates Tab */}
              <TabsContent value="certificates">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>My Certificates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                            <Award className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="font-semibold">NDT Level I Certification</p>
                            <p className="text-sm text-muted-foreground">Issued: Dec 15, 2024</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payments Tab */}
              <TabsContent value="payments">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                            <CreditCard className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="font-semibold">HSE Level II - Course Fee</p>
                            <p className="text-sm text-muted-foreground">Jan 5, 2025</p>
                          </div>
                        </div>
                        <p className="font-semibold">₦150,000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-border">
                      <Button variant="outline" className="w-full md:w-auto">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
