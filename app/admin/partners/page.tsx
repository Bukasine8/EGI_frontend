"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Upload, ExternalLink, Globe } from "lucide-react";
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

interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  partnershipType: string;
  addedDate: string;
}

const mockPartners: Partner[] = [
  {
    id: "1",
    name: "United Nations Environment Programme",
    logo: "/api/placeholder/140/80",
    website: "https://www.unep.org",
    description: "Global environmental authority that sets the environmental agenda and promotes sustainable development.",
    partnershipType: "Strategic Partnership",
    addedDate: "2023-01-15",
  },
  {
    id: "2",
    name: "Lagos State Ministry of Environment",
    logo: "/api/placeholder/140/80",
    website: "https://lagosstate.gov.ng",
    description: "State government agency responsible for environmental protection and sustainable development in Lagos State.",
    partnershipType: "Government Partnership",
    addedDate: "2023-03-20",
  },
  {
    id: "3",
    name: "Shell Nigeria",
    logo: "/api/placeholder/140/80",
    website: "https://www.shell.com.ng",
    description: "Multinational oil and gas company committed to sustainable energy solutions and community development.",
    partnershipType: "Corporate Sponsor",
    addedDate: "2023-06-10",
  },
  {
    id: "4",
    name: "University of Lagos",
    logo: "/api/placeholder/140/80",
    website: "https://www.unilag.edu.ng",
    description: "Premier university providing research support and student volunteers for environmental projects.",
    partnershipType: "Academic Partnership",
    addedDate: "2023-08-05",
  },
  {
    id: "5",
    name: "Green Africa Foundation",
    logo: "/api/placeholder/140/80",
    website: "https://greenafricafoundation.org",
    description: "Pan-African environmental organization focused on climate change mitigation and adaptation.",
    partnershipType: "NGO Partnership",
    addedDate: "2023-10-12",
  },
  {
    id: "6",
    name: "Dangote Foundation",
    logo: "/api/placeholder/140/80",
    website: "https://www.dangote.com/foundation",
    description: "Leading philanthropic organization supporting education, health, and environmental initiatives.",
    partnershipType: "Corporate Sponsor",
    addedDate: "2024-01-08",
  },
  {
    id: "7",
    name: "World Wildlife Fund Nigeria",
    logo: "/api/placeholder/140/80",
    website: "https://www.worldwildlife.org",
    description: "International conservation organization working to protect wildlife and natural habitats.",
    partnershipType: "Conservation Partnership",
    addedDate: "2024-02-14",
  },
  {
    id: "8",
    name: "Nigerian Environmental Society",
    logo: "/api/placeholder/140/80",
    website: "https://www.nesng.org",
    description: "Professional body of environmental practitioners promoting sustainable environmental management.",
    partnershipType: "Professional Partnership",
    addedDate: "2024-03-01",
  },
];

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>(mockPartners);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);

  const handleAddPartner = () => {
    setEditingPartner(null);
    setIsModalOpen(true);
  };

  const handleEditPartner = (partner: Partner) => {
    setEditingPartner(partner);
    setIsModalOpen(true);
  };

  const handleDeletePartner = (id: string) => {
    setPartners(partners.filter(p => p.id !== id));
  };

  const getPartnershipTypeColor = (type: string) => {
    switch (type) {
      case 'Strategic Partnership':
        return 'bg-purple-100 text-purple-800';
      case 'Government Partnership':
        return 'bg-blue-100 text-blue-800';
      case 'Corporate Sponsor':
        return 'bg-green-100 text-green-800';
      case 'Academic Partnership':
        return 'bg-orange-100 text-orange-800';
      case 'NGO Partnership':
        return 'bg-red-100 text-red-800';
      case 'Conservation Partnership':
        return 'bg-teal-100 text-teal-800';
      case 'Professional Partnership':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const partnershipTypes = [...new Set(partners.map(p => p.partnershipType))];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Partner Organizations
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Manage logos and info for partner organizations
          </p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={handleAddPartner}
              className="rounded-xl h-11 px-6 font-medium"
              style={{ backgroundColor: '#1B2D1A', color: '#FFFFFF' }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Partner
            </Button>
          </DialogTrigger>
          <PartnerModal 
            partner={editingPartner}
            onClose={() => setIsModalOpen(false)}
            onSave={(partner) => {
              if (editingPartner) {
                setPartners(partners.map(p => p.id === partner.id ? partner : p));
              } else {
                setPartners([...partners, { ...partner, id: Date.now().toString() }]);
              }
              setIsModalOpen(false);
            }}
          />
        </Dialog>
      </div>

      {/* Partner Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {partners.length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Total Partners
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {partnershipTypes.length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Partnership Types
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {partners.filter(p => p.partnershipType === 'Corporate Sponsor').length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              Corporate Sponsors
            </p>
          </div>
        </Card>
        <Card className="rounded-xl shadow-sm p-4" style={{ backgroundColor: '#D6EDFF' }}>
          <div className="text-center">
            <p className="text-2xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
              {partners.filter(p => new Date(p.addedDate) > new Date(Date.now() - 365*24*60*60*1000)).length}
            </p>
            <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
              New This Year
            </p>
          </div>
        </Card>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <Card key={partner.id} className="rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="text-center">
                {/* Logo */}
                <div className="w-35 h-20 mx-auto mb-4 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:scale-105 transition-transform duration-300">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="text-gray-400 text-xs text-center p-2">
                      {partner.name}
                    </div>
                  )}
                </div>

                {/* Partner Name */}
                <h3 className="font-heading text-lg font-bold mb-2 line-clamp-2" style={{ color: '#1B2D1A' }}>
                  {partner.name}
                </h3>

                {/* Partnership Type */}
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${getPartnershipTypeColor(partner.partnershipType)}`}>
                  {partner.partnershipType}
                </span>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {partner.description}
                </p>

                {/* Website Link */}
                {partner.website && (
                  <div className="mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-xs"
                      onClick={() => window.open(partner.website, '_blank')}
                    >
                      <Globe className="h-3 w-3 mr-1" />
                      Visit Website
                    </Button>
                  </div>
                )}

                {/* Added Date */}
                <p className="text-xs text-gray-500 mb-4">
                  Added {new Date(partner.addedDate).toLocaleDateString()}
                </p>

                {/* Actions */}
                <div className="flex justify-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditPartner(partner)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeletePartner(partner.id)}
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

      {/* Partnership Types Summary */}
      <Card className="rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading" style={{ color: '#1B2D1A' }}>
            Partnership Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnershipTypes.map((type) => {
              const count = partners.filter(p => p.partnershipType === type).length;
              return (
                <div key={type} className="text-center p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <p className="text-2xl font-bold font-heading mb-1" style={{ color: '#1B2D1A' }}>
                    {count}
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#0F0F0F' }}>
                    {type}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PartnerModal({ 
  partner, 
  onClose, 
  onSave 
}: { 
  partner: Partner | null;
  onClose: () => void;
  onSave: (partner: Partner) => void;
}) {
  const [formData, setFormData] = useState({
    name: partner?.name || "",
    logo: partner?.logo || "",
    website: partner?.website || "",
    description: partner?.description || "",
    partnershipType: partner?.partnershipType || "",
    addedDate: partner?.addedDate || new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: partner?.id || "",
      ...formData,
    });
  };

  const partnershipTypes = [
    "Strategic Partnership",
    "Government Partnership", 
    "Corporate Sponsor",
    "Academic Partnership",
    "NGO Partnership",
    "Conservation Partnership",
    "Professional Partnership"
  ];

  return (
    <DialogContent className="max-w-2xl rounded-2xl shadow-lg">
      <DialogHeader>
        <DialogTitle className="font-heading text-xl" style={{ color: '#1B2D1A' }}>
          {partner ? 'Edit Partner' : 'Add New Partner'}
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="font-medium">Organization Name</Label>
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
          <Label htmlFor="logo" className="font-medium">Logo Upload</Label>
          <div 
            className="border-2 border-dashed rounded-lg p-6 text-center"
            style={{ borderColor: '#8B95C9' }}
          >
            <Upload className="h-8 w-8 mx-auto mb-2" style={{ color: '#8B95C9' }} />
            <p className="text-gray-600">Click to upload logo</p>
            <p className="text-sm text-gray-500 mt-1">140x80px recommended, PNG or SVG</p>
          </div>
        </div>

        <div>
          <Label htmlFor="website" className="font-medium">Website URL</Label>
          <Input
            id="website"
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="rounded-lg border h-11 p-3"
            style={{ borderColor: '#8B95C9' }}
            placeholder="https://example.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="partnershipType" className="font-medium">Partnership Type</Label>
          <select
            id="partnershipType"
            value={formData.partnershipType}
            onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
            className="w-full rounded-lg border h-11 p-3"
            style={{ borderColor: '#8B95C9' }}
            required
          >
            <option value="">Select partnership type</option>
            {partnershipTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="description" className="font-medium">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="rounded-lg border p-3"
            style={{ borderColor: '#8B95C9' }}
            rows={4}
            placeholder="Brief description of the organization and partnership..."
            required
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
            Save Partner
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
