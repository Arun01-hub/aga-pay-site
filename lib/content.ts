export const siteConfig = {
  name: "aga-pay",
  tagline: "Payroll & HR, made remarkably simple",
  description:
    "Manage employees, payroll, attendance and more from one simple platform. Built for growing businesses.",
  links: {
    login: "#",
    demo: "#pricing",
    startFree: "#pricing",
  },
};

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export const features = [
  {
    title: "Payroll",
    description:
      "Run payroll in minutes with automated tax calculations, direct deposits, and payslip generation.",
    icon: "wallet" as const,
  },
  {
    title: "Employees",
    description:
      "Centralize employee records, onboarding, documents, and org structure in one place.",
    icon: "users" as const,
  },
  {
    title: "Attendance",
    description:
      "Track time, leave, and shifts with real-time visibility for managers and HR teams.",
    icon: "clock" as const,
  },
];

export const platformHighlights = [
  "Automated payroll runs",
  "Real-time sync across modules",
  "Compliance-ready reports",
  "Role-based permissions",
];

export const benefits = [
  "Automated payroll",
  "Employee management",
  "Reports & compliance",
  "Role-based access",
];

export const trustedByLogos = [
  "Northline",
  "BrightCo",
  "Summit HR",
  "Vertex Labs",
  "ClearPath",
  "Horizon Co",
];

export const integrations = ["QuickBooks", "Slack", "Google Workspace", "Microsoft 365"];

export const testimonials = [
  {
    quote:
      "aga-pay cut our payroll processing time by 70%. What used to take two days now takes a couple of hours.",
    name: "Sarah Chen",
    role: "HR Director",
    company: "BrightCo",
    initials: "SC",
    color: "bg-indigo-500",
  },
  {
    quote:
      "The attendance and leave tracking alone saved us countless spreadsheets. Everything just works together.",
    name: "James Okonkwo",
    role: "Operations Manager",
    company: "Summit HR",
    initials: "JO",
    color: "bg-teal-500",
  },
  {
    quote:
      "We onboarded 40 employees in a week without chaos. The platform is intuitive enough that our team needed minimal training.",
    name: "Maria Lopez",
    role: "CEO",
    company: "ClearPath",
    initials: "ML",
    color: "bg-violet-500",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "For small teams getting started with payroll and HR basics.",
    features: [
      "Up to 10 employees",
      "Basic payroll runs",
      "Employee directory",
      "Email support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: { monthly: 49, annual: 39 },
    description: "For growing businesses that need full HR and payroll automation.",
    features: [
      "Up to 100 employees",
      "Automated payroll & tax",
      "Attendance & leave tracking",
      "Reports & compliance",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "For large organizations with custom workflows and dedicated support.",
    features: [
      "Unlimited employees",
      "Custom integrations",
      "Advanced permissions",
      "Dedicated account manager",
      "SLA & onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "How long does it take to set up aga-pay?",
    answer:
      "Most teams are up and running within a day. Import your employee data, configure payroll settings, and you're ready to run your first payroll cycle.",
  },
  {
    question: "Can I migrate from my current payroll system?",
    answer:
      "Yes. We support CSV imports and can help migrate employee records, leave balances, and historical payroll data during onboarding.",
  },
  {
    question: "Is aga-pay compliant with local tax regulations?",
    answer:
      "aga-pay handles tax calculations, statutory deductions, and generates compliance-ready reports. Specific regulations vary by region — contact us for details on your jurisdiction.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. The Growth plan includes a 14-day free trial with full access to all features. No credit card required to start.",
  },
  {
    question: "Can I manage multiple locations or departments?",
    answer:
      "Absolutely. Use departments, locations, and role-based access to manage teams across your organization from a single dashboard.",
  },
  {
    question: "What support options are available?",
    answer:
      "Starter plans include email support. Growth plans get priority support, and Enterprise customers receive a dedicated account manager and SLA.",
  },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#product" },
    { label: "Security", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
