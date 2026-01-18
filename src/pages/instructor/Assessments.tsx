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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Plus,
  ClipboardList,
  CheckCircle,
  Clock,
  FileText,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Assessment {
  id: string;
  title: string;
  course: string;
  type: "Quiz" | "Assignment" | "Exam";
  dueDate: string;
  totalQuestions: number;
  totalMarks: number;
  status: "Draft" | "Published" | "Closed";
  submissions: number;
}

interface Submission {
  id: string;
  studentName: string;
  assessment: string;
  submittedDate: string;
  score: number | null;
  status: "Pending" | "Graded";
}

const InstructorAssessments = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [assessments] = useState<Assessment[]>([
    {
      id: "1",
      title: "HSE Fundamentals Quiz",
      course: "HSE Level 1",
      type: "Quiz",
      dueDate: "Dec 20, 2025",
      totalQuestions: 20,
      totalMarks: 100,
      status: "Published",
      submissions: 35,
    },
    {
      id: "2",
      title: "Risk Assessment Assignment",
      course: "HSE Level 1",
      type: "Assignment",
      dueDate: "Dec 25, 2025",
      totalQuestions: 5,
      totalMarks: 50,
      status: "Published",
      submissions: 28,
    },
    {
      id: "3",
      title: "NDT Final Examination",
      course: "NDT Level 1",
      type: "Exam",
      dueDate: "Jan 5, 2026",
      totalQuestions: 50,
      totalMarks: 200,
      status: "Draft",
      submissions: 0,
    },
  ]);

  const [submissions] = useState<Submission[]>([
    {
      id: "1",
      studentName: "John Doe",
      assessment: "HSE Fundamentals Quiz",
      submittedDate: "Dec 18, 2025",
      score: null,
      status: "Pending",
    },
    {
      id: "2",
      studentName: "Jane Smith",
      assessment: "HSE Fundamentals Quiz",
      submittedDate: "Dec 18, 2025",
      score: 85,
      status: "Graded",
    },
    {
      id: "3",
      studentName: "Mike Johnson",
      assessment: "Risk Assessment Assignment",
      submittedDate: "Dec 19, 2025",
      score: null,
      status: "Pending",
    },
    {
      id: "4",
      studentName: "Sarah Williams",
      assessment: "HSE Fundamentals Quiz",
      submittedDate: "Dec 17, 2025",
      score: 92,
      status: "Graded",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    course: "",
    type: "" as "Quiz" | "Assignment" | "Exam" | "",
    dueDate: "",
    totalQuestions: "",
    totalMarks: "",
    instructions: "",
  });

  const handleAddAssessment = () => {
    toast({
      title: "Assessment Created",
      description: "Your assessment has been created successfully.",
    });
    setIsAddDialogOpen(false);
    setFormData({
      title: "",
      course: "",
      type: "",
      dueDate: "",
      totalQuestions: "",
      totalMarks: "",
      instructions: "",
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">Assessments</h2>
          <p className="text-muted-foreground">Create and manage course assessments</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Plus className="h-4 w-4 mr-2" />
              Create Assessment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Assessment</DialogTitle>
              <DialogDescription>Add a new quiz, assignment, or exam</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter assessment title"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) =>
                      setFormData({ ...formData, type: value as "Quiz" | "Assignment" | "Exam" })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Quiz">Quiz</SelectItem>
                      <SelectItem value="Assignment">Assignment</SelectItem>
                      <SelectItem value="Exam">Exam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalQuestions">Total Questions</Label>
                  <Input
                    id="totalQuestions"
                    type="number"
                    value={formData.totalQuestions}
                    onChange={(e) => setFormData({ ...formData, totalQuestions: e.target.value })}
                    placeholder="e.g., 20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="totalMarks">Total Marks</Label>
                  <Input
                    id="totalMarks"
                    type="number"
                    value={formData.totalMarks}
                    onChange={(e) => setFormData({ ...formData, totalMarks: e.target.value })}
                    placeholder="e.g., 100"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea
                  id="instructions"
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  placeholder="Enter assessment instructions"
                  rows={3}
                />
              </div>

              <Button className="w-full" onClick={handleAddAssessment}>
                Create Assessment
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <ClipboardList className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{assessments.length}</p>
                <p className="text-sm text-muted-foreground">Total Assessments</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {assessments.filter((a) => a.status === "Published").length}
                </p>
                <p className="text-sm text-muted-foreground">Published</p>
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
                  {submissions.filter((s) => s.status === "Pending").length}
                </p>
                <p className="text-sm text-muted-foreground">Pending Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {submissions.reduce((acc, s) => acc + 1, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Submissions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="assessments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="assessments">Assessments</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value="assessments">
          <Card>
            <CardHeader>
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search assessments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Questions</TableHead>
                    <TableHead>Submissions</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assessments.map((assessment) => (
                    <TableRow key={assessment.id}>
                      <TableCell className="font-medium">{assessment.title}</TableCell>
                      <TableCell>{assessment.course}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{assessment.type}</Badge>
                      </TableCell>
                      <TableCell>{assessment.dueDate}</TableCell>
                      <TableCell>{assessment.totalQuestions}</TableCell>
                      <TableCell>{assessment.submissions}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            assessment.status === "Published"
                              ? "default"
                              : assessment.status === "Draft"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {assessment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submissions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Assessment</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{submission.studentName}</TableCell>
                      <TableCell>{submission.assessment}</TableCell>
                      <TableCell>{submission.submittedDate}</TableCell>
                      <TableCell>
                        {submission.score !== null ? `${submission.score}/100` : "-"}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={submission.status === "Graded" ? "default" : "secondary"}
                          className={submission.status === "Graded" ? "bg-green-600" : ""}
                        >
                          {submission.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant={submission.status === "Pending" ? "default" : "outline"}>
                          {submission.status === "Pending" ? "Grade" : "View"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InstructorAssessments;
