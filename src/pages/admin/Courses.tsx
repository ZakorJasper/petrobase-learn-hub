import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Edit, Trash2, BookOpen, Users, Clock, Eye, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface CourseSchedule {
  week: string;
  topic: string;
  date: string;
}

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  enrolledStudents: number;
  status: "active" | "draft" | "archived";
  description: string;
  documents?: string[];
  schedule?: CourseSchedule[];
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "HSE Level I",
    category: "Health, Safety & Environment",
    duration: "3 weeks",
    level: "Beginner",
    enrolledStudents: 24,
    status: "active",
    description: "Foundational health, safety, and environment training",
  },
  {
    id: "2",
    title: "NDT Level II - Ultrasonic Testing",
    category: "Non-Destructive Testing",
    duration: "4 weeks",
    level: "Intermediate",
    enrolledStudents: 15,
    status: "active",
    description: "Advanced ultrasonic testing techniques and certification",
  },
  {
    id: "3",
    title: "AutoCAD 2D/3D Design",
    category: "Engineering Design",
    duration: "6 weeks",
    level: "Beginner",
    enrolledStudents: 32,
    status: "active",
    description: "Comprehensive AutoCAD training for engineering applications",
  },
  {
    id: "4",
    title: "Primavera P6 - Project Management",
    category: "Project Management",
    duration: "4 weeks",
    level: "Intermediate",
    enrolledStudents: 18,
    status: "draft",
    description: "Professional project scheduling and management",
  },
];

const AdminCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [scheduleItems, setScheduleItems] = useState<CourseSchedule[]>([]);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCourse = () => {
    setEditingCourse(null);
    setIsDialogOpen(true);
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setIsDialogOpen(true);
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const handleViewCourse = (courseId: string) => {
    navigate(`/admin/courses/${courseId}`);
  };

  const addScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week: "", topic: "", date: "" }]);
  };

  const updateScheduleItem = (index: number, field: keyof CourseSchedule, value: string) => {
    const updated = [...scheduleItems];
    updated[index][field] = value;
    setScheduleItems(updated);
  };

  const removeScheduleItem = (index: number) => {
    setScheduleItems(scheduleItems.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const getStatusBadge = (status: Course["status"]) => {
    const variants = {
      active: "default",
      draft: "secondary",
      archived: "outline",
    };
    return (
      <Badge variant={variants[status] as any}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary">
            Courses Management
          </h2>
          <p className="text-muted-foreground mt-1">
            Create and manage training courses and programs
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddCourse}>
              <Plus className="h-4 w-4" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {editingCourse ? "Edit Course" : "Add New Course"}
              </DialogTitle>
              <DialogDescription>
                {editingCourse
                  ? "Update course information below."
                  : "Enter the details of the new course."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-2">
                <Label htmlFor="title">Course Title</Label>
                <Input id="title" placeholder="e.g., HSE Level I" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue="hse">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hse">Health, Safety & Environment</SelectItem>
                    <SelectItem value="ndt">Non-Destructive Testing</SelectItem>
                    <SelectItem value="engineering">Engineering Design</SelectItem>
                    <SelectItem value="project">Project Management</SelectItem>
                    <SelectItem value="lifting">Lifting Equipment Operation</SelectItem>
                    <SelectItem value="rigging">Riggers Training</SelectItem>
                    <SelectItem value="fire">Fire Watch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="e.g., 3 weeks" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="level">Level</Label>
                  <Select defaultValue="beginner">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of the course..."
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="draft">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="documents">Supporting Documents (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                  <Input
                    id="documents"
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="documents" className="cursor-pointer flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload course materials, syllabus, etc.
                    </span>
                  </label>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm truncate">{file.name}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFile(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Course Schedule Section */}
            <div className="space-y-4 py-4 border-t border-border">
              <div className="flex items-center justify-between">
                <Label>Course Schedule</Label>
                <Button type="button" variant="outline" size="sm" onClick={addScheduleItem}>
                  <Plus className="h-3 w-3 mr-1" />
                  Add Week
                </Button>
              </div>
              <div className="space-y-3">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-[1fr_2fr_1.5fr_auto] gap-2 items-start">
                    <Input
                      placeholder="Week 1"
                      value={item.week}
                      onChange={(e) => updateScheduleItem(index, "week", e.target.value)}
                    />
                    <Input
                      placeholder="Topic title"
                      value={item.topic}
                      onChange={(e) => updateScheduleItem(index, "topic", e.target.value)}
                    />
                    <Input
                      type="date"
                      value={item.date}
                      onChange={(e) => updateScheduleItem(index, "date", e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeScheduleItem(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {scheduleItems.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No schedule items yet. Click "Add Week" to create schedule.
                  </p>
                )}
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                {editingCourse ? "Update" : "Create"} Course
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Enrolled</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="font-medium">{course.title}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {course.category}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      {course.duration}
                    </div>
                    <Badge variant="outline" className="w-fit text-xs">
                      {course.level}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.enrolledStudents}</span>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(course.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewCourse(course.id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditCourse(course)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No courses found matching your search.
        </div>
      )}
    </div>
  );
};

export default AdminCourses;
