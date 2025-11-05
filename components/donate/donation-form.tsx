"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, CreditCard, Shield } from "lucide-react";

const predefinedAmounts = [5000, 10000, 25000, 50000, 100000];

export default function DonationForm() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    anonymous: false
  });

  const handleAmountSelect = (value: number) => {
    setAmount(value.toString());
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setAmount("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
          <Heart className="w-8 h-8 text-secondary" />
        </div>
        <h2 className="text-3xl font-bold text-primary mb-2">Make a Donation</h2>
        <p className="text-gray-600">Your contribution creates lasting change in communities across Nigeria</p>
      </div>

      <form className="space-y-6">
        {/* Amount Selection */}
        <div>
          <Label className="text-lg font-semibold text-primary mb-4 block">Choose Amount</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {predefinedAmounts.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleAmountSelect(value)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  amount === value.toString()
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-gray-200 hover:border-secondary/50"
                }`}
              >
                <div className="text-lg font-bold">₦{value.toLocaleString()}</div>
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Input
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => handleCustomAmount(e.target.value)}
              className="text-lg font-semibold"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
          </div>
        </div>

        {/* Donor Information */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold text-primary">Donor Information</Label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={donorInfo.name}
                onChange={(e) => setDonorInfo(prev => ({...prev, name: e.target.value}))}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={donorInfo.email}
                onChange={(e) => setDonorInfo(prev => ({...prev, email: e.target.value}))}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={donorInfo.phone}
              onChange={(e) => setDonorInfo(prev => ({...prev, phone: e.target.value}))}
              placeholder="+234 xxx xxx xxxx"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="anonymous"
              checked={donorInfo.anonymous}
              onChange={(e) => setDonorInfo(prev => ({...prev, anonymous: e.target.checked}))}
              className="rounded border-gray-300"
            />
            <Label htmlFor="anonymous" className="text-sm">Make this donation anonymous</Label>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <Label className="text-lg font-semibold text-primary mb-4 block">Payment Method</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Credit/Debit Card</SelectItem>
              <SelectItem value="bank">Bank Transfer</SelectItem>
              <SelectItem value="ussd">USSD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Security Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <Shield className="w-5 h-5 text-green-600 mr-3" />
            <div>
              <p className="text-sm font-semibold text-green-800">Secure Payment</p>
              <p className="text-sm text-green-700">Your payment is protected by bank-level encryption</p>
            </div>
          </div>
        </div>

        {/* Donate Button */}
        <Button className="w-full egi-button-cyber text-lg py-6">
          <CreditCard className="w-5 h-5 mr-2" />
          Donate ₦{(customAmount || amount || "0").toLocaleString()}
        </Button>
      </form>
    </div>
  );
}
