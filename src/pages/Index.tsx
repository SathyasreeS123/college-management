import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { DashboardView } from "@/components/views/DashboardView";
import { StudentsView } from "@/components/views/StudentsView";
import { CoursesView } from "@/components/views/CoursesView";
import { FacultyView } from "@/components/views/FacultyView";
import { ScheduleView } from "@/components/views/ScheduleView";
import { SettingsView } from "@/components/views/SettingsView";
import { cn } from "@/lib/utils";

const Index = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView />;
      case "students":
        return <StudentsView />;
      case "courses":
        return <CoursesView />;
      case "faculty":
        return <FacultyView />;
      case "schedule":
        return <ScheduleView />;
      case "settings":
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      
      <div className={cn(
        "transition-all duration-300",
        "ml-64" // Sidebar width
      )}>
        <Header />
        <main className="p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default Index;
