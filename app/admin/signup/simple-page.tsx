"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default function SimpleAdminSignup() {
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
  const router = useRouter();
  const supabase = createClient();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError("");
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
          role: "admin"
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

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F8FAFB' }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div 
            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#1B2D1A' }}
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold" style={{ color: '#1B2D1A' }}>
            Create Admin Account
          </h1>
          <p className="text-gray-600 mt-2">
            Set up a new administrator account for the EGI admin panel
          </p>
        </div>

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

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
              className="w-full rounded-lg border h-11 px-3"
              style={{ borderColor: '#8B95C9' }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="admin@egi.org.ng"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="w-full rounded-lg border h-11 px-3"
              style={{ borderColor: '#8B95C9' }}
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Admin Role *
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              className="w-full rounded-lg border h-11 px-3"
              style={{ borderColor: '#8B95C9' }}
              required
            >
              <option value="editor">Editor - Content management only</option>
              <option value="admin">Admin - Full content & settings access</option>
              <option value="super_admin">Super Admin - Complete system access</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password *
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
              className="w-full rounded-lg border h-11 px-3"
              style={{ borderColor: '#8B95C9' }}
            />
            <p className="text-xs text-gray-600 mt-1">
              Minimum 8 characters required
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
              Confirm Password *
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              required
              className="w-full rounded-lg border h-11 px-3"
              style={{ borderColor: '#8B95C9' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl h-11 font-medium text-white"
            style={{ backgroundColor: loading ? '#9CA3AF' : '#BED450', color: '#1B2D1A' }}
          >
            {loading ? "Creating Account..." : "Create Admin Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          Already have an admin account?{" "}
          <Link href="/login" className="font-medium hover:underline" style={{ color: '#1B2D1A' }}>
            Sign in here
          </Link>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
