import { Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { InstructorSidebar } from "@/components/InstructorSidebar";
import InstructorOverview from "./instructor/Overview";
import InstructorCourses from "./instructor/Courses";
import InstructorCourseDetail from "./instructor/CourseDetail";
import InstructorLiveClasses from "./instructor/LiveClasses";
import InstructorStudents from "./instructor/Students";
import InstructorAssessments from "./instructor/Assessments";
import InstructorMaterials from "./instructor/Materials";
import InstructorCertificates from "./instructor/Certificates";
import InstructorAnalytics from "./instructor/Analytics";

const InstructorDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/20">
        <InstructorSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-background flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-xl font-heading font-bold text-primary">
              Instructor Dashboard
            </h1>
          </header>
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route index element={<InstructorOverview />} />
              <Route path="courses" element={<InstructorCourses />} />
              <Route path="courses/:courseId" element={<InstructorCourseDetail />} />
              <Route path="live-classes" element={<InstructorLiveClasses />} />
              <Route path="students" element={<InstructorStudents />} />
              <Route path="assessments" element={<InstructorAssessments />} />
              <Route path="materials" element={<InstructorMaterials />} />
              <Route path="certificates" element={<InstructorCertificates />} />
              <Route path="analytics" element={<InstructorAnalytics />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default InstructorDashboard;
