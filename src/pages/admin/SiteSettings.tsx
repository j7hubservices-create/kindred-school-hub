import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Save, School, MapPin, Phone, Mail, Globe } from 'lucide-react';

interface SiteSetting {
  id: string;
  setting_key: string;
  setting_value: string | null;
  setting_type: string;
  description: string | null;
}

const SiteSettings = () => {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { profile } = useAuth();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');

      if (error) throw error;

      const settingsObj: Record<string, string> = {};
      data?.forEach((setting: SiteSetting) => {
        settingsObj[setting.setting_key] = setting.setting_value || '';
      });

      setSettings(settingsObj);
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast.error('Failed to load site settings');
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: string, value: string) => {
    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert({
          setting_key: key,
          setting_value: value
        }, {
          onConflict: 'setting_key'
        });

      if (error) throw error;

      setSettings(prev => ({ ...prev, [key]: value }));
    } catch (error) {
      console.error('Error updating setting:', error);
      throw error;
    }
  };

  const handleSave = async (settingsToSave: Record<string, string>) => {
    setSaving(true);
    try {
      await Promise.all(
        Object.entries(settingsToSave).map(([key, value]) => 
          updateSetting(key, value)
        )
      );

      // Log activity
      await supabase
        .from('admin_activities')
        .insert({
          user_id: profile.id,
          action: 'updated',
          resource_type: 'site_settings',
          details: { updated_keys: Object.keys(settingsToSave) }
        });

      toast.success('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const handleSchoolInfoSave = () => {
    const schoolSettings = {
      site_title: settings.site_title || '',
      site_tagline: settings.site_tagline || '',
      hero_title: settings.hero_title || '',
      hero_subtitle: settings.hero_subtitle || '',
      about_section_content: settings.about_section_content || '',
      academic_session: settings.academic_session || ''
    };
    handleSave(schoolSettings);
  };

  const handleContactInfoSave = () => {
    const contactSettings = {
      school_address: settings.school_address || '',
      contact_phone_1: settings.contact_phone_1 || '',
      contact_phone_2: settings.contact_phone_2 || '',
      contact_email: settings.contact_email || ''
    };
    handleSave(contactSettings);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Site Settings</h2>
        <p className="text-gray-600">Manage your school website settings and information</p>
      </div>

      <Tabs defaultValue="school" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="school" className="flex items-center gap-2">
            <School className="h-4 w-4" />
            School Information
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Contact Information
          </TabsTrigger>
        </TabsList>

        <TabsContent value="school" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-5 w-5 text-emerald-600" />
                School Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="site_title">School Name</Label>
                  <Input
                    id="site_title"
                    value={settings.site_title || ''}
                    onChange={(e) => setSettings({ ...settings, site_title: e.target.value })}
                    placeholder="Our God Reigns Crystal School"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="site_tagline">School Motto/Tagline</Label>
                  <Input
                    id="site_tagline"
                    value={settings.site_tagline || ''}
                    onChange={(e) => setSettings({ ...settings, site_tagline: e.target.value })}
                    placeholder="Light to the World"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hero_title">Homepage Hero Title</Label>
                  <Input
                    id="hero_title"
                    value={settings.hero_title || ''}
                    onChange={(e) => setSettings({ ...settings, hero_title: e.target.value })}
                    placeholder="Welcome to Our School"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero_subtitle">Homepage Hero Subtitle</Label>
                  <Input
                    id="hero_subtitle"
                    value={settings.hero_subtitle || ''}
                    onChange={(e) => setSettings({ ...settings, hero_subtitle: e.target.value })}
                    placeholder="Excellence in Education"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="about_section_content">About Section Content</Label>
                <Textarea
                  id="about_section_content"
                  value={settings.about_section_content || ''}
                  onChange={(e) => setSettings({ ...settings, about_section_content: e.target.value })}
                  placeholder="Brief description about your school..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="academic_session">Current Academic Session</Label>
                <Input
                  id="academic_session"
                  value={settings.academic_session || ''}
                  onChange={(e) => setSettings({ ...settings, academic_session: e.target.value })}
                  placeholder="2025/2026"
                />
              </div>

              <Button 
                onClick={handleSchoolInfoSave} 
                disabled={saving}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Saving...' : 'Save School Information'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="school_address">School Address</Label>
                <Textarea
                  id="school_address"
                  value={settings.school_address || ''}
                  onChange={(e) => setSettings({ ...settings, school_address: e.target.value })}
                  placeholder="23, Bolanle Awosika Street, off Ilogbo Road, Borehole, Ota, Ogun State"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact_phone_1">Primary Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="contact_phone_1"
                      value={settings.contact_phone_1 || ''}
                      onChange={(e) => setSettings({ ...settings, contact_phone_1: e.target.value })}
                      placeholder="+234 802 762 5129"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact_phone_2">Secondary Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="contact_phone_2"
                      value={settings.contact_phone_2 || ''}
                      onChange={(e) => setSettings({ ...settings, contact_phone_2: e.target.value })}
                      placeholder="+234 803 308 9735"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact_email">Contact Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="contact_email"
                    type="email"
                    value={settings.contact_email || ''}
                    onChange={(e) => setSettings({ ...settings, contact_email: e.target.value })}
                    placeholder="ogrcs@yahoo.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <Button 
                onClick={handleContactInfoSave} 
                disabled={saving}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Saving...' : 'Save Contact Information'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteSettings;