import {
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ArrowRight,
  Star,
  Zap,
  Award,
  Users,
  ThumbsUp,
  Heart,
  Globe,
  Target,
  BookOpen,
} from "lucide-react";
import tashrif from "@/assets/images/tashrif.jpeg";
import gouspak from "@/assets/images/gouswhite.jpeg";

// ── Data ──────────────────────────────────────────────────────────────────
const teamMembers = [
  {
    id: "tasrif",
    name: "Tashrif Chadedar",
    role: "Founder & Senior Insurance Advisor",
    experience: "5+ Years",
    expertise: ["Commercial Vehicles", "Fleet Insurance", "Claims Specialist"],
    phone: "+91 9730097448",
    whatsapp: "919730097448",
    image: tashrif, // Replace with actual image
    stats: { clients: "3200+", policies: "4500+", satisfaction: "98%" },
    bio: "Expert in vehicle insurance with a passion for helping clients find the perfect coverage.",
    languages: ["English", "Marathi", "Hindi"],
    availability: "Mon-Sat, 9AM-7PM",
  },
  {
    id: "gouspak",
    name: "Gouspak Chadedar",
    role: "Co-founder & Claims Consultant",
    experience: "3+ Years",
    expertise: [
      "Two-Wheeler",
      "Car Insurance",
      "Claim Processing",
      "All types of vehicles",
    ],
    phone: "+91 7083786975",
    whatsapp: "917083786975",
    image: gouspak, // Replace with actual image
    stats: { clients: "2100+", policies: "3800+", satisfaction: "97%" },
    bio: "Specializes in quick claim settlements and personal vehicle coverage.",
    languages: ["English", "Marathi", "Hindi"],
    availability: "Mon-Sat, 9AM-7PM",
  },
];

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Call Us",
    primary: "+91 9730097448",
    sub: "Direct line to advisors",
    href: "tel:+919730097448",
    cta: "Call Now",
    bg: "#0F172A",
    iconBg: "rgba(250,204,21,0.15)",
    iconColor: "#FACC15",
    textColor: "#FFFFFF",
    subColor: "rgba(255,255,255,0.5)",
    badge: "Fastest Response",
    badgeBg: "rgba(250,204,21,0.15)",
    badgeColor: "#FACC15",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: "WhatsApp",
    primary: "+91 9730097448",
    sub: "Usually replies in minutes",
    href: "https://wa.me/919730097448",
    cta: "Chat Now",
    bg: "#25D366",
    iconBg: "rgba(255,255,255,0.2)",
    iconColor: "#FFFFFF",
    textColor: "#FFFFFF",
    subColor: "rgba(255,255,255,0.7)",
    badge: "Recommended",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeColor: "#FFFFFF",
    external: true,
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Call Us",
    primary: "+91 7083786975",
    sub: "Direct line to advisors",
    href: "tel:+917083786975",
    cta: "Call Now",
    bg: "#0F172A",
    iconBg: "rgba(250,204,21,0.15)",
    iconColor: "#FACC15",
    textColor: "#FFFFFF",
    subColor: "rgba(255,255,255,0.5)",
    badge: "Fastest Response",
    badgeBg: "rgba(250,204,21,0.15)",
    badgeColor: "#FACC15",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: "WhatsApp",
    primary: "+91 7083786975",
    sub: "Usually replies in minutes",
    href: "https://wa.me/917083786975",
    cta: "Chat Now",
    bg: "#25D366",
    iconBg: "rgba(255,255,255,0.2)",
    iconColor: "#FFFFFF",
    textColor: "#FFFFFF",
    subColor: "rgba(255,255,255,0.7)",
    badge: "Recommended",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeColor: "#FFFFFF",
    external: true,
  },
];

const officeHours = [
  {
    day: "Monday – Friday",
    time: "9:00 AM – 9:00 PM",
    advisor1: true,
    advisor2: true,
  },
  {
    day: "Saturday",
    time: "9:00 AM – 5:00 PM",
    advisor1: true,
    advisor2: false,
  },
  {
    day: "Sunday",
    time: "Emergency Only",
    advisor1: "WhatsApp",
    advisor2: "WhatsApp",
  },
];

const services = [
  { icon: "🏍️", name: "Bike Insurance", time: "3 mins", expert: "Gouspak" },
  { icon: "🚗", name: "Car Insurance", time: "5 mins", expert: "Both" },
  { icon: "🚜", name: "Tractor Insurance", time: "7 mins", expert: "Tashrif" },
  {
    icon: "🚛",
    name: "Commercial Vehicle",
    time: "10 mins",
    expert: "Tashrif",
  },
  { icon: "🛺", name: "Three-Wheeler", time: "5 mins", expert: "Gouspak" },
  { icon: "⚡", name: "Electric Vehicle", time: "4 mins", expert: "Both" },
];

const testimonials = [
  {
    text: "Tashrif helped me get my truck insured at the best rate. Very professional!",
    author: "Rajesh Patil",
    vehicle: "Truck Owner",
    rating: 5,
    expert: "Tashrif",
  },
  {
    text: "Gouspak processed my bike claim in just 2 days. Amazing service!",
    author: "Sneha Kulkarni",
    vehicle: "Bike Owner",
    rating: 5,
    expert: "Gouspak",
  },
];

const achievements = [
  {
    icon: <Award className="w-5 h-5" />,
    value: "5000+",
    label: "Vehicles Insured",
  },
  {
    icon: <Users className="w-5 h-5" />,
    value: "3500+",
    label: "Happy Clients",
  },
  {
    icon: <ThumbsUp className="w-5 h-5" />,
    value: "98%",
    label: "Satisfaction",
  },
  { icon: <Zap className="w-5 h-5" />, value: "5 min", label: "Avg. Response" },
];

const faqs = [
  {
    q: "How fast can I get a quote?",
    a: "Call or WhatsApp either advisor — get a personalized quote in under 3 minutes.",
    expert: "Both",
  },
  {
    q: "Do you offer doorstep service?",
    a: "Yes! Both Tashrif and Gouspak provide free doorstep service across Gadhinglaj taluka.",
    expert: "Both",
  },
];

// ── Component ─────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <>
      {/* ═══════════════════════════  HERO SECTION  ══════════════════════════════ */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FACC15' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Get Expert Advice From{" "}
              <span className="relative">
                <span className="text-yellow-400">Both Founders</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 300 8"
                >
                  <path
                    d="M0 6 Q150 0 300 6"
                    stroke="#FACC15"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h1>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {achievements.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="text-yellow-400 mb-2">{stat.icon}</div>
                  <div className="font-black text-white text-xl">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members Cards - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:transform hover:scale-105 transition-all duration-500"
              >
                {/* Background linear */}
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Profile Image with Lottie overlay */}
                    <div className="relative flex">
                      <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                        <div className="relative">
                          <span className="absolute inset-0 rounded-xl bg-green-400 animate-ping"></span>
                          <span className="relative">Online</span>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-yellow-400 text-sm font-semibold mb-2">
                        {member.role}
                      </p>
                      <p className="text-slate-400 text-sm mb-3">
                        {member.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.expertise.map((exp, i) => (
                          <span
                            key={i}
                            className="bg-slate-800 text-slate-300 px-2 py-1 rounded-lg text-xs"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>

                      {/* Languages */}
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Globe className="w-3 h-3" />
                        {member.languages.join(" • ")}
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {Object.entries(member.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-slate-800/50 rounded-xl p-3 text-center"
                      >
                        <div className="font-black text-white text-lg">
                          {value}
                        </div>
                        <div className="text-slate-500 text-xs capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Buttons */}
                  {/* Contact Buttons - Completely Fixed with Debug */}
                  <div
                    className="grid grid-cols-2 gap-3 mt-4 relative"
                    style={{ zIndex: 20 }}
                  >
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      style={{
                        pointerEvents: "auto",
                        position: "relative",
                        zIndex: 30,
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Force navigation
                        window.location.href = `tel:${member.phone.replace(/\s/g, "")}`;

                        return false;
                      }}
                    >
                      <Phone className="w-4 h-4" />
                      Call {member.name.split(" ")[0]}
                    </a>

                    <a
                      href={`https://wa.me/${member.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      style={{
                        pointerEvents: "auto",
                        position: "relative",
                        zIndex: 30,
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        // Force open in new tab
                        window.open(
                          `https://wa.me/${member.whatsapp}`,
                          "_blank",
                          "noopener,noreferrer",
                        );

                        return false;
                      }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>

                  {/* Availability */}
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3" />
                      {member.availability}
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <BookOpen className="w-3 h-3" />
                      Exp: {member.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════  CONTACT METHODS SECTION  ═══════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Target className="w-4 h-4" />
              Multiple Ways to Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Choose How You Want to{" "}
              <span className="text-yellow-500">Reach Us</span>
            </h2>
            <p className="text-lg text-slate-600">
              Both advisors are available via your preferred channel
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group relative rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500"
                style={{ backgroundColor: method.bg }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-white/5 to-transparent rounded-bl-full"></div>

                {method.badge && (
                  <div
                    className="absolute top-4 right-4 text-xs font-black px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: method.badgeBg,
                      color: method.badgeColor,
                    }}
                  >
                    {method.badge}
                  </div>
                )}

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: method.iconBg,
                    color: method.iconColor,
                  }}
                >
                  {method.icon}
                </div>

                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: method.textColor }}
                >
                  {method.label}
                </h3>

                <div className="space-y-2 mb-4">
                  <p
                    className="font-black text-lg break-all"
                    style={{ color: method.textColor }}
                  >
                    {method.primary}
                  </p>
                 
                </div>

                <p className="text-sm mb-6" style={{ color: method.subColor }}>
                  {method.sub}
                </p>

                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{
                    borderColor:
                      method.bg === "#FFFFFF"
                        ? "#E2E8F0"
                        : "rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="font-bold text-sm"
                    style={{ color: method.textColor }}
                  >
                    {method.cta}
                  </span>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center group-hover:translate-x-1 transition-transform"
                    style={{
                      backgroundColor:
                        method.bg === "#FFFFFF"
                          ? "#FEF9C3"
                          : "rgba(255,255,255,0.2)",
                      color:
                        method.bg === "#FFFFFF" ? "#CA8A04" : method.textColor,
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Address Card */}
          <a
            href="https://maps.app.goo.gl/uBdyZPab7LMx255N8"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative bg-linear-to-r from-yellow-400 to-yellow-300 p-8">
              <div className="absolute inset-0 bg-black/5"></div>
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-2xl">
                      Visit Our Office
                    </h3>
                    <p className="text-slate-800 text-lg">
                      AT Terani – 416506, Hatargi Road, Gadhinglaj
                    </p>
                    <p className="text-slate-700">
                      Tal Gadhinglaj, Dist Kolhapur, Maharashtra
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-900 text-yellow-400 px-6 py-3 rounded-xl font-bold group-hover:translate-x-2 transition-transform">
                    Open in Maps <ArrowRight className="w-4 h-4 inline ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ═══════════════════  SERVICES SECTION  ═══════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              Quick Quote Service
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              What Would You Like to{" "}
              <span className="text-yellow-500">Insure?</span>
            </h2>
            <p className="text-slate-600">
              Select your vehicle and get instant expert assistance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-slate-100 hover:border-yellow-400"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-400 mb-2">~{service.time}</p>
                <div className="text-xs font-semibold text-yellow-600 bg-yellow-50 py-1 px-2 rounded-full inline-block">
                  {service.expert}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════  OFFICE HOURS + FAQ  ═══════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden">
              <div className="bg-slate-900 p-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl">
                      Office Hours
                    </h3>
                    <p className="text-slate-400 text-sm">
                      When each advisor is available
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {officeHours.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 border-b border-slate-200 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${row.advisor1 ? "bg-green-500" : "bg-red-400"}`}
                      ></div>
                      <span className="font-medium text-slate-700">
                        {row.day}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{row.time}</div>
                      <div className="text-xs text-slate-500">
                        {row.advisor1 && (
                          <span className="text-green-600">Tashrif </span>
                        )}
                        {row.advisor2 && (
                          <span className="text-blue-600">Gouspak</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Heart className="w-4 h-4" />
                  Quick Answers
                </div>
                <h3 className="text-3xl font-black text-slate-900">
                  Frequently Asked{" "}
                  <span className="text-yellow-500">Questions</span>
                </h3>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-2xl p-6 hover:bg-yellow-50 transition-colors duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-xl flex items-center justify-center font-bold text-slate-900 ">
                        Q
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-2">{faq.q}</p>
                        <p className="text-slate-600 text-sm mb-2">{faq.a}</p>
                        <span className="inline-block text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                          Expert: {faq.expert}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════  TESTIMONIALS  ═══════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              Client Testimonials
            </div>
            <h2 className="text-4xl font-black text-slate-900">
              What Our <span className="text-yellow-500">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 relative">
                <div className="absolute top-4 right-4 text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-slate-900 font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.vehicle}
                    </p>
                  </div>
                  <div className="ml-auto text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                    Helped by {testimonial.expert}
                  </div>
                </div>
                <p className="text-slate-600">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════  FINAL CTA  ═══════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-200"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900/10 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Two Experts, One Mission
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Ready to Get Covered?
          </h2>

          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Connect with Tashrif or Gouspak right now. Get your quote in under 5
            minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919730097448"
              className="group bg-slate-900 text-yellow-400 px-8 py-4 rounded-xl font-black text-lg hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Tashrif
              <span className="text-sm text-white group-hover:text-slate-400">
                (5+ yrs exp)
              </span>
            </a>

            <a
              href="https://wa.me/917083786975"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Gouspak
              <span className="text-sm text-green-200">(Claims expert)</span>
            </a>
          </div>

          <p className="text-slate-700 text-sm mt-6 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            AT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur, Hatargi Road
          </p>
        </div>
      </section>
    </>
  );
}
