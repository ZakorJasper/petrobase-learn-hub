import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Wrench, FileText, BarChart3, Truck, Users2, AlertCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Courses" },
     { id: "safety", label: " HSE" },
     { id: "ndt", label: "NDT" },
    { id: "technical", label: "Equipment Operation" },
    { id: "design", label: "Engineering Design" },
    { id: "management", label: "Project Management" },
  ];

  const courses = [
    {
      id: 1,
      title: "HSE Level I",
      category: "safety",
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      duration: "2 weeks",
      level: "Beginner",
      description: "Foundation course in Health, Safety & Environment practices for oil & gas operations.",
      scope: "Introduction to HSE principles, hazard identification, risk assessment, safety procedures, emergency response, and safety culture.",
      competence: "Basic HSE awareness and fundamental safety practices",
      requirements: "Basic education and English proficiency",
      accreditation: "International Institute of Risk and Safety Management"
    },
    {
      id: 2,
      title: "HSE Level II",
      category: "safety",
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      duration: "3 weeks",
      level: "Intermediate",
      description: "Advanced HSE management for supervisory roles in industrial settings.",
      scope: "Advanced risk management, incident investigation, safety audits, HSE legislation, permit-to-work systems, and leadership in safety.",
      competence: "HSE supervision and management capabilities",
      requirements: "HSE Level I or equivalent experience",
      accreditation: "International Institute of Risk and Safety Management"
    },
    {
      id: 3,
      title: "HSE Level III",
      category: "safety",
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      duration: "4 weeks",
      level: "Advanced",
      description: "Expert-level HSE management and strategic safety leadership.",
      scope: "Safety management systems, strategic planning, safety culture development, compliance auditing, and HSE program implementation.",
      competence: "Senior HSE management and strategic oversight",
      requirements: "HSE Level II and management experience",
      accreditation: "International Institute of Risk and Safety Management"
    },
    {
      id: 4,
      title: "Certified Fire Watch",
      category: "safety",
      icon: <AlertCircle className="h-10 w-10 text-accent" />,
      duration: "1 week",
      level: "Beginner",
      description: "Fire prevention, detection, and emergency response training.",
      scope: "Fire hazard recognition, fire prevention measures, use of firefighting equipment, emergency evacuation procedures, and hot work monitoring.",
      competence: "Fire safety monitoring and emergency response",
      requirements: "Basic safety awareness",
      accreditation: "Industry-recognized certification"
    },
    {
      id: 5,
      title: "NDT Level I",
      category: "ndt",
      icon: <Wrench className="h-10 w-10 text-secondary" />,
      duration: "3 weeks",
      level: "Beginner",
      description: "Introduction to Non-Destructive Testing techniques and equipment.",
      scope: "Visual inspection, ultrasonic testing, radiographic testing, magnetic particle testing, and dye penetrant inspection fundamentals.",
      competence: "Basic NDT operations under supervision",
      requirements: "Technical background preferred",
      accreditation: "ASNT SNT-TC-1A, ISO 9712"
    },
    {
      id: 6,
      title: "NDT Level II",
      category: "ndt",
      icon: <Wrench className="h-10 w-10 text-secondary" />,
      duration: "4 weeks",
      level: "Intermediate",
      description: "Advanced NDT operations and interpretation skills.",
      scope: "Independent testing operations, defect evaluation, report writing, procedure review, and advanced technique applications.",
      competence: "Independent NDT operations and reporting",
      requirements: "NDT Level I certification and experience",
      accreditation: "ASNT SNT-TC-1A, CP-189, ISO 9712"
    },
    {
      id: 7,
      title: "NDT Level III",
      category: "ndt",
      icon: <Wrench className="h-10 w-10 text-secondary" />,
      duration: "6 weeks",
      level: "Advanced",
      description: "Expert NDT supervision and procedure development.",
      scope: "Procedure development, technique evaluation, personnel qualification, program management, and technical consultancy.",
      competence: "Senior NDT management and certification authority",
      requirements: "NDT Level II and extensive field experience",
      accreditation: "ASNT SNT-TC-1A, CP-189, ISO 9712"
    },
    {
      id: 8,
      title: "AutoCAD 2D/3D",
      category: "design",
      icon: <FileText className="h-10 w-10 text-accent" />,
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      description: "Comprehensive AutoCAD training for engineering design and drafting.",
      scope: "2D drafting, 3D modeling, P&ID creation, plant design, isometric drawings, and engineering documentation.",
      competence: "Proficient AutoCAD operations for engineering projects",
      requirements: "Basic computer skills",
      accreditation: "Autodesk Authorized Training"
    },
    {
      id: 9,
      title: "Primavera P6",
      category: "management",
      icon: <BarChart3 className="h-10 w-10 text-secondary" />,
      duration: "4 weeks",
      level: "Intermediate",
      description: "Project scheduling and management using Oracle Primavera P6.",
      scope: "Project setup, activity scheduling, resource allocation, cost control, earned value analysis, and progress tracking.",
      competence: "Professional project planning and control",
      requirements: "Project management background recommended",
      accreditation: "Oracle Authorized Training"
    },
    {
      id: 10,
      title: "Crane Operation",
      category: "technical",
      icon: <Truck className="h-10 w-10 text-accent" />,
      duration: "3 weeks",
      level: "Beginner",
      description: "Mobile crane and overhead crane operation certification.",
      scope: "Crane types, safety systems, load calculations, rigging principles, operational techniques, pre-use inspection, and maintenance.",
      competence: "Safe and efficient crane operation",
      requirements: "Valid driver's license and medical fitness",
      accreditation: "Industry-recognized certification"
    },
    {
      id: 11,
      title: "Forklift Operation",
      category: "technical",
      icon: <Truck className="h-10 w-10 text-secondary" />,
      duration: "1 week",
      level: "Beginner",
      description: "Forklift operation and material handling certification.",
      scope: "Forklift types, safety procedures, load handling, maneuvering techniques, maintenance checks, and warehouse operations.",
      competence: "Certified forklift operator",
      requirements: "Basic literacy and medical fitness",
      accreditation: "OSHA-aligned certification"
    },
    {
      id: 12,
      title: "Riggers Training",
      category: "technical",
      icon: <Users2 className="h-10 w-10 text-accent" />,
      duration: "2 weeks",
      level: "Beginner",
      description: "Rigging operations, load handling, and team coordination.",
      scope: "Rigging equipment, load estimation, sling selection, hand signals, hitching techniques, and team communication.",
      competence: "Professional rigging operations and safety",
      requirements: "Physical fitness and basic safety awareness",
      accreditation: "Industry-recognized certification"
    }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Beginner": return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Intermediate": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Advanced": return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Training Programs</h1>
            <p className="text-lg text-primary-foreground/90">
              Industry-recognized courses aligned with international standards for oil, gas, and industrial professionals
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/20 border-b border-border sticky top-20 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-primary shadow-glow" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {filteredCourses.map((course, index) => (
              <Card key={course.id} className="border-border hover:shadow-custom transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader>
                  <div className="mb-4">
                    {course.icon}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <CardTitle className="text-2xl text-primary mb-2">{course.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="pt-4 border-t border-border mb-4">
                    <p className="text-2xl font-bold text-primary">₦{course.id * 50000}</p>
                  </div>
                  <div className="space-y-2">
                    <Link to="/login">
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                        Enroll Now
                      </Button>
                    </Link>
                    <Link to={`/courses/${course.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <Card className="border-border shadow-custom max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary">
                Don't See What You're Looking For?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We offer customized training programs tailored to your organization's specific needs. Contact us to discuss your requirements.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary" asChild>
                <Link to="/contact">
                  Request Custom Training
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
