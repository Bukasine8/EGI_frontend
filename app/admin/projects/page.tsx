"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Filter } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Project {
  id: string;
  name: string;
  category: string;
  progress: number;
  date: string;
  status: string;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "School Garden Initiative",
    category: "Environment",
    progress: 75,
    date: "2024-01-15",
    status: "Active",
  },
  {
    id: "2",
    name: "Digital Literacy Program",
    category: "Education",
    progress: 50,
    date: "2024-02-01",
    status: "Active",
  },
  {
    id: "3",
    name: "Clean Water Project",
    category: "Health",
    progress: 100,
    date: "2023-12-10",
    status: "Completed",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => filterCategory === "all" || project.category === filterCategory
  );

  const handleAddProject = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Manage Projects
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Track and manage all EGI project initiatives
          </p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={handleAddProject}
              className="rounded-xl h-11 px-6 font-medium"
              style={{ backgroundColor: '#1B2D1A', color: '#FFFFFF' }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New Project
            </Button>
          </DialogTrigger>
          <ProjectModal 
            project={editingProject}
            onClose={() => setIsModalOpen(false)}
            onSave={(project) => {
              if (editingProject) {
                setProjects(projects.map(p => p.id === project.id ? project : p));
              } else {
                setProjects([...projects, { ...project, id: Date.now().toString() }]);
              }
              setIsModalOpen(false);
            }}
          />
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="rounded-xl shadow-sm p-4">
        <div className="flex items-center gap-4">
          <Filter className="h-5 w-5" style={{ color: '#8B95C9' }} />
          <Label htmlFor="category-filter" className="font-medium">Filter by Category:</Label>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-48 rounded-lg border" style={{ borderColor: '#8B95C9' }}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Environment">Environment</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Projects Table */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
            Projects Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#8B95C9' }}>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Name</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Category</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Progress</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Date</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Status</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr 
                    key={project.id} 
                    className="border-b hover:bg-gray-50 transition-colors"
                    style={{ borderColor: '#F9FAFB' }}
                  >
                    <td className="py-3 px-4 font-medium" style={{ color: '#0F0F0F' }}>
                      {project.name}
                    </td>
                    <td className="py-3 px-4" style={{ color: '#0F0F0F' }}>
                      {project.category}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-full rounded-full"
                            style={{ 
                              backgroundColor: '#BED450',
                              width: `${project.progress}%`
                            }}
                          />
                        </div>
                        <span className="text-sm" style={{ color: '#0F0F0F' }}>
                          {project.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4" style={{ color: '#0F0F0F' }}>
                      {new Date(project.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <span 
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditProject(project)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteProject(project.id)}
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
    </div>
  );
}

function ProjectModal({ 
  project, 
  onClose, 
  onSave 
}: { 
  project: Project | null;
  onClose: () => void;
  onSave: (project: Project) => void;
}) {
  const [formData, setFormData] = useState({
    name: project?.name || "",
    category: project?.category || "",
    progress: project?.progress || 0,
    date: project?.date || new Date().toISOString().split('T')[0],
    status: project?.status || "Active",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: project?.id || "",
      ...formData,
    });
  };

  return (
    <DialogContent className="max-w-2xl rounded-2xl shadow-lg">
      <DialogHeader>
        <DialogTitle className="font-heading text-xl" style={{ color: '#1B2D1A' }}>
          {project ? 'Edit Project' : 'Add New Project'}
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="font-medium">Project Name</Label>
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
            <Label htmlFor="category" className="font-medium">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger className="rounded-lg border h-11" style={{ borderColor: '#8B95C9' }}>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Environment">Environment</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="description" className="font-medium">Description</Label>
          <Textarea
            id="description"
            className="rounded-lg border p-3"
            style={{ borderColor: '#8B95C9' }}
            rows={3}
            placeholder="Project description..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="progress" className="font-medium">Progress (%)</Label>
            <Input
              id="progress"
              type="number"
              min="0"
              max="100"
              value={formData.progress}
              onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
            />
          </div>
          <div>
            <Label htmlFor="date" className="font-medium">Start Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
            />
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
            Save Changes
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
