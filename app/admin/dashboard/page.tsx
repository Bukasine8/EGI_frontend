import { createClient } from "@/utils/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, FileText, Users, MessageSquare, TrendingUp, Eye, GraduationCap, UserCheck, Banknote, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch statistics
  const [
    { count: totalDonations },
    { count: totalPosts },
    { count: totalPrograms },
    { count: totalMessages },
  ] = await Promise.all([
    supabase.from("donations").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("programs").select("*", { count: "exact", head: true }),
    supabase.from("contact_messages").select("*", { count: "exact", head: true }),
  ]);

  // Get recent donations
  const { data: recentDonations } = await supabase
    .from("donations")
    .select("*")
    .eq("status", "completed")
    .order("created_at", { ascending: false })
    .limit(5);

  // Calculate total donation amount
  const totalAmount = recentDonations?.reduce((sum, d) => sum + Number(d.amount), 0) || 0;

  const stats = [
    {
      name: "Total Schools",
      value: "20+",
      icon: GraduationCap,
      bgColor: "#BED450", // Lime Green
      link: "/admin/schools",
    },
    {
      name: "Volunteers",
      value: totalMessages || 0,
      icon: UserCheck,
      bgColor: "#8B95C9", // Blue Grey
      link: "/admin/volunteers",
    },
    {
      name: "Donations",
      value: `₦${totalAmount.toLocaleString()}`,
      icon: Banknote,
      bgColor: "#ACD7EC", // Sky Blue
      link: "/admin/donations",
    },
    {
      name: "Projects Completed",
      value: totalPrograms || 0,
      icon: Briefcase,
      bgColor: "#1B2D1A", // Forest Green
      link: "/admin/projects",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>Welcome, Admin</h1>
        <p className="mt-2" style={{ color: '#0F0F0F' }}>
          Here's an overview of your EGI impact and website management.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.name} href={stat.link}>
            <Card 
              className="hover:shadow-lg transition-shadow cursor-pointer rounded-2xl"
              style={{ 
                backgroundColor: '#D6EDFF',
                width: '240px', 
                height: '140px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              <CardContent className="p-5 h-full flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium font-body" style={{ color: '#0F0F0F' }}>{stat.name}</p>
                    <p className="mt-2 text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>{stat.value}</p>
                  </div>
                  <div className="p-2">
                    <stat.icon className="h-8 w-8" style={{ color: stat.bgColor }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/admin/blog/new">
              <Button className="w-full" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                New Blog Post
              </Button>
            </Link>
            <Link href="/admin/programs/new">
              <Button className="w-full" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                New Program
              </Button>
            </Link>
            <Link href="/admin/media">
              <Button className="w-full" variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Media Library
              </Button>
            </Link>
            <Link href="/admin/settings">
              <Button className="w-full" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Site Settings
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Recent Donations */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Donations</CardTitle>
        </CardHeader>
        <CardContent>
          {recentDonations && recentDonations.length > 0 ? (
            <div className="space-y-4">
              {recentDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{donation.donor_name}</p>
                    <p className="text-sm text-gray-600">{donation.donor_email}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">
                      ₦{Number(donation.amount).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(donation.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">No donations yet</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
