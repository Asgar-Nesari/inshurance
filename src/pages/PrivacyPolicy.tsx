import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  
  Phone,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
  Database,
  Users,
  Server,
  Fingerprint,
  Key,
  RefreshCw,
  BookOpen,
  Scale,
  FileCheck,
  Handshake,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────
const lastUpdated = "March 15, 2024";

const quickSummary = [
  {
    icon: <Lock className="w-5 h-5" />,
    text: "256-bit SSL Encryption",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    text: "No Data Selling",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: "IRDAI Compliant",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Key className="w-5 h-5" />,
    text: "Full Data Control",
    color: "bg-orange-50 text-orange-600",
  },
];

const policySections = [
  {
    id: "intro",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Introduction",
    description: "Our commitment to your privacy",
    content: `At ATT Insurance, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our services. By using our website and services, you agree to the collection and use of information in accordance with this policy.`,
    linear: "from-yellow-400 to-yellow-300",
    bgLight: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-600",
  },
  {
    id: "collection",
    icon: <Database className="w-6 h-6" />,
    title: "Information Collection",
    description: "What we collect and why",
    content: `We collect information to provide better services to all our users:`,
    points: [
      "Name, contact details (phone, email, address)",
      "Vehicle details (RC number, registration, make/model)",
      "Insurance history and policy documents",
      "Payment information (processed securely through partners)",
      "Aadhaar/PAN for verification (as required by IRDAI)",
      "Website usage data and cookies",
    ],
    linear: "from-blue-400 to-blue-300",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
  },
  {
    id: "usage",
    icon: <Server className="w-6 h-6" />,
    title: "How We Use Data",
    description: "Purpose of data collection",
    content: `Your information helps us serve you better:`,
    points: [
      "To provide insurance quotes and process policies",
      "To communicate about renewals and claims",
      "To improve our services and website experience",
      "To comply with IRDAI regulatory requirements",
      "To prevent fraud and ensure security",
      "To send important updates about your policy",
    ],
    linear: "from-green-400 to-green-300",
    bgLight: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
  },
  {
    id: "sharing",
    icon: <Users className="w-6 h-6" />,
    title: "Information Sharing",
    description: "When and with whom we share",
    content: `We share information only when necessary:`,
    points: [
      "With insurance partners to issue policies",
      "With IRDAI and regulatory authorities as required by law",
      "With claims surveyors for claim processing",
      "With payment gateways for transaction processing",
      "We NEVER sell your personal information",
      "We NEVER share with marketing companies",
    ],
    highlight: "We never sell your data to third parties",
    linear: "from-purple-400 to-purple-300",
    bgLight: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
  },
  {
    id: "security",
    icon: <Lock className="w-6 h-6" />,
    title: "Data Security",
    description: "How we protect your information",
    content: `Your data security is our priority:`,
    points: [
      "256-bit SSL encryption for all data transmission",
      "Regular security audits and updates",
      "Access restricted to authorized personnel only",
      "Secure data centers with 24/7 monitoring",
      "Regular backups to prevent data loss",
      "Compliance with Indian data protection laws",
    ],
    linear: "from-orange-400 to-orange-300",
    bgLight: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-600",
  },
  {
    id: "rights",
    icon: <Scale className="w-6 h-6" />,
    title: "Your Rights",
    description: "Control over your data",
    content: `You have complete control over your data:`,
    points: [
      "Access your personal information anytime",
      "Request corrections to your data",
      "Delete your account and data",
      "Opt-out of non-essential communications",
      "Download your data in portable format",
      "File complaints about data misuse",
    ],
    linear: "from-pink-400 to-pink-300",
    bgLight: "bg-pink-50",
    border: "border-pink-200",
    text: "text-pink-600",
  },
  {
    id: "cookies",
    icon: <Globe className="w-6 h-6" />,
    title: "Cookies & Tracking",
    description: "How we use cookies",
    content: `We use cookies to improve your experience:`,
    points: [
      "Essential cookies for website functionality",
      "Analytics cookies to improve our services",
      "Preference cookies to remember your settings",
      "No third-party marketing cookies",
      "You can disable cookies in browser settings",
      "Some features may be affected if disabled",
    ],
    linear: "from-cyan-400 to-cyan-300",
    bgLight: "bg-cyan-50",
    border: "border-cyan-200",
    text: "text-cyan-600",
  },
  {
    id: "updates",
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Policy Updates",
    description: "Changes to this policy",
    content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date. For significant changes, we may also notify you via email or SMS.`,
    linear: "from-yellow-400 to-yellow-300",
    bgLight: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-600",
  },
];

const trustBadges = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "IRDAI Certified",
    desc: "Authorized insurance agent",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "256-bit SSL",
    desc: "Enterprise-grade security",
  },
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Data Protection",
    desc: "Compliant with Indian laws",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Trust Score",
    desc: "4.9/5 from 1200+ clients",
  },
];

// ── Policy Card Component ─────────────────────────────────────────────────
const PolicyCard = ({
  section,
  index,
}: {
  section: (typeof policySections)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-xl"
      style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
    >
      {/* Header with linear */}
      <div className={`h-2 bg-linear-to-r ${section.linear}`} />

      <div className="p-8">
        {/* Icon and Title Row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 ${section.bgLight} rounded-2xl flex items-center justify-center ${section.text} group-hover:scale-110 transition-transform`}
            >
              {section.icon}
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-xl">
                {section.title}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                {section.description}
              </p>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-yellow-50 hover:border-yellow-400 transition-all duration-300 ${expanded ? "rotate-180" : ""}`}
          >
            <svg
              className={`w-5 h-5 ${expanded ? "text-yellow-500" : "text-slate-400"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Content (always visible) */}
        <p className="text-slate-600 leading-relaxed mb-4">{section.content}</p>

        {/* Points (expandable) */}
        {section.points && (
          <div
            className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-96" : "max-h-0"}`}
          >
            <div className="pt-4 border-t border-slate-100">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className={`w-5 h-5 ${section.text} flex mt-0.5`}
                    />
                    <span className="text-sm text-slate-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Highlight Message */}
        {section.highlight && expanded && (
          <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200 animate-fadeIn">
            <p className="text-sm text-yellow-700 font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {section.highlight}
            </p>
          </div>
        )}

        {/* Quick peek indicator */}
        {!expanded && section.points && (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-slate-400">
              Click to view details
            </span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        )}
      </div>
    </div>
  );
};

// ── Trust Badge Component ─────────────────────────────────────────────────
const TrustBadge = ({
  badge,
  index,
}: {
  badge: (typeof trustBadges)[0];
  index: number;
}) => {
  return (
    <div
      className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:-translate-y-1 transition-all duration-300 hover:border-yellow-400"
      style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.8}s both` }}
    >
      <div className="w-12 h-12 bg-yellow-100 rounded-xl  items-center justify-center text-yellow-600 flex">
        {badge.icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900">{badge.title}</h4>
        <p className="text-xs text-slate-500 mt-0.5">{badge.desc}</p>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────
const PrivacyPolicy = () => {
  return (
    <>
      {/* ═══════════════════════════  HERO SECTION  ══════════════════════════════ */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-linear-to-br from-slate-50 via-white to-yellow-50">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FACC15' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Your Data, Our Responsibility
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Your Privacy{" "}
              <span className="relative">
                <span className="text-yellow-500">Comes First</span>
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
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8">
              We're committed to protecting your personal information with
              enterprise-grade security and complete transparency about how we
              use your data.
            </p>

            {/* Last Updated */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-8">
              <Clock className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Summary Cards - Horizontal Scroll on Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {quickSummary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-3 hover:-translate-y-1 transition-all duration-300 hover:border-yellow-400"
              >
                <div
                  className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center `}
                >
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-slate-600">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  POLICY SECTIONS  ══════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <FileText className="w-4 h-4 inline mr-1" />
              Privacy Policy Details
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              How We Handle <span className="text-yellow-500">Your Data</span>
            </h2>
            <p className="text-slate-600">
              Every section of our privacy policy explained in simple, clear
              language
            </p>
          </div>

          {/* Policy Cards Grid */}
          <div className="space-y-6">
            {policySections.map((section, index) => (
              <PolicyCard key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  TRUST BADGES  ══════════════════════════════ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-3">
              Built on <span className="text-yellow-500">Trust & Security</span>
            </h2>
            <p className="text-slate-600">
              Your confidence in our data protection practices is backed by
              industry-standard certifications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={index} badge={badge} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  CONTACT SECTION  ══════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-yellow-400 to-yellow-300 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full -ml-10 -mb-10"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                  Have Privacy Questions?
                </h3>
                <p className="text-slate-800 max-w-md">
                  Our team is here to help. Contact us anytime and we'll respond
                  within 24 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
             
                <a
                  href="tel:+919730097448"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Tashrif
                </a>
                <a
                  href="tel:+917083786975"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Gouspak
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  DATA PROTECTION SUMMARY  ══════════════════════════════ */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-slate-600">
                256-bit SSL Encryption
              </span>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-slate-600">IRDAI Compliant</span>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-slate-600">Data Never Sold</span>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-slate-600">Full Data Control</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  CONSENT NOTICE  ══════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <FileCheck className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              Your Consent
            </h3>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              By using our website and services, you consent to our privacy
              policy and agree to its terms. If you have any concerns about how
              we handle your data, please{" "}
              <Link
                to="/contact"
                onClick={()=>scrollTo({top:0,behavior:"smooth"})}
                className="text-yellow-500 font-semibold hover:underline"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  CTA SECTION  ══════════════════════════════ */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Get <span className="text-yellow-400">Insured?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Get a free quote in under 5 minutes. No pressure, just honest
            advice.
          </p>
          <Link
            to="/contact"
            onClick={()=>scrollTo({top:0,behavior:"smooth"})}
            className="inline-flex items-center gap-3 bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-black text-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-slate-500 mt-4">
            By requesting a quote, you agree to our privacy policy
          </p>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default PrivacyPolicy;
