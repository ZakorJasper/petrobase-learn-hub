import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Shield, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTraineeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Welcome to your trainee dashboard",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Please enter valid credentials",
        variant: "destructive",
      });
    }
  };

  const handleInstructorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Welcome to your instructor dashboard",
      });
      navigate("/instructor");
    } else {
      toast({
        title: "Error",
        description: "Please enter valid credentials",
        variant: "destructive",
      });
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Welcome to super admin dashboard",
      });
      navigate("/admin");
    } else {
      toast({
        title: "Error",
        description: "Please enter valid credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">
            Petro-Base Training School
          </h1>
          <p className="text-muted-foreground">Login to access your dashboard</p>
        </div>

        <Tabs defaultValue="trainee" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="trainee">
              <GraduationCap className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Trainee</span>
            </TabsTrigger>
            <TabsTrigger value="instructor">
              <Users className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Instructor</span>
            </TabsTrigger>
            <TabsTrigger value="admin">
              <Shield className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Super Admin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trainee">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Trainee Login</CardTitle>
                <CardDescription>Access your courses and certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTraineeLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="trainee-email">Email</Label>
                    <Input id="trainee-email" type="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainee-password">Password</Label>
                    <Input id="trainee-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">Login as Trainee</Button>
                  <div className="text-center text-sm"><a href="#" className="text-primary hover:underline">Forgot password?</a></div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructor">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Instructor Login</CardTitle>
                <CardDescription>Manage your courses and students</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInstructorLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="instructor-email">Email</Label>
                    <Input id="instructor-email" type="email" placeholder="instructor@petrobasegroup.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instructor-password">Password</Label>
                    <Input id="instructor-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">Login as Instructor</Button>
                  <div className="text-center text-sm"><a href="#" className="text-primary hover:underline">Forgot password?</a></div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admin">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Super Admin Login</CardTitle>
                <CardDescription>Full system administration access</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email</Label>
                    <Input id="admin-email" type="email" placeholder="admin@petrobasegroup.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input id="admin-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">Login as Super Admin</Button>
                  <div className="text-center text-sm"><a href="#" className="text-primary hover:underline">Forgot password?</a></div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <Button variant="link" onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;