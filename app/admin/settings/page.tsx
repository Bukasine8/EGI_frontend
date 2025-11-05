"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save, Upload, Users, Globe, Palette, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface SiteSettings {
  mission: string;
  vision: string;
  aboutUs: string;
  contactEmail: string;
  contactPhone: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  siteSettings: {
    siteName: string;
    tagline: string;
    maintenanceMode: boolean;
    allowRegistrations: boolean;
  };
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    mission: "To empower young minds through environmental education and sustainable practices, creating a greener tomorrow for Nigeria and Africa.",
    vision: "A world where every young person is equipped with the knowledge and tools to protect and preserve our environment for future generations.",
    aboutUs: "The Eke Greenmind Initiative (EGI) is a non-profit organization dedicated to environmental education and sustainable development. Founded in 2020, we work with schools, communities, and organizations across Nigeria to promote environmental awareness and action. Our programs focus on tree planting, clean water initiatives, waste management education, and sustainable agriculture practices. Through partnerships with local schools and international organizations, we have reached over 2,000 students and planted more than 10,000 trees across multiple states in Nigeria.",
    contactEmail: "info@egi.org.ng",
    contactPhone: "+234 800 123 4567",
    socialLinks: {
      facebook: "https://facebook.com/EkeGreenmindInitiative",
      twitter: "https://twitter.com/EGI_Nigeria",
      instagram: "https://instagram.com/egi_nigeria",
      linkedin: "https://linkedin.com/company/eke-greenmind-initiative"
    },
    siteSettings: {
      siteName: "Eke Greenmind Initiative",
      tagline: "Empowering Young Minds, Building a Greener Tomorrow",
      maintenanceMode: false,
      allowRegistrations: true,
    }
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleInputChange = (field: string, value: string | boolean, section?: keyof SiteSettings) => {
    setHasChanges(true);
    if (section) {
      setSettings(prev => {
        const currentSection = prev[section];
        if (typeof currentSection === 'object' && currentSection !== null && !Array.isArray(currentSection)) {
          return {
            ...prev,
            [section]: {
              ...currentSection,
              [field]: value
            }
          };
        }
        return prev;
      });
    } else {
      setSettings(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = () => {
    // In a real app, this would save to the database
    console.log("Saving settings:", settings);
    setHasChanges(false);
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading" style={{ color: '#1B2D1A' }}>
            Settings
          </h1>
          <p className="mt-2" style={{ color: '#0F0F0F' }}>
            Configure static site content and system settings
          </p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={!hasChanges}
          className="rounded-xl h-11 px-6 font-medium sticky top-4 z-10"
          style={{ backgroundColor: '#BED450', color: '#1B2D1A' }}
        >
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Site Content Settings */}
        <div className="space-y-6">
          {/* Mission & Vision */}
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
                <Globe className="h-5 w-5" />
                Mission & Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="mission" className="font-medium">Mission Statement</Label>
                <Textarea
                  id="mission"
                  value={settings.mission}
                  onChange={(e) => handleInputChange('mission', e.target.value)}
                  className="rounded-lg border p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="vision" className="font-medium">Vision Statement</Label>
                <Textarea
                  id="vision"
                  value={settings.vision}
                  onChange={(e) => handleInputChange('vision', e.target.value)}
                  className="rounded-lg border p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* About Us */}
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
                <Users className="h-5 w-5" />
                About Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="aboutUs" className="font-medium">About Us Content</Label>
                <Textarea
                  id="aboutUs"
                  value={settings.aboutUs}
                  onChange={(e) => handleInputChange('aboutUs', e.target.value)}
                  className="rounded-lg border p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                  rows={8}
                />
              </div>
            </CardContent>
          </Card>

          {/* Homepage Banners */}
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
                <Palette className="h-5 w-5" />
                Homepage Banners
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="font-medium">Hero Section Background</Label>
                <div 
                  className="border-2 border-dashed rounded-lg p-6 text-center mt-1"
                  style={{ borderColor: '#8B95C9' }}
                >
                  <Upload className="h-8 w-8 mx-auto mb-2" style={{ color: '#8B95C9' }} />
                  <p className="text-gray-600">Upload hero background image</p>
                  <p className="text-sm text-gray-500 mt-1">1920x1080px recommended</p>
                </div>
              </div>
              <div>
                <Label className="font-medium">Mission Section Background</Label>
                <div 
                  className="border-2 border-dashed rounded-lg p-6 text-center mt-1"
                  style={{ borderColor: '#8B95C9' }}
                >
                  <Upload className="h-8 w-8 mx-auto mb-2" style={{ color: '#8B95C9' }} />
                  <p className="text-gray-600">Upload mission section image</p>
                  <p className="text-sm text-gray-500 mt-1">1200x800px recommended</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Settings */}
        <div className="space-y-6">
          {/* Site Information */}
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
                <Globe className="h-5 w-5" />
                Site Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName" className="font-medium">Site Name</Label>
                <Input
                  id="siteName"
                  value={settings.siteSettings.siteName}
                  onChange={(e) => handleInputChange('siteName', e.target.value, 'siteSettings')}
                  className="rounded-lg border h-11 p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                />
              </div>
              <div>
                <Label htmlFor="tagline" className="font-medium">Tagline</Label>
                <Input
                  id="tagline"
                  value={settings.siteSettings.tagline}
                  onChange={(e) => handleInputChange('tagline', e.target.value, 'siteSettings')}
                  className="rounded-lg border h-11 p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
                <Users className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="contactEmail" className="font-medium">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  className="rounded-lg border h-11 p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                />
              </div>
              <div>
                <Label htmlFor="contactPhone" className="font-medium">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  value={settings.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  className="rounded-lg border h-11 p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
                <Globe className="h-5 w-5" />
                Social Media Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="facebook" className="font-medium">Facebook</Label>
                <Input
                  id="facebook"
                  value={settings.socialLinks.facebook}
                  onChange={(e) => handleInputChange('facebook', e.target.value, 'socialLinks')}
                  className="rounded-lg border h-11 p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              <div>
                <Label htmlFor="twitter" className="font-medium">Twitter</Label>
                <Input
                  id="twitter"
                  value={settings.socialLinks.twitter}
                  onChange={(e) => handleInputChange('twitter', e.target.value, 'socialLinks')}
                  className="rounded-lg border h-11 p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
              <div>
                <Label htmlFor="instagram" className="font-medium">Instagram</Label>
                <Input
                  id="instagram"
                  value={settings.socialLinks.instagram}
                  onChange={(e) => handleInputChange('instagram', e.target.value, 'socialLinks')}
                  className="rounded-lg border h-11 p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>
              <div>
                <Label htmlFor="linkedin" className="font-medium">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={settings.socialLinks.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value, 'socialLinks')}
                  className="rounded-lg border h-11 p-3 mt-1"
                  style={{ borderColor: '#8B95C9' }}
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
                <Shield className="h-5 w-5" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Maintenance Mode</Label>
                  <p className="text-sm text-gray-600">Put the site in maintenance mode</p>
                </div>
                <Switch
                  checked={settings.siteSettings.maintenanceMode}
                  onCheckedChange={(checked) => handleInputChange('maintenanceMode', checked, 'siteSettings')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Allow User Registrations</Label>
                  <p className="text-sm text-gray-600">Allow new users to register</p>
                </div>
                <Switch
                  checked={settings.siteSettings.allowRegistrations}
                  onCheckedChange={(checked) => handleInputChange('allowRegistrations', checked, 'siteSettings')}
                />
              </div>
            </CardContent>
          </Card>

          {/* Admin User Management */}
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2" style={{ color: '#1B2D1A' }}>
                <Users className="h-5 w-5" />
                Admin User Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="font-medium mb-2" style={{ color: '#1B2D1A' }}>Current Admins</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">John Admin</p>
                      <p className="text-sm text-gray-600">john@egi.org.ng</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Super Admin
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Sarah Editor</p>
                      <p className="text-sm text-gray-600">sarah@egi.org.ng</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Editor
                    </span>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline"
                className="w-full rounded-xl h-11"
                style={{ borderColor: '#1B2D1A', color: '#1B2D1A' }}
              >
                <Users className="mr-2 h-4 w-4" />
                Manage Admin Users
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
