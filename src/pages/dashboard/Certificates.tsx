import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Share2 } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: "CERT-2025-001",
      course: "NDT Level I Certification",
      issuedDate: "Dec 15, 2024",
      validUntil: "Dec 15, 2027",
      status: "Active",
    },
  ];

  const pendingCertificates = [
    {
      id: "PENDING-001",
      course: "HSE Level II",
      completionDate: "Pending",
      status: "In Progress - 75% Complete",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          My Certificates
        </h2>
        <p className="text-muted-foreground">
          Download and share your professional certificates
        </p>
      </div>

      {/* Issued Certificates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Issued Certificates</h3>
        {certificates.map((cert) => (
          <Card key={cert.id} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{cert.course}</h4>
                    <div className="flex flex-col gap-1 mt-1">
                      <p className="text-sm text-muted-foreground">
                        Certificate ID: <span className="font-mono">{cert.id}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Issued: {cert.issuedDate}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Valid Until: {cert.validUntil}
                      </p>
                    </div>
                    <Badge variant="default" className="mt-2">
                      {cert.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Certificates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Pending Certificates</h3>
        {pendingCertificates.map((cert) => (
          <Card key={cert.id} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{cert.course}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.status}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      Pending
                    </Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline" disabled>
                  Not Available Yet
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
