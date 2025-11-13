import { Home, BookOpen, GraduationCap, Award, CreditCard, User, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Courses", url: "/dashboard/courses", icon: BookOpen },
  { title: "My Courses", url: "/dashboard/my-courses", icon: GraduationCap },
  { title: "Certificates", url: "/dashboard/certificates", icon: Award },
  { title: "Payments", url: "/dashboard/payments", icon: CreditCard },
  { title: "Profile", url: "/dashboard/profile", icon: User },
];

export function TraineeSidebar() {
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
              <h2 className="text-lg font-heading font-bold text-primary">Trainee Portal</h2>
              <p className="text-xs text-muted-foreground">Student Dashboard</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
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
