import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Shield, Lightbulb, HandshakeIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trainingSession from "@/assets/training-session.jpg";

const About = () => {
  const values = [
    { icon: <Award className="h-6 w-6" />, title: "Excellence", description: "Committed to delivering the highest quality training" },
    { icon: <Shield className="h-6 w-6" />, title: "Integrity", description: "Operating with honesty and transparency" },
    { icon: <Target className="h-6 w-6" />, title: "Safety", description: "Prioritizing safety culture in all operations" },
    { icon: <Users className="h-6 w-6" />, title: "Professionalism", description: "Maintaining industry-leading standards" },
    { icon: <Lightbulb className="h-6 w-6" />, title: "Innovation", description: "Embracing modern training methodologies" },
    { icon: <HandshakeIcon className="h-6 w-6" />, title: "Collaboration", description: "Building partnerships for success" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Petro-Base Training School</h1>
            <p className="text-lg text-primary-foreground/90">
              A Division of Petro-Base Group Limited
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-custom mb-8">
              <img src={trainingSession} alt="Professional training session at Petro-Base Training School" className="w-full h-80 object-cover" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Petro-Base Training School (PBTS) is a world-class technical and professional training institution providing industry-recognized programs for the oil, gas, and industrial sectors. As a division of Petro-Base Group Limited, we deliver certified courses in Health, Safety & Environment (HSE), Lifting Equipment Operation, Rigging, Non-Destructive Testing (NDT), Engineering Design (AutoCAD), and Project Management (Primavera).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our training programs are designed to meet international standards and are aligned with the requirements of global industry leaders, ensuring our graduates are well-equipped to excel in their chosen fields.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border shadow-custom">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading center of excellence in technical and safety training for the energy and industrial sectors, recognized globally for our commitment to quality, innovation, and the development of competent professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-custom">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver high-quality, industry-relevant training that equips individuals and organizations with the skills, competence, and confidence to achieve excellence in safety and technical operations across diverse industrial environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach to training and professional development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-custom transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary text-center">Our Training Philosophy</h2>
            <Card className="border-border shadow-custom">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Petro-Base Training School, we believe in practical, hands-on learning combined with theoretical knowledge. Our training methodology focuses on:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <strong className="text-foreground">Real-time Practical Learning:</strong>
                      <span className="text-muted-foreground"> Live demonstrations and hands-on experience with industry-standard equipment</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <strong className="text-foreground">Industry Relevance:</strong>
                      <span className="text-muted-foreground"> Courses aligned with current industry needs and international standards</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <strong className="text-foreground">Safety Culture:</strong>
                      <span className="text-muted-foreground"> Embedding safety consciousness in every aspect of training</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <strong className="text-foreground">Continuous Learning:</strong>
                      <span className="text-muted-foreground"> Supporting ongoing professional development and skill enhancement</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Accreditation & Compliance</h2>
            <Card className="border-border shadow-custom">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Petro-Base Training School is registered with the Corporate Affairs Commission (CAC) of Nigeria and operates in full compliance with local and international regulatory standards.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our training programs are aligned with internationally recognized frameworks including:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold text-primary">ASNT SNT-TC-1A</p>
                    <p className="text-sm text-muted-foreground">NDT Certification</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold text-primary">ISO 9712</p>
                    <p className="text-sm text-muted-foreground">Quality Standards</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold text-primary">IIRSM</p>
                    <p className="text-sm text-muted-foreground">HSE Accreditation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
