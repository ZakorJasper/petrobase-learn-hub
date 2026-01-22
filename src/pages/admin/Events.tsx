import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Clock, MapPin, Users, Plus, Edit, Trash2, Eye } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  type: "webinar" | "workshop" | "conference" | "seminar";
  date: string;
  time: string;
  duration: string;
  location: string;
  capacity: number;
  registered: number;
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  instructor: string;
  price: string;
  image: string;
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Advanced NDT Techniques Webinar",
    description: "Learn advanced non-destructive testing methods from industry experts.",
    type: "webinar",
    date: "2024-02-15",
    time: "10:00 AM",
    duration: "2 hours",
    location: "Online (Zoom)",
    capacity: 100,
    registered: 78,
    status: "upcoming",
    instructor: "Dr. Sarah Johnson",
    price: "Free",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300",
  },
  {
    id: "2",
    title: "HSE Certification Workshop",
    description: "Hands-on workshop for HSE certification preparation.",
    type: "workshop",
    date: "2024-02-20",
    time: "9:00 AM",
    duration: "Full Day",
    location: "Lagos Training Center",
    capacity: 30,
    registered: 25,
    status: "upcoming",
    instructor: "Engr. Michael Obi",
    price: "₦50,000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
  },
  {
    id: "3",
    title: "Oil & Gas Industry Conference 2024",
    description: "Annual conference bringing together industry leaders and professionals.",
    type: "conference",
    date: "2024-03-05",
    time: "8:00 AM",
    duration: "3 Days",
    location: "Eko Hotels, Lagos",
    capacity: 500,
    registered: 342,
    status: "upcoming",
    instructor: "Multiple Speakers",
    price: "₦150,000",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300",
  },
  {
    id: "4",
    title: "Pipeline Integrity Seminar",
    description: "Technical seminar on pipeline inspection and maintenance.",
    type: "seminar",
    date: "2024-01-10",
    time: "2:00 PM",
    duration: "3 hours",
    location: "Online (Google Meet)",
    capacity: 75,
    registered: 75,
    status: "completed",
    instructor: "Dr. Amina Bello",
    price: "₦25,000",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300",
  },
];

const AdminEvents = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "webinar" as Event["type"],
    date: "",
    time: "",
    duration: "",
    location: "",
    capacity: "",
    instructor: "",
    price: "",
    image: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      type: "webinar",
      date: "",
      time: "",
      duration: "",
      location: "",
      capacity: "",
      instructor: "",
      price: "",
      image: "",
    });
    setEditingEvent(null);
  };

  const handleOpenDialog = (event?: Event) => {
    if (event) {
      setEditingEvent(event);
      setFormData({
        title: event.title,
        description: event.description,
        type: event.type,
        date: event.date,
        time: event.time,
        duration: event.duration,
        location: event.location,
        capacity: event.capacity.toString(),
        instructor: event.instructor,
        price: event.price,
        image: event.image,
      });
    } else {
      resetForm();
    }
    setIsDialogOpen(true);
  };

  const handleSaveEvent = () => {
    if (editingEvent) {
      setEvents(events.map(e => 
        e.id === editingEvent.id 
          ? { ...e, ...formData, capacity: parseInt(formData.capacity) || 0 }
          : e
      ));
    } else {
      const newEvent: Event = {
        id: Date.now().toString(),
        ...formData,
        capacity: parseInt(formData.capacity) || 0,
        registered: 0,
        status: "upcoming",
      };
      setEvents([...events, newEvent]);
    }
    setIsDialogOpen(false);
    resetForm();
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(e => e.id !== id));
  };

  const handleStatusChange = (id: string, status: Event["status"]) => {
    setEvents(events.map(e => e.id === id ? { ...e, status } : e));
  };

  const filteredEvents = events.filter(event => {
    if (filterStatus !== "all" && event.status !== filterStatus) return false;
    if (filterType !== "all" && event.type !== filterType) return false;
    return true;
  });

  const getStatusColor = (status: Event["status"]) => {
    switch (status) {
      case "upcoming": return "bg-blue-100 text-blue-800";
      case "ongoing": return "bg-green-100 text-green-800";
      case "completed": return "bg-gray-100 text-gray-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "webinar": return "bg-purple-100 text-purple-800";
      case "workshop": return "bg-orange-100 text-orange-800";
      case "conference": return "bg-indigo-100 text-indigo-800";
      case "seminar": return "bg-teal-100 text-teal-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const upcomingCount = events.filter(e => e.status === "upcoming").length;
  const totalRegistrations = events.reduce((acc, e) => acc + e.registered, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold">Event Management</h2>
          <p className="text-muted-foreground">Create and manage webinars, workshops, and conferences</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingEvent ? "Edit Event" : "Create New Event"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-sm font-medium">Event Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter event title"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter event description"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Event Type</label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: Event["type"]) => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webinar">Webinar</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="seminar">Seminar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Instructor/Speaker</label>
                  <Input
                    value={formData.instructor}
                    onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                    placeholder="Enter instructor name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Date</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Time</label>
                  <Input
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="e.g., 10:00 AM"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Duration</label>
                  <Input
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g., 2 hours"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Capacity</label>
                  <Input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    placeholder="Max attendees"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Venue or online link"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <Input
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="e.g., Free or ₦50,000"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium">Event Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Enter image URL"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveEvent}>
                  {editingEvent ? "Update Event" : "Create Event"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{events.length}</p>
                <p className="text-sm text-muted-foreground">Total Events</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{upcomingCount}</p>
                <p className="text-sm text-muted-foreground">Upcoming</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalRegistrations}</p>
                <p className="text-sm text-muted-foreground">Total Registrations</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{events.filter(e => e.location.includes("Online")).length}</p>
                <p className="text-sm text-muted-foreground">Online Events</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Status:</span>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Type:</span>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="webinar">Webinar</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="seminar">Seminar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Registrations</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.instructor}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getTypeColor(event.type)}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{new Date(event.date).toLocaleDateString()}</p>
                      <p className="text-sm text-muted-foreground">{event.time} • {event.duration}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{event.location}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{event.registered}/{event.capacity}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={event.status}
                      onValueChange={(value: Event["status"]) => handleStatusChange(event.id, value)}
                    >
                      <SelectTrigger className="w-[120px]">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </Badge>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenDialog(event)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteEvent(event.id)}
                      >
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

export default AdminEvents;
