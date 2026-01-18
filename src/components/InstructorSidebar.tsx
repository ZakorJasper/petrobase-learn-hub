import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  Users, 
  Award, 
  BarChart3, 
  FileText, 
  ClipboardList, 
  LogOut 
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Overview", url: "/instructor", icon: LayoutDashboard },
  { title: "My Courses", url: "/instructor/courses", icon: BookOpen },
  { title: "Live Classes", url: "/instructor/live-classes", icon: Video },
  { title: "Students", url: "/instructor/students", icon: Users },
  { title: "Assessments", url: "/instructor/assessments", icon: ClipboardList },
  { title: "Materials", url: "/instructor/materials", icon: FileText },
  { title: "Certificates", url: "/instructor/certificates", icon: Award },
  { title: "Analytics", url: "/instructor/analytics", icon: BarChart3 },
];

export function InstructorSidebar() {
  const { state } = useSidebar();
  const navigate = useNavigate();
  const isCollapsed = state === "collapsed";

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="py-4">
        <div className="px-4 mb-6">
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-heading font-bold text-primary">Instructor Portal</h2>
              <p className="text-xs text-muted-foreground">Course Management</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Teaching</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/instructor"}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors"
                      activeClassName="bg-muted text-primary font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto px-3 py-4">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
