import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { TOURS } from '../data/tours';
import { GALLERY_ITEMS } from '../data/gallery';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { TourCard } from '../components/TourCard';
import { 
  Sparkles, 
  Send, 
  MessageCircle, 
  Compass, 
  Car, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Calendar,
  Users,
  ShieldCheck,
  Heart,
  Camera,
  Check
} from 'lucide-react';

interface TailorMadeViewProps {
  onNavigate: (path: string) => void;
}

export const TailorMadeView: React.FC<TailorMadeViewProps> = ({ onNavigate }) => {
  useSEO({
    title: "100% Tailor-Made & Custom Sri Lanka Private Tours | KS Tours",
    description: "Design your personalized private Sri Lanka holiday. Custom itineraries crafted around your dates, interests, pace, and accommodation with Kumar & Sons Tours.",
    canonicalPath: "/tailor-made-sri-lanka-tours/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "100% Tailor-Made & Custom Sri Lanka Private Tours",
      description: "Bespoke tour planning service offering customized itineraries, private chauffeur vehicles, and handpicked boutique accommodations across Sri Lanka.",
      provider: {
        "@type": "TravelAgency",
        name: COMPANY_INFO.name,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        url: COMPANY_INFO.canonicalOrigin
      }
    }
  });

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappPhone: '',
    startDate: '',
    numberOfDays: '10',
    totalTravellers: '2',
    adults: '2',
    children: '0',
    destinations: '',
    experiences: [] as string[],
    accommodation: 'Mid-range',
    transport: 'Private car with chauffeur',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailStatus, setEmailStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Experience Options
  const experienceOptions = [
    'Culture & Heritage',
    'Wildlife & Safari',
    'Beaches',
    'Mountains & Tea Country',
    'Adventure',
    'Food & Local Experiences',
    'Photography',
    'Honeymoon',
    'Family Holiday',
    'Other'
  ];

  const accommodationOptions = [
    'Budget',
    'Mid-range',
    'Luxury',
    'Boutique',
    'Not sure / Please recommend'
  ];

  const transportOptions = [
    'Private car with chauffeur',
    'Private van with chauffeur',
    'Not sure / Please recommend'
  ];

  const toggleExperience = (exp: string) => {
    setFormData((prev) => {
      const exists = prev.experiences.includes(exp);
      return {
        ...prev,
        experiences: exists 
          ? prev.experiences.filter((item) => item !== exp)
          : [...prev.experiences, exp]
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // Validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.whatsappPhone.trim()) {
      newErrors.whatsappPhone = 'WhatsApp / Phone Number is required';
    }
    if (!formData.numberOfDays.trim()) {
      newErrors.numberOfDays = 'Number of days is required';
    }
    if (!formData.totalTravellers.trim()) {
      newErrors.totalTravellers = 'Number of travellers is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Button 1: Send via Email
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const formEl = document.getElementById('custom-tour-request-form');
      formEl?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setEmailStatus('submitting');
    setErrorMessage('');

    const endpoint = COMPANY_INFO.formspreeEndpoint;
    const isPlaceholder = !endpoint || endpoint.includes('[FORMSPREE_ENDPOINT]');

    if (isPlaceholder) {
      setTimeout(() => {
        setEmailStatus('success');
      }, 700);
      return;
    }

    try {
      const payload = {
        subject: `Custom Tour Request: ${formData.fullName} (${formData.numberOfDays} Days)`,
        ...formData,
        experiences: formData.experiences.join(', ')
      };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setEmailStatus('success');
      } else {
        const data = await res.json().catch(() => ({}));
        setEmailStatus('error');
        setErrorMessage(data.error || 'Submission could not be completed. You can also send via WhatsApp below.');
      }
    } catch {
      setEmailStatus('error');
      setErrorMessage('Network connection error. Please try sending via WhatsApp or email directly.');
    }
  };

  // Button 2: Send via WhatsApp
  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const formEl = document.getElementById('custom-tour-request-form');
      formEl?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const messageLines = [
      'Custom Tour Enquiry',
      '',
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `WhatsApp: ${formData.whatsappPhone}`,
      `Travel Date: ${formData.startDate || 'Flexible / To be confirmed'}`,
      `Number of Days: ${formData.numberOfDays}`,
      `Travellers: ${formData.totalTravellers} (Adults: ${formData.adults || '2'}, Children: ${formData.children || '0'})`,
      `Destinations: ${formData.destinations || 'Open to recommendations'}`,
      `Interests: ${formData.experiences.length > 0 ? formData.experiences.join(', ') : 'General highlights'}`,
      `Accommodation: ${formData.accommodation}`,
      `Transport: ${formData.transport}`,
      `Budget: ${formData.budget || 'Flexible'}`,
      `Additional Requirements: ${formData.message || 'None'}`
    ];

    const fullMessage = messageLines.join('\n');
    const waUrl = getWhatsAppUrl(fullMessage);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Inspiration Tours (6 real existing packages, excluding tailor-made card)
  const inspirationTours = TOURS
    .filter((t) => t.id !== 'tour-tailor-made' && t.category !== 'tailor-made')
    .slice(0, 6);

  // Gallery (6 authentic photos without filters)
  const gallerySelection = GALLERY_ITEMS.slice(0, 6);

  const scrollToForm = () => {
    document.getElementById('custom-tour-request-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* SECTION 1 — SHARED HERO BANNER WITH banner.jpg */}
      <PageBanner
        title="100% Tailor-Made & Custom Sri Lanka Private Tours"
        subtitle="Create a personalized private holiday crafted around your exact dates, interests, pace, and accommodation preferences. Travel in comfort with a dedicated chauffeur guide and a custom itinerary tailored exclusively for you."
        badge="Bespoke Private Holidays · Nearly 40 Years Local Experience"
        breadcrumbs={[
          { label: 'Tour Packages', path: '/sri-lanka-tours/' },
          { label: 'Tailor-Made Tours' }
        ]}
        onNavigate={onNavigate}
        actions={
          <>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-neutral-900 bg-[#F4CA26] hover:bg-[#e5bc1f] transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              <span>Start Your Custom Request</span>
              <Compass className="w-4 h-4 text-neutral-900" />
            </button>

            <a
              href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to enquire about a custom tailor-made tour in Sri Lanka.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quick WhatsApp Chat</span>
            </a>
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16">

        {/* SECTION 2 — INTRODUCTION */}
        <section className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left side: Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
                Personalized Travel Philosophy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 leading-snug">
                Every Traveller Is Different — Your Holiday Should Be Too
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                At Kumar &amp; Sons Tours, we understand that no two travellers share the same holiday dreams. Whether you are planning a relaxed family holiday with kid-friendly wildlife safaris, an intimate romantic honeymoon with secluded boutique hideaways, or an active adventure combining misty mountain hikes and ancient UNESCO heritage citadels, we can design the ideal route.
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                You choose the destinations, the number of days, and your preferred travel rhythm. Throughout your holiday, your private English-speaking chauffeur guide handles all transportation, expressway tolls, parking, and logistics in a clean, air-conditioned vehicle — leaving you free to immerse yourself in the natural beauty, culture, and warm hospitality of Sri Lanka.
              </p>
            </div>

            {/* Right side: G4 Image */}
            <div className="lg:col-span-5 w-full">
              <div className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm border border-neutral-100">
                <img
                  src="/images/G4.jpg"
                  alt="Modern private touring vehicle provided by KS Tours Sri Lanka"
                  loading="lazy"
                  className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[340px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-100 text-xs text-neutral-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0D7C78]" />
              <span>Private Chauffeur Guide</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0D7C78]" />
              <span>100% Flexible Itinerary</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0D7C78]" />
              <span>No Forced Commercial Stops</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#0D7C78]" />
              <span>Direct Family Support</span>
            </div>
          </div>
        </section>

        {/* SECTION 3 — CUSTOM TOUR REQUEST FORM */}
        <section id="custom-tour-request-form" className="scroll-mt-24">
          <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-md p-6 sm:p-12 space-y-10">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D7C78]/10 text-xs font-semibold uppercase tracking-wider text-[#0D7C78] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#0D7C78]" />
                <span>Custom Itinerary Builder</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
                Design Your Custom Sri Lanka Journey
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2">
                Fill in your details and travel preferences below. Kumar &amp; Chathu will review your request and prepare a handcrafted day-by-day itinerary with transparent local pricing.
              </p>
            </div>

            {/* Success message banner for email */}
            {emailStatus === 'success' && (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-in fade-in">
                <div className="flex items-center gap-2 font-bold text-base text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Enquiry Received Successfully!</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                  Thank you, <strong className="font-semibold">{formData.fullName}</strong>. Your custom tour request has been delivered to Kumar &amp; Sons Tours. We are reviewing your preferences and will prepare a customized itinerary for you within 24 hours.
                </p>
                <div className="pt-2 text-xs text-emerald-800">
                  Prefer an immediate answer? You can also message us directly on WhatsApp using the button below.
                </div>
              </div>
            )}

            {emailStatus === 'error' && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{errorMessage || 'There was an issue sending your email enquiry. Please try the Send via WhatsApp button below.'}</span>
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-10">
              
              {/* Part A: Personal Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2 border-b border-neutral-100 pb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0D7C78] text-white inline-flex items-center justify-center text-xs">1</span>
                  <span>Personal Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20 transition-all ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-white hover:border-neutral-400'
                      }`}
                    />
                    {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20 transition-all ${
                        errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-white hover:border-neutral-400'
                      }`}
                    />
                    {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      WhatsApp / Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsappPhone"
                      value={formData.whatsappPhone}
                      onChange={handleInputChange}
                      placeholder="e.g. +44 7123 456789"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20 transition-all ${
                        errors.whatsappPhone ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-white hover:border-neutral-400'
                      }`}
                    />
                    {errors.whatsappPhone && <p className="text-rose-600 text-xs mt-1">{errors.whatsappPhone}</p>}
                  </div>
                </div>
              </div>

              {/* Part B: Trip Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2 border-b border-neutral-100 pb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0D7C78] text-white inline-flex items-center justify-center text-xs">2</span>
                  <span>Trip Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Number of Days <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="numberOfDays"
                      value={formData.numberOfDays}
                      onChange={handleInputChange}
                      placeholder="e.g. 10 or 14"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20 transition-all ${
                        errors.numberOfDays ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-white'
                      }`}
                    />
                    {errors.numberOfDays && <p className="text-rose-600 text-xs mt-1">{errors.numberOfDays}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Total Travellers <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      name="totalTravellers"
                      value={formData.totalTravellers}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20 transition-all ${
                        errors.totalTravellers ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-300 bg-white'
                      }`}
                    />
                    {errors.totalTravellers && <p className="text-rose-600 text-xs mt-1">{errors.totalTravellers}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Adults
                    </label>
                    <input
                      type="number"
                      min="1"
                      name="adults"
                      value={formData.adults}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Children (under 12)
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="children"
                      value={formData.children}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Part C: Travel Preferences */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2 border-b border-neutral-100 pb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0D7C78] text-white inline-flex items-center justify-center text-xs">3</span>
                  <span>Travel Preferences</span>
                </h3>

                {/* Destinations */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Where would you like to visit?
                  </label>
                  <input
                    type="text"
                    name="destinations"
                    value={formData.destinations}
                    onChange={handleInputChange}
                    placeholder="Sigiriya, Kandy, Ella, Yala, Galle..."
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20"
                  />
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Enter key towns or parks, or leave blank if you would like our recommendation.
                  </p>
                </div>

                {/* Experiences */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    What type of experiences are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {experienceOptions.map((exp) => {
                      const selected = formData.experiences.includes(exp);
                      return (
                        <button
                          key={exp}
                          type="button"
                          onClick={() => toggleExperience(exp)}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                            selected
                              ? 'bg-[#0D7C78] text-white shadow-xs'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80 border border-neutral-200'
                          }`}
                        >
                          {selected && <Check className="w-3.5 h-3.5" />}
                          <span>{exp}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Accommodation & Transport & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Accommodation Preference
                    </label>
                    <select
                      name="accommodation"
                      value={formData.accommodation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20"
                    >
                      {accommodationOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Transport Preference
                    </label>
                    <select
                      name="transport"
                      value={formData.transport}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20"
                    >
                      {transportOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Estimated Budget <span className="text-neutral-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="e.g. $1,500 - $2,500 per person"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20"
                    />
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Additional Requirements / Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us anything else you would like us to know about your trip (special celebrations, pacing, must-see places, dietary needs, flight times)..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C78]/20 leading-relaxed"
                  />
                </div>
              </div>

              {/* SECTION 4 — TWO SUBMISSION BUTTONS */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
                
                {/* Button 1: Send via Email */}
                <button
                  type="submit"
                  disabled={emailStatus === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0D7C78] hover:bg-[#0A5F5C] shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{emailStatus === 'submitting' ? 'Sending Request...' : 'SEND VIA EMAIL'}</span>
                </button>

                {/* Button 2: Send via WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>SEND VIA WHATSAPP</span>
                </button>
              </div>

            </form>
          </div>
        </section>

        {/* SECTION 5 — WHY CREATE A TAILOR-MADE TOUR? */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
              The Kumar &amp; Sons Advantage
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-neutral-900">
              Your Trip, Your Way
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Private bespoke travel gives you the freedom to explore Sri Lanka without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 space-y-3 shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5 text-[#0D7C78]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Flexible Itinerary
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Choose exactly where you want to go, what you want to see, and how long you want to stay at every stop.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 space-y-3 shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Car className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Private Chauffeur
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Travel in complete comfort and privacy with your dedicated, experienced English-speaking driver guide.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 space-y-3 shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Local Knowledge
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Benefit from nearly 40 years of local insight, uncovering authentic roadside spots, hidden viewpoints, and cultural secrets.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 space-y-3 shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Personalised Experiences
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Combine ancient culture, wildlife game drives, quiet beaches, mountain trains, and local food based entirely on your interests.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 space-y-3 shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5 text-rose-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Your Own Pace
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                No rushed tour bus schedules or fixed group timings. Sleep in, stop for photos whenever you want, and linger longer at sites you love.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 space-y-3 shadow-2xs hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#0D7C78]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Transparent Pricing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Direct quotes from a local family-run business with zero hidden fees, middleman commissions, or forced commercial shopping stops.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — POPULAR TOUR INSPIRATION */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
              Sample Routes
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-neutral-900">
              Need Some Inspiration?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Take a look at some of our popular itineraries. We can combine, shorten, lengthen, or customize any element of these tours to create your perfect Sri Lankan holiday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspirationTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} onNavigate={onNavigate} />
            ))}
          </div>
        </section>

        {/* SECTION 7 — GALLERY (Visual only: no category filters, no captions, clean alt text) */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
              Moments From The Road
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-neutral-900">
              Real Experiences Across Sri Lanka
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Authentic photographs of our private travelers exploring heritage temples, tea country, wildlife parks, and coastal hideaways.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {gallerySelection.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-200/80 shadow-xs"
              >
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8 — FINAL CTA */}
        <section className="bg-gradient-to-br from-[#0C1519] via-[#142228] to-[#0D7C78]/80 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl border border-white/10">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Create Your Sri Lanka Adventure?
            </h2>
            <p className="text-xs sm:text-base text-neutral-300 leading-relaxed">
              Tell us about your dream trip and let Kumar &amp; Chathu design a personalized private itinerary tailored just for you.
            </p>
          </div>

          <div>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold text-neutral-900 bg-[#F4CA26] hover:bg-[#e5bc1f] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-102 cursor-pointer uppercase tracking-wider"
            >
              <Compass className="w-5 h-5 text-neutral-900" />
              <span>Create Your Custom Tour</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
