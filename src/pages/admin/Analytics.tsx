import { TrendingUp, Users, BookOpen, DollarSign, Award, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdminAnalytics = () => {
  const stats = [
    {
      title: "Total Students",
      value: "248",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Courses",
      value: "15",
      change: "+3",
      trend: "up",
      icon: BookOpen,
      color: "text-green-600",
    },
    {
      title: "Revenue This Month",
      value: "₦4.2M",
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "text-yellow-600",
    },
    {
      title: "Certificates Issued",
      value: "156",
      change: "+24%",
      trend: "up",
      icon: Award,
      color: "text-purple-600",
    },
    {
      title: "Live Classes",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Video,
      color: "text-red-600",
    },
    {
      title: "Completion Rate",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
      color: "text-indigo-600",
    },
  ];

  const topCourses = [
    { name: "HSE Level I", enrollments: 45, revenue: "₦850K", completion: "92%" },
    { name: "NDT Level II", enrollments: 32, revenue: "₦720K", completion: "88%" },
    { name: "AutoCAD 2D/3D", enrollments: 38, revenue: "₦690K", completion: "85%" },
    { name: "Primavera P6", enrollments: 28, revenue: "₦580K", completion: "90%" },
  ];

  const recentActivity = [
    { action: "New enrollment", detail: "John Doe enrolled in HSE Level I", time: "5 min ago" },
    { action: "Payment received", detail: "₦75,000 from Fatima Usman", time: "15 min ago" },
    { action: "Certificate issued", detail: "NDT Level II - Emmanuel Okafor", time: "1 hour ago" },
    { action: "Course completed", detail: "Aisha Mohammed completed AutoCAD", time: "2 hours ago" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-primary">Analytics Dashboard</h2>
        <p className="text-muted-foreground mt-1">
          Overview of platform performance and key metrics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Courses</CardTitle>
            <CardDescription>Based on enrollments and revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCourses.map((course, index) => (
                <div key={course.name} className="flex items-center justify-between pb-4 border-b last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{course.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {course.enrollments} students
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{course.revenue}</p>
                    <p className="text-sm text-muted-foreground">{course.completion} completion</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest platform activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3 pb-4 border-b last:border-0">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.detail}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trends</CardTitle>
          <CardDescription>Monthly revenue over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Revenue chart will be displayed here</p>
              <p className="text-sm text-muted-foreground mt-1">Integration with charting library</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;
