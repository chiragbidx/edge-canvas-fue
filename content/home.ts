// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... (all type definitions remain unchanged) ...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "StayNest",
    badgeOuter: "Find Your Next Stay",
    titleBefore: "",
    titleHighlight: "Find Your Next Stay with StayNest",
    titleAfter: "",
    subtitle:
      "Discover and book unique homes and spaces from hosts around the world. Whether you're planning a weekend getaway or listing your own property, StayNest makes it simple, safe, and secure.",
    primaryCta: { label: "Get Started", href: "#cta" },
    secondaryCta: { label: "List Your Space", href: "#cta" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "Find your next stay with StayNest",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why StayNest",
    heading: "Why choose StayNest?",
    description:
      "StayNest streamlines your travel and hosting experience—our platform is designed to help you discover unique spaces, ensure trust, and simplify bookings and hosting.",
    items: [
      {
        icon: "CalendarCheck",
        title: "Effortless Booking",
        description: "Browse thousands of listings and reserve your perfect stay in minutes.",
      },
      {
        icon: "UserCheck2",
        title: "Trusted Hosts",
        description: "Connect with verified hosts and read honest reviews from past guests.",
      },
      {
        icon: "CreditCard",
        title: "Secure Payments",
        description: "Book with confidence using our safe, streamlined payment system.",
      },
      {
        icon: "Globe",
        title: "Global Selection",
        description: "From city apartments to countryside retreats—find stays for every adventure.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Why StayNest?",
    heading: "What makes StayNest unique?",
    subtitle:
      "Host with confidence, book with trust. Explore our features designed for seamless stays.",
    items: [
      { icon: "Hand", title: "Effortless Booking", description: "Reserve your perfect stay in minutes and manage reservations with ease." },
      { icon: "UserCheck2", title: "Verified Hosts", description: "Connect with trustworthy hosts, backed by transparent guest reviews." },
      { icon: "ShieldCheck", title: "Secure Payments", description: "Your payment info is protected with industry-leading security." },
      { icon: "Globe", title: "Worldwide Listings", description: "Access a diverse selection of spaces, anywhere your adventure takes you." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Core StayNest capabilities",
    subtitle:
      "StayNest is your end-to-end home for discovering, booking, and hosting unique spaces worldwide.",
    items: [
      { title: "Easy Listing Management", description: "Hosts can manage listings and track bookings—all in one hub.", pro: false },
      { title: "Flexible Search", description: "Guests can filter, sort, and discover the perfect space for any stay.", pro: false },
      { title: "Integrated Messaging", description: "Connect directly with hosts or guests for a transparent experience.", pro: false },
      { title: "Trusted Payments", description: "Handle transactions securely, every time, everywhere.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "What Our Users Say",
    heading: "What Our Users Say",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Samantha",
        role: "Traveler",
        comment: "StayNest made it so easy to find and book a beautiful apartment for my trip. The host was amazing, and I felt at home from the moment I arrived.",
        rating: 5.0
      }
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  // Team section content can remain in current form or be updated as needed
  team: {
    eyebrow: "Team",
    heading: "Meet the StayNest Team",
    members: [
      // Optional: Further customization for team section
      {
        imageUrl: "/team1.jpg",
        firstName: "Adan",
        lastName: "Asim",
        positions: ["Founder", "CEO"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple Transparent Pricing",
    subtitle: "List or book spaces for free—only pay service fees per booking.",
    priceSuffix: "",
    plans: [
      {
        title: "Guest",
        popular: true,
        price: 0,
        description: "Browse and book spaces, always free for guests.",
        buttonText: "Sign Up Free",
        benefits: ["No hidden fees", "24/7 support", "Secure payments", "Diverse stays"],
      },
      {
        title: "Host",
        popular: false,
        price: 0,
        description: "Become a host and start earning from your space.",
        buttonText: "List Your Space",
        benefits: ["Easy listing tools", "Host protection", "Payout automation", "Messaging center"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Contact the StayNest Team",
    description:
      "Questions about booking or listing? Reach out and our team will help you start your StayNest journey.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Find us", value: "Global, remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "adan@bidx.ai" },
      hours: { label: "Support hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Booking Inquiry", "Host Support", "Partnership", "Media Request"],
    formSubmitLabel: "Send Inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "StayNest FAQs",
    items: [
      { question: "How do I list my space on StayNest?", answer: "Sign up as a host, click 'List Your Space', and follow the step-by-step process to create your listing." },
      { question: "Is it free to book or list on StayNest?", answer: "Yes, guests and hosts can join for free. We charge small fees only on confirmed bookings." },
      { question: "How are hosts verified?", answer: "Hosts complete identity verification and must maintain strong ratings from guests." },
      { question: "What payment methods are supported?", answer: "We accept all major credit/debit cards and process payments securely." },
      { question: "Is my booking protected?", answer: "Yes, every booking includes guest and host protection policies for peace of mind." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "StayNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Why StayNest?", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "© 2026 StayNest. The easiest way to find your next stay.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "StayNest",
    routes: [
      { href: "/#features", label: "Why StayNest?" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "StayNest preview" },
    features: [
      { title: "Effortless Booking", description: "Browse and book stays in minutes, anywhere in the world." },
      { title: "Host Protection", description: "List confidently—you're covered with our trusted systems." },
      { title: "Messaging", description: "Connect directly with hosts or guests for clarity at every step." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "Visit GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}