import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  BookOpen, 
  Video, 
  Award, 
  FileText,
  DollarSign,
  Bell,
  Settings,
  LogOut,
  BarChart3,
  TrendingUp,
  UserPlus,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminDashboard = () => {
  // Mock admin data
  const adminUser = {
    name: "Admin User",
    email: "admin@petrobasegroup.com",
    role: "Super Admin"
  };

  const stats = {
    totalStudents: 245,
    activeCourses: 12,
    liveClasses: 8,
    certificatesIssued: 178,
    monthlyRevenue: "₦12,450,000",
    enrollmentRate: "+18%"
  };

  const recentStudents = [
    { id: 1, name: "Chinedu Okafor", email: "chinedu@example.com", course: "HSE Level II", status: "Active", enrolledDate: "Jan 10, 2025" },
    { id: 2, name: "Amina Bello", email: "amina@example.com", course: "NDT Level I", status: "Active", enrolledDate: "Jan 12, 2025" },
    { id: 3, name: "Tunde Williams", email: "tunde@example.com", course: "AutoCAD 2D/3D", status: "Pending", enrolledDate: "Jan 15, 2025" },
    { id: 4, name: "Sarah Johnson", email: "sarah@example.com", course: "Primavera P6", status: "Active", enrolledDate: "Jan 18, 2025" },
  ];

  const courses = [
    { id: 1, title: "HSE Level II", enrolled: 45, completed: 32, instructor: "Dr. Emeka Nwosu", status: "Active" },
    { id: 2, title: "NDT Level I", enrolled: 38, completed: 28, instructor: "Engr. Oluchi Ibe", status: "Active" },
    { id: 3, title: "AutoCAD 2D/3D", enrolled: 52, completed: 41, instructor: "Engr. David Okon", status: "Active" },
    { id: 4, title: "Primavera P6", enrolled: 29, completed: 18, instructor: "Mr. Francis Udo", status: "Active" },
  ];

  const liveClasses = [
    { id: 1, course: "HSE Level II", instructor: "Dr. Emeka Nwosu", scheduledTime: "Tomorrow, 10:00 AM", attendees: 42, status: "Scheduled" },
    { id: 2, course: "NDT Level I", instructor: "Engr. Oluchi Ibe", scheduledTime: "Today, 2:00 PM", attendees: 35, status: "Live" },
    { id: 3, course: "AutoCAD 2D/3D", instructor: "Engr. David Okon", scheduledTime: "Jan 25, 10:00 AM", attendees: 48, status: "Scheduled" },
  ];

  const certificates = [
    { id: "CERT-2025-001", student: "John Doe", course: "HSE Level II", issueDate: "Jan 15, 2025", status: "Issued" },
    { id: "CERT-2025-002", student: "Jane Smith", course: "NDT Level I", issueDate: "Jan 16, 2025", status: "Issued" },
    { id: "CERT-2025-003", student: "Mike Johnson", course: "AutoCAD 2D/3D", issueDate: "Pending", status: "Pending" },
  ];

  const payments = [
    { id: "PAY-001", student: "Chinedu Okafor", course: "HSE Level II", amount: "₦150,000", date: "Jan 10, 2025", status: "Completed" },
    { id: "PAY-002", student: "Amina Bello", course: "NDT Level I", amount: "₦180,000", date: "Jan 12, 2025", status: "Completed" },
    { id: "PAY-003", student: "Tunde Williams", course: "AutoCAD 2D/3D", amount: "₦120,000", date: "Jan 15, 2025", status: "Pending" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-heading font-bold text-primary mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {adminUser.name} ({adminUser.role})</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{stats.totalStudents}</p>
                      <p className="text-xs text-muted-foreground">Total Students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{stats.activeCourses}</p>
                      <p className="text-xs text-muted-foreground">Active Courses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Video className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{stats.liveClasses}</p>
                      <p className="text-xs text-muted-foreground">Live Classes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{stats.certificatesIssued}</p>
                      <p className="text-xs text-muted-foreground">Certificates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">{stats.monthlyRevenue}</p>
                      <p className="text-xs text-muted-foreground">Revenue (MTD)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{stats.enrollmentRate}</p>
                      <p className="text-xs text-muted-foreground">Growth Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="students" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6 max-w-4xl">
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="live-classes">Live Classes</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Students Management Tab */}
              <TabsContent value="students" className="space-y-6">
                <Card className="border-border">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Student Management</CardTitle>
                    <div className="flex gap-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search students..." className="pl-8 w-64" />
                      </div>
                      <Button size="sm" variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add Student
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Enrolled Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentStudents.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.course}</TableCell>
                            <TableCell>
                              <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                                {student.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{student.enrolledDate}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" variant="ghost">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="ghost">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Courses Management Tab */}
              <TabsContent value="courses" className="space-y-6">
                <Card className="border-border">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Course Management</CardTitle>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Add New Course
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {courses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                              <span>Enrolled: {course.enrolled}</span>
                              <span>Completed: {course.completed}</span>
                              <span>Instructor: {course.instructor}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant="default">{course.status}</Badge>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Live Classes Tab */}
              <TabsContent value="live-classes" className="space-y-6">
                <Card className="border-border">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Live Class Management</CardTitle>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      <Video className="h-4 w-4 mr-2" />
                      Schedule Class
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {liveClasses.map((session) => (
                        <div key={session.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              <Video className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{session.course}</h3>
                              <p className="text-sm text-muted-foreground">Instructor: {session.instructor}</p>
                              <p className="text-sm text-muted-foreground">{session.scheduledTime} • {session.attendees} registered</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant={session.status === "Live" ? "default" : "secondary"}>
                              {session.status}
                            </Badge>
                            {session.status === "Live" ? (
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                Join Session
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4 mr-2" />
                                Manage
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Certificates Tab */}
              <TabsContent value="certificates" className="space-y-6">
                <Card className="border-border">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Certificate Management</CardTitle>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      <Award className="h-4 w-4 mr-2" />
                      Issue Certificate
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Certificate ID</TableHead>
                          <TableHead>Student</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Issue Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {certificates.map((cert) => (
                          <TableRow key={cert.id}>
                            <TableCell className="font-mono text-sm">{cert.id}</TableCell>
                            <TableCell>{cert.student}</TableCell>
                            <TableCell>{cert.course}</TableCell>
                            <TableCell>{cert.issueDate}</TableCell>
                            <TableCell>
                              <Badge variant={cert.status === "Issued" ? "default" : "secondary"}>
                                {cert.status === "Issued" ? <CheckCircle className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                                {cert.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                {cert.status === "Issued" ? (
                                  <>
                                    <Button size="sm" variant="ghost">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                      <XCircle className="h-4 w-4" />
                                    </Button>
                                  </>
                                ) : (
                                  <Button size="sm" variant="outline">
                                    Approve
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payments Tab */}
              <TabsContent value="payments" className="space-y-6">
                <Card className="border-border">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Payment Management</CardTitle>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export Report
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Transaction ID</TableHead>
                          <TableHead>Student</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments.map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-mono text-sm">{payment.id}</TableCell>
                            <TableCell>{payment.student}</TableCell>
                            <TableCell>{payment.course}</TableCell>
                            <TableCell className="font-semibold">{payment.amount}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>
                              <Badge variant={payment.status === "Completed" ? "default" : "secondary"}>
                                {payment.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle>Enrollment Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-muted-foreground">
                        <BarChart3 className="h-16 w-16 mb-4" />
                      </div>
                      <p className="text-center text-sm text-muted-foreground">Chart visualization coming soon</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle>Course Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {courses.slice(0, 3).map((course) => (
                          <div key={course.id}>
                            <div className="flex justify-between text-sm mb-2">
                              <span>{course.title}</span>
                              <span className="font-semibold">{Math.round((course.completed / course.enrolled) * 100)}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-primary to-secondary"
                                style={{ width: `${(course.completed / course.enrolled) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle>Revenue Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Total Revenue</span>
                          <span className="text-2xl font-bold">₦12,450,000</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">This Month</span>
                          <span className="text-xl font-semibold text-green-600">₦3,250,000</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Pending</span>
                          <span className="text-xl font-semibold text-yellow-600">₦450,000</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Completion Rate</span>
                          <span className="text-xl font-semibold">72.6%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Average Score</span>
                          <span className="text-xl font-semibold">85.4%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Student Satisfaction</span>
                          <span className="text-xl font-semibold">4.8/5.0</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Logout Section */}
            <Card className="border-border mt-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{adminUser.name}</h3>
                    <p className="text-sm text-muted-foreground">{adminUser.email} • {adminUser.role}</p>
                  </div>
                  <Button variant="outline">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
