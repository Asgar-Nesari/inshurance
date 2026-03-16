import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import Accident from "@/animation/Accident Insurance.json";
import tashrifImage from "@/assets/images/tashrif.jpeg"; // Replace with actual path
import amitImage from "@/assets/images/gouswhite.jpeg"; // Replace with actual path
import {
  Shield,
  Phone,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Award,
  Users,
  MapPin,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

// ── Counter hook ──────────────────────────────────────────────────────────
function useCounter(target: number, started: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, started]);
  return val;
}

// ── Animation Variants ────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ── Data ──────────────────────────────────────────────────────────────────
const vehicles = [
  {
    icon: "🏍️",
    label: "Two-Wheeler",
    desc: "Bikes & Scooters",
    color: "from-blue-500 to-blue-400",
  },
  {
    icon: "🚗",
    label: "Four-Wheeler",
    desc: "Cars & SUVs",
    color: "from-purple-500 to-purple-400",
  },
  {
    icon: "🚜",
    label: "Tractor",
    desc: "Farm Vehicles",
    color: "from-green-500 to-green-400",
  },
  {
    icon: "🚛",
    label: "Commercial",
    desc: "Trucks & Buses",
    color: "from-orange-500 to-orange-400",
  },
  {
    icon: "🛺",
    label: "Three-Wheeler",
    desc: "Auto Rickshaws",
    color: "from-pink-500 to-pink-400",
  },
  {
    icon: "⚡",
    label: "Electric",
    desc: "EV Insurance",
    color: "from-cyan-500 to-cyan-400",
  },
];

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Vehicles Insured",
    icon: <Shield className="w-5 h-5" />,
    color: "yellow",
  },
  {
    value: 8,
    suffix: "+",
    label: "Years Experience",
    icon: <Award className="w-5 h-5" />,
    color: "blue",
  },
  {
    value: 95,
    suffix: "%",
    label: "Claim Success",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "green",
  },
  {
    value: 100,
    suffix: "+",
    label: "Insurance Partners",
    icon: <Users className="w-5 h-5" />,
    color: "purple",
  },
];

const services = [
  {
    icon: "🏍️",
    title: "Two-Wheeler Insurance",
    desc: "Complete protection for bikes, scooters & motorcycles at unbeatable premiums.",
    features: [
      "Third-party liability",
      "Own damage cover",
      "Theft protection",
      "Personal accident",
    ],
    color: "blue",
    popular: true,
  },
  {
    icon: "🚗",
    title: "Four-Wheeler Insurance",
    desc: "Comprehensive car & SUV coverage with zero depreciation add-ons available.",
    features: [
      "Zero depreciation",
      "Engine protection",
      "Roadside assistance",
      "NCB protection",
    ],
    color: "purple",
    popular: true,
  },
  {
    icon: "🚜",
    title: "Tractor Insurance",
    desc: "Specialized agricultural vehicle coverage tailored for Maharashtra farmers.",
    features: [
      "Field use cover",
      "Driver accident",
      "Fire & theft",
      "Implements cover",
    ],
    color: "green",
    popular: false,
  },
  {
    icon: "🚛",
    title: "Commercial Vehicle",
    desc: "Trucks, buses, goods carriers — complete fleet solutions at great rates.",
    features: [
      "Goods in transit",
      "Fleet discount",
      "Driver cover",
      "Permit assistance",
    ],
    color: "orange",
    popular: false,
  },
  {
    icon: "🛺",
    title: "Three-Wheeler",
    desc: "Auto-rickshaws and e-rickshaws with full passenger liability protection.",
    features: [
      "Passenger liability",
      "CNG kit cover",
      "Personal accident",
      "Permit help",
    ],
    color: "pink",
    popular: false,
  },
  {
    icon: "⚡",
    title: "Electric Vehicle",
    desc: "Future-ready EV insurance covering battery, motor, and charging equipment.",
    features: [
      "Battery coverage",
      "EV garage network",
      "Zero emission",
      "Charging cover",
    ],
    color: "cyan",
    popular: false,
  },
];

const steps = [
  {
    icon: <Phone className="w-6 h-6" />,
    num: "01",
    title: "Share Your Details",
    desc: "Tell us about your vehicle — type, registration number and usage.",
    color: "from-yellow-400 to-yellow-300",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    num: "02",
    title: "Compare Best Plans",
    desc: "We instantly compare quotes from 20+ top insurers for the best deal.",
    color: "from-green-400 to-green-300",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    num: "03",
    title: "Get Covered Instantly",
    desc: "Pay online and receive your policy document within minutes.",
    color: "from-purple-400 to-purple-300",
  },
];

const partners = [
  { name: "TATA AIG", short: "TATA", color: "bg-blue-600", text: "text-white" },
  { name: "Digit", short: "DIGIT", color: "bg-purple-600", text: "text-white" },
  {
    name: "Bajaj Allianz",
    short: "BAJAJ",
    color: "bg-red-600",
    text: "text-white",
  },
  {
    name: "ICICI Lombard",
    short: "ICICI",
    color: "bg-orange-600",
    text: "text-white",
  },
  {
    name: "HDFC ERGO",
    short: "HDFC",
    color: "bg-indigo-700",
    text: "text-white",
  },
  { name: "Reliance", short: "REL", color: "bg-green-600", text: "text-white" },
  {
    name: "Shriram GI",
    short: "SHRI",
    color: "bg-amber-600",
    text: "text-white",
  },
  {
    name: "Future Generali",
    short: "FG",
    color: "bg-cyan-600",
    text: "text-white",
  },
];

const testimonials = [
  {
    name: "Rajesh Patil",
    vehicle: "Mahindra Bolero",
    rating: 5,
    comment:
      "Tashrif bhai got me the best deal on my truck. Claim was settled in just 3 days!",
    avatar: "RP",
    location: "Kolhapur",
    image: null,
  },
  {
    name: "Sunita Deshpande",
    vehicle: "Mahindra Tractor",
    rating: 5,
    comment:
      "Knows tractor insurance inside out. Saved me ₹5000 on renewal. Highly recommended!",
    avatar: "SD",
    location: "Gadhinglaj",
    image: null,
  },
  {
    name: "Amit Kulkarni",
    vehicle: "Honda City",
    rating: 5,
    comment:
      "Zero depreciation at an amazing price. Full hailstorm repair fully covered.",
    avatar: "AK",
    location: "Sangli",
    image: null,
  },
  {
    name: "Meena Patil",
    vehicle: "Bajaj Auto",
    rating: 5,
    comment:
      "Best deal for my auto with passenger liability. Very transparent service.",
    avatar: "MP",
    location: "Ichalkaranji",
    image: null,
  },
];

// ── Team Data with Real Images ────────────────────────────────────────────
const team = [
  {
    name: "Tashrif Chadedar",
    role: "Founder & Senior Advisor",
    phone: "+91 9730097448",
    avatar: "TC",
    image: tashrifImage, // Real image
    specialization: ["All Vehicle", "Commercial", "Fleet", "Tractor"],
    exp: "5+ Years",
    clients: "2500+",
    quote: "Insurance is about trust. I treat every client like family.",
    color: "yellow",
  },
  {
    name: "Gouspak Chadedar",
    role: "Co-founder & Claims Expert",
    phone: "+91 7083786975",
    avatar: "AP",
    image: amitImage, // Real image
    specialization: [, "Four-Wheeler", "Two-Wheeler", "EV", "Claims"],
    exp: "3+ Years",
    clients: "1800+",
    quote: "I fight for every claim as if it's my own.",
    color: "slate",
  },
];

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "5-Minute Issuance",
    desc: "Policy in your inbox instantly",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Personal Support",
    desc: "Real humans, not bots",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Claim Assistance",
    desc: "We handle everything for you",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Doorstep Service",
    desc: "Free home visits available",
  },
];

// ── Stat Card Component with Motion ───────────────────────────────────────
const StatCard = ({
  s,
  statsVisible,
}: {
  s: (typeof stats)[0];
  statsVisible: boolean;
  index: number;
}) => {
  const count = useCounter(s.value, statsVisible);
  const colors = {
    yellow: "bg-yellow-100 text-yellow-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className={`w-12 h-12 ${colors[s.color as keyof typeof colors]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {s.icon}
      </div>
      <motion.p
        className="font-black text-3xl lg:text-4xl text-slate-900 leading-none"
        key={count}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {count}
        <span className={`text-${s.color}-500`}>{s.suffix}</span>
      </motion.p>
      <p className="text-slate-500 font-medium mt-2 text-sm">{s.label}</p>
    </motion.div>
  );
};

// ── Service Card Component with Motion ────────────────────────────────────
const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
      linear: "from-blue-500 to-blue-400",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
      linear: "from-purple-500 to-purple-400",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-100",
      linear: "from-green-500 to-green-400",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-100",
      linear: "from-orange-500 to-orange-400",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      border: "border-pink-100",
      linear: "from-pink-500 to-pink-400",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      border: "border-cyan-100",
      linear: "from-cyan-500 to-cyan-400",
    },
  };
  const color = colors[service.color as keyof typeof colors];
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Top linear bar with animation */}
      <motion.div
        className={`h-2 bg-linear-to-r ${color.linear}`}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      />

      <div className="p-8">
        {/* Icon and Popular Badge */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-16 h-16 ${color.bg} rounded-2xl flex items-center justify-center text-4xl`}
          >
            {service.icon}
          </motion.div>
          {service.popular && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
              className="bg-yellow-100 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
            >
              <Star className="w-3 h-3 fill-yellow-600" />
              Popular
            </motion.span>
          )}
        </div>

        <motion.h3
          className="font-black text-slate-900 text-xl mb-2 group-hover:text-yellow-600 transition-colors"
          variants={fadeInUp}
        >
          {service.title}
        </motion.h3>
        <motion.p className="text-slate-500 text-sm mb-6" variants={fadeInUp}>
          {service.desc}
        </motion.p>

        {/* Features */}
        <motion.ul
          className="space-y-3 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {service.features.map((f, j) => (
            <motion.li
              key={j}
              variants={fadeInUp}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-sm"
            >
              <div
                className={`w-5 h-5 ${color.bg} rounded-full flex items-center justify-center`}
              >
                <CheckCircle className={`w-3 h-3 ${color.text}`} />
              </div>
              <span className="text-slate-600">{f}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link
            to="/contact"
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 font-bold text-sm group/link"
          >
            <span className={color.text}>contact</span>
            <ChevronRight
              className={`w-4 h-4 ${color.text} group-hover/link:translate-x-1 transition-transform`}
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ── Team Card Component with Motion and Real Images ───────────────────────
const TeamCard = ({ member }: { member: (typeof team)[0]; index: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Header with gradient and animated pattern */}
      <motion.div
        className={`h-24 bg-linear-to-r ${member.color === "yellow" ? "from-yellow-400 to-yellow-300" : "from-slate-800 to-slate-700"} relative overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.2) 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="px-6 pb-6 -mt-12">
        {/* Avatar with Real Image */}
        <motion.div
          className="relative w-fit mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className={`w-20 h-20 rounded-2xl bg-linear-to-br ${member.color === "yellow" ? "from-yellow-400 to-yellow-300" : "from-slate-800 to-slate-700"} p-1`}
          >
            <div className="w-full h-full bg-white rounded-xl overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    className={`text-2xl font-black ${member.color === "yellow" ? "text-slate-900" : "text-slate-900"}`}
                  >
                    {member.avatar}
                  </span>
                </div>
              )}
            </div>
          </div>
          <motion.div
            className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Info */}
        <motion.h3
          className="font-black text-slate-900 text-xl"
          variants={fadeInUp}
        >
          {member.name}
        </motion.h3>
        <motion.p
          className="text-yellow-500 font-semibold text-sm mt-0.5 mb-3"
          variants={fadeInUp}
        >
          {member.role}
        </motion.p>
        <motion.p
          className="text-slate-500 text-sm italic mb-4"
          variants={fadeInUp}
        >
          "{member.quote}"
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex items-center gap-4 mb-4"
          variants={fadeInUp}
        >
          <div>
            <p className="font-black text-slate-900 text-lg">{member.exp}</p>
            <p className="text-slate-400 text-xs">Experience</p>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div>
            <p className="font-black text-slate-900 text-lg">
              {member.clients}
            </p>
            <p className="text-slate-400 text-xs">Clients</p>
          </div>
        </motion.div>

        {/* Specializations */}
        <motion.div
          className="flex flex-wrap gap-2 mb-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {member.specialization.map((s) => (
            <motion.span
              key={s}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div
          className="space-y-2 border-t border-slate-100 pt-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href={`tel:${member.phone}`}
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="flex items-center justify-center gap-2 w-full bg-slate-900 text-yellow-400 font-bold py-3 rounded-xl transition-all duration-300 text-sm"
          >
            <Phone className="w-4 h-4" />
            {member.phone}
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ── Testimonial Card Component with Motion ────────────────────────────────
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
    >
      {/* Quote mark with animation */}
      <motion.div
        className="absolute top-4 right-4 text-6xl font-black text-yellow-100 select-none"
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        "
      </motion.div>

      {/* Stars */}
      <motion.div
        className="flex gap-1 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {Array.from({ length: 5 }).map((_, j) => (
          <motion.div
            key={j}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + j * 0.1 }}
          >
            <Star
              className={`w-4 h-4 ${j < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="text-slate-600 text-sm leading-relaxed mb-6"
        variants={fadeInUp}
      >
        "{testimonial.comment}"
      </motion.p>

      <motion.div className="flex items-center gap-3" variants={fadeInUp}>
        <motion.div
          whileHover={{ rotate: 10 }}
          className="w-10 h-10 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center text-slate-900 font-bold"
        >
          {testimonial.avatar}
        </motion.div>
        <div>
          <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
          <p className="text-slate-400 text-xs">
            {testimonial.vehicle} • {testimonial.location}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────
const Home = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const heroControls = useAnimation();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
  }, [heroControls, heroInView]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ═══════════════════════════  MODERN HERO WITH MOTION  ═══════════════════ */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        className="relative pt-28 pb-20 overflow-hidden bg-linear-to-br from-slate-50 via-white to-yellow-50"
      >
        {/* Animated background with motion */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content with staggered animations */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Sparkles className="w-4 h-4" />
                India's Trusted Vehicle Insurer
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight"
              >
                Protect{" "}
                <span className="relative">
                  <span className="text-yellow-500">Every Vehicle</span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 300 8"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
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
                <br />
                You Drive
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-600 mb-8 max-w-lg"
              >
                From bikes to tractors, city cars to commercial fleets — get
                covered fast, affordably, and stress-free with personalized
                advice from real experts.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 mb-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="group bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Shield className="w-5 h-5" />
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://wa.me/919730097448"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </motion.div>
              </motion.div>

              {/* Vehicle Grid */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-3 gap-3"
              >
                {vehicles.map((v) => (
                  <motion.div
                    key={v.label}
                    variants={scaleIn}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group flex flex-col lg:flex-row justify-center items-center gap-2 p-3 rounded-xl border border-slate-200 hover:border-yellow-400 transition-all duration-300 cursor-default bg-white/50 backdrop-blur-sm"
                  >
                    <span className="text-2xl">{v.icon}</span>
                    <div>
                      <p className="text-slate-900 font-bold text-sm leading-none">
                        {v.label}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Lottie Card with animations */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
              >
                {/* Top bar */}
                <motion.div
                  className="h-2 bg-linear-to-r from-yellow-400 to-yellow-300"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="font-bold text-slate-900">
                        Active Coverage
                      </p>
                      <p className="text-sm text-slate-500">
                        All vehicle types
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-green-600 text-xs font-semibold">
                        LIVE
                      </span>
                    </motion.div>
                  </div>

                  {/* Lottie */}
                  <motion.div
                    className="rounded-2xl bg-slate-50 p-4 mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Player
                      autoplay
                      loop
                      src={Accident}
                      style={{ width: "100%", height: "240px" }}
                    />
                  </motion.div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((f, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                          {f.icon}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-900">
                            {f.title}
                          </p>
                          <p className="text-xs text-slate-500">{f.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards with continuous animation */}
              <motion.div
                variants={floatAnimation}
                initial="initial"
                animate="animate"
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
                  ✅
                </div>
                <div>
                  <p className="font-bold text-slate-900">Instant Policy</p>
                  <p className="text-xs text-slate-500">In under 5 minutes</p>
                </div>
              </motion.div>

              <motion.div
                variants={floatAnimation}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-2 bg-yellow-400 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 z-10"
              >
                <Star className="w-5 h-5 text-slate-900 fill-slate-900" />
                <div>
                  <p className="text-slate-900 font-bold text-sm">4.9 / 5</p>
                  <p className="text-slate-700 text-xs">1,200+ reviews</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════  STATS SECTION  ══════════════════════════════ */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={statsVisible ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <StatCard key={i} s={s} statsVisible={statsVisible} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════  SERVICES SECTION  ══════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              <Shield className="w-4 h-4 inline mr-1" />
              What We Cover
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-black text-slate-900 mb-4"
            >
              Insurance for{" "}
              <span className="text-yellow-500">Every Vehicle</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600">
              Whatever you drive or ride, we have the perfect plan —
              comprehensive coverage at competitive premiums.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-3 bg-slate-900 text-yellow-400 px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300 group"
              >
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════  TEAM SECTION WITH REAL IMAGES  ═══════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              <Users className="w-4 h-4 inline mr-1" />
              Meet Your Advisors
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-black text-slate-900 mb-4"
            >
              Real Experts, <span className="text-yellow-500">Real People</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600">
              You're not talking to a bot. Our advisors personally handle every
              client — from quote to claim.
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Team Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/team"
                onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-yellow-400 font-bold px-8 py-3.5 rounded-xl transition-all duration-300"
              >
                View Full Team Profiles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════  HOW IT WORKS  ══════════════════════════════ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-yellow-400/20"
            >
              <Zap className="w-4 h-4 inline mr-1" />
              Simple Process
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-black text-white mb-4"
            >
              Insured in <span className="text-yellow-400">3 Easy Steps</span>
            </motion.h2>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute top-16 left-[20%] h-0.5 bg-linear-to-r from-transparent via-yellow-400/30 to-transparent"
            />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2, duration: 0.5 },
                  },
                }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-r ${step.color} flex items-center justify-center text-slate-900 shadow-lg relative z-10`}
                >
                  {step.icon}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                    className="absolute -top-2 -right-2 w-7 h-7 bg-slate-900 border-2 border-yellow-400 rounded-full flex items-center justify-center text-yellow-400 font-bold text-xs"
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
                <h3 className="font-bold text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-3 bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300 group"
              >
                Start Now — It's Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════  PARTNERS SECTION  ══════════════════════════════ */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-bold text-slate-400 uppercase tracking-wider mb-8"
          >
            Authorized Agents For
          </motion.p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {partners.map((p, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 hover:border-yellow-400 transition-all duration-300 bg-white"
              >
                <div
                  className={`w-10 h-10 ${p.color} rounded-lg flex items-center justify-center ${p.text} text-xs font-bold`}
                >
                  {p.short}
                </div>
                <span className="text-slate-600 text-xs text-center font-medium">
                  {p.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════  TESTIMONIALS  ══════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              <Star className="w-4 h-4 inline mr-1" />
              Client Stories
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-black text-slate-900 mb-4"
            >
              Loved by <span className="text-yellow-500">Our Customers</span>
            </motion.h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.5 }}
            className="text-center mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-4 bg-white border border-yellow-100 rounded-2xl px-6 py-4 shadow-lg"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <div className="border-l border-slate-200 pl-4">
                <p className="font-black text-slate-900 text-xl">4.9 / 5</p>
                <p className="text-slate-400 text-xs">
                  Based on 1,200+ reviews
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════  FINAL CTA  ══════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-yellow-300"></div>
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Decorative circles with animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-slate-900/10 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <Clock className="w-4 h-4" />
            Get Covered in Under 5 Minutes
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Ready to Protect Your Vehicle Today?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto"
          >
            Call or WhatsApp Tashrif directly — get your quote instantly with no
            paperwork, no waiting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+919730097448"
                className="group bg-slate-900 text-yellow-400 px-8 py-4 rounded-xl font-black text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +91 9730097448
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/919730097448"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 text-white px-8 py-4 rounded-xl font-black text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-slate-800 text-sm mt-6 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            AT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur, Hatargi Road
          </motion.p>
        </div>
      </motion.section>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default Home;
