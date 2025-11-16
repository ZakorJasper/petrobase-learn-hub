import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, BookOpen, Award, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data - matches the courses from Courses.tsx
  const courses = [
    {
      id: 1,
      title: "HSE Level I",
      icon: "ShieldCheck",
      duration: "2 weeks",
      level: "Beginner",
      price: "₦150,000",
      description: "Foundation course in Health, Safety & Environment practices for oil & gas operations.",
      scope: "Introduction to HSE principles, hazard identification, risk assessment, safety procedures, emergency response, and safety culture.",
      competence: "Basic HSE awareness and fundamental safety practices",
      requirements: "Basic education and English proficiency",
      accreditation: "International Institute of Risk and Safety Management"
    },
    {
      id: 2,
      title: "HSE Level II",
      icon: "ShieldCheck",
      duration: "3 weeks",
      level: "Intermediate",
      price: "₦200,000",
      description: "Advanced HSE management for supervisory roles in industrial settings.",
      scope: "Advanced risk management, incident investigation, safety audits, HSE legislation, permit-to-work systems, and leadership in safety.",
      competence: "HSE supervision and management capabilities",
      requirements: "HSE Level I or equivalent experience",
      accreditation: "International Institute of Risk and Safety Management"
    },
    {
      id: 3,
      title: "NDT Level I",
      icon: "Wrench",
      duration: "3 weeks",
      level: "Beginner",
      price: "₦180,000",
      description: "Introduction to Non-Destructive Testing techniques and equipment.",
      scope: "Visual inspection, ultrasonic testing, radiographic testing, magnetic particle testing, and dye penetrant inspection fundamentals.",
      competence: "Basic NDT operations under supervision",
      requirements: "Technical background preferred",
      accreditation: "ASNT SNT-TC-1A, ISO 9712"
    },
    {
      id: 4,
      title: "AutoCAD 2D/3D",
      icon: "FileText",
      duration: "6 weeks",
      level: "Beginner",
      price: "₦250,000",
      description: "Comprehensive AutoCAD training for engineering design and drafting.",
      scope: "2D drawing, 3D modeling, dimensioning, layers, blocks, layouts, plotting, and technical documentation.",
      competence: "Professional CAD drafting and design",
      requirements: "Basic computer skills",
      accreditation: "Autodesk Certified"
    },
  ];

  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Course not found</h2>
            <Link to="/courses">
              <Button>Back to Courses</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <Link to="/courses">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </Link>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl mb-2">{course.title}</CardTitle>
                      <p className="text-muted-foreground">{course.description}</p>
                    </div>
                    <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "default" : "destructive"}>
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-primary" />
                      Course Scope
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{course.scope}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      Competence Developed
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{course.competence}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <AlertCircle className="mr-2 h-5 w-5 text-primary" />
                      Entry Requirements
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{course.requirements}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      Accreditation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{course.accreditation}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-6">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Duration</span>
                    </div>
                    <p className="text-2xl font-bold">{course.duration}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Course Fee</p>
                    <p className="text-3xl font-bold text-primary">{course.price}</p>
                  </div>

                  <Button className="w-full" size="lg">
                    Enroll Now
                  </Button>

                  <Button variant="outline" className="w-full" size="lg">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;