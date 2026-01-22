import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Mail, Edit, Eye, Send, CheckCircle, UserPlus, BookOpen, Award, CreditCard, Bell, Calendar } from "lucide-react";
import { toast } from "sonner";

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  description: string;
  icon: React.ElementType;
  enabled: boolean;
  lastModified: string;
}

const Communication = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>([
    {
      id: "welcome",
      name: "Welcome Email",
      subject: "Welcome to PBTS Training Institute!",
      body: `Dear {{name}},

Welcome to PBTS Training Institute! We're thrilled to have you join our community of learners.

Your account has been successfully created. You can now log in to your dashboard and explore our range of professional training courses.

Getting Started:
- Browse our course catalog
- Enroll in courses that match your career goals
- Access learning materials and resources

If you have any questions, our support team is here to help.

Best regards,
The PBTS Team`,
      description: "Sent when a new user registers on the platform",
      icon: UserPlus,
      enabled: true,
      lastModified: "2025-01-15",
    },
    {
      id: "course-enrollment",
      name: "Course Enrollment Confirmation",
      subject: "You're enrolled in {{course_name}}!",
      body: `Dear {{name}},

Congratulations! You have successfully enrolled in {{course_name}}.

Course Details:
- Course: {{course_name}}
- Duration: {{duration}}
- Start Date: {{start_date}}
- Instructor: {{instructor_name}}

You can access your course materials from your dashboard. We recommend reviewing the course outline and preparing for your first session.

Happy Learning!
The PBTS Team`,
      description: "Sent when a student successfully enrolls in a course",
      icon: BookOpen,
      enabled: true,
      lastModified: "2025-01-14",
    },
    {
      id: "payment-confirmation",
      name: "Payment Confirmation",
      subject: "Payment Received - Receipt #{{receipt_number}}",
      body: `Dear {{name}},

Thank you for your payment. This email confirms that we have received your payment.

Payment Details:
- Amount: {{amount}}
- Course: {{course_name}}
- Transaction ID: {{transaction_id}}
- Date: {{payment_date}}
- Payment Method: {{payment_method}}

Your receipt is attached to this email. You can also download it from your dashboard.

Thank you for choosing PBTS Training Institute.

Best regards,
The PBTS Finance Team`,
      description: "Sent when a payment is successfully processed",
      icon: CreditCard,
      enabled: true,
      lastModified: "2025-01-13",
    },
    {
      id: "certificate-issued",
      name: "Certificate Issued",
      subject: "Congratulations! Your {{course_name}} Certificate is Ready",
      body: `Dear {{name}},

Congratulations on successfully completing {{course_name}}!

We are pleased to inform you that your certificate has been issued and is now available for download.

Certificate Details:
- Certificate Number: {{certificate_number}}
- Course: {{course_name}}
- Completion Date: {{completion_date}}
- Valid Until: {{expiry_date}}

You can download your certificate from your dashboard or verify it using the certificate number above.

Well done on this achievement!

Best regards,
The PBTS Team`,
      description: "Sent when a certificate is issued to a student",
      icon: Award,
      enabled: true,
      lastModified: "2025-01-12",
    },
    {
      id: "live-class-reminder",
      name: "Live Class Reminder",
      subject: "Reminder: {{class_title}} starts in {{time_until}}",
      body: `Dear {{name}},

This is a friendly reminder that your live class is coming up soon.

Class Details:
- Class: {{class_title}}
- Course: {{course_name}}
- Date: {{class_date}}
- Time: {{class_time}}
- Platform: {{platform}}

Join Link: {{join_link}}

Please ensure you have a stable internet connection and join a few minutes early.

See you there!
The PBTS Team`,
      description: "Sent as a reminder before a scheduled live class",
      icon: Calendar,
      enabled: true,
      lastModified: "2025-01-11",
    },
    {
      id: "course-completion",
      name: "Course Completion",
      subject: "You've completed {{course_name}}!",
      body: `Dear {{name}},

Congratulations on completing {{course_name}}!

Your dedication and hard work have paid off. Here's a summary of your achievement:

- Course: {{course_name}}
- Completion Date: {{completion_date}}
- Final Score: {{final_score}}
- Time Spent: {{total_hours}} hours

Your certificate will be issued shortly and you'll receive a separate email notification.

What's Next?
- Check out related courses to continue your learning journey
- Share your achievement on social media
- Update your professional profile

Thank you for learning with us!

Best regards,
The PBTS Team`,
      description: "Sent when a student completes a course",
      icon: CheckCircle,
      enabled: true,
      lastModified: "2025-01-10",
    },
    {
      id: "password-reset",
      name: "Password Reset",
      subject: "Reset Your Password",
      body: `Dear {{name}},

We received a request to reset your password for your PBTS account.

Click the link below to reset your password:
{{reset_link}}

This link will expire in 24 hours.

If you didn't request a password reset, please ignore this email or contact support if you have concerns.

Best regards,
The PBTS Team`,
      description: "Sent when a user requests a password reset",
      icon: Mail,
      enabled: true,
      lastModified: "2025-01-09",
    },
    {
      id: "announcement",
      name: "General Announcement",
      subject: "{{announcement_title}}",
      body: `Dear {{name}},

{{announcement_content}}

If you have any questions, please don't hesitate to reach out to our support team.

Best regards,
The PBTS Team`,
      description: "Template for sending general announcements to users",
      icon: Bell,
      enabled: false,
      lastModified: "2025-01-08",
    },
  ]);

  const [editingTemplate, setEditingTemplate] = useState<EmailTemplate | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<EmailTemplate | null>(null);

  const handleToggleTemplate = (id: string) => {
    setTemplates(templates.map(t => 
      t.id === id ? { ...t, enabled: !t.enabled } : t
    ));
    toast.success("Template status updated");
  };

  const handleSaveTemplate = () => {
    if (editingTemplate) {
      setTemplates(templates.map(t => 
        t.id === editingTemplate.id 
          ? { ...editingTemplate, lastModified: new Date().toISOString().split('T')[0] }
          : t
      ));
      setEditingTemplate(null);
      toast.success("Template saved successfully");
    }
  };

  const handleSendTestEmail = (template: EmailTemplate) => {
    toast.success(`Test email sent for "${template.name}"`);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-primary">Communication</h2>
        <p className="text-muted-foreground mt-1">
          Configure email templates for automated communications
        </p>
      </div>

      {/* Email Templates */}
      <div className="grid gap-4">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <Card key={template.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <Badge variant={template.enabled ? "default" : "secondary"}>
                          {template.enabled ? "Active" : "Disabled"}
                        </Badge>
                      </div>
                      <CardDescription className="mt-1">
                        {template.description}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground mt-2">
                        Subject: <span className="font-medium">{template.subject}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={template.enabled}
                      onCheckedChange={() => handleToggleTemplate(template.id)}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Last modified: {template.lastModified}
                  </p>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setPreviewTemplate(template)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Email Preview: {template.name}</DialogTitle>
                          <DialogDescription>
                            Preview how this email will appear to recipients
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="p-4 bg-muted rounded-lg">
                            <p className="text-sm font-medium text-muted-foreground">Subject:</p>
                            <p className="font-medium">{template.subject}</p>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <pre className="whitespace-pre-wrap text-sm font-sans">
                              {template.body}
                            </pre>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline"
                              onClick={() => handleSendTestEmail(template)}
                            >
                              <Send className="h-4 w-4 mr-2" />
                              Send Test Email
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setEditingTemplate({ ...template })}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Edit Template: {template.name}</DialogTitle>
                          <DialogDescription>
                            Customize the email content. Use {"{{variable}}"} for dynamic content.
                          </DialogDescription>
                        </DialogHeader>
                        {editingTemplate && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="subject">Subject Line</Label>
                              <Input
                                id="subject"
                                value={editingTemplate.subject}
                                onChange={(e) => setEditingTemplate({
                                  ...editingTemplate,
                                  subject: e.target.value
                                })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="body">Email Body</Label>
                              <Textarea
                                id="body"
                                value={editingTemplate.body}
                                onChange={(e) => setEditingTemplate({
                                  ...editingTemplate,
                                  body: e.target.value
                                })}
                                className="min-h-[300px] font-mono text-sm"
                              />
                            </div>
                            <div className="p-4 bg-muted rounded-lg">
                              <p className="text-sm font-medium mb-2">Available Variables:</p>
                              <div className="flex flex-wrap gap-2">
                                {["{{name}}", "{{email}}", "{{course_name}}", "{{date}}", "{{amount}}"].map((v) => (
                                  <Badge key={v} variant="outline" className="font-mono text-xs">
                                    {v}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" onClick={() => setEditingTemplate(null)}>
                                Cancel
                              </Button>
                              <Button onClick={handleSaveTemplate}>
                                Save Changes
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Communication;
