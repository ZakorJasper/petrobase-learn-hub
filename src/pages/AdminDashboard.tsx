import { Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import AdminOverview from "./admin/Overview";
import AdminSettings from "./admin/Settings";
import AdminStudents from "./admin/Students";
import AdminCourses from "./admin/Courses";
import AdminLiveClasses from "./admin/LiveClasses";
import AdminCertificates from "./admin/Certificates";
import AdminPayments from "./admin/Payments";
import AdminAnalytics from "./admin/Analytics";

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
              <Route path="live-classes" element={<AdminLiveClasses />} />
              <Route path="certificates" element={<AdminCertificates />} />
              <Route path="payments" element={<AdminPayments />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="settings" element={<AdminSettings />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
