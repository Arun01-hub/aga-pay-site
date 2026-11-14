export const siteConfig = {
  name: "aga-pay",
  tagline: "AI-Powered HR & Payroll for Modern Indian Businesses",
  description:
    "An AI-native HR and payroll platform for Indian businesses. Automate HR operations, simplify payroll, uncover insights, and let AI handle repetitive work — while you stay in control.",
  positioning:
    "aga-pay is not just another HRMS with a chatbot. It is an AI-native HR and payroll platform designed to make Indian payroll and HR operations simpler, safer, and more automated.",
  links: {
    login: "#",
    demo: "#ai-in-action",
    startFree: "#pricing",
  },
};

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export const heroContent = {
  badge: "AI-native HR & Payroll",
  headline: "AI-Powered HR & Payroll for",
  headlineHighlight: "Modern Indian Businesses",
  subheadline:
    "Automate HR operations, simplify payroll, uncover insights, and let AI handle repetitive work — while you stay in control.",
  primaryCta: "Get Started",
  secondaryCta: "See AI in Action",
};

export const aiWorkflowSteps = [
  { label: "Ask AI", description: "Use natural language instead of hunting through menus." },
  { label: "Upload Data", description: "Import spreadsheets and documents with AI-assisted mapping." },
  { label: "Analyze", description: "Surface patterns, exceptions, and payroll anomalies." },
  { label: "Automate", description: "Run repeatable HR and payroll workflows with guardrails." },
  { label: "Review", description: "Inspect AI-prepared outputs with full context and audit trails." },
  { label: "Approve", description: "Human sign-off on sensitive payroll and HR actions." },
  { label: "Stay in Control", description: "Business rules, permissions, and security stay in your hands." },
];

export const aiExamplePrompts = [
  {
    prompt: "Prepare September Payroll",
    description:
      "AI analyzes attendance, leave, salary changes, overtime, deductions, and payroll exceptions, then prepares the payroll for human approval.",
  },
  {
    prompt: "Why did Ravi's salary change this month?",
    description:
      "AI explains the salary difference using the actual payroll calculation and underlying records — not generic guesses.",
  },
];

export const aiLayerPoints = [
  "Understand HR and payroll data in plain language",
  "Import, organize, and validate employee and salary data",
  "Detect anomalies before payroll is finalized",
  "Prepare payroll runs for review — calculations follow your rules",
  "Explain payslips and salary changes with traceable sources",
  "Generate HR documents and answer employee questions",
  "Automate repetitive workflows with human approval where it matters",
  "Give managers insights without exporting spreadsheets",
];

export type FeatureCategoryId =
  | "ai-hr"
  | "ai-payroll"
  | "hr-payroll"
  | "indian-payroll"
  | "data-migration"
  | "security";

export const featureCategories: {
  id: FeatureCategoryId;
  title: string;
  subtitle: string;
  features: { name: string; description?: string }[];
}[] = [
  {
    id: "ai-hr",
    title: "AI-Powered HR",
    subtitle: "An intelligent layer across onboarding, attendance, leave, documents, and employee support.",
    features: [
      { name: "AI HR Assistant", description: "Ask questions and take action in natural language." },
      { name: "AI Employee Onboarding", description: "Guide new hires and HR through setup steps." },
      { name: "AI Attendance Assistant", description: "Resolve attendance queries and exceptions faster." },
      { name: "AI Leave Assistant", description: "Apply policies and balances with clear explanations." },
      { name: "AI HR Knowledge Assistant", description: "Instant answers from your HR policies and handbook." },
      { name: "AI HR Document Generator", description: "Draft letters and HR documents from templates and data." },
      { name: "AI HR Analytics", description: "Turn workforce data into actionable insights." },
      { name: "AI Management Copilot", description: "Help managers with team HR context and decisions." },
      { name: "Employee AI Assistant", description: "Self-service for payslips, leave, and HR questions." },
    ],
  },
  {
    id: "ai-payroll",
    title: "AI-Powered Payroll",
    subtitle: "Prepare and explain payroll with AI — approvals and calculations remain under your control.",
    features: [
      { name: "AI Payroll Copilot", description: "End-to-end help preparing and reviewing payroll cycles." },
      { name: "AI Payroll Preparation", description: "Consolidate inputs and draft a run for approval." },
      { name: "AI Payroll Anomaly Detection", description: "Flag outliers before amounts are finalized." },
      { name: "AI Payroll Insights", description: "Trends, cost drivers, and variance explanations." },
      { name: "AI Payslip Explainer", description: "Break down any payslip line by line." },
      { name: "AI Workflow Automation", description: "Automate recurring payroll tasks with checkpoints." },
      { name: "Human Approval Workflows", description: "Required sign-off on sensitive payroll actions." },
    ],
  },
  {
    id: "hr-payroll",
    title: "HR & Payroll",
    subtitle: "Complete core HRMS and payroll operations in one unified system.",
    features: [
      { name: "Employee Management" },
      { name: "Attendance Management" },
      { name: "Leave Management" },
      { name: "Salary Management" },
      { name: "Payroll Management" },
      { name: "Payslip Management" },
      { name: "Full & Final Settlement" },
      { name: "Salary Revision & Arrears" },
      { name: "Overtime & LOP Management" },
      { name: "Payroll Reports & Exports" },
    ],
  },
  {
    id: "indian-payroll",
    title: "Indian Payroll",
    subtitle: "Built for statutory compliance and multi-location Indian businesses.",
    features: [
      { name: "PF Support" },
      { name: "ESI Support" },
      { name: "Professional Tax Support" },
      { name: "TDS Support" },
      { name: "Financial Year Management" },
      { name: "Statutory Reports & Exports" },
      { name: "Multi-Location Support" },
      { name: "CA / Accountant Access" },
    ],
  },
  {
    id: "data-migration",
    title: "Smart Data & Migration",
    subtitle: "Move off spreadsheets and legacy tools with AI-assisted imports and validation.",
    features: [
      { name: "AI Excel/CSV Data Import", description: "Map columns and clean data with guided AI assistance." },
      { name: "AI Document Data Extraction", description: "Pull fields from HR documents into structured records." },
      { name: "Employee Data Migration" },
      { name: "Salary Data Migration" },
      { name: "Automated Data Validation", description: "Catch inconsistencies before they hit payroll." },
    ],
  },
  {
    id: "security",
    title: "Security & Control",
    subtitle: "Enterprise-grade security with explicit control over what AI can do.",
    features: [
      { name: "Role-Based Access Control" },
      { name: "Multi-Tenant Security" },
      { name: "Data Encryption" },
      { name: "Secure AI Gateway" },
      { name: "AI Action Controls" },
      { name: "Audit Logs" },
      { name: "AI Activity Audit Trail" },
      { name: "Human Approval for Sensitive Actions" },
    ],
  },
];

export const platformHighlights = [
  "Natural language across HR & payroll",
  "AI prepares — you review and approve",
  "Indian statutory compliance built in",
  "Full audit trail for AI and human actions",
];

export const benefits = [
  "Ask AI instead of clicking through complex menus",
  "Upload Excel, CSV, and documents with smart import",
  "Analyze attendance, leave, and payroll exceptions",
  "Automate onboarding, documents, and workflows",
  "Review AI-prepared payroll with full traceability",
  "Approve sensitive actions with role-based control",
];

export const trustedByLogos = [
  "Northline India",
  "BrightCo",
  "Summit HR",
  "Vertex Labs",
  "ClearPath",
  "Horizon Co",
];

export const integrations = ["Tally", "Zoho Books", "Google Workspace", "Microsoft 365"];

export const testimonials = [
  {
    quote:
      "We stopped living in spreadsheets. AI prepares our monthly payroll run, and our HR lead approves it in one sitting — PF and TDS included.",
    name: "Priya Sharma",
    role: "Head of HR",
    company: "BrightCo",
    initials: "PS",
    color: "bg-indigo-500",
  },
  {
    quote:
      "Managers ask 'why did this payslip change?' and get real answers tied to attendance and revisions. It's not a chatbot bolt-on — AI is in the workflow.",
    name: "Arjun Mehta",
    role: "Finance Director",
    company: "Summit HR",
    initials: "AM",
    color: "bg-teal-500",
  },
  {
    quote:
      "Migrating 200 employees from Excel took days, not weeks. AI import caught bad salary rows before we ran our first statutory export.",
    name: "Kavita Reddy",
    role: "COO",
    company: "ClearPath",
    initials: "KR",
    color: "bg-violet-500",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "For small teams exploring AI-assisted HR and payroll basics.",
    features: [
      "Up to 10 employees",
      "Core HR & payslips",
      "AI assistant (limited)",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: { monthly: 49, annual: 39 },
    description: "For growing Indian businesses that need full AI-native HR and payroll.",
    features: [
      "Up to 100 employees",
      "AI payroll preparation & insights",
      "PF, ESI, PT & TDS support",
      "Human approval workflows",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "For larger organizations with multi-location payroll and advanced AI controls.",
    features: [
      "Unlimited employees",
      "Secure AI gateway & audit trails",
      "CA / accountant access",
      "Custom approval policies",
      "Dedicated onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const faqItems = [
  {
    question: "Is aga-pay just a chatbot on top of an HRMS?",
    answer:
      "No. AI is embedded across HR and payroll workflows — import, preparation, anomaly detection, document generation, and explanations. Sensitive calculations and approvals still follow your business rules and authorized users.",
  },
  {
    question: "Does AI run payroll without human oversight?",
    answer:
      "No. AI can prepare payroll, highlight exceptions, and explain results, but final payroll actions require appropriate human review and approval. Audit logs capture both AI and user activity.",
  },
  {
    question: "Does aga-pay support Indian statutory payroll?",
    answer:
      "Yes. The platform supports PF, ESI, Professional Tax, TDS, financial year management, statutory reports, and multi-location operations — with CA and accountant access where you need it.",
  },
  {
    question: "Can we migrate from Excel or another HRMS?",
    answer:
      "Yes. Use AI-assisted Excel/CSV import, document extraction, and automated validation to migrate employee and salary data. We help you verify before your first live payroll run.",
  },
  {
    question: "How do employees interact with AI?",
    answer:
      "Employees can use the Employee AI Assistant for payslip questions, leave balances, and policy answers — grounded in your data and permissions, not generic responses.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. Start on the Starter plan at no cost, or try Growth features with a 14-day trial. No credit card required to get started.",
  },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "AI in action", href: "#ai-in-action" },
    { label: "Security", href: "#features" },
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
