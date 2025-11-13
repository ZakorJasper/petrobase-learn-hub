import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Video, Award, DollarSign, TrendingUp } from "lucide-react";

const Overview = () => {
  const stats = {
    totalStudents: 245,
    activeCourses: 12,
    liveClasses: 8,
    certificatesIssued: 178,
    monthlyRevenue: "₦12,450,000",
    enrollmentRate: "+18%",
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          Admin Overview
        </h2>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard - Monitor system performance
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
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
    </div>
  );
};

export default Overview;
