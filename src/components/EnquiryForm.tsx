import React, { useState } from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

interface EnquiryFormProps {
  initialTour?: string;
  headline?: string;
  subheadline?: string;
  title?: string;
  subtitle?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialTour = '',
  headline,
  subheadline,
  title,
  subtitle,
}) => {
  const displayHeadline = title || headline || 'Request a Custom Itinerary & Quotation';
  const displaySubheadline = subtitle || subheadline || 'Share your travel ideas with Kumar & Sons Tours. We craft a personalized itinerary within 24 hours with transparent local pricing.';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappPhone: '',
    country: '',
    travelDates: '',
    numberOfDays: '10 Days',
    adults: 2,
    children: 0,
    interestedTour: initialTour,
    accommodationPreference: 'Standard 3-Star & Boutique',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Formspree endpoint check
    const endpoint = COMPANY_INFO.formspreeEndpoint;
    const isPlaceholder = !endpoint || endpoint.includes('[FORMSPREE_ENDPOINT]');

    if (isPlaceholder) {
      // In development or until the user provides their Formspree ID, simulate success cleanly
      setTimeout(() => {
        setStatus('success');
      }, 700);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(errorData.error || 'Submission could not be completed. Please reach out to us via WhatsApp.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please contact us directly on WhatsApp or email.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center max-w-2xl mx-auto shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold text-emerald-950 mb-2">
          Thank You, {formData.fullName || 'Traveler'}!
        </h3>
        <p className="text-emerald-800 text-sm leading-relaxed mb-6">
          Your tour enquiry has been received by Kumar &amp; Sons Tours. We are reviewing your travel preferences and will prepare a customized itinerary for you shortly.
        </p>

        <div className="bg-white/80 p-4 rounded-lg border border-emerald-200 mb-6 inline-block text-left text-xs space-y-1 text-emerald-900">
          <p><span className="font-semibold">Tour / Interest:</span> {formData.interestedTour || 'Custom Tour'}</p>
          <p><span className="font-semibold">Duration:</span> {formData.numberOfDays}</p>
          <p><span className="font-semibold">Party:</span> {formData.adults} Adults {formData.children > 0 ? `, ${formData.children} Children` : ''}</p>
          <p><span className="font-semibold">Email:</span> {formData.email}</p>
        </div>

        <div>
          <p className="text-xs text-neutral-600 mb-3">Prefer an immediate reply?</p>
          <a
            href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I just submitted an inquiry for ${formData.interestedTour || 'a custom Sri Lanka tour'}. My name is ${formData.fullName}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Continue on WhatsApp with Kumar &amp; Chathu</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-2">
          {displayHeadline}
        </h2>
        <p className="text-sm text-neutral-600 max-w-xl mx-auto">
          {displaySubheadline}
        </p>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            24-Hour Response
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Nearly 40 Years Experience
          </span>
        </div>
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-700 mb-1">
              Your Full Name <span className="text-amber-700">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1">
              Email Address <span className="text-amber-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@example.com"
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="whatsappPhone" className="block text-xs font-semibold text-neutral-700 mb-1">
              WhatsApp / Mobile Number
            </label>
            <input
              type="tel"
              id="whatsappPhone"
              name="whatsappPhone"
              value={formData.whatsappPhone}
              onChange={handleChange}
              placeholder="+44 7123 456789"
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-xs font-semibold text-neutral-700 mb-1">
              Country of Residence
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. United Kingdom, Germany, Australia"
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="travelDates" className="block text-xs font-semibold text-neutral-700 mb-1">
              Approximate Travel Month / Dates
            </label>
            <input
              type="text"
              id="travelDates"
              name="travelDates"
              value={formData.travelDates}
              onChange={handleChange}
              placeholder="e.g. Nov 2026 or Dec 15-28"
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600"
            />
          </div>

          <div>
            <label htmlFor="numberOfDays" className="block text-xs font-semibold text-neutral-700 mb-1">
              Trip Duration
            </label>
            <select
              id="numberOfDays"
              name="numberOfDays"
              value={formData.numberOfDays}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 bg-white"
            >
              <option value="5-7 Days">5 – 7 Days</option>
              <option value="8-10 Days">8 – 10 Days</option>
              <option value="11-14 Days">11 – 14 Days (2 Weeks)</option>
              <option value="15-21 Days">15 – 21 Days (3 Weeks)</option>
              <option value="Custom Duration">Custom Duration</option>
            </select>
          </div>

          <div>
            <label htmlFor="interestedTour" className="block text-xs font-semibold text-neutral-700 mb-1">
              Tour Interest
            </label>
            <select
              id="interestedTour"
              name="interestedTour"
              value={formData.interestedTour}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 bg-white"
            >
              <option value="Tailor-Made Custom Tour">Tailor-Made Custom Tour</option>
              <option value="7-Day Classic Sri Lanka Tour">7-Day Classic Sri Lanka Tour</option>
              <option value="10-Day Island Highlights & Safari">10-Day Island Highlights &amp; Safari</option>
              <option value="14-Day Grand Island Explorer">14-Day Grand Island Explorer</option>
              <option value="Romantic Honeymoon Package">Romantic Honeymoon Package</option>
              <option value="Family Wildlife & Culture Tour">Family Wildlife &amp; Culture Tour</option>
              <option value="Sri Lanka Wildlife & Safari Expedition">Wildlife &amp; Safari Expedition</option>
              <option value="Private Driver Chauffeur Only">Private Driver Chauffeur Only</option>
              <option value="Airport Transfer Only">Airport Transfer Only</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="adults" className="block text-xs font-semibold text-neutral-700 mb-1">
                Adults (12+)
              </label>
              <input
                type="number"
                id="adults"
                name="adults"
                min="1"
                max="30"
                value={formData.adults}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="children" className="block text-xs font-semibold text-neutral-700 mb-1">
                Children (0-11)
              </label>
              <input
                type="number"
                id="children"
                name="children"
                min="0"
                max="10"
                value={formData.children}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="accommodationPreference" className="block text-xs font-semibold text-neutral-700 mb-1">
              Accommodation Style
            </label>
            <select
              id="accommodationPreference"
              name="accommodationPreference"
              value={formData.accommodationPreference}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 bg-white"
            >
              <option value="Standard 3-Star & Boutique">Comfortable 3-Star &amp; Boutique</option>
              <option value="Luxury 4-5 Star Hotels">Luxury 4 to 5-Star Resorts</option>
              <option value="Self-Booked Hotels (Driver Only)">I will book my own hotels (Transport Only)</option>
              <option value="Undecided / Recommend to Me">Undecided / Recommend best options</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 mb-1">
            Special Requests, Places You Want to Visit, or Questions
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you'd love to see: e.g. Sigiriya climb, scenic train to Ella, Yala safari, relaxing beaches, dietary requirements..."
            className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600"
          ></textarea>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors disabled:opacity-70 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{status === 'submitting' ? 'Sending Request...' : 'Send Tour Enquiry'}</span>
          </button>

          <a
            href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I would like to plan a tour in Sri Lanka.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 py-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Or message us immediately on WhatsApp</span>
          </a>
        </div>
      </form>
    </div>
  );
};
