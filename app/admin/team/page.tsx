"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Upload, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  joinedDate: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Adebayo Ogundimu",
    role: "Executive Director",
    bio: "Environmental scientist with over 15 years of experience in sustainable development and community engagement. Passionate about creating lasting environmental change through education and innovation.",
    photo: "/api/placeholder/120/120",
    joinedDate: "2020-01-15",
    socialLinks: {
      linkedin: "https://linkedin.com/in/adebayo-ogundimu",
      twitter: "https://twitter.com/adebayo_ogi",
      email: "adebayo@egi.org.ng"
    }
  },
  {
    id: "2",
    name: "Sarah Ibrahim",
    role: "Program Manager",
    bio: "Dedicated program manager specializing in educational outreach and community partnerships. Leads our school partnership initiatives and volunteer coordination programs.",
    photo: "/api/placeholder/120/120",
    joinedDate: "2021-03-10",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarah-ibrahim",
      email: "sarah@egi.org.ng"
    }
  },
  {
    id: "3",
    name: "Michael Okafor",
    role: "Technical Coordinator",
    bio: "Engineering background with expertise in water systems and renewable energy. Oversees technical aspects of our clean water and sustainable energy projects.",
    photo: "/api/placeholder/120/120",
    joinedDate: "2021-07-20",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michael-okafor",
      twitter: "https://twitter.com/mike_okafor",
      email: "michael@egi.org.ng"
    }
  },
  {
    id: "4",
    name: "Fatima Hassan",
    role: "Communications Lead",
    bio: "Creative communications professional with a passion for storytelling and digital marketing. Manages our social media presence and public relations efforts.",
    photo: "/api/placeholder/120/120",
    joinedDate: "2022-01-05",
    socialLinks: {
      linkedin: "https://linkedin.com/in/fatima-hassan",
      twitter: "https://twitter.com/fatima_comms",
      email: "fatima@egi.org.ng"
    }
  },
  {
    id: "5",
    name: "David Okonkwo",
    role: "Field Operations Manager",
    bio: "Experienced field coordinator with deep knowledge of rural communities and grassroots mobilization. Leads our on-ground implementation teams.",
    photo: "/api/placeholder/120/120",
    joinedDate: "2022-06-15",
    socialLinks: {
      email: "david@egi.org.ng"
    }
  },
  {
    id: "6",
    name: "Aisha Abdullahi",
    role: "Finance & Admin Officer",
    bio: "Certified accountant with expertise in NGO financial management and compliance. Ensures transparent and efficient use of organizational resources.",
    photo: "/api/placeholder/120/120",
    joinedDate: "2023-02-01",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aisha-abdullahi",
      email: "aisha@egi.org.ng"
    }
  }
];

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(mockTeamMembers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);

  const handleAddMember = () => {
    setEditingMember(null);
    setIsModalOpen(true);
  };

  const handleEditMember = (member: TeamMember) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleDeleteMember = (id: string) => {
    setTeamMembers(teamMembers.filter(m => m.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Team Members
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Manage EGI team members displayed on the public website
          </p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={handleAddMember}
              className="rounded-xl h-11 px-6 font-medium"
              style={{ backgroundColor: '#1B2D1A', color: '#FFFFFF' }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
          </DialogTrigger>
          <TeamMemberModal 
            member={editingMember}
            onClose={() => setIsModalOpen(false)}
            onSave={(member) => {
              if (editingMember) {
                setTeamMembers(teamMembers.map(m => m.id === member.id ? member : m));
              } else {
                setTeamMembers([...teamMembers, { ...member, id: Date.now().toString() }]);
              }
              setIsModalOpen(false);
            }}
          />
        </Dialog>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {teamMembers.length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Team Members
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {new Set(teamMembers.map(m => m.role.split(' ')[0])).size}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Departments
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {teamMembers.filter(m => new Date(m.joinedDate) > new Date(Date.now() - 365*24*60*60*1000)).length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              New This Year
            </p>
          </div>
        </Card>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                {/* Profile Photo */}
                <div className="w-30 h-30 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="font-heading text-lg font-bold mb-1" style={{ color: '#1B2D1A' }}>
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#8B95C9' }}>
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-2 mb-4">
                  {member.socialLinks.linkedin && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => window.open(member.socialLinks.linkedin, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                  {member.socialLinks.twitter && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => window.open(member.socialLinks.twitter, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                  {member.socialLinks.email && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => window.open(`mailto:${member.socialLinks.email}`, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {/* Joined Date */}
                <p className="text-xs text-gray-500 mb-4">
                  Joined {new Date(member.joinedDate).toLocaleDateString()}
                </p>

                {/* Actions */}
                <div className="flex justify-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditMember(member)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteMember(member.id)}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TeamMemberModal({ 
  member, 
  onClose, 
  onSave 
}: { 
  member: TeamMember | null;
  onClose: () => void;
  onSave: (member: TeamMember) => void;
}) {
  const [formData, setFormData] = useState({
    name: member?.name || "",
    role: member?.role || "",
    bio: member?.bio || "",
    photo: member?.photo || "",
    joinedDate: member?.joinedDate || new Date().toISOString().split('T')[0],
    socialLinks: {
      linkedin: member?.socialLinks.linkedin || "",
      twitter: member?.socialLinks.twitter || "",
      email: member?.socialLinks.email || "",
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: member?.id || "",
      ...formData,
    });
  };

  return (
    <DialogContent className="max-w-2xl rounded-2xl shadow-lg max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-heading text-xl" style={{ color: '#1B2D1A' }}>
          {member ? 'Edit Team Member' : 'Add New Team Member'}
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="font-medium">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              required
            />
          </div>
          <div>
            <Label htmlFor="role" className="font-medium">Role/Position</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              placeholder="e.g., Executive Director"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="bio" className="font-medium">Bio</Label>
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="rounded-lg border p-3"
            style={{ borderColor: '#8B95C9' }}
            rows={4}
            placeholder="Brief biography and background..."
            required
          />
        </div>

        <div>
          <Label htmlFor="photo" className="font-medium">Profile Photo</Label>
          <div 
            className="border-2 border-dashed rounded-lg p-6 text-center"
            style={{ borderColor: '#8B95C9' }}
          >
            <Upload className="h-8 w-8 mx-auto mb-2" style={{ color: '#8B95C9' }} />
            <p className="text-gray-600">Click to upload profile photo</p>
            <p className="text-sm text-gray-500 mt-1">120x120px recommended, PNG or JPG</p>
          </div>
        </div>

        <div>
          <Label htmlFor="joinedDate" className="font-medium">Joined Date</Label>
          <Input
            id="joinedDate"
            type="date"
            value={formData.joinedDate}
            onChange={(e) => setFormData({ ...formData, joinedDate: e.target.value })}
            className="rounded-lg border h-11 p-3"
            style={{ borderColor: '#8B95C9' }}
            required
          />
        </div>

        <div className="space-y-3">
          <Label className="font-medium">Social Links</Label>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <Label htmlFor="linkedin" className="text-sm">LinkedIn URL</Label>
              <Input
                id="linkedin"
                value={formData.socialLinks.linkedin}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialLinks: { ...formData.socialLinks, linkedin: e.target.value }
                })}
                className="rounded-lg border h-10 p-3"
                style={{ borderColor: '#8B95C9' }}
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div>
              <Label htmlFor="twitter" className="text-sm">Twitter URL</Label>
              <Input
                id="twitter"
                value={formData.socialLinks.twitter}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialLinks: { ...formData.socialLinks, twitter: e.target.value }
                })}
                className="rounded-lg border h-10 p-3"
                style={{ borderColor: '#8B95C9' }}
                placeholder="https://twitter.com/username"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.socialLinks.email}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  socialLinks: { ...formData.socialLinks, email: e.target.value }
                })}
                className="rounded-lg border h-10 p-3"
                style={{ borderColor: '#8B95C9' }}
                placeholder="email@egi.org.ng"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="rounded-xl h-11 px-6"
            style={{ borderColor: '#1B2D1A', color: '#1B2D1A' }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-xl h-11 px-6"
            style={{ backgroundColor: '#BED450', color: '#1B2D1A' }}
          >
            Save Member
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
