import { Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import AdminOverview from "./admin/Overview";
import AdminSettings from "./admin/Settings";
import AdminStudents from "./admin/Students";
import AdminCourses from "./admin/Courses";

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/20">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-background flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-heading font-bold text-primary">
              Admin Dashboard
            </h1>
          </header>
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route index element={<AdminOverview />} />
              <Route path="students" element={<AdminStudents />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="live-classes" element={<div className="p-6"><h2 className="text-2xl font-heading font-bold text-primary">Live Classes</h2><p className="text-muted-foreground mt-2">Coming Soon</p></div>} />
              <Route path="certificates" element={<div className="p-6"><h2 className="text-2xl font-heading font-bold text-primary">Certificates</h2><p className="text-muted-foreground mt-2">Coming Soon</p></div>} />
              <Route path="payments" element={<div className="p-6"><h2 className="text-2xl font-heading font-bold text-primary">Payments</h2><p className="text-muted-foreground mt-2">Coming Soon</p></div>} />
              <Route path="analytics" element={<div className="p-6"><h2 className="text-2xl font-heading font-bold text-primary">Analytics</h2><p className="text-muted-foreground mt-2">Coming Soon</p></div>} />
              <Route path="settings" element={<AdminSettings />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
