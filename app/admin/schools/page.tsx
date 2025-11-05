"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Phone, Mail, MapPin } from "lucide-react";
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

interface School {
  id: string;
  name: string;
  location: string;
  contact: string;
  phone: string;
  email: string;
  partnershipDate: string;
  partnershipType: string;
  notes: string;
}

const mockSchools: School[] = [
  {
    id: "1",
    name: "Lagos State Model College",
    location: "Ikeja, Lagos State",
    contact: "Mrs. Adebayo Funmi",
    phone: "+234 801 234 5678",
    email: "principal@lsmc.edu.ng",
    partnershipDate: "2023-09-15",
    partnershipType: "Environmental Education",
    notes: "Active partnership with monthly workshops",
  },
  {
    id: "2",
    name: "Federal Government College",
    location: "Abuja, FCT",
    contact: "Mr. Ibrahim Hassan",
    phone: "+234 802 345 6789",
    email: "admin@fgcabuja.edu.ng",
    partnershipDate: "2024-01-10",
    partnershipType: "Tree Planting Initiative",
    notes: "New partnership focused on school garden projects",
  },
  {
    id: "3",
    name: "Community Secondary School",
    location: "Kano, Kano State",
    contact: "Mallam Usman Aliyu",
    phone: "+234 803 456 7890",
    email: "info@csskano.edu.ng",
    partnershipDate: "2023-11-20",
    partnershipType: "Clean Water Project",
    notes: "Completed water facility installation",
  },
];

export default function SchoolsPage() {
  const [schools, setSchools] = useState<School[]>(mockSchools);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSchool, setEditingSchool] = useState<School | null>(null);

  const handleAddSchool = () => {
    setEditingSchool(null);
    setIsModalOpen(true);
  };

  const handleEditSchool = (school: School) => {
    setEditingSchool(school);
    setIsModalOpen(true);
  };

  const handleDeleteSchool = (id: string) => {
    setSchools(schools.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            School Partnerships
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Manage partnered schools and their partnership details
          </p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={handleAddSchool}
              className="rounded-xl h-11 px-6 font-medium"
              style={{ backgroundColor: '#1B2D1A', color: '#FFFFFF' }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add School
            </Button>
          </DialogTrigger>
          <SchoolModal 
            school={editingSchool}
            onClose={() => setIsModalOpen(false)}
            onSave={(school) => {
              if (editingSchool) {
                setSchools(schools.map(s => s.id === school.id ? school : s));
              } else {
                setSchools([...schools, { ...school, id: Date.now().toString() }]);
              }
              setIsModalOpen(false);
            }}
          />
        </Dialog>
      </div>

      {/* Schools Table */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
            Partnered Schools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#8B95C9' }}>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>School Name</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Location</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Contact</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Partnership Type</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Partnership Date</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {schools.map((school) => (
                  <tr 
                    key={school.id} 
                    className="border-b hover:bg-gray-50 transition-colors"
                    style={{ borderColor: '#F9FAFB' }}
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium" style={{ color: '#0F0F0F' }}>
                          {school.name}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" style={{ color: '#8B95C9' }} />
                          <span className="text-xs text-gray-600">{school.location}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4" style={{ color: '#0F0F0F' }}>
                      {school.location}
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-sm" style={{ color: '#0F0F0F' }}>
                          {school.contact}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Phone className="h-3 w-3" style={{ color: '#8B95C9' }} />
                          <span className="text-xs text-gray-600">{school.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" style={{ color: '#8B95C9' }} />
                          <span className="text-xs text-gray-600">{school.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {school.partnershipType}
                      </span>
                    </td>
                    <td className="py-3 px-4" style={{ color: '#0F0F0F' }}>
                      {new Date(school.partnershipDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditSchool(school)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteSchool(school.id)}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {schools.length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Total Schools
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {schools.filter(s => new Date(s.partnershipDate) > new Date(Date.now() - 365*24*60*60*1000)).length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              New This Year
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {new Set(schools.map(s => s.partnershipType)).size}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Partnership Types
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function SchoolModal({ 
  school, 
  onClose, 
  onSave 
}: { 
  school: School | null;
  onClose: () => void;
  onSave: (school: School) => void;
}) {
  const [formData, setFormData] = useState({
    name: school?.name || "",
    location: school?.location || "",
    contact: school?.contact || "",
    phone: school?.phone || "",
    email: school?.email || "",
    partnershipDate: school?.partnershipDate || new Date().toISOString().split('T')[0],
    partnershipType: school?.partnershipType || "",
    notes: school?.notes || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: school?.id || "",
      ...formData,
    });
  };

  return (
    <DialogContent className="max-w-2xl rounded-2xl shadow-lg">
      <DialogHeader>
        <DialogTitle className="font-heading text-xl" style={{ color: '#1B2D1A' }}>
          {school ? 'Edit School Partnership' : 'Add New School'}
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="font-medium">School Name</Label>
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
            <Label htmlFor="location" className="font-medium">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              placeholder="City, State"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="contact" className="font-medium">Contact Person</Label>
            <Input
              id="contact"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="font-medium">Phone Number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              placeholder="+234 xxx xxx xxxx"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="font-medium">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              required
            />
          </div>
          <div>
            <Label htmlFor="partnershipDate" className="font-medium">Partnership Date</Label>
            <Input
              id="partnershipDate"
              type="date"
              value={formData.partnershipDate}
              onChange={(e) => setFormData({ ...formData, partnershipDate: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="partnershipType" className="font-medium">Partnership Type</Label>
          <Input
            id="partnershipType"
            value={formData.partnershipType}
            onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
            className="rounded-lg border h-11 p-3"
            style={{ borderColor: '#8B95C9' }}
            placeholder="e.g., Environmental Education, Tree Planting"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="notes" className="font-medium">Partnership Details</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="rounded-lg border p-3"
            style={{ borderColor: '#8B95C9' }}
            rows={3}
            placeholder="Additional notes about the partnership..."
          />
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
            Save School
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
