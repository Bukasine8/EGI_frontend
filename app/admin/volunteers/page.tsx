"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Eye, Filter, Mail, Phone, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  status: 'pending' | 'approved' | 'rejected';
  appliedDate: string;
  experience: string;
  availability: string;
  motivation: string;
}

const mockVolunteers: Volunteer[] = [
  {
    id: "1",
    name: "Adebayo Olumide",
    email: "olumide.adebayo@email.com",
    phone: "+234 801 234 5678",
    location: "Lagos, Nigeria",
    skills: ["Environmental Science", "Teaching", "Project Management"],
    status: "pending",
    appliedDate: "2024-03-10",
    experience: "5 years in environmental conservation projects",
    availability: "Weekends and evenings",
    motivation: "Passionate about environmental education and community development",
  },
  {
    id: "2",
    name: "Fatima Ibrahim",
    email: "fatima.ibrahim@email.com",
    phone: "+234 802 345 6789",
    location: "Abuja, Nigeria",
    skills: ["Social Media", "Content Creation", "Photography"],
    status: "approved",
    appliedDate: "2024-02-28",
    experience: "3 years in digital marketing for NGOs",
    availability: "Flexible schedule",
    motivation: "Want to use my skills to promote environmental awareness",
  },
  {
    id: "3",
    name: "Chukwuma Okafor",
    email: "chukwuma.okafor@email.com",
    phone: "+234 803 456 7890",
    location: "Port Harcourt, Nigeria",
    skills: ["Engineering", "Water Systems", "Technical Training"],
    status: "approved",
    appliedDate: "2024-01-15",
    experience: "10 years in water and sanitation projects",
    availability: "Monthly weekend commitments",
    motivation: "Committed to improving water access in rural communities",
  },
];

export default function VolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>(mockVolunteers);
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredVolunteers = volunteers.filter(
    (volunteer) => statusFilter === "all" || volunteer.status === statusFilter
  );

  const handleStatusChange = (volunteerId: string, newStatus: 'approved' | 'rejected') => {
    setVolunteers(volunteers.map(v => 
      v.id === volunteerId ? { ...v, status: newStatus } : v
    ));
  };

  const handleViewDetails = (volunteer: Volunteer) => {
    setSelectedVolunteer(volunteer);
    setIsDetailModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const statusCounts = {
    total: volunteers.length,
    pending: volunteers.filter(v => v.status === 'pending').length,
    approved: volunteers.filter(v => v.status === 'approved').length,
    rejected: volunteers.filter(v => v.status === 'rejected').length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Volunteers Management
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Manage volunteer signups and approvals
          </p>
        </div>
      </div>

      {/* Status Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {statusCounts.total}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Total Volunteers
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#FFB703' }}>
              {statusCounts.pending}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Pending Review
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#4CAF50' }}>
              {statusCounts.approved}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Approved
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#E63946' }}>
              {statusCounts.rejected}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Rejected
            </p>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="rounded-xl shadow-sm p-4">
        <div className="flex items-center gap-4">
          <Filter className="h-5 w-5" style={{ color: '#8B95C9' }} />
          <span className="font-medium">Filter by Status:</span>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48 rounded-lg border" style={{ borderColor: '#8B95C9' }}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Volunteers Table */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
            Volunteer Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#8B95C9' }}>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Name</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Contact</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Skills</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Status</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Applied</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVolunteers.map((volunteer) => (
                  <tr 
                    key={volunteer.id} 
                    className="border-b hover:bg-gray-50 transition-colors"
                    style={{ borderColor: '#F9FAFB' }}
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium" style={{ color: '#0F0F0F' }}>
                          {volunteer.name}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" style={{ color: '#8B95C9' }} />
                          <span className="text-xs text-gray-600">{volunteer.location}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" style={{ color: '#8B95C9' }} />
                          <span className="text-xs text-gray-600">{volunteer.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" style={{ color: '#8B95C9' }} />
                          <span className="text-xs text-gray-600">{volunteer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {volunteer.skills.slice(0, 2).map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {skill}
                          </span>
                        ))}
                        {volunteer.skills.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{volunteer.skills.length - 2} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(volunteer.status)}`}>
                        {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4" style={{ color: '#0F0F0F' }}>
                      {new Date(volunteer.appliedDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewDetails(volunteer)}
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {volunteer.status === 'pending' && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleStatusChange(volunteer.id, 'approved')}
                              className="h-8 w-8 p-0 text-green-600 hover:text-green-700"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleStatusChange(volunteer.id, 'rejected')}
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
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

      {/* Volunteer Detail Modal */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="max-w-2xl rounded-2xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl" style={{ color: '#1B2D1A' }}>
              Volunteer Profile
            </DialogTitle>
          </DialogHeader>
          {selectedVolunteer && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Name</h3>
                  <p className="font-medium" style={{ color: '#0F0F0F' }}>{selectedVolunteer.name}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Status</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedVolunteer.status)}`}>
                    {selectedVolunteer.status.charAt(0).toUpperCase() + selectedVolunteer.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Email</h3>
                  <p style={{ color: '#0F0F0F' }}>{selectedVolunteer.email}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Phone</h3>
                  <p style={{ color: '#0F0F0F' }}>{selectedVolunteer.phone}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Location</h3>
                <p style={{ color: '#0F0F0F' }}>{selectedVolunteer.location}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Skills</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedVolunteer.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Experience</h3>
                <p style={{ color: '#0F0F0F' }}>{selectedVolunteer.experience}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Availability</h3>
                <p style={{ color: '#0F0F0F' }}>{selectedVolunteer.availability}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Motivation</h3>
                <p style={{ color: '#0F0F0F' }}>{selectedVolunteer.motivation}</p>
              </div>

              {selectedVolunteer.status === 'pending' && (
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <Button
                    onClick={() => {
                      handleStatusChange(selectedVolunteer.id, 'rejected');
                      setIsDetailModalOpen(false);
                    }}
                    className="rounded-xl h-11 px-6"
                    style={{ backgroundColor: '#E63946', color: '#FFFFFF' }}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button
                    onClick={() => {
                      handleStatusChange(selectedVolunteer.id, 'approved');
                      setIsDetailModalOpen(false);
                    }}
                    className="rounded-xl h-11 px-6"
                    style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }}
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
