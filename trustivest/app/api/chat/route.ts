import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Mock responses for when OpenAI key is not available
function getMockReply(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes("invest") && (msg.includes("how") || msg.includes("start"))) {
    return "To start investing on TrustIvest: 1) Create an investor account, 2) Browse our curated startup marketplace, 3) Filter by industry & stage, 4) Review the startup pitch deck, and 5) Click 'Invest Now' on any startup page. Our platform handles all due diligence documentation!";
  }
  if (msg.includes("startup") && (msg.includes("list") || msg.includes("add") || msg.includes("register"))) {
    return "Listing your startup is easy! Head to the Founder Dashboard, click 'Add New Listing', fill in your company details, funding requirements, and equity offer. Our team reviews listings within 48 hours. 🚀";
  }
  if (msg.includes("health") || msg.includes("medisync") || msg.includes("medical")) {
    return "We have some exciting HealthTech startups! Check out **MediSync AI** — an AI-powered diagnostic assistant helping rural doctors identify rare diseases 10× faster. They're raising $500K at 8% equity in their Seed round. Visit /startup/2 for full details!";
  }
  if (msg.includes("clean") || msg.includes("green") || msg.includes("solar") || msg.includes("energy")) {
    return "For CleanTech, **GreenVolt Energy** is a standout! They build affordable solar micro-grids for rural communities and are raising $2M in their Series A at 12% equity. 180% YoY growth! See /startup/1 for the full pitch.";
  }
  if (msg.includes("fintech") || msg.includes("finance") || msg.includes("bank")) {
    return "In FinTech, **FinWise** is revolutionizing banking for gig workers — micro-loans, savings, and insurance in one app. They're in their Seed stage raising $1M at 9% equity with 210K downloads. Details at /startup/5.";
  }
  if (msg.includes("edtech") || msg.includes("education") || msg.includes("learn")) {
    return "Check out **EduNova** in EdTech! Their adaptive AI platform is closing learning gaps for K-12 students. $1.8M ARR, raising $3M Series A at 10% equity. Visit /startup/4 for the full story.";
  }
  if (msg.includes("agri") || msg.includes("farm") || msg.includes("agriculture")) {
    return "**AgroLink** is transforming agriculture — a B2B marketplace connecting farmers to FMCG buyers, increasing farmer income by 34%. Pre-Seed stage raising $300K at 15% equity. See /startup/3.";
  }
  if (msg.includes("best") || msg.includes("recommend") || msg.includes("suggest")) {
    return "Based on current traction, I'd highlight these top picks:\n• **GreenVolt** (CleanTech, 180% growth) — great impact investment\n• **EduNova** (EdTech, $1.8M ARR) — strong revenue\n• **LogiTrack** (Logistics, $6.2M ARR) — late-stage stability\n\nWould you like details on any of these?";
  }
  if (msg.includes("risk") || msg.includes("safe")) {
    return "All investments carry risk. On TrustIvest, we help you manage it by: providing verified financial data, stage-appropriate due diligence docs, founder background checks, and transparent cap tables. Later-stage startups (Series A+) typically carry lower risk than Pre-Seed.";
  }
  if (msg.includes("equity") || msg.includes("return") || msg.includes("roi")) {
    return "Equity offered on our platform ranges from 6–15%. Returns depend on the startup's exit (acquisition or IPO). Early-stage (Pre-Seed/Seed) offers higher equity but higher risk. Series A/B offers lower equity but more traction. Diversifying across 5–10 startups is a common strategy.";
  }
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hello! 👋 I'm TrustBot, your AI investment guide. I can help you:\n• Find startups matching your interests\n• Understand investment terms\n• Guide you through the investment process\n• Help founders list their business\n\nWhat would you like to explore?";
  }
  if (msg.includes("trust") || msg.includes("secure") || msg.includes("verified")) {
    return "TrustIvest verifies every startup through a 5-point checklist: legal entity verification, founder background check, financial audit, IP ownership, and team validation. We partner with top law firms to ensure every listing meets our compliance standards.";
  }

  return "That's a great question! TrustIvest connects investors with vetted startups across CleanTech, HealthTech, EdTech, FinTech, AgriTech, and more. Browse our marketplace at /marketplace or ask me about a specific industry or startup. How can I help you invest smarter?";
}

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();
    const lastUserMessage = messages.filter((m) => m.role === "user").pop();
    const userText = lastUserMessage?.content ?? "";

    // Use OpenAI if API key is available
    if (process.env.OPENAI_API_KEY) {
      const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are TrustBot, an AI assistant for TrustIvest — a smart investment and partnership platform. Help investors find suitable startups, explain investment terms, and guide founders on listing their businesses. Be concise, helpful, and encouraging. Mention specific startups from the platform when relevant.",
            },
            ...messages,
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });
      const data = await openaiRes.json();
      const reply = data.choices?.[0]?.message?.content ?? getMockReply(userText);
      return NextResponse.json({ reply });
    }

    // Fallback to mock responses
    const reply = getMockReply(userText);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: "I'm having trouble connecting. Please try again in a moment." },
      { status: 500 }
    );
  }
}
