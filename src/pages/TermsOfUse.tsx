import { Link } from "react-router-dom";
import {
  FileText,
  Scale,
  Gavel,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Users,
  Globe,
  Lock,
  BookOpen,
  ScrollText,
  Handshake,
  AlertTriangle,
  Info,
  XCircle,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────
const lastUpdated = "March 15, 2024";

const quickSummary = [
  {
    icon: <Scale className="w-5 h-5" />,
    text: "Acceptance of Terms",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: "User Responsibilities",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    text: "Account Security",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Gavel className="w-5 h-5" />,
    text: "Legal Compliance",
    color: "bg-orange-50 text-orange-600",
  },
];

const termsSections = [
  {
    id: "acceptance",
    icon: <Handshake className="w-6 h-6" />,
    title: "Acceptance of Terms",
    description: "By using our services, you agree to these terms",
    content: `By accessing or using the ATT Insurance website and services, you agree to be bound by these Terms of Use. If you do not agree to all of these terms, please do not use our services. These terms constitute a legally binding agreement between you and ATT Insurance.`,
    points: [
      "You must be at least 18 years old to use our services",
      "You agree to provide accurate and complete information",
      "You accept responsibility for all activities under your account",
      "We may update these terms with prior notice",
    ],
    linear: "from-yellow-400 to-yellow-300",
    bgLight: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-600",
    iconBg: "bg-yellow-100",
  },
  {
    id: "services",
    icon: <Shield className="w-6 h-6" />,
    title: "Insurance Services",
    description: "What we offer and how it works",
    content: `ATT Insurance provides vehicle insurance advisory and policy issuance services through our authorized partnerships with IRDAI-approved insurance companies.`,
    points: [
      "We act as authorized agents for multiple insurance providers",
      "Policies are issued by the respective insurance companies",
      "Coverage is subject to terms of the actual policy document",
      "Premiums are determined by the insurer's underwriting guidelines",
      "We facilitate claims but do not guarantee claim approval",
      "Policy issuance is subject to verification of documents",
    ],
    linear: "from-blue-400 to-blue-300",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: "user-responsibilities",
    icon: <Users className="w-6 h-6" />,
    title: "User Responsibilities",
    description: "Your obligations when using our services",
    content: `To ensure smooth service delivery, you agree to:`,
    points: [
      "Provide accurate, current, and complete information",
      "Maintain the security of your account credentials",
      "Notify us immediately of any unauthorized use",
      "Comply with all applicable laws and regulations",
      "Not misuse or attempt to circumvent our systems",
      "Pay all applicable premiums and fees on time",
    ],
    linear: "from-green-400 to-green-300",
    bgLight: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    id: "account-terms",
    icon: <Lock className="w-6 h-6" />,
    title: "Account Terms",
    description: "Creating and managing your account",
    content: `When you create an account with us, you guarantee that:`,
    points: [
      "You are legally capable of entering into binding contracts",
      "All registration information is truthful and accurate",
      "You will maintain the accuracy of your information",
      "You are responsible for all activities under your account",
      "We may suspend or terminate accounts for violations",
      "You can delete your account anytime by contacting us",
    ],
    highlight: "Keep your login credentials secure. Never share your password.",
    linear: "from-purple-400 to-purple-300",
    bgLight: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    id: "payments",
    icon: <Scale className="w-6 h-6" />,
    title: "Payments & Fees",
    description: "Premium payments and refunds",
    content: `All payments for insurance policies are processed securely through our payment partners.`,
    points: [
      "Premiums are non-refundable once policy is issued",
      "Free-look period: 15 days to cancel for full refund",
      "Payment confirmation is sent via email and SMS",
      "We accept UPI, cards, netbanking, and cash at office",
      "EMI options available for eligible policies",
      "All prices are inclusive of applicable taxes",
    ],
    linear: "from-orange-400 to-orange-300",
    bgLight: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  {
    id: "intellectual-property",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Intellectual Property",
    description: "Ownership of content and materials",
    content: `All content on our website, including text, graphics, logos, and software, is the property of ATT Insurance or its content suppliers and is protected by Indian copyright laws.`,
    points: [
      "You may not copy, modify, or distribute our content",
      "Our name and logo may not be used without permission",
      "User-generated content remains your property",
      "You grant us license to use feedback for improvements",
      "All rights not expressly granted are reserved",
    ],
    linear: "from-pink-400 to-pink-300",
    bgLight: "bg-pink-50",
    border: "border-pink-200",
    text: "text-pink-600",
    iconBg: "bg-pink-100",
  },
  {
    id: "prohibited-uses",
    icon: <XCircle className="w-6 h-6" />,
    title: "Prohibited Uses",
    description: "Actions not permitted on our platform",
    content: `You agree not to engage in any of the following prohibited activities:`,
    points: [
      "Providing false or misleading information",
      "Attempting to gain unauthorized access to our systems",
      "Interfering with the proper functioning of our services",
      "Using our services for any illegal purpose",
      "Impersonating any person or entity",
      "Harassing, abusing, or harming others",
      "Uploading viruses or malicious code",
      "Scraping or data mining our website",
    ],
    warning: true,
    linear: "from-red-400 to-red-300",
    bgLight: "bg-red-50",
    border: "border-red-200",
    text: "text-red-600",
    iconBg: "bg-red-100",
  },
  {
    id: "disclaimers",
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Disclaimers",
    description: "Limitations of liability",
    content: `Our services are provided "as is" without any warranties, express or implied.`,
    points: [
      "We do not guarantee uninterrupted or error-free service",
      "Insurance approval is at sole discretion of insurers",
      "We are not liable for insurer's claim decisions",
      "Information provided is for guidance only",
      "Market-linked premiums may change without notice",
      "We are not responsible for third-party website content",
    ],
    linear: "from-amber-400 to-amber-300",
    bgLight: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    id: "limitation-liability",
    icon: <Gavel className="w-6 h-6" />,
    title: "Limitation of Liability",
    description: "Extent of our legal responsibility",
    content: `To the maximum extent permitted by law, ATT Insurance shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.`,
    points: [
      "Maximum liability limited to premiums paid",
      "Not liable for delays due to force majeure",
      "Not responsible for insurer claim decisions",
      "Not liable for unauthorized account access",
      "Not liable for third-party actions",
    ],
    highlight:
      "Your sole remedy for dissatisfaction is to stop using our services.",
    linear: "from-indigo-400 to-indigo-300",
    bgLight: "bg-indigo-50",
    border: "border-indigo-200",
    text: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
  {
    id: "indemnification",
    icon: <Shield className="w-6 h-6" />,
    title: "Indemnification",
    description: "Your agreement to protect us from claims",
    content: `You agree to indemnify and hold harmless ATT Insurance, its employees, and agents from any claims, damages, or expenses arising from your violation of these terms or applicable laws.`,
    points: [
      "Claims arising from your content or actions",
      "Breach of these terms or representations",
      "Violation of any third-party rights",
      "Unauthorized use of our services",
    ],
    linear: "from-teal-400 to-teal-300",
    bgLight: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-600",
    iconBg: "bg-teal-100",
  },
  {
    id: "governing-law",
    icon: <Globe className="w-6 h-6" />,
    title: "Governing Law",
    description: "Legal jurisdiction and dispute resolution",
    content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Kolhapur, Maharashtra.`,
    points: [
      "Courts in Kolhapur have exclusive jurisdiction",
      "Disputes to be resolved through arbitration if possible",
      "IRDAI guidelines take precedence where applicable",
      "Consumer protection laws apply to policyholders",
    ],
    linear: "from-cyan-400 to-cyan-300",
    bgLight: "bg-cyan-50",
    border: "border-cyan-200",
    text: "text-cyan-600",
    iconBg: "bg-cyan-100",
  },
  {
    id: "changes",
    icon: <FileText className="w-6 h-6" />,
    title: "Changes to Terms",
    description: "How we update these terms",
    content: `We reserve the right to modify these terms at any time. We will notify you of any material changes by posting the new terms on this page with an updated effective date. Your continued use of our services after such modifications constitutes your acceptance of the revised terms.`,
    points: [
      "Check this page periodically for updates",
      "Material changes notified via email",
      "Continued use implies acceptance",
      "Older versions available on request",
    ],
    linear: "from-yellow-400 to-yellow-300",
    bgLight: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-600",
    iconBg: "bg-yellow-100",
  },
];

const keyPoints = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "Read these terms carefully before using our services",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "You must be 18+ years old to use our services",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "Provide accurate and complete information",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "Keep your account credentials secure",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "Premiums are non-refundable after free-look period",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "Disputes subject to Kolhapur jurisdiction",
  },
];

const definitions = [
  {
    term: '"Services"',
    definition:
      "All insurance advisory, policy issuance, claims assistance, and related services provided by ATT Insurance",
  },
  {
    term: '"User", "You", "Your"',
    definition: "The individual or entity accessing or using our services",
  },
  {
    term: '"Policy"',
    definition: "Insurance policy issued by our partner insurance companies",
  },
  {
    term: '"Insurer"',
    definition: "Insurance companies we are authorized agents for",
  },
];

// ── Terms Card Component ─────────────────────────────────────────────────
const TermsCard = ({
  section,
  index,
}: {
  section: (typeof termsSections)[0];
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
              className={`w-14 h-14 ${section.iconBg} rounded-2xl flex items-center justify-center ${section.text} group-hover:scale-110 transition-transform`}
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

        {/* Highlight/Warning Message */}
        {section.highlight && expanded && (
          <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200 animate-fadeIn">
            <p className="text-sm text-yellow-700 font-medium flex items-center gap-2">
              <Info className="w-4 h-4" />
              {section.highlight}
            </p>
          </div>
        )}

        {/* Warning for prohibited uses */}
        {section.warning && expanded && (
          <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-200 animate-fadeIn">
            <p className="text-sm text-red-600 font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Violation may result in immediate account termination
            </p>
          </div>
        )}

        {/* Quick peek indicator */}
        {!expanded && section.points && (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-slate-400">
              Click to view details
            </span>
            <svg
              className="w-4 h-4 text-slate-400"
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
          </div>
        )}
      </div>
    </div>
  );
};

// ── Definition Item Component ────────────────────────────────────────────
const DefinitionItem = ({
  def,
  index,
}: {
  def: (typeof definitions)[0];
  index: number;
}) => {
  return (
    <div
      className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100"
      style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.5}s both` }}
    >
      <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 ">
        <BookOpen className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{def.term}</h4>
        <p className="text-sm text-slate-500">{def.definition}</p>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────
const TermsOfUse = () => {
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
              <Scale className="w-4 h-4" />
              Please Read Carefully
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Terms of{" "}
              <span className="relative">
                <span className="text-yellow-500">Use</span>
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
              By accessing or using ATT Insurance services, you agree to be
              bound by these terms. Please read them carefully before
              proceeding.
            </p>

            {/* Last Updated */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-8">
              <Clock className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Summary Cards */}
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

      {/* ═══════════════════════════  KEY POINTS  ══════════════════════════════ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-yellow-50 to-yellow-100 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
              Key Points to Remember
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-yellow-500 flex mt-0.5">
                    {point.icon}
                  </div>
                  <span className="text-sm text-slate-700">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  DEFINITIONS  ══════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4 inline mr-1" />
              Definitions
            </span>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Understanding Key <span className="text-yellow-500">Terms</span>
            </h2>
            <p className="text-slate-600">
              These definitions will help you better understand our terms of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {definitions.map((def, index) => (
              <DefinitionItem key={index} def={def} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  TERMS SECTIONS  ══════════════════════════════ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <ScrollText className="w-4 h-4 inline mr-1" />
              Complete Terms
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Detailed{" "}
              <span className="text-yellow-500">Terms & Conditions</span>
            </h2>
            <p className="text-slate-600">
              Please review all sections carefully. Click on each section to
              expand and read details.
            </p>
          </div>

          {/* Terms Cards Grid */}
          <div className="space-y-6">
            {termsSections.map((section, index) => (
              <TermsCard key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  ACKNOWLEDGMENT  ══════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-yellow-400 to-yellow-300 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full -ml-10 -mb-10"></div>

            <div className="relative">
              <Handshake className="w-16 h-16 text-slate-900 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Acknowledgment of Terms
              </h3>
              <p className="text-slate-800 max-w-2xl mx-auto mb-6">
                By using our services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Use. If you
                have any questions, please contact us before proceeding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={()=>scrollTo({top:0,behavior:"smooth"})}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-yellow-400 px-8 py-3.5 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Link>
                <Link
                  to="/"
                  onClick={()=>scrollTo({top:0,behavior:"smooth"})}
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300"
                >
                  Return to Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  CONTACT SECTION  ══════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-slate-600 mb-6">
              We're here to help. Reach out to us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919730097448"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-900 hover:text-yellow-400 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                +91 9730097448
              </a>
              <a
                href="tel:+917083786975"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-900 hover:text-yellow-400 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                +91 7083786975
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-6">
              AT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur, Hatargi Road
            </p>
          </div>
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

export default TermsOfUse;
