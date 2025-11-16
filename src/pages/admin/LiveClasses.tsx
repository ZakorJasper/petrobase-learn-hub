import { useState } from "react";
import { Search, Plus, Video, Calendar, Users, Clock, Eye } from "lucide-react";
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

interface LiveClass {
  id: string;
  title: string;
  course: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  participants: number;
  maxParticipants: number;
  status: "scheduled" | "live" | "completed" | "cancelled";
  meetingLink?: string;
}

const mockLiveClasses: LiveClass[] = [
  {
    id: "1",
    title: "HSE Level I - Session 1",
    course: "HSE Level I",
    instructor: "Dr. John Smith",
    date: "2024-02-15",
    time: "10:00 AM",
    duration: "2 hours",
    participants: 18,
    maxParticipants: 30,
    status: "scheduled",
    meetingLink: "https://meet.pbts.com/hse-level-1",
  },
  {
    id: "2",
    title: "NDT Ultrasonic Testing - Practical Demo",
    course: "NDT Level II",
    instructor: "Eng. Sarah Johnson",
    date: "2024-02-14",
    time: "2:00 PM",
    duration: "3 hours",
    participants: 15,
    maxParticipants: 20,
    status: "live",
    meetingLink: "https://meet.pbts.com/ndt-demo",
  },
  {
    id: "3",
    title: "AutoCAD Advanced Techniques",
    course: "AutoCAD 2D/3D",
    instructor: "Eng. Michael Brown",
    date: "2024-02-13",
    time: "11:00 AM",
    duration: "2 hours",
    participants: 28,
    maxParticipants: 30,
    status: "completed",
  },
];

const AdminLiveClasses = () => {
  const [classes, setClasses] = useState<LiveClass[]>(mockLiveClasses);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<LiveClass | null>(null);

  const filteredClasses = classes.filter(
    (liveClass) =>
      liveClass.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      liveClass.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      liveClass.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClass = () => {
    setEditingClass(null);
    setIsDialogOpen(true);
  };

  const getStatusBadge = (status: LiveClass["status"]) => {
    const variants: Record<LiveClass["status"], string> = {
      scheduled: "secondary",
      live: "default",
      completed: "outline",
      cancelled: "destructive",
    };
    const colors: Record<LiveClass["status"], string> = {
      scheduled: "bg-blue-500/10 text-blue-600 border-blue-200",
      live: "bg-green-500/10 text-green-600 border-green-200",
      completed: "",
      cancelled: "",
    };
    return (
      <Badge variant={variants[status] as any} className={colors[status]}>
        {status === "live" && <span className="mr-1 h-2 w-2 bg-green-600 rounded-full animate-pulse" />}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary">
            Live Classes Management
          </h2>
          <p className="text-muted-foreground mt-1">
            Schedule and manage live virtual classes
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddClass}>
              <Plus className="h-4 w-4" />
              Schedule Class
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {editingClass ? "Edit Live Class" : "Schedule New Live Class"}
              </DialogTitle>
              <DialogDescription>
                Enter the details for the live class session.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-2">
                <Label htmlFor="title">Class Title</Label>
                <Input id="title" placeholder="e.g., HSE Level I - Session 1" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="course">Course</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hse1">HSE Level I</SelectItem>
                    <SelectItem value="ndt2">NDT Level II</SelectItem>
                    <SelectItem value="autocad">AutoCAD 2D/3D</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="instructor">Instructor</Label>
                <Input id="instructor" placeholder="Instructor name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="e.g., 2 hours" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="maxParticipants">Max Participants</Label>
                  <Input id="maxParticipants" type="number" placeholder="30" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="meetingLink">Meeting Link (Optional)</Label>
                <Input id="meetingLink" placeholder="https://meet.example.com/class" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                {editingClass ? "Update" : "Schedule"} Class
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title, course, or instructor..."
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
              <TableHead>Class Details</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Participants</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClasses.map((liveClass) => (
              <TableRow key={liveClass.id}>
                <TableCell>
                  <div className="flex items-start gap-2">
                    <Video className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{liveClass.title}</p>
                      <p className="text-sm text-muted-foreground">{liveClass.course}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{liveClass.instructor}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      {new Date(liveClass.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      {liveClass.time} ({liveClass.duration})
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{liveClass.participants}/{liveClass.maxParticipants}</span>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(liveClass.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {liveClass.meetingLink && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(liveClass.meetingLink, "_blank")}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Join
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No live classes found matching your search.
        </div>
      )}
    </div>
  );
};

export default AdminLiveClasses;
