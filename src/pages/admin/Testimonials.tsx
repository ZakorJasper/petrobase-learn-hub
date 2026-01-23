import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2, Star, Quote, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  course: string;
  content: string;
  rating: number;
  image: string;
  isPublished: boolean;
  isFeatured: boolean;
  dateSubmitted: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Adebayo Johnson",
    role: "Safety Officer",
    company: "Shell Nigeria",
    course: "HSE Level 3 Certification",
    content: "The HSE training was incredibly comprehensive. I gained practical skills that I apply daily in my work. The instructors were knowledgeable and the course materials were top-notch.",
    rating: 5,
    image: "",
    isPublished: true,
    isFeatured: true,
    dateSubmitted: "2024-01-15"
  },
  {
    id: "2",
    name: "Chioma Okonkwo",
    role: "NDT Technician",
    company: "Total Energies",
    course: "NDT Level II - Ultrasonic Testing",
    content: "Excellent course content and hands-on practical sessions. The certification has opened new career opportunities for me.",
    rating: 5,
    image: "",
    isPublished: true,
    isFeatured: false,
    dateSubmitted: "2024-01-20"
  },
  {
    id: "3",
    name: "Emmanuel Obi",
    role: "Project Manager",
    company: "Chevron Nigeria",
    course: "Project Management Professional",
    content: "The PMP preparation course was exactly what I needed. Passed my certification on the first attempt!",
    rating: 4,
    image: "",
    isPublished: false,
    isFeatured: false,
    dateSubmitted: "2024-02-01"
  },
];

const courses = [
  "HSE Level 3 Certification",
  "NDT Level II - Ultrasonic Testing",
  "Project Management Professional",
  "First Aid & CPR Training",
  "Fire Safety Management",
  "NEBOSH IGC",
];

const AdminTestimonials = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    course: "",
    content: "",
    rating: 5,
    image: "",
    isPublished: false,
    isFeatured: false,
  });

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      company: "",
      course: "",
      content: "",
      rating: 5,
      image: "",
      isPublished: false,
      isFeatured: false,
    });
    setEditingTestimonial(null);
  };

  const handleOpenDialog = (testimonial?: Testimonial) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData({
        name: testimonial.name,
        role: testimonial.role,
        company: testimonial.company,
        course: testimonial.course,
        content: testimonial.content,
        rating: testimonial.rating,
        image: testimonial.image,
        isPublished: testimonial.isPublished,
        isFeatured: testimonial.isFeatured,
      });
    } else {
      resetForm();
    }
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (!formData.name || !formData.content || !formData.course) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => 
        t.id === editingTestimonial.id 
          ? { ...t, ...formData }
          : t
      ));
      toast({
        title: "Testimonial Updated",
        description: "The testimonial has been updated successfully.",
      });
    } else {
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        ...formData,
        dateSubmitted: new Date().toISOString().split('T')[0],
      };
      setTestimonials([...testimonials, newTestimonial]);
      toast({
        title: "Testimonial Added",
        description: "The testimonial has been added successfully.",
      });
    }
    
    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast({
      title: "Testimonial Deleted",
      description: "The testimonial has been removed.",
    });
  };

  const togglePublish = (id: string) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, isPublished: !t.isPublished } : t
    ));
    const testimonial = testimonials.find(t => t.id === id);
    toast({
      title: testimonial?.isPublished ? "Testimonial Unpublished" : "Testimonial Published",
      description: testimonial?.isPublished 
        ? "The testimonial is now hidden from the website."
        : "The testimonial is now visible on the website.",
    });
  };

  const toggleFeatured = (id: string) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, isFeatured: !t.isFeatured } : t
    ));
  };

  const filteredTestimonials = testimonials.filter(t => {
    if (filterStatus === "published") return t.isPublished;
    if (filterStatus === "draft") return !t.isPublished;
    if (filterStatus === "featured") return t.isFeatured;
    return true;
  });

  const stats = {
    total: testimonials.length,
    published: testimonials.filter(t => t.isPublished).length,
    featured: testimonials.filter(t => t.isFeatured).length,
    avgRating: testimonials.length > 0 
      ? (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)
      : "0",
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold">Testimonial Management</h2>
          <p className="text-muted-foreground">Manage student testimonials displayed on the website</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="h-4 w-4 mr-2" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingTestimonial ? "Edit Testimonial" : "Add New Testimonial"}</DialogTitle>
              <DialogDescription>
                {editingTestimonial ? "Update the testimonial details below." : "Add a new student testimonial to display on the website."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Job Title</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Safety Officer"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course *</Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => setFormData({ ...formData, course: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>{course}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Testimonial Content *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write the testimonial content here..."
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <Select
                    value={formData.rating.toString()}
                    onValueChange={(value) => setFormData({ ...formData, rating: parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[5, 4, 3, 2, 1].map((r) => (
                        <SelectItem key={r} value={r.toString()}>
                          {r} Star{r > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Profile Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isPublished"
                    checked={formData.isPublished}
                    onCheckedChange={(checked) => setFormData({ ...formData, isPublished: checked })}
                  />
                  <Label htmlFor="isPublished">Publish on website</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onCheckedChange={(checked) => setFormData({ ...formData, isFeatured: checked })}
                  />
                  <Label htmlFor="isFeatured">Feature on homepage</Label>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSave}>
                {editingTestimonial ? "Update Testimonial" : "Add Testimonial"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Testimonials</CardDescription>
            <CardTitle className="text-3xl">{stats.total}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Published</CardDescription>
            <CardTitle className="text-3xl text-green-600">{stats.published}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Featured</CardDescription>
            <CardTitle className="text-3xl text-amber-600">{stats.featured}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Average Rating</CardDescription>
            <CardTitle className="text-3xl flex items-center gap-2">
              {stats.avgRating}
              <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-4">
        <Label>Filter:</Label>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Testimonials</SelectItem>
            <SelectItem value="published">Published Only</SelectItem>
            <SelectItem value="draft">Drafts Only</SelectItem>
            <SelectItem value="featured">Featured Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Testimonials Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Author</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTestimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{testimonial.course}</span>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="flex items-start gap-1">
                      <Quote className="h-3 w-3 text-muted-foreground mt-1 flex-shrink-0" />
                      <span className="text-sm line-clamp-2">{testimonial.content}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Badge variant={testimonial.isPublished ? "default" : "secondary"}>
                        {testimonial.isPublished ? "Published" : "Draft"}
                      </Badge>
                      {testimonial.isFeatured && (
                        <Badge variant="outline" className="border-amber-500 text-amber-600">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(testimonial.dateSubmitted).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => togglePublish(testimonial.id)}
                        title={testimonial.isPublished ? "Unpublish" : "Publish"}
                      >
                        {testimonial.isPublished ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFeatured(testimonial.id)}
                        title={testimonial.isFeatured ? "Remove from featured" : "Add to featured"}
                      >
                        <Star className={`h-4 w-4 ${testimonial.isFeatured ? 'fill-amber-400 text-amber-400' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenDialog(testimonial)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(testimonial.id)}
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

export default AdminTestimonials;
