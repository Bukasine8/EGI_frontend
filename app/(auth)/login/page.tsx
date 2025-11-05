"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Check if user has admin role
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("role")
          .eq("id", data.user.id)
          .single();

        if (userError || !userData) {
          throw new Error("User profile not found");
        }

        if (!["admin", "super_admin", "editor"].includes(userData.role)) {
          await supabase.auth.signOut();
          throw new Error("You don't have permission to access the admin panel");
        }

        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F8FAFB' }}>
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div 
              className="p-3 rounded-full"
              style={{ backgroundColor: '#1B2D1A' }}
            >
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            EGI Admin Login
          </CardTitle>
          <CardDescription className="text-center" style={{ color: '#0F0F0F' }}>
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@egi.org.ng"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                style={{ borderColor: '#8B95C9' }}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                style={{ borderColor: '#8B95C9' }}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full rounded-xl h-11 font-medium" 
              disabled={loading}
              style={{ backgroundColor: '#BED450', color: '#1B2D1A' }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm" style={{ color: '#0F0F0F' }}>
            Need an admin account?{" "}
            <Link href="/admin/create-account" className="font-medium hover:underline" style={{ color: '#1B2D1A' }}>
              Create one here
            </Link>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            <Link href="/" className="hover:underline" style={{ color: '#8B95C9' }}>
              ← Back to website
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
