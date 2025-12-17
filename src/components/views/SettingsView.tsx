import { User, Bell, Shield, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const settingSections = [
  {
    id: "profile",
    title: "Profile Settings",
    description: "Update your personal information",
    icon: User,
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Configure how you receive updates",
    icon: Bell,
  },
  {
    id: "security",
    title: "Security",
    description: "Manage your account security",
    icon: Shield,
  },
  {
    id: "appearance",
    title: "Appearance",
    description: "Customize the look and feel",
    icon: Palette,
  },
];

export function SettingsView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
      </div>

      <div className="grid gap-6">
        {/* Profile Section */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Profile Settings</h2>
              <p className="text-sm text-muted-foreground">Update your personal information</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Admin User" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="admin@college.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 234 567 890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Administrator" disabled />
            </div>
          </div>

          <div className="mt-6">
            <Button variant="gradient">Save Changes</Button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10">
              <Bell className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Notification Preferences</h2>
              <p className="text-sm text-muted-foreground">Choose what updates you receive</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">New Student Alerts</p>
                <p className="text-sm text-muted-foreground">Get notified when new students enroll</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Schedule Changes</p>
                <p className="text-sm text-muted-foreground">Updates about class schedule changes</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">System Announcements</p>
                <p className="text-sm text-muted-foreground">Important system updates</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-warning/10">
              <Shield className="h-5 w-5 text-warning" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Security</h2>
              <p className="text-sm text-muted-foreground">Manage your account security settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="outline">Change Password</Button>
            <Button variant="outline">Enable Two-Factor Authentication</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
