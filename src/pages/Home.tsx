import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  Users, 
  TrendingUp,
  ShieldCheck,
  Wrench,
  FileText,
  BarChart3,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import engineersTeam from "@/assets/engineers-team.jpg";
import trainingSession from "@/assets/training-session.jpg";
import ndtInspection from "@/assets/ndt-inspection.jpg";
import hseTraining from "@/assets/hse-training.jpg";

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Industry-Recognized Certification",
      description: "Globally accepted certificates aligned with international standards"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Instructors",
      description: "Learn from seasoned professionals with decades of industry experience"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Safety-Focused Training",
      description: "Comprehensive HSE programs for oil, gas, and industrial sectors"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Advancement",
      description: "Enhance your skills and unlock new opportunities in technical fields"
    }
  ];

  const courses = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
      title: "HSE Training",
      description: "Health, Safety & Environment certification (Levels I-III)",
      duration: "2-4 weeks",
      category: "Safety"
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "NDT Certification",
      description: "Non-Destructive Testing to international standards",
      duration: "3-6 weeks",
      category: "Technical"
    },
    {
      icon: <FileText className="h-8 w-8 text-secondary" />,
      title: "Engineering Design",
      description: "AutoCAD 2D/3D, P&ID, and Plant Design training",
      duration: "4-8 weeks",
      category: "Design"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Project Management",
      description: "Primavera P6 for scheduling and cost control",
      duration: "3-5 weeks",
      category: "Management"
    }
  ];

  const stats = [
    { number: "2000+", label: "Graduates" },
    { number: "15+", label: "Years Experience" },
    { number: "20+", label: "Courses Offered" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative gradient-hero text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYxMGMwIDIgMiA0IDIgNHMtMi0yLTItNFYzNHptMCAwaC0xMGMtMi0yLTQtMi00LTJzMiAyIDQgMmgxMHYtMXptMCAwaC0xMGMtMi0yLTQtMi00LTJzMiAyIDQgMmgxMFYzNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground border-0">
              Accredited Training Provider
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Empowering Professionals Through Live Technical & Safety Training
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Industry-recognized programs for the oil, gas, and industrial sectors. From HSE to NDT, Crane Operation to Engineering Design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow" asChild>
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/verify">
                  Verify Certificate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Why Choose Petro-Base Training School?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in technical training with a focus on safety, professionalism, and career advancement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-custom transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Professional Training Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced instructors and state-of-the-art facilities ensure the highest quality technical training
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-custom group">
              <img src={engineersTeam} alt="Professional engineering team at industrial facility" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 font-semibold">Expert Engineering Team</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-custom group">
              <img src={trainingSession} alt="Technical training session with instructor and students" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 font-semibold">Interactive Live Classes</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-custom group">
              <img src={ndtInspection} alt="NDT inspection engineer with testing equipment" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 font-semibold">NDT Testing & Inspection</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-custom group">
              <img src={hseTraining} alt="HSE safety officer conducting fire safety training" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 font-semibold">HSE Safety Training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Featured Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive courses designed to meet industry standards and advance your career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course, index) => (
              <Card key={index} className="border-border hover:shadow-custom transition-all duration-300 hover:-translate-y-1 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4">{course.category}</Badge>
                  <div className="mb-4">{course.icon}</div>
                  <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{course.duration}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-secondary" asChild>
                      <Link to="/courses">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join thousands of professionals who have enhanced their skills through our world-class training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow" asChild>
                <Link to="/courses">
                  Enroll Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
