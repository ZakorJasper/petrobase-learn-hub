import { useState } from "react";
import { Search, Award, Download, Eye, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Certificate {
  id: string;
  studentName: string;
  studentEmail: string;
  course: string;
  issueDate: string;
  certificateNumber: string;
  status: "issued" | "pending" | "revoked";
  grade?: string;
}

const mockCertificates: Certificate[] = [
  {
    id: "1",
    studentName: "John Adebayo",
    studentEmail: "john.adebayo@example.com",
    course: "HSE Level I",
    issueDate: "2024-01-15",
    certificateNumber: "PBTS-HSE-2024-001",
    status: "issued",
    grade: "A",
  },
  {
    id: "2",
    studentName: "Fatima Usman",
    studentEmail: "fatima.usman@example.com",
    course: "NDT Level II - Ultrasonic Testing",
    issueDate: "2024-01-20",
    certificateNumber: "PBTS-NDT-2024-002",
    status: "issued",
    grade: "B+",
  },
  {
    id: "3",
    studentName: "Emmanuel Okafor",
    studentEmail: "emmanuel.okafor@example.com",
    course: "AutoCAD 2D/3D Design",
    issueDate: "2024-02-01",
    certificateNumber: "PBTS-CAD-2024-003",
    status: "pending",
  },
  {
    id: "4",
    studentName: "Aisha Mohammed",
    studentEmail: "aisha.mohammed@example.com",
    course: "HSE Level I",
    issueDate: "2024-01-18",
    certificateNumber: "PBTS-HSE-2024-004",
    status: "issued",
    grade: "A+",
  },
];

const AdminCertificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>(mockCertificates);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [viewingCertificate, setViewingCertificate] = useState<Certificate | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const filteredCertificates = certificates.filter((cert) => {
    const matchesSearch =
      cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.studentEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.certificateNumber.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || cert.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleViewCertificate = (cert: Certificate) => {
    setViewingCertificate(cert);
    setIsViewDialogOpen(true);
  };

  const getStatusBadge = (status: Certificate["status"]) => {
    const variants = {
      issued: "default",
      pending: "secondary",
      revoked: "destructive",
    };
    const icons = {
      issued: <CheckCircle className="h-3 w-3 mr-1" />,
      pending: <Award className="h-3 w-3 mr-1" />,
      revoked: <XCircle className="h-3 w-3 mr-1" />,
    };
    return (
      <Badge variant={variants[status] as any} className="flex items-center w-fit">
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary">
            Certificates Management
          </h2>
          <p className="text-muted-foreground mt-1">
            View, issue, and manage course completion certificates
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by student name, email, course, or certificate number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="issued">Issued</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="revoked">Revoked</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-card rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Certificate Number</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Issue Date</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCertificates.map((cert) => (
              <TableRow key={cert.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-mono text-sm">{cert.certificateNumber}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{cert.studentName}</p>
                    <p className="text-sm text-muted-foreground">{cert.studentEmail}</p>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{cert.course}</TableCell>
                <TableCell className="text-sm">
                  {new Date(cert.issueDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {cert.grade ? (
                    <Badge variant="outline">{cert.grade}</Badge>
                  ) : (
                    <span className="text-muted-foreground text-sm">N/A</span>
                  )}
                </TableCell>
                <TableCell>{getStatusBadge(cert.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewCertificate(cert)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {cert.status === "issued" && (
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No certificates found matching your criteria.
        </div>
      )}

      {/* View Certificate Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Certificate Details</DialogTitle>
            <DialogDescription>
              View complete certificate information
            </DialogDescription>
          </DialogHeader>
          {viewingCertificate && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Certificate Number</p>
                  <p className="font-mono font-medium">{viewingCertificate.certificateNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Issue Date</p>
                  <p className="font-medium">
                    {new Date(viewingCertificate.issueDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Student Name</p>
                  <p className="font-medium">{viewingCertificate.studentName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{viewingCertificate.studentEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Course</p>
                  <p className="font-medium">{viewingCertificate.course}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Grade</p>
                  <p className="font-medium">{viewingCertificate.grade || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <div className="mt-1">{getStatusBadge(viewingCertificate.status)}</div>
                </div>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <p className="text-sm text-muted-foreground mb-2">Certificate Preview</p>
                <div className="bg-muted/30 rounded-lg p-8 text-center border-2 border-dashed border-border">
                  <Award className="h-16 w-16 mx-auto text-primary mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Certificate preview will be displayed here
                  </p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
            {viewingCertificate?.status === "issued" && (
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCertificates;
