import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Phone,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Star,
  Shield,
  Zap,
  CheckCircle,
  Clock,
  Users,
  Award,
  FileText,
  CreditCard,
  Truck,
  Car,
  Home,
} from "lucide-react";

// ── FAQ Data ──────────────────────────────────────────────────────────────
const faqCategories = [
  {
    id: "all",
    name: "All Questions",
    icon: <HelpCircle className="w-4 h-4" />,
  },
  { id: "general", name: "General", icon: <BookOpen className="w-4 h-4" /> },
  { id: "policies", name: "Policies", icon: <FileText className="w-4 h-4" /> },
  { id: "claims", name: "Claims", icon: <Shield className="w-4 h-4" /> },
  { id: "payment", name: "Payment", icon: <CreditCard className="w-4 h-4" /> },
  { id: "vehicles", name: "Vehicles", icon: <Truck className="w-4 h-4" /> },
];

const faqs = [
  {
    id: 1,
    question: "How quickly can I get my insurance policy?",
    answer:
      "Instantly! After filling your details and completing payment, your policy document is emailed to you within 5 minutes. You can also download it from our customer portal anytime. For cash payments, we issue the policy immediately at our office.",
    category: "general",
    popular: true,
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 2,
    question: "What documents do I need to buy insurance?",
    answer:
      "For new insurance: Vehicle RC, Aadhaar card, PAN card, and a recent photo of the vehicle. For renewal: Existing policy copy, vehicle RC, and Aadhaar card. For new vehicles: Invoice, RC book, and ID proof. We can guide you through the entire process.",
    category: "general",
    popular: true,
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 3,
    question: "Can I renew my existing policy through you?",
    answer:
      "Absolutely! We handle renewals for any existing policy from any insurer. We compare rates across 15+ insurance companies and often find better deals, potentially saving you up to 30% on your premium. We also help you retain your NCB (No Claim Bonus).",
    category: "policies",
    popular: true,
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: 4,
    question: "How does the claim process work?",
    answer:
      "Just call us immediately after an incident. We guide you through every step: 1) Register the claim with our team, 2) We help with documentation, 3) Arrange surveyor inspection, 4) Follow up until settlement. Our dedicated claims team handles all paperwork and ensures quick processing.",
    category: "claims",
    popular: true,
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: 5,
    question: "What is No Claim Bonus (NCB)?",
    answer:
      "NCB is a discount on your premium for every claim-free year. It can go up to 50% after 5 years. When you renew with us, we protect your NCB and ensure you get the maximum benefit. Even if you switch insurers, your NCB is transferable.",
    category: "policies",
    popular: false,
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 6,
    question: "Do you offer roadside assistance?",
    answer:
      "Yes! Most of our comprehensive policies include 24/7 roadside assistance across India. This includes flat tire changes, battery jump-starts, fuel delivery, towing, and ambulance services. Ask us about adding this to your policy.",
    category: "vehicles",
    popular: false,
    icon: <Car className="w-5 h-5" />,
  },
  {
    id: 7,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods: UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and cash at our office. For online payments, you get instant policy issuance. We also offer EMI options on higher premiums.",
    category: "payment",
    popular: false,
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    id: 8,
    question: "Is there a physical office I can visit?",
    answer:
      "Yes! Visit us at ATT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur, Hatargi Road. We also offer free doorstep service across Gadhinglaj taluka if you prefer. Our office hours are Monday-Saturday, 9 AM to 7 PM.",
    category: "general",
    popular: true,
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 9,
    question: "Which insurance companies do you work with?",
    answer:
      "We are authorized agents for TATA AIG, Digit, Reliance Capital, Future Generali, Bajaj Allianz, ICICI Lombard, Shriram GI, HDFC ERGO, SBI General, and more. We compare across all to get you the best coverage at the lowest price.",
    category: "general",
    popular: false,
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 10,
    question: "What is zero depreciation cover?",
    answer:
      "Zero depreciation (or nil depreciation) ensures you get the full claim amount without deducting depreciation on parts. For example, if a part costs ₹10,000, you get the full amount instead of ₹7,000-8,000 after depreciation. Highly recommended for new cars.",
    category: "policies",
    popular: false,
    icon: <Star className="w-5 h-5" />,
  },
  {
    id: 11,
    question: "How long does claim settlement take?",
    answer:
      "Cashless claims at network garages are usually settled in 2-4 days. Reimbursement claims take 5-7 days after document submission. Our team expedites the process by ensuring all paperwork is correct and following up daily with the insurer.",
    category: "claims",
    popular: false,
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: 12,
    question: "Can I insure a commercial vehicle?",
    answer:
      "Yes! We specialize in commercial vehicles including trucks, buses, goods carriers, and fleet vehicles. We offer fleet discounts, goods in transit cover, and comprehensive liability protection. Tashrif personally handles all commercial vehicle policies.",
    category: "vehicles",
    popular: true,
    icon: <Truck className="w-5 h-5" />,
  },
  {
    id: 13,
    question:
      "What is the difference between comprehensive and third-party insurance?",
    answer:
      "Third-party insurance covers damage/loss caused to others (mandatory by law). Comprehensive insurance covers both third-party liability AND own damage (theft, fire, accidents, natural calamities). We usually recommend comprehensive for better protection.",
    category: "policies",
    popular: false,
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 14,
    question: "Do you help with fitness certificate and permit?",
    answer:
      "Yes! For commercial vehicles, we assist with fitness certificate renewal, permit applications, and all RTO-related paperwork. We have tie-ups with authorized agents who can get these done quickly without you having to visit the RTO.",
    category: "vehicles",
    popular: false,
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    id: 15,
    question: "Is there a grace period for renewal?",
    answer:
      "Most policies have a 30-day grace period for renewal. However, if you miss this, your policy lapses and you lose your NCB. We send reminders 30 days before expiry and can help you renew instantly over phone or WhatsApp.",
    category: "policies",
    popular: false,
    icon: <Clock className="w-5 h-5" />,
  },
];

const quickAnswers = [
  { question: "Policy issuance time?", answer: "5 minutes" },
  { question: "Claim settlement ratio?", answer: "98%" },
  { question: "Network garages?", answer: "2000+" },
  { question: "Cashless facility?", answer: "Yes" },
  { question: "Doorstep service?", answer: "Free" },
  { question: "EMI available?", answer: "Yes" },
];

// ── FAQ Item Component (Arrow Function) ───────────────────────────────────
const FaqItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-yellow-400 bg-linear-to-br from-yellow-50 to-white shadow-lg shadow-yellow-100"
          : "border-slate-100 hover:border-yellow-200 hover:bg-slate-50"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-6 text-left"
      >
        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center  transition-all duration-300 ${
            isOpen
              ? "bg-yellow-400 text-slate-900"
              : "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200"
          }`}
        >
          {faq.icon}
        </div>

        {/* Question and Answer */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-bold text-slate-900 text-base pr-4">
              {faq.question}
            </h3>
            <div
              className={`flex transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-yellow-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-300" />
              )}
            </div>
          </div>

          {/* Answer (expandable) */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <p className="text-slate-600 text-sm leading-relaxed">
              {faq.answer}
            </p>

            {/* Popular tag */}
            {faq.popular && isOpen && (
              <div className="flex items-center gap-2 mt-4">
                <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Asked
                </span>
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

// ── Category Button Component (Arrow Function) ───────────────────────────
const CategoryButton = ({
  category,
  isActive,
  onClick,
}: {
  category: (typeof faqCategories)[0];
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
        isActive
          ? "bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-200"
          : "bg-slate-100 text-slate-600 hover:bg-yellow-100 hover:text-yellow-600"
      }`}
    >
      {category.icon}
      {category.name}
    </button>
  );
};

// ── Search Bar Component (Arrow Function) ─────────────────────────────────
const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search your question..."
        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300 text-slate-600 placeholder:text-slate-400"
      />
    </div>
  );
};

// ── Quick Answer Card Component (Arrow Function) ─────────────────────────
const QuickAnswerCard = ({ item }: { item: (typeof quickAnswers)[0] }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-4 text-center hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">
      <p className="text-xs text-slate-500 mb-1">{item.question}</p>
      <p className="font-black text-slate-900 text-lg">{item.answer}</p>
    </div>
  );
};

// ── Main FAQ Component (Arrow Function) ───────────────────────────────────
const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  // Filter FAQs based on category and search
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get popular FAQs
  const popularFaqs = faqs.filter((faq) => faq.popular).slice(0, 3);

  // Toggle FAQ open state
  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

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
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Got Questions?{" "}
              <span className="relative">
                <span className="text-yellow-500">We've Got Answers</span>
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
            <p className="text-xl text-slate-600">
              Everything you need to know about insurance, claims, and our
              services
            </p>
          </div>

          {/* Quick Answers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto mb-10">
            {quickAnswers.map((item, index) => (
              <QuickAnswerCard key={index} item={item} />
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  MAIN FAQ SECTION  ══════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {faqCategories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>

          {/* Popular FAQs (show when no search and all category) */}
          {searchQuery === "" && activeCategory === "all" && (
            <div className="mb-10">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Most Popular Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {popularFaqs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => {
                      setOpenFaqId(faq.id);
                      document.getElementById(`faq-${faq.id}`)?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className="bg-slate-50 hover:bg-yellow-50 border border-slate-100 hover:border-yellow-200 rounded-xl p-4 text-left transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 ">
                        {faq.icon}
                      </div>
                      <p className="text-sm font-medium text-slate-700 line-clamp-2">
                        {faq.question}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div key={faq.id} id={`faq-${faq.id}`}>
                  <FaqItem
                    faq={faq}
                    isOpen={openFaqId === faq.id}
                    onToggle={() => toggleFaq(faq.id)}
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-slate-50 rounded-3xl">
                <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No questions found
                </h3>
                <p className="text-slate-500 mb-6">
                  Try searching with different keywords
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
                >
                  View all questions
                </button>
              </div>
            )}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 bg-linear-to-r from-yellow-400 to-yellow-300 rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-800 mb-6 max-w-md mx-auto">
                Can't find what you're looking for? Chat with Tashrif directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+919730097448"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-yellow-400 px-6 py-3 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Tashrif
                </a>
                <a
                  href="https://wa.me/919730097448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Now
                </a>
              </div>
            </div>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default FAQ;
