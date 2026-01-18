import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";
import { useState } from "react";

const InstructorAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30days");

  const coursePerformance = [
    {
      course: "HSE Level 1",
      enrolled: 45,
      completed: 32,
      avgScore: 85,
      rating: 4.8,
      completionRate: 71,
    },
    {
      course: "NDT Level 1",
      enrolled: 32,
      completed: 18,
      avgScore: 82,
      rating: 4.6,
      completionRate: 56,
    },
    {
      course: "Crane Operations",
      enrolled: 28,
      completed: 12,
      avgScore: 88,
      rating: 4.7,
      completionRate: 43,
    },
  ];

  const recentActivity = [
    { action: "John Doe completed HSE Level 1", time: "2 hours ago" },
    { action: "New enrollment in NDT Level 1", time: "5 hours ago" },
    { action: "Jane Smith submitted Quiz 3", time: "1 day ago" },
    { action: "Live class conducted for Crane Operations", time: "2 days ago" },
    { action: "3 certificates issued for HSE Level 1", time: "3 days ago" },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">Analytics</h2>
          <p className="text-muted-foreground">Track your course performance and student engagement</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-xs text-green-600">+12% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">62</p>
                <p className="text-sm text-muted-foreground">Completions</p>
                <p className="text-xs text-green-600">+8% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Star className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">4.7</p>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
                <p className="text-xs text-green-600">+0.2 from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">89</p>
                <p className="text-sm text-muted-foreground">Certificates</p>
                <p className="text-xs text-green-600">+15% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Course Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Course Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {coursePerformance.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{course.course}</p>
                      <p className="text-sm text-muted-foreground">
                        {course.enrolled} enrolled • {course.completed} completed
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={course.completionRate} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground w-12">
                      {course.completionRate}%
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>Avg. Score: {course.avgScore}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Student Engagement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Student Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">78%</p>
                  <p className="text-sm text-muted-foreground">Avg. Completion Rate</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">85%</p>
                  <p className="text-sm text-muted-foreground">Avg. Assessment Score</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">92%</p>
                  <p className="text-sm text-muted-foreground">Live Class Attendance</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">4.7</p>
                  <p className="text-sm text-muted-foreground">Student Satisfaction</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Top Performing Students</h4>
                <div className="space-y-2">
                  {[
                    { name: "Sarah Williams", score: 98, course: "HSE Level 1" },
                    { name: "Emily Davis", score: 95, course: "NDT Level 1" },
                    { name: "John Doe", score: 92, course: "Crane Operations" },
                  ].map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-muted/50 rounded"
                    >
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="w-6 h-6 flex items-center justify-center rounded-full">
                          {index + 1}
                        </Badge>
                        <div>
                          <p className="font-medium text-sm">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.course}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-600">{student.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <p className="text-sm">{activity.action}</p>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstructorAnalytics;
