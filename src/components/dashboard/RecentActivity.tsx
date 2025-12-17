import { Clock, UserPlus, BookPlus, Award } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "enrollment",
    message: "New student John Doe enrolled in Computer Science",
    time: "2 hours ago",
    icon: UserPlus,
    iconBg: "bg-success/10 text-success"
  },
  {
    id: 2,
    type: "course",
    message: "New course 'Data Structures' added to curriculum",
    time: "4 hours ago",
    icon: BookPlus,
    iconBg: "bg-info/10 text-info"
  },
  {
    id: 3,
    type: "achievement",
    message: "Sarah Smith achieved Dean's List recognition",
    time: "6 hours ago",
    icon: Award,
    iconBg: "bg-warning/10 text-warning"
  },
  {
    id: 4,
    type: "enrollment",
    message: "5 students enrolled in Mathematics program",
    time: "1 day ago",
    icon: UserPlus,
    iconBg: "bg-success/10 text-success"
  },
];

export function RecentActivity() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-slide-up" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <Clock className="h-5 w-5 text-muted-foreground" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3 group">
              <div className={`p-2 rounded-lg ${activity.iconBg} transition-transform group-hover:scale-110`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground leading-relaxed">{activity.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
