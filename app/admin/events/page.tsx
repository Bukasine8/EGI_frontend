"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Calendar, MapPin, Clock } from "lucide-react";
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

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  status: string;
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Tree Planting Campaign",
    description: "Community tree planting event in Lagos State",
    date: "2024-03-15",
    time: "09:00",
    venue: "Victoria Island Park",
    status: "Upcoming",
  },
  {
    id: "2",
    title: "Environmental Education Workshop",
    description: "Teaching sustainable practices to local schools",
    date: "2024-03-22",
    time: "14:00",
    venue: "EGI Training Center",
    status: "Upcoming",
  },
  {
    id: "3",
    title: "Clean Water Initiative Launch",
    description: "Launch of new clean water project",
    date: "2024-02-28",
    time: "10:00",
    venue: "Abuja Conference Center",
    status: "Completed",
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');

  const handleAddEvent = () => {
    setEditingEvent(null);
    setIsModalOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  // Simple calendar view - showing events by month
  const getEventsForMonth = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Events Management
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Manage and schedule EGI events and activities
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex rounded-lg border" style={{ borderColor: '#8B95C9' }}>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-l-lg rounded-r-none"
            >
              List
            </Button>
            <Button
              variant={viewMode === 'calendar' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('calendar')}
              className="rounded-r-lg rounded-l-none"
            >
              Calendar
            </Button>
          </div>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button 
                onClick={handleAddEvent}
                className="rounded-xl h-11 px-6 font-medium"
                style={{ backgroundColor: '#1B2D1A', color: '#FFFFFF' }}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add New Event
              </Button>
            </DialogTrigger>
            <EventModal 
              event={editingEvent}
              onClose={() => setIsModalOpen(false)}
              onSave={(event) => {
                if (editingEvent) {
                  setEvents(events.map(e => e.id === event.id ? event : e));
                } else {
                  setEvents([...events, { ...event, id: Date.now().toString() }]);
                }
                setIsModalOpen(false);
              }}
            />
          </Dialog>
        </div>
      </div>

      {viewMode === 'list' ? (
        /* List View */
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
              Events Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: '#8B95C9' }}>
                    <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Event Name</th>
                    <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Date</th>
                    <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Venue</th>
                    <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Status</th>
                    <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr 
                      key={event.id} 
                      className="border-b hover:bg-gray-50 transition-colors"
                      style={{ borderColor: '#F9FAFB' }}
                    >
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium" style={{ color: '#0F0F0F' }}>
                            {event.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {event.description}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" style={{ color: '#8B95C9' }} />
                          <div>
                            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
                              {new Date(event.date).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-gray-600">
                              {event.time}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" style={{ color: '#8B95C9' }} />
                          <span className="text-sm" style={{ color: '#0F0F0F' }}>
                            {event.venue}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span 
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            event.status === 'Upcoming' 
                              ? 'bg-blue-100 text-blue-800' 
                              : event.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {event.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditEvent(event)}
                            className="h-8 w-8 p-0"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteEvent(event.id)}
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
      ) : (
        /* Calendar View */
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
              <Calendar className="h-5 w-5" />
              Calendar View - {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {getEventsForMonth().length > 0 ? (
                getEventsForMonth().map((event) => (
                  <div 
                    key={event.id}
                    className="p-4 rounded-lg border-l-4 bg-gray-50"
                    style={{ borderLeftColor: '#BED450' }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium" style={{ color: '#1B2D1A' }}>
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.venue}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditEvent(event)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteEvent(event.id)}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No events scheduled for this month
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function EventModal({ 
  event, 
  onClose, 
  onSave 
}: { 
  event: Event | null;
  onClose: () => void;
  onSave: (event: Event) => void;
}) {
  const [formData, setFormData] = useState({
    title: event?.title || "",
    description: event?.description || "",
    date: event?.date || new Date().toISOString().split('T')[0],
    time: event?.time || "09:00",
    venue: event?.venue || "",
    status: event?.status || "Upcoming",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: event?.id || "",
      ...formData,
    });
  };

  return (
    <DialogContent className="max-w-2xl rounded-2xl shadow-lg">
      <DialogHeader>
        <DialogTitle className="font-heading text-xl" style={{ color: '#1B2D1A' }}>
          {event ? 'Edit Event' : 'Add New Event'}
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title" className="font-medium">Event Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="rounded-lg border h-11 p-3"
            style={{ borderColor: '#8B95C9' }}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="description" className="font-medium">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="rounded-lg border p-3"
            style={{ borderColor: '#8B95C9' }}
            rows={3}
            placeholder="Event description..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date" className="font-medium">Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              required
            />
          </div>
          <div>
            <Label htmlFor="time" className="font-medium">Time</Label>
            <Input
              id="time"
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="rounded-lg border h-11 p-3"
              style={{ borderColor: '#8B95C9' }}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="venue" className="font-medium">Venue</Label>
          <Input
            id="venue"
            value={formData.venue}
            onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
            className="rounded-lg border h-11 p-3"
            style={{ borderColor: '#8B95C9' }}
            placeholder="Event venue or location"
            required
          />
        </div>

        <div>
          <Label htmlFor="image" className="font-medium">Event Image</Label>
          <div 
            className="border-2 border-dashed rounded-lg p-8 text-center"
            style={{ borderColor: '#8B95C9' }}
          >
            <p className="text-gray-600">Click to upload event banner (16:9 ratio recommended)</p>
            <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 5MB</p>
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
            Save Event
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
