import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Search, Plus, Eye, Edit, Users, Video, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CourseSchedule {
  id: string;
  week: string;
  topic: string;
  date: string;
}

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  students: number;
  status: "Active" | "Draft" | "Archived";
  price: string;
  description: string;
  schedule: CourseSchedule[];
}

const InstructorCourses = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [scheduleItems, setScheduleItems] = useState<CourseSchedule[]>([]);

  const [courses, setCourses] = useState<Course[]>([
    {
      id: "1",
      title: "HSE Level 1",
      category: "Health & Safety",
      duration: "4 weeks",
      students: 45,
      status: "Active",
      price: "₦150,000",
      description: "Comprehensive HSE training course",
      schedule: [
        { id: "1", week: "Week 1", topic: "Introduction to HSE", date: "2025-12-17" },
        { id: "2", week: "Week 2", topic: "Hazard Identification", date: "2025-12-24" },
      ],
    },
    {
      id: "2",
      title: "NDT Level 1",
      category: "Non-Destructive Testing",
      duration: "6 weeks",
      students: 32,
      status: "Active",
      price: "₦250,000",
      description: "NDT fundamentals and practical applications",
      schedule: [],
    },
    {
      id: "3",
      title: "Crane Operations",
      category: "Operations",
      duration: "3 weeks",
      students: 28,
      status: "Draft",
      price: "₦180,000",
      description: "Safe crane operation techniques",
      schedule: [],
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    duration: "",
    price: "",
    description: "",
    status: "Draft" as "Active" | "Draft" | "Archived",
  });

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddScheduleItem = () => {
    const newItem: CourseSchedule = {
      id: Date.now().toString(),
      week: `Week ${scheduleItems.length + 1}`,
      topic: "",
      date: "",
    };
    setScheduleItems([...scheduleItems, newItem]);
  };

  const handleUpdateScheduleItem = (id: string, field: keyof CourseSchedule, value: string) => {
    setScheduleItems(
      scheduleItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleRemoveScheduleItem = (id: string) => {
    setScheduleItems(scheduleItems.filter((item) => item.id !== id));
  };

  const handleAddCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      ...formData,
      students: 0,
      schedule: scheduleItems,
    };
    setCourses([...courses, newCourse]);
    setIsAddDialogOpen(false);
    setFormData({
      title: "",
      category: "",
      duration: "",
      price: "",
      description: "",
      status: "Draft",
    });
    setScheduleItems([]);
    toast({
      title: "Course Created",
      description: "Your course has been created successfully.",
    });
  };

  const handleEditCourse = () => {
    if (!selectedCourse) return;
    setCourses(
      courses.map((course) =>
        course.id === selectedCourse.id
          ? { ...course, ...formData, schedule: scheduleItems }
          : course
      )
    );
    setIsEditDialogOpen(false);
    setSelectedCourse(null);
    setFormData({
      title: "",
      category: "",
      duration: "",
      price: "",
      description: "",
      status: "Draft",
    });
    setScheduleItems([]);
    toast({
      title: "Course Updated",
      description: "Course details have been updated successfully.",
    });
  };

  const openEditDialog = (course: Course) => {
    setSelectedCourse(course);
    setFormData({
      title: course.title,
      category: course.category,
      duration: course.duration,
      price: course.price,
      description: course.description,
      status: course.status,
    });
    setScheduleItems(course.schedule || []);
    setIsEditDialogOpen(true);
  };

  const handleViewCourse = (courseId: string) => {
    navigate(`/instructor/courses/${courseId}`);
  };

  const CourseForm = ({ isEdit = false }: { isEdit?: boolean }) => (
    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Course Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter course title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Health & Safety">Health & Safety</SelectItem>
              <SelectItem value="Non-Destructive Testing">Non-Destructive Testing</SelectItem>
              <SelectItem value="Operations">Operations</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            placeholder="e.g., 4 weeks"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="e.g., ₦150,000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select
          value={formData.status}
          onValueChange={(value) => setFormData({ ...formData, status: value as "Active" | "Draft" | "Archived" })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Draft">Draft</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Enter course description"
          rows={3}
        />
      </div>

      {/* Course Schedule Section */}
      <div className="space-y-4 border-t pt-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Course Schedule</Label>
          <Button type="button" variant="outline" size="sm" onClick={handleAddScheduleItem}>
            <Plus className="h-4 w-4 mr-1" />
            Add Week
          </Button>
        </div>

        {scheduleItems.length === 0 ? (
          <p className="text-sm text-muted-foreground">No schedule items added yet.</p>
        ) : (
          <div className="space-y-3">
            {scheduleItems.map((item) => (
              <div key={item.id} className="flex gap-2 items-start p-3 bg-muted/50 rounded-lg">
                <div className="flex-1 grid grid-cols-3 gap-2">
                  <Input
                    value={item.week}
                    onChange={(e) => handleUpdateScheduleItem(item.id, "week", e.target.value)}
                    placeholder="Week 1"
                  />
                  <Input
                    value={item.topic}
                    onChange={(e) => handleUpdateScheduleItem(item.id, "topic", e.target.value)}
                    placeholder="Topic"
                  />
                  <Input
                    type="date"
                    value={item.date}
                    onChange={(e) => handleUpdateScheduleItem(item.id, "date", e.target.value)}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveScheduleItem(item.id)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button
        className="w-full"
        onClick={isEdit ? handleEditCourse : handleAddCourse}
      >
        {isEdit ? "Update Course" : "Create Course"}
      </Button>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">My Courses</h2>
          <p className="text-muted-foreground">Manage your assigned courses</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Course</DialogTitle>
              <DialogDescription>Add a new course to your teaching portfolio</DialogDescription>
            </DialogHeader>
            <CourseForm />
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
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
                <TableHead>Course</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.category}</TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {course.students}
                    </div>
                  </TableCell>
                  <TableCell>{course.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        course.status === "Active"
                          ? "default"
                          : course.status === "Draft"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {course.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
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
                        onClick={() => openEditDialog(course)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
            <DialogDescription>Update course details and schedule</DialogDescription>
          </DialogHeader>
          <CourseForm isEdit />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InstructorCourses;
