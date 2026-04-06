export interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  stage: string;
  fundingNeeded: number;
  equityOffered: number;
  raised: number;
  location: string;
  logo: string;
  founders: { name: string; role: string; bio: string }[];
  highlights: { label: string; value: string }[];
  pitch: string;
  tags: string[];
}

export const startups: Startup[] = [
  {
    id: "1",
    name: "GreenVolt Energy",
    description:
      "Affordable solar micro-grids for underserved rural communities across South Asia and Africa.",
    industry: "CleanTech",
    stage: "Series A",
    fundingNeeded: 2000000,
    equityOffered: 12,
    raised: 800000,
    location: "Bangalore, India",
    logo: "⚡",
    founders: [
      {
        name: "Priya Sharma",
        role: "CEO & Co-founder",
        bio: "Former solar engineer at Tesla with 8 years in renewable energy.",
      },
      {
        name: "Arun Mehta",
        role: "CTO & Co-founder",
        bio: "PhD in Electrical Engineering from IIT Bombay.",
      },
    ],
    highlights: [
      { label: "Revenue (MRR)", value: "$42K" },
      { label: "Customers", value: "1,200+" },
      { label: "YoY Growth", value: "180%" },
      { label: "Burn Rate", value: "$18K/mo" },
    ],
    pitch:
      "GreenVolt installs pay-as-you-go solar micro-grids in villages with no grid access. Our IoT-enabled meters allow households to pay via mobile money, eliminating upfront costs. We have deployed in 40 villages and are expanding to 200 by year-end.",
    tags: ["solar", "rural", "IoT", "impact"],
  },
  {
    id: "2",
    name: "MediSync AI",
    description:
      "AI-powered diagnostic assistant that helps rural doctors identify rare diseases 10× faster.",
    industry: "HealthTech",
    stage: "Seed",
    fundingNeeded: 500000,
    equityOffered: 8,
    raised: 150000,
    location: "Mumbai, India",
    logo: "🏥",
    founders: [
      {
        name: "Dr. Neha Kapoor",
        role: "CEO & Co-founder",
        bio: "MBBS + ML researcher, ex-AIIMS faculty.",
      },
      {
        name: "Vikram Nair",
        role: "Head of Engineering",
        bio: "10 years ML at Google Health.",
      },
    ],
    highlights: [
      { label: "Accuracy", value: "94.7%" },
      { label: "Diagnoses/day", value: "3,500+" },
      { label: "Partner Clinics", value: "85" },
      { label: "Funding to Date", value: "$150K" },
    ],
    pitch:
      "MediSync AI democratises specialist-level diagnostics. Our model trained on 2M anonymised records can flag 120+ rare conditions from basic symptom input. We partner with government health centres and charge a $1/diagnosis SaaS fee.",
    tags: ["AI", "healthcare", "diagnostics", "impact"],
  },
  {
    id: "3",
    name: "AgroLink",
    description:
      "B2B marketplace connecting small farmers directly to FMCG buyers, eliminating middlemen.",
    industry: "AgriTech",
    stage: "Pre-Seed",
    fundingNeeded: 300000,
    equityOffered: 15,
    raised: 50000,
    location: "Pune, India",
    logo: "🌾",
    founders: [
      {
        name: "Ramesh Patil",
        role: "CEO",
        bio: "Third-generation farmer turned entrepreneur.",
      },
      {
        name: "Sneha Joshi",
        role: "CMO",
        bio: "Ex-BigBasket growth lead.",
      },
    ],
    highlights: [
      { label: "Farmers Onboarded", value: "4,200" },
      { label: "GMV", value: "$280K" },
      { label: "Avg. Price Uplift", value: "+34%" },
      { label: "NPS", value: "82" },
    ],
    pitch:
      "AgroLink's platform uses AI-based demand forecasting so farmers know what to grow and at what price. Buyers get fresher produce 30% cheaper. We take 5% commission on every transaction.",
    tags: ["marketplace", "farming", "B2B", "supply-chain"],
  },
  {
    id: "4",
    name: "EduNova",
    description:
      "Personalised K-12 learning platform using adaptive AI to close learning gaps post-pandemic.",
    industry: "EdTech",
    stage: "Series A",
    fundingNeeded: 3000000,
    equityOffered: 10,
    raised: 2100000,
    location: "Delhi, India",
    logo: "📚",
    founders: [
      {
        name: "Ananya Singh",
        role: "CEO",
        bio: "Ex-BYJU'S product director.",
      },
      {
        name: "Rohan Gupta",
        role: "CTO",
        bio: "Carnegie Mellon CS grad, edtech pioneer.",
      },
    ],
    highlights: [
      { label: "Monthly Active Users", value: "95,000" },
      { label: "Avg. Score Improvement", value: "41%" },
      { label: "ARR", value: "$1.8M" },
      { label: "Churn Rate", value: "4.2%" },
    ],
    pitch:
      "EduNova's AI tutor adapts to each student's pace, identifies weak areas, and generates custom lesson plans. Schools pay $6/student/month. We have partnerships with 120 private schools across Tier-2 cities.",
    tags: ["education", "AI", "K-12", "adaptive-learning"],
  },
  {
    id: "5",
    name: "FinWise",
    description:
      "Neo-banking app for gig workers providing micro-loans, savings, and insurance in one place.",
    industry: "FinTech",
    stage: "Seed",
    fundingNeeded: 1000000,
    equityOffered: 9,
    raised: 400000,
    location: "Hyderabad, India",
    logo: "💳",
    founders: [
      {
        name: "Kavya Reddy",
        role: "CEO",
        bio: "Ex-RazorPay product manager.",
      },
      {
        name: "Arjun Menon",
        role: "CFO",
        bio: "CA with 12 years in microfinance.",
      },
    ],
    highlights: [
      { label: "App Downloads", value: "210K" },
      { label: "Loans Disbursed", value: "$1.4M" },
      { label: "Default Rate", value: "1.8%" },
      { label: "NPS", value: "74" },
    ],
    pitch:
      "India has 80M+ gig workers with zero access to formal credit. FinWise uses real-time income data from platforms like Swiggy and Ola to underwrite micro-loans in under 2 minutes. We earn spread on loans and premium on insurance.",
    tags: ["fintech", "gig economy", "neo-bank", "micro-loans"],
  },
  {
    id: "6",
    name: "LogiTrack",
    description:
      "Real-time last-mile logistics optimisation SaaS for e-commerce companies.",
    industry: "LogiTech",
    stage: "Series B",
    fundingNeeded: 8000000,
    equityOffered: 6,
    raised: 6000000,
    location: "Chennai, India",
    logo: "🚚",
    founders: [
      {
        name: "Siddharth Iyer",
        role: "CEO",
        bio: "Ex-Amazon Logistics VP.",
      },
      {
        name: "Meena Krishnan",
        role: "COO",
        bio: "IIM Ahmedabad, 15 yrs supply chain.",
      },
    ],
    highlights: [
      { label: "ARR", value: "$6.2M" },
      { label: "Delivery Efficiency", value: "+28%" },
      { label: "Enterprise Clients", value: "34" },
      { label: "Vehicles Tracked/Day", value: "45,000" },
    ],
    pitch:
      "LogiTrack reduces last-mile delivery costs by 28% through ML-based route optimisation and predictive vehicle maintenance. We serve 34 enterprise clients including major fashion and beauty e-commerce platforms. Seeking Series B to expand to SEA markets.",
    tags: ["logistics", "SaaS", "ML", "e-commerce"],
  },
];

export const testimonials = [
  {
    name: "Rahul Verma",
    role: "Angel Investor",
    avatar: "RV",
    text: "TrustIvest gave me access to curated deal flow I'd never find on my own. Already invested in two startups that are crushing it.",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder, GreenVolt",
    avatar: "PS",
    text: "We closed our Series A in 60 days after listing on TrustIvest. The platform's reach is incredible.",
  },
  {
    name: "Amit Khanna",
    role: "VC Partner, BlueSky Ventures",
    avatar: "AK",
    text: "The quality of startups on TrustIvest is exceptional. The due-diligence tools save my team hours every week.",
  },
  {
    name: "Sneha Joshi",
    role: "Co-founder, AgroLink",
    avatar: "SJ",
    text: "Listing on TrustIvest connected us with investors who genuinely understand our mission. Game changer.",
  },
];

export const savedStartupIds = ["1", "4"];

export const founderListings: Startup[] = [startups[0], startups[2]];
