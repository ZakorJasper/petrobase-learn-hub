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
import {
  Search,
  Plus,
  FileText,
  Video,
  Image,
  File,
  Download,
  Trash2,
  Upload,
  FolderOpen,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Material {
  id: string;
  name: string;
  course: string;
  type: "PDF" | "Video" | "Image" | "Document" | "Other";
  size: string;
  uploadedDate: string;
  downloads: number;
}

const InstructorMaterials = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [materials] = useState<Material[]>([
    {
      id: "1",
      name: "HSE Fundamentals Guide.pdf",
      course: "HSE Level 1",
      type: "PDF",
      size: "2.5 MB",
      uploadedDate: "Dec 10, 2025",
      downloads: 45,
    },
    {
      id: "2",
      name: "Risk Assessment Template.xlsx",
      course: "HSE Level 1",
      type: "Document",
      size: "156 KB",
      uploadedDate: "Dec 12, 2025",
      downloads: 38,
    },
    {
      id: "3",
      name: "Week 1 Lecture.mp4",
      course: "HSE Level 1",
      type: "Video",
      size: "450 MB",
      uploadedDate: "Dec 15, 2025",
      downloads: 42,
    },
    {
      id: "4",
      name: "NDT Equipment Guide.pdf",
      course: "NDT Level 1",
      type: "PDF",
      size: "3.2 MB",
      uploadedDate: "Dec 8, 2025",
      downloads: 28,
    },
    {
      id: "5",
      name: "Safety Procedures Handbook.pdf",
      course: "Crane Operations",
      type: "PDF",
      size: "1.8 MB",
      uploadedDate: "Dec 5, 2025",
      downloads: 35,
    },
    {
      id: "6",
      name: "Practical Demo Video.mp4",
      course: "NDT Level 1",
      type: "Video",
      size: "680 MB",
      uploadedDate: "Dec 14, 2025",
      downloads: 22,
    },
  ]);

  const [formData, setFormData] = useState({
    course: "",
    file: null as File | null,
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "Video":
        return <Video className="h-5 w-5 text-blue-500" />;
      case "Image":
        return <Image className="h-5 w-5 text-green-500" />;
      default:
        return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleUpload = () => {
    toast({
      title: "Material Uploaded",
      description: "Your file has been uploaded successfully.",
    });
    setIsAddDialogOpen(false);
    setFormData({ course: "", file: null });
  };

  const filteredMaterials = materials.filter(
    (material) =>
      material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSize = materials.reduce((acc, m) => {
    const size = parseFloat(m.size);
    const unit = m.size.includes("MB") ? 1 : 0.001;
    return acc + size * unit;
  }, 0);

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">Course Materials</h2>
          <p className="text-muted-foreground">Upload and manage course resources</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Upload className="h-4 w-4 mr-2" />
              Upload Material
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Course Material</DialogTitle>
              <DialogDescription>Add a new file to your course materials</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
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
                <Label htmlFor="file">File</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOC, XLS, MP4, PNG, JPG (max 500MB)
                  </p>
                  <Input
                    id="file"
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setFormData({ ...formData, file: e.target.files?.[0] || null })
                    }
                  />
                </div>
              </div>

              <Button className="w-full" onClick={handleUpload}>
                Upload Material
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
                <FolderOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{materials.length}</p>
                <p className="text-sm text-muted-foreground">Total Files</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {materials.filter((m) => m.type === "PDF").length}
                </p>
                <p className="text-sm text-muted-foreground">PDFs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {materials.filter((m) => m.type === "Video").length}
                </p>
                <p className="text-sm text-muted-foreground">Videos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Download className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {materials.reduce((acc, m) => acc + m.downloads, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Total Downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search materials..."
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
                <TableHead>File</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMaterials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {getTypeIcon(material.type)}
                      <span className="font-medium">{material.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{material.course}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{material.type}</Badge>
                  </TableCell>
                  <TableCell>{material.size}</TableCell>
                  <TableCell>{material.uploadedDate}</TableCell>
                  <TableCell>{material.downloads}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
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
    </div>
  );
};

export default InstructorMaterials;
