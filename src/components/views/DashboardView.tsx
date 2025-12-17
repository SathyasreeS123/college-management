import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";

export function DashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your college overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value="2,847"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          iconColor="bg-primary/10 text-primary"
          delay={0}
        />
        <StatCard
          title="Active Courses"
          value="156"
          change="+5 new courses"
          changeType="positive"
          icon={BookOpen}
          iconColor="bg-accent/10 text-accent"
          delay={50}
        />
        <StatCard
          title="Faculty Members"
          value="89"
          change="3 on leave"
          changeType="neutral"
          icon={GraduationCap}
          iconColor="bg-warning/10 text-warning"
          delay={100}
        />
        <StatCard
          title="Graduation Rate"
          value="94%"
          change="+2% from last year"
          changeType="positive"
          icon={TrendingUp}
          iconColor="bg-success/10 text-success"
          delay={150}
        />
      </div>

      {/* Activity and Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingEvents />
      </div>
    </div>
  );
}
