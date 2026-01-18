import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Award, CheckCircle, Clock, Send, Eye, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Certificate {
  id: string;
  studentName: string;
  course: string;
  issueDate: string;
  certificateNumber: string;
  status: "Issued" | "Pending Approval" | "Draft";
}

interface PendingStudent {
  id: string;
  name: string;
  course: string;
  completedDate: string;
  score: number;
}

const InstructorCertificates = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isIssueDialogOpen, setIsIssueDialogOpen] = useState(false);

  const [certificates] = useState<Certificate[]>([
    {
      id: "1",
      studentName: "John Doe",
      course: "HSE Level 1",
      issueDate: "Dec 15, 2025",
      certificateNumber: "PBTS-HSE-2025-001",
      status: "Issued",
    },
    {
      id: "2",
      studentName: "Jane Smith",
      course: "NDT Level 1",
      issueDate: "Dec 10, 2025",
      certificateNumber: "PBTS-NDT-2025-002",
      status: "Issued",
    },
    {
      id: "3",
      studentName: "Mike Johnson",
      course: "HSE Level 1",
      issueDate: "-",
      certificateNumber: "-",
      status: "Pending Approval",
    },
  ]);

  const [pendingStudents] = useState<PendingStudent[]>([
    {
      id: "1",
      name: "Sarah Williams",
      course: "HSE Level 1",
      completedDate: "Dec 18, 2025",
      score: 92,
    },
    {
      id: "2",
      name: "David Brown",
      course: "Crane Operations",
      completedDate: "Dec 17, 2025",
      score: 88,
    },
    {
      id: "3",
      name: "Emily Davis",
      course: "NDT Level 1",
      completedDate: "Dec 16, 2025",
      score: 95,
    },
  ]);

  const [formData, setFormData] = useState({
    student: "",
    course: "",
  });

  const handleIssueCertificate = () => {
    toast({
      title: "Certificate Issued",
      description: "Certificate has been issued successfully.",
    });
    setIsIssueDialogOpen(false);
  };

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.certificateNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">Certificates</h2>
          <p className="text-muted-foreground">Issue and manage course certificates</p>
        </div>
        <Dialog open={isIssueDialogOpen} onOpenChange={setIsIssueDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Award className="h-4 w-4 mr-2" />
              Issue Certificate
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Issue Certificate</DialogTitle>
              <DialogDescription>Issue a certificate to a student who has completed the course</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student">Student</Label>
                <Select
                  value={formData.student}
                  onValueChange={(value) => setFormData({ ...formData, student: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    {pendingStudents.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.name} - {student.course} ({student.score}%)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => setFormData({ ...formData, course: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="HSE Level 1">HSE Level 1</SelectItem>
                    <SelectItem value="NDT Level 1">NDT Level 1</SelectItem>
                    <SelectItem value="Crane Operations">Crane Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" onClick={handleIssueCertificate}>
                <Send className="h-4 w-4 mr-2" />
                Issue Certificate
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {certificates.filter((c) => c.status === "Issued").length}
                </p>
                <p className="text-sm text-muted-foreground">Issued</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {certificates.filter((c) => c.status === "Pending Approval").length}
                </p>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{pendingStudents.length}</p>
                <p className="text-sm text-muted-foreground">Eligible Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Students */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Students Eligible for Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingStudents.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {student.course} • Completed: {student.completedDate} • Score: {student.score}%
                  </p>
                </div>
                <Button size="sm">
                  <Award className="h-4 w-4 mr-1" />
                  Issue
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Issued Certificates */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <CardTitle>Issued Certificates</CardTitle>
            <div className="relative flex-1 max-w-sm ml-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Certificate Number</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCertificates.map((cert) => (
                <TableRow key={cert.id}>
                  <TableCell className="font-medium">{cert.studentName}</TableCell>
                  <TableCell>{cert.course}</TableCell>
                  <TableCell>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {cert.certificateNumber}
                    </code>
                  </TableCell>
                  <TableCell>{cert.issueDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={cert.status === "Issued" ? "default" : "secondary"}
                      className={cert.status === "Issued" ? "bg-green-600" : ""}
                    >
                      {cert.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {cert.status === "Issued" && (
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
        </CardContent>
      </Card>
    </div>
  );
};

export default InstructorCertificates;
