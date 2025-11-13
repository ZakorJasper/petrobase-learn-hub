import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, MapPin, Briefcase, Edit } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+234 806 228 4991",
    location: "Port Harcourt, Nigeria",
    occupation: "Petroleum Engineer",
    enrolledSince: "December 2024",
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          Profile Settings
        </h2>
        <p className="text-muted-foreground">
          Manage your personal information and preferences
        </p>
      </div>

      {/* Profile Header */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User className="h-12 w-12" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-semibold mb-1">
                {userProfile.name}
              </h3>
              <p className="text-muted-foreground">{userProfile.occupation}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Member since {userProfile.enrolledSince}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Profile Details */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  defaultValue={userProfile.name}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  defaultValue={userProfile.email}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  defaultValue={userProfile.phone}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  defaultValue={userProfile.location}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="occupation">Occupation</Label>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="occupation"
                  defaultValue={userProfile.occupation}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="flex gap-2 pt-4">
              <Button className="bg-gradient-to-r from-primary to-secondary">
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full md:w-auto">
            Change Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
