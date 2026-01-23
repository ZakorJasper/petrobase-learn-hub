import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardCheck, 
  Clock, 
  Shield, 
  Award, 
  FileQuestion, 
  RotateCcw,
  Eye,
  Shuffle,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Settings2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AssessmentSettings = () => {
  const { toast } = useToast();

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          Assessment Engine Settings
        </h2>
        <p className="text-muted-foreground">
          Configure system-wide assessment rules, grading policies, and security measures
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="grading">Grading</TabsTrigger>
          <TabsTrigger value="questions">Question Types</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings2 className="h-5 w-5 text-primary" />
                <CardTitle>General Assessment Settings</CardTitle>
              </div>
              <CardDescription>
                Configure default behaviors for all assessments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="default-duration">Default Duration (minutes)</Label>
                  <Input id="default-duration" type="number" defaultValue="60" />
                  <p className="text-xs text-muted-foreground">
                    Default time limit for new assessments
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-duration">Maximum Duration (minutes)</Label>
                  <Input id="max-duration" type="number" defaultValue="180" />
                  <p className="text-xs text-muted-foreground">
                    Maximum allowed time for any assessment
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="questions-per-page">Questions Per Page</Label>
                  <Select defaultValue="1">
                    <SelectTrigger id="questions-per-page">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 question per page</SelectItem>
                      <SelectItem value="5">5 questions per page</SelectItem>
                      <SelectItem value="10">10 questions per page</SelectItem>
                      <SelectItem value="all">All questions on one page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="submission-grace">Submission Grace Period (seconds)</Label>
                  <Input id="submission-grace" type="number" defaultValue="30" />
                  <p className="text-xs text-muted-foreground">
                    Extra time allowed after timer expires for submission
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Timer</Label>
                    <p className="text-sm text-muted-foreground">
                      Display countdown timer during assessments
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Allow Navigation</Label>
                    <p className="text-sm text-muted-foreground">
                      Let students navigate between questions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Progress Indicator</Label>
                    <p className="text-sm text-muted-foreground">
                      Display question progress bar
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-Save Answers</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save answers as students progress
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Button 
                onClick={() => handleSave("General")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save General Settings
              </Button>
            </CardContent>
          </Card>

          {/* Retake Policy */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-primary" />
                <CardTitle>Retake Policy</CardTitle>
              </div>
              <CardDescription>
                Configure rules for assessment retakes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="max-attempts">Maximum Attempts</Label>
                  <Select defaultValue="3">
                    <SelectTrigger id="max-attempts">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 attempt only</SelectItem>
                      <SelectItem value="2">2 attempts</SelectItem>
                      <SelectItem value="3">3 attempts</SelectItem>
                      <SelectItem value="5">5 attempts</SelectItem>
                      <SelectItem value="unlimited">Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cooldown">Cooldown Period (hours)</Label>
                  <Input id="cooldown" type="number" defaultValue="24" />
                  <p className="text-xs text-muted-foreground">
                    Wait time before retaking an assessment
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="score-policy">Score Recording Policy</Label>
                  <Select defaultValue="highest">
                    <SelectTrigger id="score-policy">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="highest">Keep highest score</SelectItem>
                      <SelectItem value="latest">Keep latest score</SelectItem>
                      <SelectItem value="average">Average all attempts</SelectItem>
                      <SelectItem value="first">Keep first attempt</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="penalty">Retake Penalty (%)</Label>
                  <Input id="penalty" type="number" defaultValue="0" min="0" max="50" />
                  <p className="text-xs text-muted-foreground">
                    Percentage deducted from retake scores
                  </p>
                </div>
              </div>

              <Button 
                onClick={() => handleSave("Retake Policy")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Retake Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Grading Settings */}
        <TabsContent value="grading" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <CardTitle>Grading Scale</CardTitle>
              </div>
              <CardDescription>
                Define the grading scale used across all assessments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="passing-score">Passing Score (%)</Label>
                <Input id="passing-score" type="number" defaultValue="70" min="0" max="100" className="w-32" />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Grade Boundaries</Label>
                <div className="grid gap-3">
                  {[
                    { grade: "A", min: 90, max: 100, color: "bg-green-500" },
                    { grade: "B", min: 80, max: 89, color: "bg-blue-500" },
                    { grade: "C", min: 70, max: 79, color: "bg-yellow-500" },
                    { grade: "D", min: 60, max: 69, color: "bg-orange-500" },
                    { grade: "F", min: 0, max: 59, color: "bg-red-500" },
                  ].map((item) => (
                    <div key={item.grade} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <Badge className={`${item.color} text-white w-8 justify-center`}>
                        {item.grade}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Input 
                          type="number" 
                          defaultValue={item.min} 
                          className="w-20" 
                          min="0" 
                          max="100"
                        />
                        <span className="text-muted-foreground">to</span>
                        <Input 
                          type="number" 
                          defaultValue={item.max} 
                          className="w-20" 
                          min="0" 
                          max="100"
                        />
                        <span className="text-muted-foreground">%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => handleSave("Grading Scale")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Grading Settings
              </Button>
            </CardContent>
          </Card>

          {/* Feedback Settings */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <CardTitle>Feedback & Results Display</CardTitle>
              </div>
              <CardDescription>
                Configure what students see after completing an assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="results-timing">When to Show Results</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger id="results-timing">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately after submission</SelectItem>
                    <SelectItem value="after-due">After due date</SelectItem>
                    <SelectItem value="manual">After manual review</SelectItem>
                    <SelectItem value="never">Never (instructor only)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Score</Label>
                    <p className="text-sm text-muted-foreground">
                      Display the numerical score to students
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Grade</Label>
                    <p className="text-sm text-muted-foreground">
                      Display the letter grade (A, B, C, etc.)
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Correct Answers</Label>
                    <p className="text-sm text-muted-foreground">
                      Reveal correct answers after submission
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Answer Explanations</Label>
                    <p className="text-sm text-muted-foreground">
                      Display explanations for each question
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Ranking</Label>
                    <p className="text-sm text-muted-foreground">
                      Show student's position among peers
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Button 
                onClick={() => handleSave("Feedback")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Feedback Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Question Types */}
        <TabsContent value="questions" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileQuestion className="h-5 w-5 text-primary" />
                <CardTitle>Enabled Question Types</CardTitle>
              </div>
              <CardDescription>
                Configure which question types are available for assessments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Multiple Choice", description: "Single correct answer from options", enabled: true },
                { name: "Multiple Select", description: "Multiple correct answers from options", enabled: true },
                { name: "True/False", description: "Binary true or false questions", enabled: true },
                { name: "Short Answer", description: "Brief text response", enabled: true },
                { name: "Essay", description: "Long-form written response", enabled: true },
                { name: "Fill in the Blank", description: "Complete missing words/phrases", enabled: true },
                { name: "Matching", description: "Match items from two columns", enabled: false },
                { name: "Ordering", description: "Arrange items in correct sequence", enabled: false },
                { name: "File Upload", description: "Submit files as answers", enabled: true },
                { name: "Practical/Simulation", description: "Hands-on practical assessments", enabled: false },
              ].map((type) => (
                <div key={type.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="space-y-0.5">
                    <Label>{type.name}</Label>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                  <Switch defaultChecked={type.enabled} />
                </div>
              ))}

              <Button 
                onClick={() => handleSave("Question Types")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Question Type Settings
              </Button>
            </CardContent>
          </Card>

          {/* Question Pool Settings */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shuffle className="h-5 w-5 text-primary" />
                <CardTitle>Question Pool & Randomization</CardTitle>
              </div>
              <CardDescription>
                Configure question randomization and pool settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Randomize Question Order</Label>
                  <p className="text-sm text-muted-foreground">
                    Shuffle questions for each attempt
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Randomize Answer Options</Label>
                  <p className="text-sm text-muted-foreground">
                    Shuffle answer choices for multiple choice
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Question Pools</Label>
                  <p className="text-sm text-muted-foreground">
                    Draw random questions from a larger pool
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="min-pool">Minimum Pool Size</Label>
                  <Input id="min-pool" type="number" defaultValue="10" />
                  <p className="text-xs text-muted-foreground">
                    Minimum questions required to enable pooling
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pool-ratio">Pool Draw Ratio (%)</Label>
                  <Input id="pool-ratio" type="number" defaultValue="70" />
                  <p className="text-xs text-muted-foreground">
                    Percentage of pool questions to draw
                  </p>
                </div>
              </div>

              <Button 
                onClick={() => handleSave("Randomization")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Randomization Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>Anti-Cheating Measures</CardTitle>
              </div>
              <CardDescription>
                Configure security features to maintain assessment integrity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Lockdown Browser Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Prevent switching tabs/applications during assessment
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Disable Copy/Paste</Label>
                  <p className="text-sm text-muted-foreground">
                    Prevent copying questions or pasting answers
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Disable Right-Click</Label>
                  <p className="text-sm text-muted-foreground">
                    Prevent context menu access during assessment
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Full Screen Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Require full screen during assessment
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tab Switch Detection</Label>
                  <p className="text-sm text-muted-foreground">
                    Log when students switch browser tabs
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Webcam Proctoring</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable webcam monitoring during assessments
                  </p>
                </div>
                <Switch />
              </div>

              <Button 
                onClick={() => handleSave("Anti-Cheating")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Security Settings
              </Button>
            </CardContent>
          </Card>

          {/* Access Control */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <CardTitle>Access Control</CardTitle>
              </div>
              <CardDescription>
                Configure who can access assessments and when
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Require Access Code</Label>
                  <p className="text-sm text-muted-foreground">
                    Students must enter a code to start
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>IP Address Restriction</Label>
                  <p className="text-sm text-muted-foreground">
                    Limit access to specific IP ranges
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Time Window Enforcement</Label>
                  <p className="text-sm text-muted-foreground">
                    Strictly enforce availability windows
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="max-violations">Maximum Violations Before Auto-Submit</Label>
                <Select defaultValue="5">
                  <SelectTrigger id="max-violations">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 violations</SelectItem>
                    <SelectItem value="5">5 violations</SelectItem>
                    <SelectItem value="10">10 violations</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Auto-submit assessment after this many security violations
                </p>
              </div>

              <Button 
                onClick={() => handleSave("Access Control")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Access Settings
              </Button>
            </CardContent>
          </Card>

          {/* Violation Alerts */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>Violation Alerts</CardTitle>
              </div>
              <CardDescription>
                Configure notifications for security violations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Instructor on Violation</Label>
                  <p className="text-sm text-muted-foreground">
                    Send email when a violation is detected
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Log All Violations</Label>
                  <p className="text-sm text-muted-foreground">
                    Keep detailed logs of all violations
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Flag Suspicious Submissions</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically flag submissions with violations
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Button 
                onClick={() => handleSave("Violation Alerts")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Alert Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Certificate Settings */}
        <TabsContent value="certificates" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <CardTitle>Certificate Generation Rules</CardTitle>
              </div>
              <CardDescription>
                Configure when and how certificates are generated from assessments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-Generate on Pass</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically create certificate when passing score is achieved
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Require All Assessments</Label>
                  <p className="text-sm text-muted-foreground">
                    Student must pass all course assessments for certificate
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Include Assessment Scores</Label>
                  <p className="text-sm text-muted-foreground">
                    Display individual assessment scores on certificate
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cert-threshold">Certificate Threshold (%)</Label>
                  <Input id="cert-threshold" type="number" defaultValue="70" min="0" max="100" />
                  <p className="text-xs text-muted-foreground">
                    Minimum overall score required for certificate
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cert-validity">Certificate Validity (months)</Label>
                  <Select defaultValue="24">
                    <SelectTrigger id="cert-validity">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                      <SelectItem value="lifetime">Lifetime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={() => handleSave("Certificate")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Certificate Settings
              </Button>
            </CardContent>
          </Card>

          {/* Distinction Levels */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <CardTitle>Distinction Levels</CardTitle>
              </div>
              <CardDescription>
                Define achievement levels displayed on certificates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { level: "Distinction", min: 90, badge: "🏆" },
                { level: "Merit", min: 80, badge: "🥈" },
                { level: "Pass", min: 70, badge: "✓" },
              ].map((item) => (
                <div key={item.level} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <span className="text-2xl">{item.badge}</span>
                  <div className="flex-1">
                    <Input defaultValue={item.level} className="font-medium" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">≥</span>
                    <Input type="number" defaultValue={item.min} className="w-20" />
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                </div>
              ))}

              <Button 
                onClick={() => handleSave("Distinction Levels")}
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Save Distinction Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssessmentSettings;
