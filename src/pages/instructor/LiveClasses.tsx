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
import { Search, Plus, Video, Users, Calendar, Clock, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LiveClass {
  id: string;
  title: string;
  course: string;
  date: string;
  time: string;
  duration: string;
  platform: "Zoom" | "Google Meet";
  meetingLink: string;
  status: "Scheduled" | "Live" | "Completed";
  attendees: number;
}

const InstructorLiveClasses = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [liveClasses, setLiveClasses] = useState<LiveClass[]>([
    {
      id: "1",
      title: "HSE Week 1 - Introduction",
      course: "HSE Level 1",
      date: "2025-12-17",
      time: "10:00 AM",
      duration: "2 hours",
      platform: "Zoom",
      meetingLink: "https://zoom.us/j/123456789",
      status: "Scheduled",
      attendees: 24,
    },
    {
      id: "2",
      title: "NDT Practical Session",
      course: "NDT Level 1",
      date: "2025-12-18",
      time: "2:00 PM",
      duration: "3 hours",
      platform: "Google Meet",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      status: "Scheduled",
      attendees: 18,
    },
    {
      id: "3",
      title: "Crane Safety Review",
      course: "Crane Operations",
      date: "2025-12-15",
      time: "9:00 AM",
      duration: "1.5 hours",
      platform: "Zoom",
      meetingLink: "https://zoom.us/j/987654321",
      status: "Completed",
      attendees: 32,
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    course: "",
    date: "",
    time: "",
    duration: "",
    platform: "" as "Zoom" | "Google Meet" | "",
    meetingLink: "",
  });

  const filteredClasses = liveClasses.filter(
    (liveClass) =>
      liveClass.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      liveClass.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClass = () => {
    if (!formData.platform) return;
    
    const newClass: LiveClass = {
      id: Date.now().toString(),
      title: formData.title,
      course: formData.course,
      date: formData.date,
      time: formData.time,
      duration: formData.duration,
      platform: formData.platform as "Zoom" | "Google Meet",
      meetingLink: formData.meetingLink,
      status: "Scheduled",
      attendees: 0,
    };
    setLiveClasses([...liveClasses, newClass]);
    setIsAddDialogOpen(false);
    setFormData({
      title: "",
      course: "",
      date: "",
      time: "",
      duration: "",
      platform: "",
      meetingLink: "",
    });
    toast({
      title: "Live Class Scheduled",
      description: "Your live class has been scheduled successfully.",
    });
  };

  const handleStartClass = (classId: string) => {
    const liveClass = liveClasses.find((c) => c.id === classId);
    if (liveClass?.meetingLink) {
      window.open(liveClass.meetingLink, "_blank");
      setLiveClasses(
        liveClasses.map((c) =>
          c.id === classId ? { ...c, status: "Live" as const } : c
        )
      );
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">Live Classes</h2>
          <p className="text-muted-foreground">Schedule and manage your live sessions</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Class
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Schedule Live Class</DialogTitle>
              <DialogDescription>Create a new live class session</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Session Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Week 1 - Introduction"
                />
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g., 2 hours"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <Select
                  value={formData.platform}
                  onValueChange={(value) => setFormData({ ...formData, platform: value as "Zoom" | "Google Meet" })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Zoom">Zoom</SelectItem>
                    <SelectItem value="Google Meet">Google Meet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meetingLink">Meeting Link</Label>
                <Input
                  id="meetingLink"
                  value={formData.meetingLink}
                  onChange={(e) => setFormData({ ...formData, meetingLink: e.target.value })}
                  placeholder="https://zoom.us/j/..."
                />
              </div>

              <Button className="w-full" onClick={handleAddClass}>
                Schedule Class
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
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {liveClasses.filter((c) => c.status === "Scheduled").length}
                </p>
                <p className="text-sm text-muted-foreground">Scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Video className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {liveClasses.filter((c) => c.status === "Live").length}
                </p>
                <p className="text-sm text-muted-foreground">Live Now</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {liveClasses.filter((c) => c.status === "Completed").length}
                </p>
                <p className="text-sm text-muted-foreground">Completed</p>
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
                placeholder="Search classes..."
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
                <TableHead>Session</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Attendees</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClasses.map((liveClass) => (
                <TableRow key={liveClass.id}>
                  <TableCell className="font-medium">{liveClass.title}</TableCell>
                  <TableCell>{liveClass.course}</TableCell>
                  <TableCell>
                    {liveClass.date} at {liveClass.time}
                  </TableCell>
                  <TableCell>{liveClass.duration}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{liveClass.platform}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {liveClass.attendees}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        liveClass.status === "Live"
                          ? "default"
                          : liveClass.status === "Scheduled"
                          ? "secondary"
                          : "outline"
                      }
                      className={liveClass.status === "Live" ? "bg-green-600" : ""}
                    >
                      {liveClass.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {liveClass.status === "Scheduled" && (
                        <Button size="sm" onClick={() => handleStartClass(liveClass.id)}>
                          Start
                        </Button>
                      )}
                      {liveClass.status === "Live" && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={liveClass.meetingLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Join
                          </a>
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

export default InstructorLiveClasses;
