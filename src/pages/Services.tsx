import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Sparkles,
  Clock,
  Users,
  Heart,
  Award,
  Gem,
  Rocket,
  TrendingUp,
  ThumbsUp,
  MessageCircle,
  Calendar,
  MapPin,
  Battery,
  Wind,
  Leaf,
  Truck,
  Bike,
  Car,
} from "lucide-react";

// ── Type Definitions ─────────────────────────────────────────────────────
interface Benefit {
  text: string;
  icon: JSX.Element;
}

interface ServiceStats {
  premium: string;
  rating: number;
  claims: string;
}

interface Service {
  id: string;
  icon: JSX.Element;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: Benefit[];
  linear: string;
  bglinear: string;
  accent: string;
  tag: string | null;
  stats: ServiceStats;
  iconBg: string;
}

interface Stat {
  value: string;
  label: string;
  icon: JSX.Element;
}

interface Feature {
  icon: JSX.Element;
  title: string;
  desc: string;
}

// ── Animation Variants ──────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ── Data ──────────────────────────────────────────────────────────────────
const services: Service[] = [
  {
    id: "bike",
    icon: <Bike className="w-8 h-8" />,
    emoji: "🏍️",
    title: "Two-Wheeler Insurance",
    subtitle: "Bikes, Scooters & Motorcycles",
    description:
      "Complete protection for your daily commute or weekend rides. From third-party liability to comprehensive coverage with zero depreciation options.",
    longDescription:
      "Whether you ride a daily commuter scooter or a powerful motorcycle, our two-wheeler plans offer complete protection at India's most competitive premiums.",
    features: [
      "Third-party liability cover",
      "Own damage protection",
      "Natural calamity & fire",
      "Theft coverage",
      "Personal accident benefit",
      "Cashless repairs at 2000+ garages",
      "Roadside assistance",
      "No claim bonus protection",
    ],
    benefits: [
      {
        text: "Claim settlement ratio: 98%",
        icon: <TrendingUp className="w-3 h-3" />,
      },
      { text: "Instant policy issuance", icon: <Zap className="w-3 h-3" /> },
      { text: "Cashless network: 2000+", icon: <Users className="w-3 h-3" /> },
    ],
    linear: "from-yellow-400 to-yellow-300",
    bglinear: "from-yellow-50 via-yellow-50/50 to-white",
    accent: "yellow",
    tag: "Most Popular",
    stats: { premium: "₹537*", rating: 4.9, claims: "98%" },
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "car",
    icon: <Car className="w-8 h-8" />,
    emoji: "🚗",
    title: "Four-Wheeler Insurance",
    subtitle: "Cars, SUVs & Hatchbacks",
    description:
      "Comprehensive car insurance with add-ons like zero depreciation, engine protection, and 24/7 roadside assistance for peace of mind.",
    longDescription:
      "Comprehensive car insurance with add-ons like zero depreciation, engine protection, and roadside assistance — so you're covered for every situation.",
    features: [
      "Comprehensive & third-party plans",
      "Zero depreciation add-on",
      "Engine & gearbox protection",
      "Roadside assistance 24/7",
      "Return to invoice cover",
      "No claim bonus protection",
      "Personal accident cover",
      "Passenger cover",
    ],
    benefits: [
      {
        text: "Claim settlement ratio: 96%",
        icon: <TrendingUp className="w-3 h-3" />,
      },
      { text: "Cashless garages: 3500+", icon: <Users className="w-3 h-3" /> },
      { text: "Instant quote in 2 mins", icon: <Zap className="w-3 h-3" /> },
    ],

    linear: "from-purple-500 to-purple-400",
    bglinear: "from-purple-50 via-purple-50/50 to-white",
    accent: "purple",
    tag: null,
    stats: { premium: "₹2,345*", rating: 4.8, claims: "96%" },
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    id: "tractor",
    icon: <Truck className="w-8 h-8" />,
    emoji: "🚜",
    title: "Tractor Insurance",
    subtitle: "Farm & Agricultural Vehicles",
    description:
      "Specialized coverage for agricultural vehicles including field damage, driver accident benefit, and protection against all farm-related risks.",
    longDescription:
      "Protecting the backbone of India's agriculture. Our tractor insurance covers all risks specific to farm use, including field damage and seasonal risks.",
    features: [
      "Agricultural use cover",
      "Driver accident benefit",
      "Fire & natural calamity",
      "Theft protection",
      "Third-party liability",
      "Trailer coverage available",
      "Implements protection",
      "Seasonal premium options",
    ],
    benefits: [
      { text: "Specialized farm coverage", icon: <Leaf className="w-3 h-3" /> },
      {
        text: "Flexible payment options",
        icon: <Calendar className="w-3 h-3" />,
      },
      {
        text: "Quick claim settlement",
        icon: <TrendingUp className="w-3 h-3" />,
      },
    ],

    linear: "from-green-500 to-green-400",
    bglinear: "from-green-50 via-green-50/50 to-white",
    accent: "green",
    tag: "Specialist",
    stats: { premium: "₹4,890*", rating: 4.7, claims: "95%" },
    iconBg: "bg-green-100 text-green-600",
  },
  {
    id: "commercial",
    icon: <Truck className="w-8 h-8" />,
    emoji: "🚛",
    title: "Commercial Vehicle ",
    subtitle: "Trucks, Buses & Goods Carriers",
    description:
      "End-to-end commercial vehicle coverage for operators and fleet owners. Protect your income-generating assets with comprehensive plans.",
    longDescription:
      "End-to-end commercial vehicle coverage for operators and fleet owners. Protect your income-generating assets with plans for heavy daily use.",
    features: [
      "Goods in transit cover",
      "Public carrier liability",
      "Driver & passenger cover",
      "Fleet discount available",
      "Breakdown assistance",
      "Legal liability protection",
      "Permit insurance",
      "Liability to third parties",
    ],
    benefits: [
      {
        text: "Fleet discounts up to 20%",
        icon: <Users className="w-3 h-3" />,
      },
      { text: "Pan-India claim support", icon: <MapPin className="w-3 h-3" /> },
      {
        text: "Specialized commercial team",
        icon: <Award className="w-3 h-3" />,
      },
    ],

    linear: "from-orange-500 to-orange-400",
    bglinear: "from-orange-50 via-orange-50/50 to-white",
    accent: "orange",
    tag: null,
    stats: { premium: "₹8,990*", rating: 4.8, claims: "94%" },
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    id: "three-wheeler",
    icon: <Truck className="w-8 h-8" />,
    emoji: "🛺",
    title: "Three-Wheeler Insurance",
    subtitle: "Auto-Rickshaws & E-Rickshaws",
    description:
      "Tailored insurance for auto-rickshaw and e-rickshaw operators. Protect your livelihood with affordable plans including passenger liability.",
    longDescription:
      "Tailored insurance for auto-rickshaw and e-rickshaw operators. Protect your livelihood with affordable plans that include passenger liability.",
    features: [
      "Passenger liability cover",
      "Own damage protection",
      "CNG/LPG kit coverage",
      "Personal accident benefit",
      "Third-party liability",
      "Permit & fitness renewal help",
      "Commercial usage cover",
      "Standing features cover",
    ],
    benefits: [
      { text: "Passenger cover included", icon: <Users className="w-3 h-3" /> },
      { text: "Fuel kit protection", icon: <Battery className="w-3 h-3" /> },
      { text: "Quick renewals", icon: <Clock className="w-3 h-3" /> },
      {
        text: "Claim settlement ratio: 96%",
        icon: <TrendingUp className="w-3 h-3" />,
      },
      { text: "Cashless garages: 3500+", icon: <Users className="w-3 h-3" /> },
    ],

    linear: "from-pink-500 to-pink-400",
    bglinear: "from-pink-50 via-pink-50/50 to-white",
    accent: "pink",
    tag: null,
    stats: { premium: "₹3,210*", rating: 4.8, claims: "96%" },
    iconBg: "bg-pink-100 text-pink-600",
  },
  {
    id: "ev",
    icon: <Battery className="w-8 h-8" />,
    emoji: "⚡",
    title: "Electric Vehicle Insurance",
    subtitle: "E-Bikes, E-Cars & More",
    description:
      "Future-ready coverage for electric vehicles including battery coverage, charging equipment protection, and EV-specialized garage network.",
    longDescription:
      "Future-ready coverage for electric vehicles. Our EV plans include battery coverage, charging equipment protection, and a specialized EV garage network.",
    features: [
      "Battery & motor coverage",
      "Charging equipment protection",
      "EV-specialized garage network",
      "Zero emission benefits",
      "Personal accident cover",
      "Third-party liability",
      "Electrical breakdown cover",
      "Charging cable protection",
    ],
    benefits: [
      { text: "EV specialist garages", icon: <Wind className="w-3 h-3" /> },
      {
        text: "Battery replacement cover",
        icon: <Battery className="w-3 h-3" />,
      },
      { text: "Green vehicle discount", icon: <Leaf className="w-3 h-3" /> },
    ],

    linear: "from-cyan-500 to-cyan-400",
    bglinear: "from-cyan-50 via-cyan-50/50 to-white",
    accent: "cyan",
    tag: "New",
    stats: { premium: "₹4,560*", rating: 4.9, claims: "97%" },
    iconBg: "bg-cyan-100 text-cyan-600",
  },
];

const stats: Stat[] = [
  {
    value: "5000+",
    label: "Vehicles Insured",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "98%",
    label: "Claim Success",
    icon: <ThumbsUp className="w-5 h-5" />,
  },
  {
    value: "15+",
    label: "Insurance Partners",
    icon: <Award className="w-5 h-5" />,
  },
  {
    value: "5 min",
    label: "Average Response",
    icon: <Zap className="w-5 h-5" />,
  },
];

const features: Feature[] = [
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Zero Depreciation Cover",
    desc: "Get full claim amount without depreciation deduction",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personal Accident Cover",
    desc: "Coverage for owner-driver up to ₹15 lakhs",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "NCB Protection",
    desc: "Protect your no-claim bonus even after a claim",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Instant Claim Settlement",
    desc: "Cashless claim approval in under 2 hours",
  },
];

interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
      }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-yellow-500 flex justify-center mb-1 sm:mb-2"
      >
        {stat.icon}
      </motion.div>
      <div className="font-black text-xl sm:text-2xl text-slate-900">
        {stat.value}
      </div>
      <div className="text-[10px] sm:text-xs text-slate-500">{stat.label}</div>
    </motion.div>
  );
};

interface ServiceCardProps {
  service: Service;
  index: number;
  activeService: string | null;
  setActiveService: (id: string | null) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,

  setActiveService,
}) => {
  const [showFeatures, setShowFeatures] = useState<boolean>(false);

  return (
    <motion.div
      id={service.id}
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => {
        setActiveService(service.id);
        setShowFeatures(true);
      }}
      onHoverEnd={() => {
        setActiveService(null);
        setShowFeatures(false);
      }}
      className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      {/* linear overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 bg-linear-to-br ${service.bglinear}`}
      />

      {/* Top accent bar */}
      <div className={`h-1.5 sm:h-2 bg-linear-to-r ${service.linear}`} />

      {/* Content */}
      <div className="relative p-4 sm:p-6 lg:p-8">
        {/* Badge */}
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-12 h-12 sm:w-14 sm:h-14 ${service.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl`}
          >
            {service.emoji}
          </motion.div>
          {service.tag && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`bg-${service.accent}-100 text-${service.accent}-600 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold`}
            >
              {service.tag}
            </motion.span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 mb-1">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">
          {service.subtitle}
        </p>
        <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-2">
          {service.description}
        </p>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-4 sm:mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center"
          >
            <p className="font-black text-slate-900 text-xs sm:text-sm">
              {service.stats.premium}
            </p>
            <p className="text-slate-400 text-[8px] sm:text-[10px]">Starting</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center"
          >
            <p className="font-black text-slate-900 text-xs sm:text-sm">
              {service.stats.rating}
            </p>
            <p className="text-slate-400 text-[8px] sm:text-[10px]">Rating</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center"
          >
            <p className="font-black text-slate-900 text-xs sm:text-sm">
              {service.stats.claims}
            </p>
            <p className="text-slate-400 text-[8px] sm:text-[10px]">Claims</p>
          </motion.div>
        </div>

        {/* Benefits strip */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {service.benefits.map((benefit, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-xs text-slate-500 bg-slate-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
            >
              {benefit.icon}
              <span className="truncate max-w-20 sm:max-w-none">
                {benefit.text}
              </span>
            </motion.span>
          ))}
        </div>

        {/* Feature preview (appears on hover) */}
        <AnimatePresence>
          {showFeatures && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-0 bottom-0 bg-white border-t border-slate-100 rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-6 shadow-2xl z-10"
            >
              <p className="font-bold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                Key Features
              </p>
              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                {service.features.slice(0, 6).map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-1 sm:gap-2 text-[10px] sm:text-xs"
                  >
                    <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-500 flex mt-0.5" />
                    <span className="text-slate-600 line-clamp-1">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-yellow-400 transition-all duration-300 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg sm:rounded-xl flex items-center justify-center text-yellow-600 mb-3 sm:mb-4"
      >
        {feature.icon}
      </motion.div>
      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 sm:mb-2">
        {feature.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-500">{feature.desc}</p>
    </motion.div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────
const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="bg-white"
    >
      {/* ═══════════════════════════  HERO SECTION  ══════════════════════════════ */}
      <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-linear-to-br from-slate-50 via-white to-yellow-50">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -50, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 50, -20, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
            className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FACC15' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "20px 20px sm:30px 30px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main title */}
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1 sm:gap-2 bg-yellow-100 text-yellow-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Complete Vehicle Insurance Solutions
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              Coverage For{" "}
              <span className="relative">
                <span className="text-yellow-500">Every Vehicle</span>
                <motion.svg
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full origin-left"
                  height="6"
                  viewBox="0 0 300 8"
                >
                  <path
                    d="M0 6 Q150 0 300 6"
                    stroke="#FACC15"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              From two-wheelers to commercial fleets, we provide comprehensive
              insurance solutions tailored to your needs.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-yellow-100"
          >
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </motion.div>

          {/* Vehicle type quick nav */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-2"
          >
            {services.map((service) => (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-yellow-400 border-yellow-400 text-slate-900"
                    : "bg-white border-slate-200 text-slate-600 hover:border-yellow-400 hover:text-yellow-600"
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <span className="text-base sm:text-xl">{service.emoji}</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold hidden xs:inline">
                  {service.subtitle.split(",")[0]}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════  SERVICE CARDS - MODERN GRID  ═════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                activeService={activeService}
                setActiveService={setActiveService}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════  FEATURES SHOWCASE  ═══════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block bg-yellow-100 text-yellow-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Gem className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              Value-Added <span className="text-yellow-500">Benefits</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 px-4">
              Every policy comes with these exclusive features at no extra cost
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════  FINAL CTA  ═══════════════════════════ */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 to-slate-800" />
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 2,
            }}
            className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 px-4">
              Ready to Get <span className="text-yellow-400">Covered?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Get a personalized quote in under 5 minutes. No paperwork, no
              pressure — just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                  className="group bg-yellow-400 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-black text-sm sm:text-base hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
                >
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  Contact
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919730097448"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-black text-sm sm:text-base hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp Us
              </motion.a>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-xs sm:text-sm mt-4 sm:mt-6 flex items-center justify-center gap-1 sm:gap-2 px-4"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex" />
              <span>AT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur</span>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
