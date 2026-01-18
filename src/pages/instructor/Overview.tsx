import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Video, Award, BarChart3, Clock, CheckCircle, TrendingUp } from "lucide-react";

const InstructorOverview = () => {
  const stats = [
    { label: "My Courses", value: "5", icon: BookOpen, color: "text-blue-600" },
    { label: "Total Students", value: "156", icon: Users, color: "text-green-600" },
    { label: "Live Classes", value: "3", icon: Video, color: "text-purple-600" },
    { label: "Certificates Issued", value: "89", icon: Award, color: "text-amber-600" },
    { label: "Avg. Completion Rate", value: "78%", icon: TrendingUp, color: "text-emerald-600" },
    { label: "Pending Assessments", value: "12", icon: Clock, color: "text-orange-600" },
    { label: "Passed Students", value: "134", icon: CheckCircle, color: "text-teal-600" },
    { label: "Course Rating", value: "4.8", icon: BarChart3, color: "text-indigo-600" },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">Welcome, Instructor!</h2>
        <p className="text-muted-foreground">Here's an overview of your teaching activities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Live Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "HSE Fundamentals - Week 3", date: "Today, 2:00 PM", students: 24 },
                { title: "NDT Level 1 - Practical Session", date: "Tomorrow, 10:00 AM", students: 18 },
                { title: "Crane Operations - Safety Review", date: "Dec 20, 2025, 9:00 AM", students: 32 },
              ].map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{classItem.title}</p>
                    <p className="text-sm text-muted-foreground">{classItem.date}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Users className="inline h-4 w-4 mr-1" />
                    {classItem.students} enrolled
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { student: "John Doe", course: "HSE Fundamentals", type: "Quiz 3", status: "Pending" },
                { student: "Jane Smith", course: "NDT Level 1", type: "Assignment 2", status: "Pending" },
                { student: "Mike Johnson", course: "Crane Operations", type: "Final Exam", status: "Pending" },
              ].map((submission, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{submission.student}</p>
                    <p className="text-sm text-muted-foreground">{submission.course} - {submission.type}</p>
                  </div>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                    {submission.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstructorOverview;
