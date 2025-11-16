import { Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TraineeSidebar } from "@/components/TraineeSidebar";
import DashboardOverview from "./dashboard/Overview";
import DashboardCourses from "./dashboard/Courses";
import DashboardMyCourses from "./dashboard/MyCourses";
import DashboardCourseDetail from "./dashboard/CourseDetail";
import DashboardCertificates from "./dashboard/Certificates";
import DashboardPayments from "./dashboard/Payments";
import DashboardProfile from "./dashboard/Profile";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/20">
        <TraineeSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-background flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-heading font-bold text-primary">
              Trainee Dashboard
            </h1>
          </header>
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route index element={<DashboardOverview />} />
              <Route path="courses" element={<DashboardCourses />} />
              <Route path="my-courses" element={<DashboardMyCourses />} />
              <Route path="my-courses/:id" element={<DashboardCourseDetail />} />
              <Route path="certificates" element={<DashboardCertificates />} />
              <Route path="payments" element={<DashboardPayments />} />
              <Route path="profile" element={<DashboardProfile />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
