import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, Bell, Mail, Shield, Database } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          System Settings
        </h2>
        <p className="text-muted-foreground">
          Configure system-wide settings and preferences
        </p>
      </div>

      {/* General Settings */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-primary" />
            <CardTitle>General Settings</CardTitle>
          </div>
          <CardDescription>
            Manage basic system configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="site-name">Site Name</Label>
            <Input
              id="site-name"
              defaultValue="Petro-Base Training School"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="support-email">Support Email</Label>
            <Input
              id="support-email"
              type="email"
              defaultValue="training@petrobasegroup.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-phone">Contact Phone</Label>
            <Input
              id="contact-phone"
              defaultValue="+234 806 228 4991"
            />
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Save General Settings
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Notification Settings</CardTitle>
          </div>
          <CardDescription>
            Configure system notifications and alerts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Send email notifications to users
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Send SMS alerts for important events
              </p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Class Reminders</Label>
              <p className="text-sm text-muted-foreground">
                Automatic reminders before live classes
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Email Configuration */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <CardTitle>Email Configuration</CardTitle>
          </div>
          <CardDescription>
            Configure SMTP settings for outgoing emails
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="smtp-host">SMTP Host</Label>
              <Input id="smtp-host" placeholder="smtp.example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtp-port">SMTP Port</Label>
              <Input id="smtp-port" placeholder="587" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtp-user">SMTP Username</Label>
              <Input id="smtp-user" placeholder="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtp-pass">SMTP Password</Label>
              <Input id="smtp-pass" type="password" placeholder="••••••••" />
            </div>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Save Email Settings
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>Security Settings</CardTitle>
          </div>
          <CardDescription>
            Manage system security and access control
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">
                Require 2FA for admin accounts
              </p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Session Timeout</Label>
              <p className="text-sm text-muted-foreground">
                Automatically log out inactive users
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="session-duration">Session Duration (minutes)</Label>
            <Input
              id="session-duration"
              type="number"
              defaultValue="60"
              className="w-32"
            />
          </div>
        </CardContent>
      </Card>

      {/* Database Management */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            <CardTitle>Database Management</CardTitle>
          </div>
          <CardDescription>
            Backup and maintenance operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button variant="outline">
              Create Backup
            </Button>
            <Button variant="outline">
              Restore from Backup
            </Button>
            <Button variant="outline">
              Optimize Database
            </Button>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Last backup: January 20, 2025 at 3:00 AM
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
