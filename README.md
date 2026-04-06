# TrustIvest – A Smart Investment & Partnership Platform

> **Invest Smart. Build Trust. Grow Together.**

A production-ready full-stack web application built with **Next.js 16 (App Router)** and **Tailwind CSS v4**. TrustIvest connects visionary founders with smart capital through a curated startup investment marketplace.

---

## 🚀 Features

| Feature | Description |
|---|---|
| **Landing Page** | Premium Stripe/Airbnb-style hero, Features, How It Works, Testimonials, CTA |
| **Startup Marketplace** | Browse 6 verified startups with search + filters (industry, stage, funding range) |
| **Startup Detail** | Full pitch, team info, financial highlights, Invest Now button |
| **Investor Dashboard** | Browse, save, and manage startup bookmarks with portfolio stats |
| **Founder Dashboard** | Add/manage startup listings with a guided form |
| **Auth UI** | Login & Signup with password strength meter. Firebase Auth ready (graceful mock fallback) |
| **TrustBot AI Chatbot** | Floating chat widget on all pages. Uses OpenAI GPT-3.5 if `OPENAI_API_KEY` is set, otherwise deterministic mock responses |
| **Dark Mode** | System-aware + manual toggle, persisted in localStorage |
| **Responsive** | Mobile-first layout, works on all screen sizes |

---

## 📁 Project Structure

```
trustivest/
├── app/
│   ├── layout.tsx              # Root layout (Navbar, Footer, TrustBot)
│   ├── page.tsx                # Landing page
│   ├── marketplace/page.tsx    # Startup marketplace with filters
│   ├── startup/[id]/page.tsx   # Startup detail page
│   ├── dashboard/
│   │   ├── investor/page.tsx   # Investor dashboard
│   │   └── founder/page.tsx    # Founder dashboard
│   ├── auth/
│   │   ├── login/page.tsx      # Login page
│   │   └── signup/page.tsx     # Signup page
│   └── api/
│       └── chat/route.ts       # TrustBot API (OpenAI or mock)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── StartupCard.tsx
│   ├── ThemeToggle.tsx
│   └── TrustBot.tsx
├── lib/
│   ├── mockData.ts             # Mock startup data, testimonials
│   └── firebase.ts             # Firebase init (graceful fallback)
├── .env.example
└── package.json
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites

- Node.js 18+ and npm 9+

### 2. Install dependencies

```bash
cd trustivest
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:

- **Firebase** – Get values from [Firebase Console](https://console.firebase.google.com/) → Project Settings → Your apps → Web app
- **OpenAI** – Get key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

> If no values are provided, the app runs fully in **demo/mock mode** — no keys required.

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

---

## 🔑 Environment Variables

See [trustivest/.env.example](./trustivest/.env.example) for the full list.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Optional | Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Optional | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Optional | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Optional | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Optional | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Optional | Firebase app ID |
| `OPENAI_API_KEY` | Optional | OpenAI API key for TrustBot AI responses |

---

## 🤖 TrustBot

TrustBot is a floating AI chatbot widget on every page. It:
- Answers investor queries
- Suggests startups based on interest
- Guides founders on listing their business

**With `OPENAI_API_KEY`** → Uses GPT-3.5-turbo for real AI responses  
**Without key** → Uses built-in deterministic mock responses (no API calls, no cost)

---

## 🔐 Firebase Authentication

The app includes full Firebase Auth UI (login/signup). Without Firebase credentials, it operates in **demo mode** — showing a notification and simulating successful auth.

To enable real Firebase Auth:
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Email/Password** authentication
3. Copy your web app config values to `.env.local`

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Auth**: Firebase Auth (optional)
- **AI**: OpenAI GPT-3.5-turbo (optional, mock fallback included)
- **Data**: Mock JSON (no database required)

---

## 📦 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## 📄 License

MIT
