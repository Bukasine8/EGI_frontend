"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ROLES, UserRole, getRoleConfig } from "@/lib/roles";
import { Trash2, Edit, Plus, Users, Shield, Eye, UserPlus } from "lucide-react";

interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
  last_sign_in_at?: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    role: "viewer" as UserRole
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    checkCurrentUser();
    fetchUsers();
  }, []);

  const checkCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (profile?.role !== 'super_admin') {
        router.push('/unauthorized');
        return;
      }
      setCurrentUser(profile);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      // For now, show instructions to create users via script
      // In production, this would use proper server-side API with service role
      setError("User creation via UI requires additional server setup. Please use the terminal script method.");
      setSuccess("Check the console for instructions, or run: node create-user-script.js");
      console.log(`
        const { createClient } = require('@supabase/supabase-js');
        require('dotenv').config({ path: '.env.local' });
        
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        
        async function createUser() {
          const { data: authData, error: authError } = await supabase.auth.admin.createUser({
            email: '${formData.email}',
            password: '${formData.password}',
            email_confirm: true,
            user_metadata: { full_name: '${formData.fullName}' }
          });
          
          if (authError) throw authError;
          
          const { error: profileError } = await supabase
            .from('users')
            .insert({
              id: authData.user.id,
              email: '${formData.email}',
              full_name: '${formData.fullName}',
              role: '${formData.role}'
            });
            
          if (profileError) throw profileError;
          console.log('User created successfully!');
        }
        
        createUser().catch(console.error);
      `);
      
    } catch (error: any) {
      setError(error.message || 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (userId: string, newRole: UserRole) => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;
      
      setSuccess('User role updated successfully!');
      fetchUsers();
    } catch (error) {
      setError('Failed to update user role');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }

    try {
      // Delete from users table first
      const { error: profileError } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);

      if (profileError) throw profileError;

      // Delete auth user (this would need to be done server-side in production)
      const response = await fetch('/api/admin/delete-user', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      });

      if (!response.ok) {
        throw new Error('Failed to delete auth user');
      }

      setSuccess('User deleted successfully!');
      fetchUsers();
    } catch (error) {
      setError('Failed to delete user');
    }
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

  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case 'super_admin': return <Shield className="h-4 w-4 text-red-600" />;
      case 'content_manager': return <Edit className="h-4 w-4 text-blue-600" />;
      case 'donation_manager': return <Users className="h-4 w-4 text-green-600" />;
      case 'event_manager': return <Users className="h-4 w-4 text-purple-600" />;
      case 'volunteer_coordinator': return <Users className="h-4 w-4 text-orange-600" />;
      default: return <Eye className="h-4 w-4 text-gray-600" />;
    }
  };

  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case 'super_admin': return 'bg-red-100 text-red-800';
      case 'content_manager': return 'bg-blue-100 text-blue-800';
      case 'donation_manager': return 'bg-green-100 text-green-800';
      case 'event_manager': return 'bg-purple-100 text-purple-800';
      case 'volunteer_coordinator': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading && users.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            User Management
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Create and manage user accounts with role-based access control
          </p>
        </div>
        <Button
          onClick={() => setShowCreateForm(true)}
          className="rounded-xl h-11 px-6 font-medium"
          style={{ backgroundColor: '#1B2D1A', color: '#FFFFFF' }}
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Create User
        </Button>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          {success}
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Create User Form */}
      {showCreateForm && (
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
              Create New User
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="rounded-xl"
                    minLength={8}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="role">Role</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value as UserRole }))}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(ROLES).map(([roleKey, roleConfig]) => (
                      <SelectItem key={roleKey} value={roleKey}>
                        <div className="flex items-center space-x-2">
                          {getRoleIcon(roleKey as UserRole)}
                          <div>
                            <div className="font-medium">{roleConfig.name}</div>
                            <div className="text-xs text-gray-500">{roleConfig.description}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowCreateForm(false)}
                  className="rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl"
                  style={{ backgroundColor: '#1B2D1A', color: '#FFFFFF' }}
                >
                  {loading ? 'Creating...' : 'Create User'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Users List */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
            All Users ({users.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#8B95C9' }}>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>User</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Role</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Created</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Last Login</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium" style={{ color: '#0F0F0F' }}>
                          {user.full_name}
                        </p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        {getRoleIcon(user.role)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                          {getRoleConfig(user.role)?.name || user.role}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(user.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'Never'}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Select
                          value={user.role}
                          onValueChange={(newRole) => handleUpdateUser(user.id, newRole as UserRole)}
                          disabled={user.id === currentUser?.id} // Prevent self-role change
                        >
                          <SelectTrigger className="w-32 h-8 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(ROLES).map(([roleKey, roleConfig]) => (
                              <SelectItem key={roleKey} value={roleKey}>
                                {roleConfig.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        
                        {user.id !== currentUser?.id && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Role Descriptions */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
            Role Descriptions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(ROLES).map(([roleKey, roleConfig]) => (
              <div key={roleKey} className="p-4 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  {getRoleIcon(roleKey as UserRole)}
                  <h3 className="font-semibold">{roleConfig.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{roleConfig.description}</p>
                <div className="text-xs text-gray-500">
                  <strong>Access:</strong> {roleConfig.adminRoutes.length} sections
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
