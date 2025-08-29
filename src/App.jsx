import React from "react";
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Process />
      <Work />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-9 w-9" />
          <span className="font-black tracking-tight text-xl">QuickFox <span className="text-orange-600">Digital</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-orange-600">Services</a>
          <a href="#process" className="hover:text-orange-600">Process</a>
          <a href="#work" className="hover:text-orange-600">Work</a>
          <a href="#contact" className="px-4 py-2 rounded-2xl bg-orange-600 text-white hover:bg-orange-700 transition">Book a Call</a>
        </nav>
      </div>
    </header>
  );
}
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block rounded-full bg-slate-900 text-white text-xs font-semibold px-3 py-1 mb-4">Apps in weeks, not months</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
            We ship polished <span className="text-orange-600">mobile apps</span> fast.
          </h1>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Cross‑platform iOS & Android development with game‑grade UX. Fixed scopes, weekly demos, zero surprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-2xl bg-orange-600 text-white font-semibold hover:bg-orange-700">Book a 20‑min scope call</a>
            <a href="#work" className="px-5 py-3 rounded-2xl border border-slate-300 hover:border-slate-400">See our work</a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
            <li>• MVPs in 8–12 weeks</li>
            <li>• Fixed‑price packages</li>
            <li>• TestFlight & Play launch</li>
            <li>• Ongoing care plans</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-tr from-orange-300 via-emerald-300 to-cyan-300 rounded-[40px]" />
          <div className="relative rounded-3xl shadow-lg ring-1 ring-slate-200 p-6 bg-white">
            <MockPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
function Clients() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-widest text-slate-500">Trusted by startups & SMBs</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
          {['Aurora Health','Northline','Cinder','Waypoint'].map((n,i)=> (
            <div key={i} className="h-16 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-semibold">{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: 'Discovery Sprint',
      desc: '1–2 weeks to de‑risk: user flows, clickable prototype, tech plan, budget & timeline.',
      badge: 'from $4k'
    },
    {
      title: 'MVP Build',
      desc: '8–12 weeks. Auth, core features, analytics, CI/CD, TestFlight & Play distribution.',
      badge: 'from $25k'
    },
    {
      title: 'Growth & Scale',
      desc: 'Payments, push, offline sync, admin portals, integrations, performance & security.',
      badge: 'from $60k'
    },
    {
      title: 'Care Plans',
      desc: 'OS updates, crash fixes, small features, monitoring & ASO improvements.',
      badge: '$2k–$10k/mo'
    }
  ];
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-black tracking-tight">Services</h2>
        <p className="mt-3 text-slate-600">Clear packages with predictable outcomes.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <div key={i} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="text-xs inline-flex px-2 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-100">{s.badge}</div>
              <h3 className="mt-3 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Process() {
  const steps = [
    ['Kickoff','Scope lock, risks, acceptance criteria'],
    ['Design','Flows, wireframes, clickable prototype'],
    ['Plan','Architecture, data model, CI/CD pipeline'],
    ['Build','Weekly sprints with live demos'],
    ['Beta','TestFlight/Play, UAT, bug triage'],
    ['Launch','Store assets, ASO, monitoring'],
    ['Hypercare','2 weeks, then care plan']
  ];
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-black tracking-tight">Process</h2>
        <p className="mt-3 text-slate-600">Transparent delivery with weekly demos and change control.</p>
        <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(([t,d],i)=> (
            <li key={i} className="rounded-3xl border border-slate-200 p-6">
              <div className="text-orange-600 font-black">{String(i+1).padStart(2,'0')}</div>
              <h3 className="mt-2 font-bold">{t}</h3>
              <p className="text-sm text-slate-600 mt-1">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
function Work() {
  const cards = [
    ['FieldOps','Digitized inspections; offline sync; 5k MAU in 4 months'],
    ['WellnessGo','Habit tracker; 4.8★; Stripe subs'],
    ['FleetLite','Dispatch + chat; real‑time updates'],
  ];
  return (
    <section id="work" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-black tracking-tight">Selected Work</h2>
        <p className="mt-3 text-slate-600">Snapshots from recent builds (NDAs respected).</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cards.map(([name,desc],i)=> (
            <article key={i} className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
              <div className="h-40 bg-gradient-to-br from-orange-200 via-white to-emerald-200" />
              <div className="p-5">
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-slate-600 mt-1">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight">Ready to scope your app?</h2>
        <p className="mt-3 text-slate-600">Book a free 20‑minute call. We’ll map features, timeline, and a price range on the spot.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:hello@quickfox.digital?subject=Project%20Inquiry" className="px-6 py-3 rounded-2xl bg-orange-600 text-white font-semibold hover:bg-orange-700">Email us</a>
          <a href="https://cal.com/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl border border-slate-300 hover:border-slate-400">Book on Cal.com</a>
        </div>
        <p className="text-xs text-slate-500 mt-3">Prefer NDAs first? We’re happy to sign.</p>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-6" />
          <span className="font-bold">QuickFox Digital</span>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} QuickFox Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
import logo from "./assets/QuickFox-Games_Logo_2026.png";
function Logo({ className = "h-8 w-8" }) {
    return <img src={logo} alt="QuickFox logo" className={className} />;
}
function MockPhone() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="aspect-[9/19] rounded-[2.2rem] border border-slate-300 shadow-md p-3 bg-white">
        <div className="h-full rounded-[1.8rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 flex flex-col">
          <div className="mx-auto w-12 h-1.5 bg-white/30 rounded-full mb-5" />
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <div className="font-bold">QuickFox App</div>
          </div>
          <div className="mt-6 text-sm text-white/80 leading-relaxed">
            Sample dashboard cards
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="rounded-2xl bg-white/10 backdrop-blur p-3">
                <div className="text-xs text-white/70">Metric {i}</div>
                <div className="text-xl font-black">{Math.round(100 * Math.sin(i))+120}</div>
              </div>
            ))}
          </div>
          <div className="mt-auto flex gap-2">
            <button className="flex-1 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white py-2 font-semibold">Action</button>
            <button className="flex-1 rounded-2xl bg-white text-slate-900 py-2 font-semibold">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}