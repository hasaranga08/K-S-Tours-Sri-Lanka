/**
 * Centralized company information for Kumar & Sons Tours Sri Lanka (KS Tours).
 * Authenticated details discovered from existing business records.
 * Unprovided items remain undefined pending owner confirmation.
 */

export const COMPANY_INFO = {
  name: "Kumar & Sons Tours Sri Lanka",
  shortName: "KS Tours Sri Lanka",
  domain: "https://www.kstourssrilanka.com",
  canonicalOrigin: "https://www.kstourssrilanka.com",
  yearsInOperation: "Nearly 40 years",
  experienceSummary: "Operating in the Sri Lankan tourism industry for nearly 40 years.",
  
  // Real contact details from company records
  phone: "+94 77 774 1615",
  phoneRaw: "+94777741615",
  phoneDisplay: "+94 77 774 1615",
  phoneTel: "tel:+94777741615",
  secondaryPhone: "+94 77 774 1615",
  whatsappNumber: "+94777741615",
  whatsappDisplay: "+94 77 774 1615",
  email: "kstourssrilanka@gmail.com",
  secondaryEmail: "info@kstourssrilanka.com",
  address: "No 66/1, Palangathure West, Kochchikade, Western Province, Sri Lanka",
  city: "Kochchikade / Negombo",
  country: "Sri Lanka",
  
  // Real founders / guides referenced by clients
  founders: "Kumar & Chathuranga (Chathu)",
  
  // Formspree integration endpoint
  formspreeEndpoint: "https://formspree.io/f/xyekware",
  
  // Real social & review listings from existing website
  tripAdvisorUrl: "https://www.tripadvisor.co.uk/Attraction_Review-g297897-d27714488-Reviews-Kumar_and_Sons_Tours_Sri_Lanka-Negombo_Western_Province.html",
  facebookUrl: "https://www.facebook.com/profile.php?id=61559690577480",
  instagramUrl: "https://www.instagram.com/ks_tours_srilanka",
  
  // Pending owner confirmation:
  companyRegistrationNumber: undefined as string | undefined,
  licenseNumber: undefined as string | undefined,
};

/**
 * Builds an authentic pre-populated WhatsApp message link.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const cleanNumber = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  if (customMessage === "") {
    return `https://wa.me/${cleanNumber}`;
  }
  const defaultMsg = "Hello Kumar & Sons Tours, I am interested in planning a tour in Sri Lanka. Could you please provide more information?";
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
}
