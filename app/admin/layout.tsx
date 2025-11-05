import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/admin-sidebar";
import AdminHeader from "@/components/admin/admin-header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    redirect("/login");
  }

  // Get user data
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (!user || !["admin", "super_admin", "editor"].includes(user.role)) {
    redirect("/unauthorized");
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFB' }}>
      <AdminSidebar user={user} />
      <div className="lg:pl-64">
        <AdminHeader user={user} />
        <main className="p-6 max-w-7xl">
          {children}
        </main>
      </div>
    </div>
  );
}
