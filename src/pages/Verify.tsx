import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, AlertCircle, CheckCircle2, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Verify = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock verification result - in production, this would call your backend
      if (certificateId.toLowerCase().includes("pbts")) {
        setVerificationResult({
          valid: true,
          traineeName: "John Doe",
          course: "HSE Level II Certification",
          issueDate: "January 15, 2025",
          certificateNumber: certificateId.toUpperCase(),
          expiryDate: "January 15, 2028",
          status: "Valid"
        });
      } else {
        setVerificationResult({
          valid: false,
          message: "Certificate not found. Please check the certificate number and try again."
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Verify Certificate</h1>
            <p className="text-lg text-primary-foreground/90">
              Authenticate Petro-Base Training School certificates instantly
            </p>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border shadow-custom">
              <CardContent className="p-8">
                <form onSubmit={handleVerify} className="space-y-6">
                  <div>
                    <Label htmlFor="certificateId" className="text-lg">Certificate Number</Label>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      Enter the unique certificate ID found on your certificate
                    </p>
                    <div className="flex gap-2">
                      <Input
                        id="certificateId"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        placeholder="e.g., PBTS-2025-HSE-001234"
                        className="flex-1 h-12 text-base"
                        required
                      />
                      <Button 
                        type="submit" 
                        size="lg"
                        disabled={isLoading}
                        className="bg-gradient-to-r from-primary to-secondary px-8"
                      >
                        {isLoading ? (
                          <>Verifying...</>
                        ) : (
                          <>
                            <Search className="mr-2 h-5 w-5" />
                            Verify
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>

                {verificationResult && (
                  <div className="mt-8 pt-8 border-t border-border animate-fade-in">
                    {verificationResult.valid ? (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                          <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                          <div>
                            <h3 className="font-semibold text-green-900 dark:text-green-100">Certificate Verified</h3>
                            <p className="text-sm text-green-700 dark:text-green-300">This certificate is authentic and valid</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Trainee Name</p>
                              <p className="font-semibold text-foreground">{verificationResult.traineeName}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Status</p>
                              <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                                {verificationResult.status}
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Course</p>
                            <p className="font-semibold text-foreground">{verificationResult.course}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
                              <p className="font-medium text-foreground">{verificationResult.issueDate}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Expiry Date</p>
                              <p className="font-medium text-foreground">{verificationResult.expiryDate}</p>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-border">
                            <p className="text-sm text-muted-foreground mb-1">Certificate Number</p>
                            <p className="font-mono text-sm font-semibold text-primary">{verificationResult.certificateNumber}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                        <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-destructive mb-1">Verification Failed</h3>
                          <p className="text-sm text-destructive/80">{verificationResult.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="border-border mt-8">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">How to Verify</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold shrink-0 text-xs">1</span>
                    <span>Locate the certificate number on your physical or digital certificate</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold shrink-0 text-xs">2</span>
                    <span>Enter the complete certificate number in the field above</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold shrink-0 text-xs">3</span>
                    <span>Click "Verify" to authenticate the certificate instantly</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Verify Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-primary text-center">Why Verify Certificates?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Authenticity</h3>
                  <p className="text-sm text-muted-foreground">Confirm the certificate is genuinely issued by PBTS</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Compliance</h3>
                  <p className="text-sm text-muted-foreground">Ensure compliance with industry regulations</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Transparency</h3>
                  <p className="text-sm text-muted-foreground">Maintain transparency in hiring and operations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Verify;
