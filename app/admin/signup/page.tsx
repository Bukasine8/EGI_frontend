"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function AdminSignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    role: "admin"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(""); // Clear error when user starts typing
  };

  const validateForm = () => {
    if (!formData.email || !formData.password || !formData.fullName) {
      setError("Please fill in all required fields");
      return false;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      // Step 1: Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Step 2: Create user profile with admin role
        const { error: profileError } = await supabase
          .from("users")
          .insert({
            id: authData.user.id,
            email: formData.email,
            full_name: formData.fullName,
            role: formData.role,
          });

        if (profileError) throw profileError;

        setSuccess("Admin account created successfully! Please check your email to verify your account.");
        
        // Clear form
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
          role: "editor"
        });

        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message || "Failed to create admin account");
    } finally {
      setLoading(false);
    }
  };

  const getRoleDescription = (role: string) => {
    switch (role) {
      case "super_admin":
        return "Full system access including user management";
      case "admin":
        return "Full content management and settings access";
      case "editor":
        return "Content creation and editing permissions";
      default:
        return "";
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
              <UserPlus className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Create Admin Account
          </CardTitle>
          <CardDescription className="text-center" style={{ color: '#0F0F0F' }}>
            Set up a new administrator account for the EGI admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg">
                {success}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="fullName" className="font-medium">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                required
                className="rounded-lg border h-11 p-3"
                style={{ borderColor: '#8B95C9' }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@egi.org.ng"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="rounded-lg border h-11 p-3"
                style={{ borderColor: '#8B95C9' }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="font-medium">Admin Role *</Label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
                className="w-full rounded-lg border h-11 p-3"
                style={{ borderColor: '#8B95C9' }}
                required
              >
                <option value="editor">Editor - Content management only</option>
                <option value="admin">Admin - Full content & settings access</option>
                <option value="super_admin">Super Admin - Complete system access</option>
              </select>
              <p className="text-xs text-gray-600">
                {getRoleDescription(formData.role)}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-medium">Password *</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                  className="rounded-lg border h-11 p-3 pr-10"
                  style={{ borderColor: '#8B95C9' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-600">
                Minimum 8 characters required
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="font-medium">Confirm Password *</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  required
                  className="rounded-lg border h-11 p-3 pr-10"
                  style={{ borderColor: '#8B95C9' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full rounded-xl h-11 font-medium" 
              disabled={loading}
              style={{ backgroundColor: '#BED450', color: '#1B2D1A' }}
            >
              {loading ? "Creating Account..." : "Create Admin Account"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm" style={{ color: '#0F0F0F' }}>
            Already have an admin account?{" "}
            <Link href="/login" className="font-medium hover:underline" style={{ color: '#1B2D1A' }}>
              Sign in here
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
