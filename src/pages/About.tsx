import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  HeartHandshake,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle,
  Users,
  Star,
  Target,
  Clock,
  BookOpen,
  MessageCircle,
  Compass,
  Briefcase,
} from "lucide-react";
import type { JSX } from "react";
import tashrif from "@/assets/images/t-logo.jpeg";
import gouspak from "@/assets/images/g-logo.jpeg";

// ── Type Definitions ─────────────────────────────────────────────────────
interface TeamMember {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
  image: string | null;
  avatar: string;
  quote: string;
  color: "amber" | "indigo";
  linear: string;
  lightBg: string;
  border: string;
  icon: JSX.Element;
}

interface Stat {
  value: string;
  label: string;
  icon: JSX.Element;
  color: "amber" | "emerald" | "blue" | "purple";
  suffix: string;
}

interface Milestone {
  year: string;
  title: string;
  desc: string;
  color: "amber" | "blue" | "purple" | "emerald" | "indigo";
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  rating: number;
  location: string;
}

interface Service {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

// ── Animation Variants ──────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const teamMembers: TeamMember[] = [
  {
    name: "Tashrif Chadedar",
    role: "Founder & Senior Advisor",
    experience: "5+ Years",
    expertise: [
      "Commercial Vehicles",
      "Fleet Insurance",
      "Claims",
      "All Types of vehicles",
    ],
    image: tashrif,
    avatar: "TC",
    quote:
      "Insurance isn't just about policies — it's about protecting dreams.",
    color: "amber",
    linear: "from-amber-500 to-amber-400",
    lightBg: "bg-amber-50",
    border: "border-amber-200",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    name: "Gouspak Chadedar",
    role: "Co-founder & Claims Expert",
    experience: "3+ Years",
    expertise: [
      "Two-Wheeler",
      "Car Insurance",
      "Claims Processing",
      "All Types of vehicles",
    ],
    image: gouspak,
    avatar: "AP",
    quote: "I treat every claim as if it's my own family's.we are family",
    color: "indigo",
    linear: "from-indigo-500 to-indigo-400",
    lightBg: "bg-indigo-50",
    border: "border-indigo-200",
    icon: <Target className="w-6 h-6" />,
  },
];

const stats: Stat[] = [
  {
    value: "5,000+",
    label: "Vehicles Insured",
    icon: <Shield className="w-6 h-6" />,
    color: "amber",
    suffix: "Protected",
  },
  {
    value: "95%",
    label: "Claim Success",
    icon: <Award className="w-6 h-6" />,
    color: "emerald",
    suffix: "Satisfaction",
  },
  {
    value: "12+",
    label: "Years Together",
    icon: <Clock className="w-6 h-6" />,
    color: "blue",
    suffix: "Experience",
  },
  {
    value: "20+",
    label: "Insurance Partners",
    icon: <Briefcase className="w-6 h-6" />,
    color: "purple",
    suffix: "Companies",
  },
];

const milestones: Milestone[] = [
  {
    year: "2012",
    title: "The Beginning",
    desc: "Started with a simple mission: make vehicle insurance easy for every Indian.",
    color: "amber",
  },
  {
    year: "2015",
    title: "1,000 Clients",
    desc: "Reached our first 1,000 happy customers across Kolhapur.",
    color: "blue",
  },
  {
    year: "2018",
    title: "Digital Leap",
    desc: "Launched instant online quotes for faster service.",
    color: "purple",
  },
  {
    year: "2022",
    title: "IRDAI Certified",
    desc: "Received full IRDAI certification as authorized agents.",
    color: "emerald",
  },
  {
    year: "2024",
    title: "5,000+ Vehicles",
    desc: "Now protecting over 5,000 vehicles across Maharashtra.",
    color: "indigo",
  },
];

const testimonials: Testimonial[] = [
  {
    text: "Tashrif helped me get my truck insured at the best rate. Very professional and quick service!",
    author: "Rajesh Patil",
    role: "Truck Owner",
    rating: 5,
    location: "Gadhinglaj",
  },
  {
    text: "Best insurance advisors in the region. They explain everything clearly and personally.",
    author: "Sneha Kulkarni",
    role: "Bike Owner",
    rating: 5,
    location: "Kolhapur",
  },
  {
    text: "When my claim was rejected elsewhere, Amit fought for me and got it settled.",
    author: "Prakash Patil",
    role: "Tractor Owner",
    rating: 5,
    location: "Terani",
  },
];

const partners: string[] = [
  "TATA AIG",
  "Digit",
  "Bajaj Allianz",
  "ICICI Lombard",
  "HDFC ERGO",
  "Reliance",
  "Shriram GI",
  "Future Generali",
];

const services: Service[] = [
  {
    title: "Car Insurance",
    desc: "Comprehensive coverage for your family car",
    icon: "🚗",
    color: "blue",
  },
  {
    title: "Bike Insurance",
    desc: "Protection for your two-wheeler",
    icon: "🏍️",
    color: "amber",
  },
  {
    title: "Truck Insurance",
    desc: "Fleet & commercial vehicle coverage",
    icon: "🚛",
    color: "purple",
  },
  {
    title: "Tractor Insurance",
    desc: "Agricultural vehicle protection",
    icon: "🚜",
    color: "green",
  },
];

// ── Components ───────────────────────────────────────────────────────────

interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  const colors = {
    amber: "bg-amber-100 text-amber-600",
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
      }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-white to-slate-50 rounded-3xl border border-slate-100" />

      {/* Content */}
      <div className="relative p-4 sm:p-6">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 ${colors[stat.color]} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          {stat.icon}
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-1 flex-wrap">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-slate-400">
              {stat.suffix}
            </span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm">{stat.label}</p>
        </div>

        {/* Decorative Line */}
        <div
          className={`absolute bottom-0 left-4 sm:left-6 right-4 sm:right-6 h-0.5 bg-linear-to-r from-${stat.color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
        />
      </div>
    </motion.div>
  );
};

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-linear-to-br from-white to-slate-50 rounded-3xl border border-slate-100 shadow-xl" />

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        {/* Header with Icon */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br ${member.linear} p-0.5`}
          >
            <div className="w-full h-full bg-white rounded-full overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-black text-slate-900">
                    {member.avatar}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div
            className={`w-10 h-10 ${member.lightBg} rounded-xl flex items-center justify-center ${member.color === "amber" ? "text-amber-600" : "text-indigo-600"}`}
          >
            {member.icon}
          </div>
        </div>

        {/* Info */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
          {member.name}
        </h3>
        <p
          className={`text-sm font-semibold mb-3 sm:mb-4 ${member.color === "amber" ? "text-amber-600" : "text-indigo-600"}`}
        >
          {member.role}
        </p>

        <p className="text-slate-500 italic mb-4 sm:mb-6 text-sm border-l-2 pl-4 border-slate-200">
          "{member.quote}"
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {member.expertise.map((exp: string, i: number) => (
            <span
              key={i}
              className={`text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg ${member.lightBg} ${member.color === "amber" ? "text-amber-700" : "text-indigo-700"} font-medium`}
            >
              {exp}
            </span>
          ))}
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 border-t border-slate-100 pt-3 sm:pt-4">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{member.experience} of experience</span>
        </div>

        {/* Status Dot */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-8">
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

interface MilestoneItemProps {
  milestone: Milestone;
  index: number;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({ milestone, index }) => {
  const colors = {
    amber: "bg-amber-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    emerald: "bg-emerald-500",
    indigo: "bg-indigo-500",
  };

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
      }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-3 sm:gap-4"
    >
      <div className="relative">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colors[milestone.color]} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg`}
        >
          {milestone.year.slice(-2)}
        </div>
        {index < milestones.length - 1 && (
          <div className="absolute top-10 sm:top-12 left-1/2 w-0.5 h-10 sm:h-12 bg-linear-to-b from-slate-200 to-transparent" />
        )}
      </div>

      <div className="flex-1 pb-6 sm:pb-8">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          {milestone.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-500">{milestone.desc}</p>
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
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 relative"
    >
      {/* Quote Mark */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-5xl sm:text-6xl text-slate-100 font-serif">
        "
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(testimonial.rating)].map((_, i: number) => (
          <Star
            key={i}
            className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-6 relative z-10">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-amber-400 to-amber-300 flex items-center justify-center text-slate-900 font-bold text-base sm:text-lg">
          {testimonial.author[0]}
        </div>
        <div>
          <p className="font-bold text-slate-900 text-sm sm:text-base">
            {testimonial.author}
          </p>
          <div className="flex items-center gap-1 sm:gap-2 text-xs text-slate-500 flex-wrap">
            <span>{testimonial.role}</span>
            <span>•</span>
            <span>{testimonial.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ServicePillProps {
  service: Service;
  index: number;
}

const ServicePill: React.FC<ServicePillProps> = ({ service, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-100 flex items-center gap-2 sm:gap-3"
    >
      <span className="text-2xl sm:text-3xl">{service.icon}</span>
      <div>
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          {service.title}
        </h4>
        <p className="text-xs text-slate-500">{service.desc}</p>
      </div>
    </motion.div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────
const About: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="bg-white"
    >
      {/* ═══════════════════════════  HERO SECTION  ══════════════════════════════ */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center pt-16 sm:pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -right-40 w-64 h-64 sm:w-96 sm:h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-amber-100 text-amber-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <HeartHandshake className="w-3 h-3 sm:w-4 sm:h-4" />
                Two Brothers, One Mission
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
                Insurance That
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-indigo-500">
                  Feels Personal
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                We're not a big corporation. We're two friends who left
                corporate jobs to build something honest. Every policy, every
                claim, every client gets our personal attention.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+919730097448"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Tashrif
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+917083786975"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Gouspak
                </motion.a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 sm:gap-2 mt-6 sm:mt-8 text-xs sm:text-sm text-slate-500 border-t border-slate-100 pt-4 sm:pt-8">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex" />
                <span>
                  AT Terani, Gadhinglaj, Kolhapur — Serving locally, thinking
                  globally.
                </span>
              </div>
            </motion.div>

            {/* Right Column - Stats Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((stat: Stat, index: number) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  STORY SECTION  ══════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left - Story */}
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-indigo-100 text-indigo-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                Our Story
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 sm:mb-6">
                From a Small Office in{" "}
                <span className="text-indigo-500">Terani</span>
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">
                <p>
                  In 2021, Tashrif started with a small desk and a big dream: to
                  make insurance transparent, affordable, and personal. No
                  hidden clauses, no confusing jargon — just honest advice.
                </p>
                <p>
                  Gouspak joined in 2023, and together we've built something
                  special. Today, we protect over 5,000 vehicles, but we still
                  treat every client like our only client.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {services.map((service: Service, index: number) => (
                  <ServicePill key={index} service={service} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Right - Values/Milestones */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-100"
            >
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 sm:mb-6">
                Our Journey
              </h3>
              <div className="space-y-1 sm:space-y-2">
                {milestones.map((milestone: Milestone, index: number) => (
                  <MilestoneItem
                    key={index}
                    milestone={milestone}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  TEAM SECTION  ══════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block bg-amber-100 text-amber-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
              Meet The Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              Two Friends,{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-indigo-500">
                One Promise
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 px-4">
              We're not just business partners — we're friends who share the
              same values: honesty, transparency, and putting customers first.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member: TeamMember, index: number) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 sm:mt-6 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 sm:gap-8 p-4 sm:p-8 bg-slate-50 rounded-2xl sm:rounded-3xl"
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex" />
              <span className="text-xs sm:text-sm text-slate-600">
                20+ Partners
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex" />
              <span className="text-xs sm:text-sm text-slate-600">
                5 Min Issuance
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex" />
              <span className="text-xs sm:text-sm text-slate-600">
                Doorstep Service
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════  PARTNERS SECTION  ══════════════════════════════ */}
      <section className="py-8  bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeInUp}
            className="text-center text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 sm:mb-6"
          >
            Trusted By Leading Insurers
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {partners.map((partner: string, index: number) => (
              <motion.span
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="bg-white text-slate-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-200 hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm"
              >
                {partner}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════  TESTIMONIALS SECTION  ══════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <span className="inline-block bg-amber-100 text-amber-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
              Client Stories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              What Our <span className="text-amber-500">Neighbors Say</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 px-4">
              Real stories from real people we've had the privilege to serve.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════  FINAL CTA  ══════════════════════════════ */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-indigo-400" />
        <div className="absolute inset-0 bg-black/5" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-sm inline-flex items-center gap-1 sm:gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
          >
            <HeartHandshake className="w-3 h-3 sm:w-4 sm:h-4" />
            Ready to Work With Us?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 px-4"
          >
            Experience the ATT Difference
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
          >
            Get a free quote in under 5 minutes. No pressure, no hidden fees —
            just honest advice from people who care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                className="group bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:bg-slate-100 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Free Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919730097448"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:bg-green-700 transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Us
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6 flex items-center justify-center gap-1 sm:gap-2 px-4"
          >
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex" />
            <span>
              AT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur, Hatargi Road
            </span>
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
