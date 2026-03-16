
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Shield,
  Award,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  ThumbsUp,
  Zap,
  Heart,
  Globe,
  Sparkles,
  TrendingUp,
  Crown,
  Medal,
  Gem,
  Rocket,
} from "lucide-react";
import tashrif from "@/assets/images/tashrif.jpeg";
import gouspak from "@/assets/images/gouspak.jpeg";
import type { JSX } from "react";

// ── Type Definitions ─────────────────────────────────────────────────────
interface Stat {
  value: string;
  label: string;
  icon: JSX.Element;
}

interface Specialization {
  name: string;
  icon: string;
  color: string;
}

interface Achievement {
  year: string;
  title: string;
  icon: JSX.Element;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  tagline: string;
  bio: string;
  phone: string;
  whatsapp: string;
  address: string;
  image: string;
  avatar: string;
  linear: string;
  stats: Stat[];
  specializations: Specialization[];
  partners: string[];
  rating: number;
  reviews: number;
  responseTime: string;
  languages: string[];
  expertise: string[];
  badge: string;
  color: string;
  achievements: Achievement[];
}

interface Feature {
  icon: JSX.Element;
  title: string;
  desc: string;
  color: string;
}

interface Testimonial {
  text: string;
  author: string;
  vehicle: string;
  rating: number;
  image: string | null;
  advisor: string;
  location: string;
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

// ── Team Data ─────────────────────────────────────────────────────────────
const team: TeamMember[] = [
  {
    id: "tashrif",
    name: "Tashrif Chadedar",
    role: "Vehicle Insurance Advisor",
    title: "Founder & Senior Advisor",
    tagline: "Your trusted partner for all vehicle insurance needs",
    bio: "With deep roots in Gadhinglaj, Tashrif has spent years helping farmers, commuters, and business owners get the right vehicle insurance at the fairest price. Known for his honest advice, lightning-fast policy issuance, and hands-on claim support — he treats every client like family.",
    phone: "+91 9730097448",
    whatsapp: "919730097448",
    address: "ATT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur",
    image: tashrif,
    avatar: "TC",
    linear: "from-yellow-400 to-yellow-300",
    stats: [
      {
        value: "2500+",
        label: "Happy Clients",
        icon: <Users className="w-4 h-4" />,
      },
      {
        value: "5+",
        label: "Years Experience",
        icon: <Crown className="w-4 h-4" />,
      },
      {
        value: "95%",
        label: "Claim Success",
        icon: <TrendingUp className="w-4 h-4" />,
      },
    ],
    specializations: [
      { name: "Two-Wheeler", icon: "🏍️", color: "bg-blue-50 text-blue-600" },
      {
        name: "Four-Wheeler",
        icon: "🚗",
        color: "bg-purple-50 text-purple-600",
      },
      { name: "Tractor", icon: "🚜", color: "bg-green-50 text-green-600" },
      { name: "Commercial", icon: "🚛", color: "bg-orange-50 text-orange-600" },
      { name: "Three-Wheeler", icon: "🛺", color: "bg-pink-50 text-pink-600" },
      {
        name: "Electric Vehicle",
        icon: "⚡",
        color: "bg-indigo-50 text-indigo-600",
      },
    ],
    partners: ["TATA AIG", "Digit", "Bajaj Allianz", "ICICI Lombard"],
    rating: 4.9,
    reviews: 1250,
    responseTime: "< 5 mins",
    languages: ["English", "Marathi", "Hindi"],
    expertise: ["Commercial Vehicles", "Fleet Insurance", "Claims Specialist"],
    badge: "IRDAI Certified",
    color: "yellow",
    achievements: [
      {
        year: "2023",
        title: "Top Performer",
        icon: <Award className="w-3 h-3" />,
      },
      {
        year: "2024",
        title: "Client Choice",
        icon: <Star className="w-3 h-3" />,
      },
    ],
  },
  {
    id: "gouspak",
    name: "Gouspak Chadedar",
    role: "Insurance Specialist",
    title: "Co-founder & Claims Expert",
    tagline: "Specialist in agricultural & commercial coverage",
    bio: "Bringing grassroots understanding of rural Maharashtra, our second advisor specializes in tractor, three-wheeler, and electric vehicle insurance. With strong ties to farming communities across Kolhapur district, they ensure every farmer gets the best agricultural coverage at minimum cost.",
    phone: "+91 7083786975",
    whatsapp: "917083786975",

    address: "ATT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur",
    image: gouspak,
    avatar: "M2",
    linear: "from-slate-800 to-slate-900",
    stats: [
      {
        value: "1800+",
        label: "Happy Clients",
        icon: <Users className="w-4 h-4" />,
      },
      {
        value: "3+",
        label: "Years Experience",
        icon: <Crown className="w-4 h-4" />,
      },
      {
        value: "93%",
        label: "Claim Success",
        icon: <TrendingUp className="w-4 h-4" />,
      },
    ],
    specializations: [
      { name: "Tractor", icon: "🚜", color: "bg-green-50 text-green-600" },
      { name: "Three-Wheeler", icon: "🛺", color: "bg-pink-50 text-pink-600" },
      {
        name: "Electric Vehicle",
        icon: "⚡",
        color: "bg-indigo-50 text-indigo-600",
      },
      { name: "Commercial", icon: "🚛", color: "bg-orange-50 text-orange-600" },
      {
        name: "Claims Assist",
        icon: "📋",
        color: "bg-yellow-50 text-yellow-600",
      },
      { name: "Renewals", icon: "🔄", color: "bg-cyan-50 text-cyan-600" },
    ],
    partners: ["Reliance Capital", "Future Generali", "Shriram GI", "TATA AIG"],
    rating: 4.8,
    reviews: 860,
    responseTime: "< 10 mins",
    languages: ["English", "Marathi", "Hindi"],
    expertise: ["Agricultural Insurance", "EV Specialist", "Claims Processing"],
    badge: "Claim Expert",
    color: "slate",
    achievements: [
      {
        year: "2023",
        title: "Rising Star",
        icon: <Rocket className="w-3 h-3" />,
      },
      {
        year: "2024",
        title: "Claims Hero",
        icon: <Medal className="w-3 h-3" />,
      },
    ],
  },
];

const features: Feature[] = [
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Direct Access",
    desc: "No IVR, no bots. Talk directly to your advisor.",
    color: "yellow",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personalized Service",
    desc: "We remember you and your vehicle history.",
    color: "pink",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Quotes",
    desc: "Get a quote in under 5 minutes, always.",
    color: "purple",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "End-to-End Support",
    desc: "From purchase to claim, we're with you.",
    color: "green",
  },
];

const testimonials: Testimonial[] = [
  {
    text: "Tashrif helped me get my truck insured at the best rate. Very professional and quick service!",
    author: "Rajesh Patil",
    vehicle: "Truck Owner",
    rating: 5,
    image: null,
    advisor: "Tashrif",
    location: "Gadhinglaj",
  },
  {
    text: "Gouspak processed my bike claim in just 2 days. Amazing support throughout the process.",
    author: "Sneha Kulkarni",
    vehicle: "Bike Owner",
    rating: 5,
    image: null,
    advisor: "Gouspak",
    location: "Hatargi",
  },
  {
    text: "Best insurance advisors in the region. They really understand local needs.",
    author: "Prakash Patil",
    vehicle: "Tractor Owner",
    rating: 5,
    image: null,
    advisor: "Both",
    location: "Terani",
  },
];

const stats: Stat[] = [
  {
    value: "5000+",
    label: "Vehicles Insured",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    value: "3500+",
    label: "Happy Families",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: <ThumbsUp className="w-5 h-5" />,
  },
  {
    value: "10+",
    label: "Insurance Partners",
    icon: <Award className="w-5 h-5" />,
  },
];

// ── Components ───────────────────────────────────────────────────────────

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
      <div className="font-black text-lg sm:text-xl md:text-2xl text-slate-900">
        {stat.value}
      </div>
      <div className="text-[10px] sm:text-xs text-slate-500">{stat.label}</div>
    </motion.div>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      {/* Floating badge for second member */}
      {index === 1 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 z-10"
        >
          <span className="bg-linear-to-r from-yellow-400 to-yellow-300 text-slate-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-lg inline-flex items-center gap-1 sm:gap-2">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Also Available
          </span>
        </motion.div>
      )}

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Left side - Profile Card */}
        <motion.div whileHover={{ y: -5 }} className="relative group">
          {/* Background decoration */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className={`absolute -inset-3 sm:-inset-4 bg-linear-to-r ${member.linear} rounded-2xl sm:rounded-[2.5rem] opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500`}
          />

          {/* Main card */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            {/* Header linear */}
            <div
              className={`h-20 sm:h-24 lg:h-32 bg-linear-to-r ${member.linear}`}
            />

            {/* Profile image - FIXED POSITIONING */}
            <div className="relative px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
              {/* Image container with proper spacing */}
              <div className="relative -mt-10 sm:-mt-12 lg:-mt-16 mb-4 sm:mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-linear-to-br ${member.linear} p-1 shadow-2xl inline-block`}
                >
                  <div className="w-full h-full bg-white rounded-lg sm:rounded-xl overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
                          {member.avatar}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Online status indicator */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-lg border-2 sm:border-4 border-white flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping absolute" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full relative" />
                </motion.div>
              </div>

              {/* Badge - positioned top right */}
              <div className="absolute top-2 sm:top-4 right-4 sm:right-6 lg:right-8">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`bg-${member.color === "yellow" ? "yellow" : "slate"}-100 text-${member.color === "yellow" ? "yellow" : "slate"}-600 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold`}
                >
                  {member.badge}
                </motion.span>
              </div>

              {/* Info - with proper spacing from image */}
              <div className="mt-2 sm:mt-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-1">
                  {member.name}
                </h2>
                <p className="text-yellow-500 font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                  {member.title}
                </p>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {member.bio}
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {member.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center"
                    >
                      <div className="text-yellow-500 flex justify-center mb-0.5 sm:mb-1">
                        {stat.icon}
                      </div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-[8px] sm:text-[10px] uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Languages & Response time */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1 sm:gap-2 bg-slate-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                  >
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                    <span className="text-[10px] sm:text-xs text-slate-600">
                      {member.languages.join(" • ")}
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1 sm:gap-2 bg-green-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                  >
                    <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
                    <span className="text-[10px] sm:text-xs text-green-600 font-semibold">
                      Response {member.responseTime}
                    </span>
                  </motion.div>
                </div>

                {/* Specializations */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
                    Specializations
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {member.specializations.map((spec, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`${spec.color} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold flex items-center gap-0.5 sm:gap-1`}
                      >
                        <span>{spec.icon}</span>
                        <span className="hidden xs:inline">{spec.name}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Partners */}
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
                    Insurance Partners
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {member.partners.map((partner, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-100 text-slate-600 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-medium"
                      >
                        {partner}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Contact & Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Rating card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-linear-to-br from-yellow-50 to-yellow-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-yellow-200"
          >
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(member.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                  />
                ))}
              </div>
              <span className="font-black text-slate-900 text-sm sm:text-base">
                {member.rating}
              </span>
              <span className="text-slate-500 text-xs sm:text-sm">
                ({member.reviews.toLocaleString()} reviews)
              </span>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm">
              Consistently rated 5-star for quick service and claim support
            </p>
          </motion.div>

          {/* Contact methods */}
          <motion.div
            variants={fadeInUp}
            className="bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white"
          >
            <h3 className="font-bold text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              Contact {member.name.split(" ")[0]} Directly
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href={`tel:${member.phone}`}
                className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-lg sm:rounded-xl flex items-center justify-center ">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] sm:text-xs text-yellow-400">
                    Call Now
                  </p>
                  <p className="font-bold text-xs sm:text-sm truncate">
                    {member.phone}
                  </p>
                </div>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href={`https://wa.me/${member.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center ">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs text-green-400">
                    WhatsApp
                  </p>
                  <p className="font-bold text-xs sm:text-sm">Chat Now</p>
                </div>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex" />
              </motion.a>

              <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-600 rounded-lg sm:rounded-xl flex items-center justify-center ">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] sm:text-xs text-slate-400">
                    Office
                  </p>
                  <p className="text-[10px] sm:text-xs truncate">
                    {member.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex" />
              <span className="text-[10px] sm:text-xs text-slate-300">
                Mon-Sat, 9AM - 7PM
              </span>
              <span className="ml-auto bg-green-500/20 text-green-400 text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                Open Now
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
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
      className="group relative"
    >
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.5,
        }}
        className="absolute -inset-0.5 sm:-inset-1 bg-linear-to-r from-yellow-400 to-yellow-300 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur"
      />
      <div className="relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-100 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-10 h-10 sm:w-12 sm:h-12 bg-${feature.color}-100 rounded-lg sm:rounded-xl flex items-center justify-center text-${feature.color}-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
        >
          {feature.icon}
        </motion.div>
        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 sm:mb-2">
          {feature.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">{feature.desc}</p>
      </div>
    </motion.div>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-linear-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p className="text-slate-700 text-xs sm:text-sm mb-3 sm:mb-4 lg:mb-6">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-lg sm:rounded-xl  items-center justify-center text-slate-900 font-bold text-sm sm:text-base flex"
        >
          {testimonial.author[0]}
        </motion.div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-slate-900 text-xs sm:text-sm truncate">
            {testimonial.author}
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500 truncate">
            {testimonial.vehicle} • {testimonial.location}
          </p>
        </div>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="ml-auto text-[8px] sm:text-xs font-semibold text-yellow-600 bg-yellow-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex"
        >
          {testimonial.advisor}
        </motion.span>
      </div>
    </motion.div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────
const Team: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="bg-white"
    >
      {/* ═══════════════════════════  MODERN HERO  ══════════════════════════════ */}
      <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-32 overflow-hidden bg-linear-to-br from-slate-50 via-white to-yellow-50">
        {/* Animated background elements */}
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
          {/* Breadcrumb */}
         

          {/* Main title */}
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1 sm:gap-2 bg-yellow-100 text-yellow-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
            >
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Meet The Team
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              Real People,{" "}
              <span className="relative">
                <span className="text-yellow-500">Real Expertise</span>
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
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Two passionate professionals dedicated to making vehicle insurance
              simple, transparent, and stress-free for our community.
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
        </div>
      </section>

      {/* ═══════════════════════  TEAM SHOWCASE  ════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {team.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════  FEATURES GRID  ════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block bg-yellow-100 text-yellow-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
              Why Work With Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              The ATT Insurance{" "}
              <span className="text-yellow-500">Difference</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 px-4">
              We're not just insurance advisors — we're your neighbors who care
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

      {/* ═══════════════════════  TESTIMONIAL CAROUSEL  ════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block bg-yellow-100 text-yellow-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
              Client Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              What Our <span className="text-yellow-500">Community Says</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════  FINAL CTA  ════════════════════════════ */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-yellow-300" />
        <div className="absolute inset-0 bg-black/5" />

        {/* Decorative circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-slate-900/10 text-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Two Experts, One Mission
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 px-4">
              Ready to Get the Right Coverage?
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-800 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Connect with Tashrif or Gouspak today. Get personalized advice and
              the best rates in under 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919730097448"
                className="group bg-slate-900 text-yellow-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-black text-sm sm:text-base hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Tashrif
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919730097448"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-black text-sm sm:text-base hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp Team
              </motion.a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-800 text-xs sm:text-sm mt-4 sm:mt-6 flex items-center justify-center gap-1 sm:gap-2 px-4"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex" />
              <span className="truncate">
                AT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur, Hatargi Road
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;
