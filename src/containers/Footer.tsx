import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import {
  Phone,
  
  MapPin,
  Clock,
  Shield,
  ExternalLink,
  MessageCircle,
} from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────────────────
const quickLinks = [
  { label: 'Home',       path: '/'         },
  { label: 'About Us',   path: '/about'    },
  { label: 'Services',   path: '/services' },
  { label: 'Our Team',   path: '/team'     },
  { label: 'Contact Us', path: '/contact'  },
  { label: 'FAQ', path: '/faq'  },
]

const serviceLinks = [
  'Two-Wheeler Insurance',
  'Four-Wheeler Insurance',
  'Tractor Insurance',
  'Commercial Vehicle',
  'Three-Wheeler Insurance',
  'Electric Vehicle Insurance',
]

const partners = [
  'TATA AIG',
  'Digit',
  'Reliance Capital',
  'Future Generali',
  'Bajaj Allianz',
  'ICICI Lombard',
  'Shriram GI',
  'HDFC ERGO',
]

const contactInfo = [
  {
    icon:     <Phone         className="w-4 h-4" />,
    label:    'Phone 1',
    value:    '+91 9730097448',
    href:     'tel:+919730097448',
    external: false,
  },
  {
    icon:     <Phone         className="w-4 h-4" />,
    label:    'Phone 2',
    value:    '+91 7083786975',
    href:     'tel:+917083786975',
    external: false,
  },
  {
    icon:     <MessageCircle className="w-4 h-4" />,
    label:    'WhatsApp one',
    value:    'Chat on WhatsApp',
    href:     'https://wa.me/919730097448',
    external: true,
  },
  {
    icon:     <MessageCircle className="w-4 h-4" />,
    label:    'WhatsApp two',
    value:    'Chat on WhatsApp',
    href:     'https://wa.me/917083786975',
    external: true,
  },
 
  {
    icon:     <MapPin        className="w-4 h-4" />,
    label:    'Address',
    value:    'ATT Terani – 416506, Tal Gadhinglaj, Dist Kolhapur, Hatargi Road',
    href:     'https://maps.app.goo.gl/uBdyZPab7LMx255N8',
    external: true,
  },
]

const footerLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Use', path: '/terms-of-use' },
]
// ── Component ─────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B1120' }} className="text-white">

    

      {/* ══════════════════  MAIN FOOTER BODY  ═════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1: Brand ────────────────────────────────────────── */}
          <div className="space-y-5">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group w-fit"
            >
              <div className="w-11 h-11 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200 ">
                <Shield className="w-5 h-5" style={{ color: '#0B1120' }} />
              </div>
              <div className="leading-none">
                <p className="font-heading font-black text-xl text-white mb-1">
                  Chadedar<span className="text-yellow-400">Insurance</span>
                </p>
                <p className="text-yellow-500 text-[10px] tracking-[0.2em] uppercase opacity-60">
                  Vehicle Protection
                </p>
              </div>
            </Link>

            <p className="text-white text-sm leading-relaxed opacity-40">
              Your trusted vehicle insurance partner in Kolhapur. We make
              insurance simple, affordable, and stress-free for every Indian.
            </p>

            {/* Advisor card */}
            <div
              className="rounded-2xl p-4 space-y-2 border"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderColor:     'rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                Your Advisor
              </p>
              <p className="text-white font-bold text-sm">Tashrif Chadedar</p>
              <a
                href="tel:+919730097448"
                className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 hover:text-yellow-400 transition-all duration-200"
                style={{ color: 'white' }}
              >
                <Phone className="w-3.5 h-3.5" />
                +91 9730097448
              </a>
            </div>
            <div
              className="rounded-2xl p-4 space-y-2 border"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderColor:     'rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                Your Advisor
              </p>
              <p className="text-white font-bold text-sm">Gouspak Chadedar</p>
              <a
                href="tel:+91708378975"
                className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 hover:text-yellow-400 transition-all duration-200"
                style={{ color: 'white' }}
              >
                <Phone className="w-3.5 h-3.5" />
                +91 708378975
              </a>
            </div>

           
          </div>

          {/* ── Col 2: Quick Links + Office Hours ───────────────────── */}
          <div className="space-y-6">
            <div>
              <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="flex items-center gap-2.5 text-sm transition-all duration-200 group"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#FACC15')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      <span
                        className="w-5 h-5 rounded-md flex items-center justify-center text-yellow-400 text-xs  transition-colors duration-200"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Hours */}
            <div
              className="border-t pt-5"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Office Hours
              </h4>
              <ul className="space-y-2">
                {[
                  { day: 'Mon – Fri',  time: '9:00 AM – 7:00 PM',  closed: false },
                  { day: 'Saturday',   time: '10:00 AM – 5:00 PM', closed: false },
                  { day: 'Sunday',     time: 'Closed',              closed: true  },
                ].map(row => (
                  <li key={row.day} className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {row.day}
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: row.closed ? '#f87171' : 'rgba(255,255,255,0.7)' }}
                    >
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Live badge */}
              <div
                className="mt-4 flex items-center gap-2 rounded-xl px-3 py-2.5"
                style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex" />
                <span className="text-green-400 text-xs font-semibold">
                  We're open now · Mon–Sat
                </span>
              </div>
            </div>
          </div>

          {/* ── Col 3: Services + Partners ──────────────────────────── */}
          <div className="space-y-6">
            <div>
              <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map(s => (
                  <li key={s}>
                    <Link
                      to="/services"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="flex items-center gap-2.5 text-sm transition-all duration-200"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#FACC15')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      <span
                        className="w-5 h-5 rounded-md flex items-center justify-center text-yellow-400 text-xs "
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        ›
                      </span>
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner logos */}
            <div
              className="border-t pt-5"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                Our Partners
              </h4>
              <div className="grid grid-cols-2 gap-1.5">
                {partners.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-lg px-2 py-2 text-center cursor-default transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border:          '1px solid rgba(255,255,255,0.07)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(250,204,21,0.1)'
                      ;(e.currentTarget as HTMLDivElement).style.borderColor    = 'rgba(250,204,21,0.25)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.05)'
                      ;(e.currentTarget as HTMLDivElement).style.borderColor    = 'rgba(255,255,255,0.07)'
                    }}
                  >
                    <span className="text-[10px] font-semibold leading-tight"
                          style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Col 4: Contact Info ──────────────────────────────────── */}
          <div className="space-y-5">
            <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[0.2em]">
              Contact Us
            </h4>

            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 group transition-all duration-200"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-yellow-400  mt-0.5 transition-all duration-200 group-hover:bg-yellow-400 group-hover:text-black"
                      style={{
                        backgroundColor: 'rgba(250,204,21,0.1)',
                        border:          '1px solid rgba(250,204,21,0.2)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                        style={{ color: 'rgba(255,255,255,0.25)' }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm leading-snug break-all transition-colors duration-200 group-hover:text-yellow-400"
                        style={{ color: 'rgba(255,255,255,0.6)' }}
                      >
                        {item.value}
                        {item.external && (
                          <ExternalLink className="w-3 h-3 inline ml-1 opacity-30" />
                        )}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Lottie success widget */}
            <div
              className="rounded-2xl p-4 flex items-center gap-3 mt-2"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border:          '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="w-25 h-auto flex">
                <Player
                  autoplay
                  loop
                  src="https://assets1.lottiefiles.com/packages/lf20_jbrw3hcz.json"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">95% Claim Success</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  We settle claims fast & hassle-free
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════  PARTNERS ROW  ══════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-xs uppercase tracking-widest font-bold mb-5"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Authorized Agent For
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {partners.map((p, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-4 py-2 rounded-full cursor-default transition-all duration-200 hover:text-yellow-400 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border:          '1px solid rgba(255,255,255,0.1)',
                  color:           'rgba(255,255,255,0.35)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(250,204,21,0.35)'
                  ;(e.currentTarget as HTMLSpanElement).style.backgroundColor = 'rgba(250,204,21,0.08)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(255,255,255,0.1)'
                  ;(e.currentTarget as HTMLSpanElement).style.backgroundColor = 'rgba(255,255,255,0.05)'
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════  BOTTOM BAR  ════════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.2)' }}>
              © {new Date().getFullYear()} ChadedarInsurance — Tashrif Chadedar. All rights reserved.
            </p>

           <div className="flex items-center gap-4">
  {footerLinks.map((link, i, arr) => (
    <span key={link.path} className="flex items-center gap-4">
      <Link
        to={link.path}
        onClick={()=>scrollTo({top:0,behavior:"smooth"})}
        className="text-xs transition-colors duration-200 hover:text-yellow-400"
        style={{ color: 'rgba(255,255,255,0.2)' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#FACC15')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
      >
        • {link.name}
      </Link>
      {i < arr.length - 1 && (
        <span style={{ color: 'rgba(255,255,255,0.08)' }}>·</span>
      )}
    </span>
  ))}
</div>

            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-yellow-400 opacity-50" />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
                IRDAI Registered Agent
              </span>
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}