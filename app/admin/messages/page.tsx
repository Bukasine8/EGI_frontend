"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Reply, Trash2, Mail, Clock, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'unread' | 'read' | 'replied';
  category?: string;
}

const mockMessages: ContactMessage[] = [
  {
    id: "1",
    name: "Adebayo Johnson",
    email: "adebayo.johnson@email.com",
    subject: "Partnership Inquiry",
    message: "Hello, I represent a local school in Lagos and we're interested in partnering with EGI for environmental education programs. We have over 500 students who would benefit from your initiatives. Could we schedule a meeting to discuss potential collaboration opportunities?",
    date: "2024-03-15T10:30:00Z",
    status: "unread",
    category: "Partnership",
  },
  {
    id: "2",
    name: "Sarah Okafor",
    email: "sarah.okafor@email.com",
    subject: "Volunteer Application Follow-up",
    message: "I submitted my volunteer application two weeks ago and haven't heard back. I'm very passionate about environmental conservation and would love to contribute to your tree planting initiatives. My background is in environmental science and I have experience with community outreach programs.",
    date: "2024-03-14T14:15:00Z",
    status: "read",
    category: "Volunteer",
  },
  {
    id: "3",
    name: "Michael Ibrahim",
    email: "michael.ibrahim@email.com",
    subject: "Donation Receipt Request",
    message: "I made a donation of ₦50,000 last month for the Clean Water Initiative but haven't received my tax-deductible receipt yet. Could you please send it to this email address? My transaction reference is TXN123456789.",
    date: "2024-03-13T09:45:00Z",
    status: "replied",
    category: "Donation",
  },
  {
    id: "4",
    name: "Fatima Hassan",
    email: "fatima.hassan@email.com",
    subject: "Event Information Request",
    message: "I saw your upcoming tree planting event on social media. Could you provide more details about the location, what to bring, and how to register? I'd like to bring my family and some friends to participate.",
    date: "2024-03-12T16:20:00Z",
    status: "unread",
    category: "Event",
  },
  {
    id: "5",
    name: "David Okonkwo",
    email: "david.okonkwo@email.com",
    subject: "Media Coverage Request",
    message: "I'm a journalist with The Guardian Nigeria and I'm working on a story about environmental initiatives in Nigeria. Would it be possible to interview someone from your organization about EGI's impact and future plans?",
    date: "2024-03-11T11:10:00Z",
    status: "read",
    category: "Media",
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleViewMessage = (message: ContactMessage) => {
    setSelectedMessage(message);
    setIsDetailModalOpen(true);
    
    // Mark as read if unread
    if (message.status === 'unread') {
      setMessages(messages.map(m => 
        m.id === message.id ? { ...m, status: 'read' } : m
      ));
    }
  };

  const handleDeleteMessage = (id: string) => {
    setMessages(messages.filter(m => m.id !== id));
  };

  const handleReply = () => {
    if (selectedMessage && replyText.trim()) {
      setMessages(messages.map(m => 
        m.id === selectedMessage.id ? { ...m, status: 'replied' } : m
      ));
      setReplyText("");
      setIsDetailModalOpen(false);
      // In a real app, this would send the email
      alert("Reply sent successfully!");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-gray-100 text-gray-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'Partnership':
        return 'bg-purple-100 text-purple-800';
      case 'Volunteer':
        return 'bg-blue-100 text-blue-800';
      case 'Donation':
        return 'bg-green-100 text-green-800';
      case 'Event':
        return 'bg-orange-100 text-orange-800';
      case 'Media':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const statusCounts = {
    total: messages.length,
    unread: messages.filter(m => m.status === 'unread').length,
    read: messages.filter(m => m.status === 'read').length,
    replied: messages.filter(m => m.status === 'replied').length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Messages & Contacts
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            View and respond to contact form submissions
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
              Total Messages
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#2563EB' }}>
              {statusCounts.unread}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Unread
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#6B7280' }}>
              {statusCounts.read}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Read
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#4CAF50' }}>
              {statusCounts.replied}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Replied
            </p>
          </div>
        </Card>
      </div>

      {/* Messages Table */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
            Contact Messages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#8B95C9' }}>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Name</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Email</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Subject</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Category</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Date</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Status</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr 
                    key={message.id} 
                    className={`border-b hover:bg-gray-50 transition-colors ${
                      message.status === 'unread' ? 'bg-blue-50' : ''
                    }`}
                    style={{ borderColor: '#F9FAFB' }}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" style={{ color: '#8B95C9' }} />
                        <span className="font-medium" style={{ color: '#0F0F0F' }}>
                          {message.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" style={{ color: '#8B95C9' }} />
                        <span style={{ color: '#0F0F0F' }}>{message.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="font-medium truncate max-w-xs" style={{ color: '#0F0F0F' }}>
                        {message.subject}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      {message.category && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(message.category)}`}>
                          {message.category}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" style={{ color: '#8B95C9' }} />
                        <span style={{ color: '#0F0F0F' }}>
                          {new Date(message.date).toLocaleDateString()}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                        {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewMessage(message)}
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteMessage(message.id)}
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

      {/* Message Detail Modal */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="max-w-3xl rounded-2xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl" style={{ color: '#1B2D1A' }}>
              Message Details
            </DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-6">
              {/* Message Header */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <div>
                  <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>From</h3>
                  <p className="font-medium" style={{ color: '#0F0F0F' }}>{selectedMessage.name}</p>
                  <p className="text-sm text-gray-600">{selectedMessage.email}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm" style={{ color: '#8B95C9' }}>Date</h3>
                  <p style={{ color: '#0F0F0F' }}>
                    {new Date(selectedMessage.date).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Subject */}
              <div>
                <h3 className="font-medium text-sm mb-2" style={{ color: '#8B95C9' }}>Subject</h3>
                <p className="font-medium text-lg" style={{ color: '#1B2D1A' }}>
                  {selectedMessage.subject}
                </p>
              </div>

              {/* Category */}
              {selectedMessage.category && (
                <div>
                  <h3 className="font-medium text-sm mb-2" style={{ color: '#8B95C9' }}>Category</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedMessage.category)}`}>
                    {selectedMessage.category}
                  </span>
                </div>
              )}

              {/* Message Body */}
              <div>
                <h3 className="font-medium text-sm mb-2" style={{ color: '#8B95C9' }}>Message</h3>
                <div className="p-4 rounded-lg border" style={{ borderColor: '#8B95C9', backgroundColor: '#FFFFFF' }}>
                  <p className="leading-relaxed" style={{ color: '#0F0F0F' }}>
                    {selectedMessage.message}
                  </p>
                </div>
              </div>

              {/* Reply Section */}
              <div className="border-t pt-4">
                <h3 className="font-medium text-sm mb-2" style={{ color: '#8B95C9' }}>Reply</h3>
                <Textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  className="rounded-lg border p-3 min-h-[100px]"
                  style={{ borderColor: '#8B95C9' }}
                />
                <div className="flex justify-end gap-3 mt-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsDetailModalOpen(false)}
                    className="rounded-xl h-11 px-6"
                    style={{ borderColor: '#1B2D1A', color: '#1B2D1A' }}
                  >
                    Close
                  </Button>
                  <Button
                    onClick={handleReply}
                    disabled={!replyText.trim()}
                    className="rounded-xl h-11 px-6"
                    style={{ backgroundColor: '#BED450', color: '#1B2D1A' }}
                  >
                    <Reply className="mr-2 h-4 w-4" />
                    Send Reply
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
