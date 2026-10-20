import React, { useState, useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { TOURS } from '../data/tours';
import { DAY_TOURS, DayTourPackage } from '../data/dayTours';
import { TourPackage } from '../types';
import { TourCard } from '../components/TourCard';
import { DayTourCard } from '../components/DayTourCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { EnquiryForm } from '../components/EnquiryForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { CustomerGallery } from '../components/CustomerGallery';
import { 
  ShieldCheck, 
  Compass, 
  Clock, 
  Heart, 
  Users, 
  Camera, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ToursListViewProps {
  onNavigate: (path: string) => void;
  defaultCategory?: string;
}

type CatalogItem =
  | { kind: 'multi-day'; data: TourPackage }
  | { kind: 'day-tour'; data: DayTourPackage };

export const ToursListView: React.FC<ToursListViewProps> = ({ onNavigate, defaultCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);

  useEffect(() => {
    setActiveCategory(defaultCategory);
  }, [defaultCategory]);

  const getPageMeta = () => {
    switch (activeCategory) {
      case 'day-tours':
        return {
          title: "Sri Lanka Day Tours & Private Excursions | KS Tours",
          desc: "Private single-day tours across Sri Lanka with chauffeur guide: Sigiriya, Kandy, Galle Fort, and Nuwara Eliya with hotel pickup from Colombo and Negombo.",
          canonical: "/day-tours/",
          h1: "Sri Lanka Day Tours & Private Excursions",
          sub: "Private single-day excursions with hotel pickup from Colombo, Negombo, or Kandy.",
          breadcrumb: [{ label: 'Tour Packages', path: '/sri-lanka-tours/' }, { label: 'Day Tours' }]
        };
      case 'honeymoon':
        return {
          title: "Sri Lanka Honeymoon Packages & Romantic Tours | KS Tours",
          desc: "Romantic Sri Lanka honeymoon packages tailored for couples. Private chauffeurs, boutique villas, scenic hill trains, and candlelight beach dinners.",
          canonical: "/sri-lanka-honeymoon/",
          h1: "Sri Lanka Honeymoon Packages & Romantic Tours",
          sub: "Romantic private journeys designed for two, blending misty Ceylon highlands, private safaris, and secluded tropical beaches.",
          breadcrumb: [{ label: 'Tour Packages', path: '/sri-lanka-tours/' }, { label: 'Honeymoon Tours' }]
        };
      case 'family':
        return {
          title: "Sri Lanka Family Tours & Holidays With Kids | KS Tours",
          desc: "Child-friendly Sri Lanka family holiday packages with private driver. Safe, flexible itineraries with elephant gatherings, tea hills, and relaxed beaches.",
          canonical: "/sri-lanka-family-tours/",
          h1: "Sri Lanka Family Tours & Holidays With Kids",
          sub: "Tailored private family holidays with spacious air-conditioned vans, patient local drivers, and unforgettable wildlife encounters.",
          breadcrumb: [{ label: 'Tour Packages', path: '/sri-lanka-tours/' }, { label: 'Family Tours' }]
        };
      case 'safari':
        return {
          title: "Sri Lanka Safari Tours & Wildlife Holidays | KS Tours",
          desc: "Private Sri Lanka wildlife safari tour packages. Track leopards in Yala, witness elephant gatherings in Minneriya, and explore Wilpattu with local guides.",
          canonical: "/sri-lanka-safari-tours/",
          h1: "Sri Lanka Wildlife Safari Tours & National Parks",
          sub: "Track Sri Lankan leopards, wild elephant gatherings, and sloth bears across premier national parks with expert private guides.",
          breadcrumb: [{ label: 'Tour Packages', path: '/sri-lanka-tours/' }, { label: 'Wildlife & Safari' }]
        };
      case 'classic':
        return {
          title: "Classic Sri Lanka Tours & Multi-Day Packages | KS Tours",
          desc: "Signature multi-day private journeys covering UNESCO cultural capitals, tea mountains, and tropical beaches with Kumar & Sons.",
          canonical: "/sri-lanka-tours/",
          h1: "Classic Sri Lanka Multi-Day Tours",
          sub: "Handcrafted 7 to 14 day private itineraries connecting ancient kingdoms, scenic hill trains, and coastal retreats.",
          breadcrumb: [{ label: 'Tour Packages', path: '/sri-lanka-tours/' }, { label: 'Classic Multi-Day' }]
        };
      default:
        return {
          title: "Sri Lanka Tour Packages & Private Tours | KS Tours",
          desc: "Handcrafted Sri Lanka tour packages, private guided holidays and tailor-made itineraries. Authentic cultural highlights, wildlife safaris & beach escapes.",
          canonical: "/sri-lanka-tours/",
          h1: "Sri Lanka Tour Packages & Private Itineraries",
          sub: "Explore our complete catalogue of private multi-day itineraries and single-day excursions across ancient kingdoms, misty tea hills, wild safaris, and tropical beaches.",
          breadcrumb: [{ label: 'Tour Packages' }]
        };
    }
  };

  const meta = getPageMeta();

  const getCategoryDetails = () => {
    switch (activeCategory) {
      case 'honeymoon':
        return {
          badge: "Romantic Sri Lanka Holidays",
          introTitle: "Why Choose a Private Sri Lanka Honeymoon with Kumar & Sons?",
          introText: "Your honeymoon in Sri Lanka should be relaxed, intimate, and free from group tour constraints. With your dedicated private vehicle and chauffeur guide, you set the daily rhythm — whether waking early for a misty mountain sunrise over Ella Rock or enjoying leisurely breakfasts overlooking private tropical gardens. We hand-select romantic boutique villas, arrange scenic reserved train rides through high-grown tea country, coordinate sunset wildlife game drives, and reserve tranquil Indian Ocean beachfront stays.",
          faqs: [
            {
              question: "Why choose a private tour for our Sri Lanka honeymoon?",
              answer: "A private tour ensures complete privacy, intimacy, and schedule flexibility. Unlike rigid bus tours, you are never rushed; you can stop at panoramic viewpoints, enjoy private candlelit dinners, and adjust daily departures to suit your preferred pace."
            },
            {
              question: "Can we include romantic boutique hotels and tea bungalows?",
              answer: "Yes! We specialize in curating boutique heritage properties, colonial tea plantation planter's bungalows in Nuwara Eliya, luxury safari tented camps near Yala, and secluded beachfront suites along the southern coastline."
            },
            {
              question: "What is the best time of year for a Sri Lanka honeymoon?",
              answer: "Sri Lanka has two distinct weather zones, meaning there is ideal honeymoon weather all year round. From December to April, the south and west coast beaches (Bentota, Galle, Mirissa, Tangalle) and the central hills are sunny and warm. From May to September, the eastern coastline (Trincomalee, Passikudah) enjoys calm turquoise waters and bright sunshine."
            },
            {
              question: "Can we combine cultural sightseeing, safari drives, and beach relaxation?",
              answer: "Yes, our classic honeymoon routes typically dedicate the first 5 to 7 days to ancient UNESCO citadels, scenic mountain rail journeys, and private leopard or elephant safaris, followed by 3 to 5 leisurely days relaxing together beside the ocean."
            }
          ]
        };
      case 'family':
        return {
          badge: "Family Travel with Children",
          introTitle: "Child-Friendly, Relaxed Sri Lanka Family Holidays",
          introText: "Exploring Sri Lanka as a family is an enriching adventure for all ages. From watching wild elephant herds bathe in jungle rivers to spotting sea turtles on tropical beaches and riding vintage blue trains through mist-wrapped hills, children and parents alike fall in love with the island. We provide spacious air-conditioned passenger vans with generous luggage space, patient local drivers who prioritize safety, and itineraries structured around sensible driving times with frequent refreshing stops.",
          faqs: [
            {
              question: "Is Sri Lanka a safe, enjoyable destination for family holidays?",
              answer: "Sri Lanka is exceptionally welcoming to families. Local hospitality is warm and caring toward children, travel distances between key highlights are manageable, and there is a diverse mix of hands-on wildlife, beach, and cultural experiences that keep kids engaged."
            },
            {
              question: "What vehicle do you provide for family tour groups?",
              answer: "For families of 3 to 8 travelers, we deploy spacious, late-model Toyota KDH or HiAce passenger touring vans featuring high roofs, dual-zone climate control, reclining seats, generous luggage capacity, and child safety booster seats upon advance request."
            },
            {
              question: "How do you ensure the tour pace is comfortable for children?",
              answer: "We intentionally avoid long continuous driving stretches by scheduling scenic comfort stops (fresh coconut stalls, waterfalls, spice gardens), planning wildlife safaris during cooler morning or late afternoon hours, and recommending multi-night hotel bases so families aren't repacking every day."
            },
            {
              question: "What are the most popular activities for kids on our tours?",
              answer: "Universally loved family highlights include the Minneriya wild elephant gathering, swimming in calm lagoons at Bentota and Unawatuna, visiting sea turtle conservation hatcheries, riding the scenic highland train, and exploring the 5th-century Sigiriya water gardens."
            }
          ]
        };
      case 'safari':
        return {
          badge: "Big Game Wildlife Encounters",
          introTitle: "Private Sri Lanka Wildlife Safaris & National Park Game Drives",
          introText: "Sri Lanka is widely celebrated as the biodiversity jewel of Asia, boasting one of the planet's highest densities of leopards, the monumental annual Gathering of hundreds of wild elephants, elusive sloth bears, and blue whales along the southern continental shelf. Our private safari packages combine dedicated private transport between parks, private 4x4 game jeeps with seasoned local trackers, and strategically located wildlife lodges.",
          faqs: [
            {
              question: "Which national parks are best for spotting wildlife in Sri Lanka?",
              answer: "Yala National Park and Wilpattu are premier destinations for spotting Sri Lankan leopards and sloth bears; Minneriya and Kaudulla host the seasonal gathering of up to 300 wild elephants; and Udawalawe guarantees close-up sightings of wild elephant herds year-round."
            },
            {
              question: "Are your 4x4 safari jeep drives private or shared with strangers?",
              answer: "Every game drive organized by Kumar & Sons is 100% private. You have an exclusive 4x4 safari jeep with a dedicated park tracker and your chauffeur guide, ensuring unobstructed photography angles and the freedom to pause wherever wildlife appears."
            },
            {
              question: "When is the best season for wildlife safaris in Sri Lanka?",
              answer: "February to July is prime dry season in Yala and Wilpattu as animals frequent drying waterholes. July to October is the peak window for the Minneriya Elephant Gathering. Udawalawe offers outstanding elephant sightings in all 12 months."
            },
            {
              question: "Can we combine a wildlife safari tour with cultural sites and beaches?",
              answer: "Yes, our wildlife itineraries seamlessly integrate UNESCO World Heritage sites in the Cultural Triangle, highland tea estates, and coastal beach stays in Mirissa or Tangalle."
            }
          ]
        };
      case 'day-tours':
        return {
          badge: "Door-to-Door Private Day Trips",
          introTitle: "Private Full-Day Excursions with Dedicated Chauffeur Guide",
          introText: "If you have limited time or prefer staying at a single beach or city resort, our private day tours offer convenient door-to-door exploration. Your personal English-speaking driver picks you up directly from your hotel lobby in Colombo, Negombo, or Kandy, navigates expressway tolls and mountain roads safely, and guides you through Sri Lanka's greatest cultural citadels, national parks, and colonial forts before returning you comfortably in the evening.",
          faqs: [
            {
              question: "Where do your day tour pickups operate from?",
              answer: "We offer door-to-door morning pickup and evening drop-off from any hotel, villa, or residence in Colombo, Negombo, or Kandy, as well as direct pickups from Bandaranaike International Airport."
            },
            {
              question: "Can we adjust our day trip itinerary on the morning of departure?",
              answer: "Yes! Because every excursion is strictly private, you can request extra photo stops, spend more time at a particular temple or viewpoint, or pause for traditional clay-pot village lunches whenever you wish."
            },
            {
              question: "What is included in the day tour quote?",
              answer: "Our day tour rates cover the private air-conditioned vehicle, fuel, highway expressway tolls, vehicle parking fees, and driver-guide service with zero hidden fees."
            },
            {
              question: "How do we confirm a day tour booking?",
              answer: "Simply message us on WhatsApp (+94 77 774 1615) with your date and hotel location. We confirm availability and vehicle allocation promptly."
            }
          ]
        };
      default:
        return {
          badge: "100% Private Guided Holidays",
          introTitle: "Authentic Private Sri Lanka Tour Packages Crafted by Local Experts",
          introText: "Every tour package operated by Kumar & Sons is 100% private and tailored to your travel dates, party size, and personal interests. With nearly four decades of hands-on experience guiding international travelers across Sri Lanka, we provide clean, modern air-conditioned sedans and passenger touring vans, experienced English-speaking chauffeur guides, and complete freedom over your daily schedule. From ancient UNESCO kingdoms and scenic mountain rail journeys to wild elephant safaris and tranquil golden coastlines, discover the real Sri Lanka with a trusted family team.",
          faqs: [
            {
              question: "Are all Kumar & Sons tour packages strictly private?",
              answer: "Yes. Every tour is 100% private for you and your travel companions. You will never be joined by strangers or placed on large group tour buses."
            },
            {
              question: "Can any multi-day itinerary be customized or extended?",
              answer: "Absolutely. All our published itineraries serve as flexible frameworks. You can adjust the duration, upgrade hotels, add extra beach rest days, or include specialized activities like whale watching or cooking classes."
            },
            {
              question: "What is included with your private chauffeur guide service?",
              answer: "Our package rates include a dedicated air-conditioned vehicle, fuel, all highway expressway tolls, parking fees, and full accommodation and meals for your driver-guide. There are zero hidden surprises or forced commercial shopping stops."
            },
            {
              question: "How do we book and confirm our tour?",
              answer: "Submit an enquiry form or message us directly on WhatsApp (+94 77 774 1615). We provide a detailed day-by-day itinerary proposal and clear quotation with no obligation."
            }
          ]
        };
    }
  };

  const categoryDetails = getCategoryDetails();

  useSEO({
    title: meta.title,
    description: meta.desc,
    canonicalPath: meta.canonical,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: meta.h1,
      description: meta.desc,
      url: `https://www.kstourssrilanka.com${meta.canonical}`
    }
  });

  const filterTabs = [
    { id: 'all', label: 'All Tours', icon: Compass },
    { id: 'day-tours', label: 'Day Tours', icon: Clock },
    { id: 'honeymoon', label: 'Honeymoon', icon: Heart },
    { id: 'family', label: 'Family', icon: Users },
    { id: 'safari', label: 'Wildlife & Safari', icon: Camera },
    { id: 'classic', label: 'Classic Multi-Day', icon: Sparkles }
  ];

  // Strictly exclude promotional tailor-made card from normal tour listing
  const realMultiDayTours = TOURS.filter(
    (tour) => tour.id !== 'tour-tailor-made' && tour.category !== 'tailor-made' && tour.slug !== 'tailor-made-sri-lanka-tours'
  );

  // Programmatically build combined catalogue without duplicating data
  const combinedCatalogue: CatalogItem[] = (() => {
    if (activeCategory === 'day-tours') {
      return DAY_TOURS.map((dt) => ({ kind: 'day-tour', data: dt }));
    }
    if (activeCategory === 'honeymoon') {
      return realMultiDayTours
        .filter((t) => t.category === 'honeymoon')
        .map((t) => ({ kind: 'multi-day', data: t }));
    }
    if (activeCategory === 'family') {
      return realMultiDayTours
        .filter((t) => t.category === 'family')
        .map((t) => ({ kind: 'multi-day', data: t }));
    }
    if (activeCategory === 'safari') {
      return realMultiDayTours
        .filter((t) => t.category === 'safari')
        .map((t) => ({ kind: 'multi-day', data: t }));
    }
    if (activeCategory === 'classic') {
      return realMultiDayTours
        .filter((t) => t.category === 'classic')
        .map((t) => ({ kind: 'multi-day', data: t }));
    }
    // "all" = EVERY TOUR LISTED ON THE WEBSITE (All Multi-Day Tours + All Day Tours)
    return [
      ...realMultiDayTours.map((t) => ({ kind: 'multi-day' as const, data: t })),
      ...DAY_TOURS.map((dt) => ({ kind: 'day-tour' as const, data: dt }))
    ];
  })();

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title={meta.h1}
        subtitle={meta.sub}
        badge="100% Private Guided · Nearly 40 Years Experience"
        breadcrumbs={meta.breadcrumb}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">

        {/* Modern Filter Controls */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 pt-2">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#0D7C78] text-white shadow-md'
                    : 'bg-white text-neutral-700 border border-neutral-200/80 hover:bg-neutral-50 hover:border-neutral-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0D7C78]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Informative Overview Card */}
        <section className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl space-y-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D7C78] bg-[#0D7C78]/10 border border-[#0D7C78]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#0D7C78]" />
              <span>{categoryDetails.badge}</span>
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
              {categoryDetails.introTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {categoryDetails.introText}
            </p>
          </div>
        </section>

        {/* Combined Tour Catalogue Display */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900">
                {activeCategory === 'all'
                  ? 'All Sri Lanka Tours & Day Excursions'
                  : activeCategory === 'day-tours'
                  ? 'Private Day Tours & Excursions'
                  : meta.h1}
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                {activeCategory === 'all'
                  ? 'Complete catalogue combining private multi-day itineraries and single-day excursions.'
                  : activeCategory === 'day-tours'
                  ? 'Full-day private itineraries with door-to-door hotel pickup.'
                  : '100% private guided itineraries with dedicated vehicle and personal chauffeur.'}
              </p>
            </div>
            <span className="text-xs font-semibold text-neutral-500 bg-neutral-200/60 px-3 py-1 rounded-full">
              {combinedCatalogue.length} {activeCategory === 'day-tours' ? 'Excursions' : activeCategory === 'all' ? 'Tours & Excursions' : 'Packages'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {combinedCatalogue.map((catItem) =>
              catItem.kind === 'multi-day' ? (
                <TourCard key={catItem.data.id} tour={catItem.data} onNavigate={onNavigate} />
              ) : (
                <DayTourCard key={catItem.data.id} tour={catItem.data} onNavigate={onNavigate} />
              )
            )}
          </div>
        </div>

        {/* "CREATE YOUR TOUR" Prominent CTA Banner */}
        <section className="bg-gradient-to-br from-[#0C1519] via-[#142228] to-[#0D7C78]/80 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#F4CA26]">
              <Sparkles className="w-3.5 h-3.5 text-[#F4CA26]" />
              <span>100% Custom Private Holidays</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Looking for a Tailor-Made Itinerary?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Every journey with Kumar &amp; Sons is completely private and customizable. Choose your own pace, handpick your destinations, and let our local specialists design a personalized Sri Lanka holiday.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold text-neutral-900 bg-[#F4CA26] hover:bg-[#e5bc1f] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-102 cursor-pointer uppercase tracking-wider"
            >
              <Compass className="w-5 h-5 text-neutral-900" />
              <span>CREATE YOUR TOUR</span>
              <ArrowRight className="w-4 h-4 text-neutral-900" />
            </button>
          </div>
        </section>

        {/* Real Customer Photographs On Tour */}
        <CustomerGallery onNavigate={onNavigate} />

        {/* Frequently Asked Questions */}
        <section className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
              Planning Your Trip
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
              Frequently Asked Questions About Our Tours
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Everything you need to know about booking private tours with Kumar &amp; Sons.
            </p>
          </div>

          <FAQAccordion faqs={categoryDetails.faqs} />
        </section>

        {/* Embedded Enquiry Form */}
        <section id="tour-enquiry" className="pt-4">
          <EnquiryForm
            title="Design Your Custom Sri Lanka Itinerary"
            subtitle="Share your desired travel dates and preferences. Kumar & Chathu will craft a custom day-by-day schedule with transparent pricing."
          />
        </section>

      </div>
    </div>
  );
};

