import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Award } from "lucide-react";

const Courses = () => {
  const availableCourses = [
    {
      id: 1,
      title: "HSE Level I",
      category: "Health & Safety",
      duration: "2 weeks",
      price: "₦120,000",
      description: "Foundation level health, safety and environmental training for oil & gas sector.",
    },
    {
      id: 2,
      title: "HSE Level II",
      category: "Health & Safety",
      duration: "3 weeks",
      price: "₦150,000",
      description: "Intermediate HSE training with practical assessments.",
    },
    {
      id: 3,
      title: "NDT Level I",
      category: "Non-Destructive Testing",
      duration: "4 weeks",
      price: "₦180,000",
      description: "Introduction to non-destructive testing methods and techniques.",
    },
    {
      id: 4,
      title: "AutoCAD 2D/3D",
      category: "Engineering Design",
      duration: "6 weeks",
      price: "₦120,000",
      description: "Comprehensive AutoCAD training for 2D drafting and 3D modeling.",
    },
    {
      id: 5,
      title: "Primavera P6",
      category: "Project Management",
      duration: "4 weeks",
      price: "₦100,000",
      description: "Master project scheduling and management with Primavera P6.",
    },
    {
      id: 6,
      title: "Crane Operation",
      category: "Lifting Equipment",
      duration: "3 weeks",
      price: "₦90,000",
      description: "Professional crane operation and safety training.",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          Available Courses
        </h2>
        <p className="text-muted-foreground">
          Browse and enroll in our professional training programs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {availableCourses.map((course) => (
          <Card key={course.id} className="border-border hover:shadow-custom transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <Badge variant="secondary">{course.category}</Badge>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">{course.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span>Certified</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-2xl font-bold text-primary">{course.price}</span>
                <Button className="bg-gradient-to-r from-primary to-secondary">
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
