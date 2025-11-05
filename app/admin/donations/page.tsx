"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Filter, Calendar, Banknote, CreditCard, Smartphone } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Donation {
  id: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  method: string;
  date: string;
  status: string;
  campaign?: string;
}

const mockDonations: Donation[] = [
  {
    id: "1",
    donorName: "John Adebayo",
    donorEmail: "john.adebayo@email.com",
    amount: 50000,
    method: "Bank Transfer",
    date: "2024-03-15",
    status: "Completed",
    campaign: "Tree Planting Campaign",
  },
  {
    id: "2",
    donorName: "Sarah Ibrahim",
    donorEmail: "sarah.ibrahim@email.com",
    amount: 25000,
    method: "Card Payment",
    date: "2024-03-14",
    status: "Completed",
    campaign: "Clean Water Initiative",
  },
  {
    id: "3",
    donorName: "Michael Okafor",
    donorEmail: "michael.okafor@email.com",
    amount: 100000,
    method: "Mobile Money",
    date: "2024-03-13",
    status: "Pending",
    campaign: "School Partnership Program",
  },
  {
    id: "4",
    donorName: "Anonymous Donor",
    donorEmail: "anonymous@donor.com",
    amount: 75000,
    method: "Cryptocurrency",
    date: "2024-03-12",
    status: "Completed",
  },
  {
    id: "5",
    donorName: "Fatima Hassan",
    donorEmail: "fatima.hassan@email.com",
    amount: 30000,
    method: "Bank Transfer",
    date: "2024-03-11",
    status: "Completed",
    campaign: "Environmental Education",
  },
];

export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>(mockDonations);
  const [dateFilter, setDateFilter] = useState("");
  const [methodFilter, setMethodFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredDonations = donations.filter((donation) => {
    const matchesDate = !dateFilter || donation.date >= dateFilter;
    const matchesMethod = methodFilter === "all" || donation.method === methodFilter;
    const matchesStatus = statusFilter === "all" || donation.status === statusFilter;
    return matchesDate && matchesMethod && matchesStatus;
  });

  const totalAmount = filteredDonations.reduce((sum, d) => sum + d.amount, 0);
  const completedDonations = filteredDonations.filter(d => d.status === "Completed");
  const pendingDonations = filteredDonations.filter(d => d.status === "Pending");

  const exportToCSV = () => {
    const headers = ["Date", "Donor Name", "Email", "Amount (₦)", "Method", "Status", "Campaign"];
    const csvContent = [
      headers.join(","),
      ...filteredDonations.map(donation => [
        donation.date,
        donation.donorName,
        donation.donorEmail,
        donation.amount.toLocaleString(),
        donation.method,
        donation.status,
        donation.campaign || "General"
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `donations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const getMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'card payment':
        return <CreditCard className="h-4 w-4" />;
      case 'mobile money':
        return <Smartphone className="h-4 w-4" />;
      default:
        return <Banknote className="h-4 w-4" />;
    }
  };

  // Simple chart data for monthly trends
  const monthlyData = [
    { month: "Jan", amount: 450000 },
    { month: "Feb", amount: 320000 },
    { month: "Mar", amount: 280000 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Donations Management
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Monitor donations and generate reports
          </p>
        </div>
        <Button 
          onClick={exportToCSV}
          className="rounded-xl h-11 px-6 font-medium"
          style={{ backgroundColor: '#1B2D1A', color: '#FFFFFF', border: '2px solid #1B2D1A' }}
        >
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              ₦{totalAmount.toLocaleString()}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Total Donations
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#4CAF50' }}>
              {completedDonations.length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Completed
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#FFB703' }}>
              {pendingDonations.length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Pending
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              ₦{Math.round(totalAmount / filteredDonations.length).toLocaleString()}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Average Donation
            </p>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="rounded-xl shadow-sm p-4">
        <div className="flex flex-wrap items-center gap-4">
          <Filter className="h-5 w-5" style={{ color: '#8B95C9' }} />
          <div className="flex items-center gap-2">
            <Label htmlFor="date-filter" className="font-medium">From Date:</Label>
            <Input
              id="date-filter"
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-40 rounded-lg border h-9"
              style={{ borderColor: '#8B95C9' }}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label className="font-medium">Method:</Label>
            <Select value={methodFilter} onValueChange={setMethodFilter}>
              <SelectTrigger className="w-40 rounded-lg border h-9" style={{ borderColor: '#8B95C9' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                <SelectItem value="Card Payment">Card Payment</SelectItem>
                <SelectItem value="Mobile Money">Mobile Money</SelectItem>
                <SelectItem value="Cryptocurrency">Cryptocurrency</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Label className="font-medium">Status:</Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32 rounded-lg border h-9" style={{ borderColor: '#8B95C9' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Donations Table */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
            Donation Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#8B95C9' }}>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Donor</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Amount</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Method</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Date</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Status</th>
                  <th className="text-left py-3 px-4 font-medium" style={{ color: '#8B95C9' }}>Campaign</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonations.map((donation) => (
                  <tr 
                    key={donation.id} 
                    className="border-b hover:bg-gray-50 transition-colors"
                    style={{ borderColor: '#F9FAFB' }}
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium" style={{ color: '#0F0F0F' }}>
                          {donation.donorName}
                        </p>
                        <p className="text-sm text-gray-600">{donation.donorEmail}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="font-bold" style={{ color: '#1B2D1A' }}>
                        ₦{donation.amount.toLocaleString()}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {getMethodIcon(donation.method)}
                        <span style={{ color: '#0F0F0F' }}>{donation.method}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4" style={{ color: '#0F0F0F' }}>
                      {new Date(donation.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <span 
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          donation.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {donation.status}
                      </span>
                    </td>
                    <td className="py-3 px-4" style={{ color: '#0F0F0F' }}>
                      {donation.campaign || "General"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trends Chart */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
            <Calendar className="h-5 w-5" />
            Monthly Donation Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-center gap-8 p-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-16 rounded-t-lg transition-all duration-500 hover:opacity-80"
                  style={{ 
                    backgroundColor: '#BED450',
                    height: `${(data.amount / 500000) * 200}px`,
                    minHeight: '20px'
                  }}
                />
                <p className="mt-2 text-sm font-medium" style={{ color: '#0F0F0F' }}>
                  {data.month}
                </p>
                <p className="text-xs text-gray-600">
                  ₦{(data.amount / 1000).toFixed(0)}K
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Donation amounts by month (in Nigerian Naira)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
