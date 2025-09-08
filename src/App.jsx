import React from "react";
import Logo from "./components/Logo";
import { BRAND } from "./config";
export default function App() {
    return (
        <div className="min-h-screen w-full bg-white text-slate-900 flex flex-col">
            <Header />
            <main className="flex-1">
                <Hero />
                <Services />
                <Rates />
                <Contracts />
                <Maintenance />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
            <div className="w-full px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Logo className="h-9 w-9" />
                    <span className="font-black tracking-tight text-xl">
                        QuickFox <span className="text-orange-600">Interactive</span>
                    </span>
                </div>

                {/* On light surface, use link-on-light */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#services" className="link-on-light">Services</a>
                    <a href="#rates" className="link-on-light">Rates</a>
                    <a href="#contracts" className="link-on-light">Contracts</a>
                    <a href="#contact" className="btn-primary">Book a Call</a>
                </nav>
            </div>
        </header>
    );
}
function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-white" />
            <div className="w-full px-6 md:px-10 lg:px-14 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="inline-block rounded-full bg-slate-900 text-white text-xs font-semibold px-3 py-1 mb-4">
                        Cross-platform mobile apps made with Unity
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                        We ship polished mobile apps and games in as little as 12 weeks
                    </h1>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="#contact" className="btn-primary">
                            Book a 20-minute scoping call
                        </a>
                    </div>
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
function Services() {
    const rows = [
        { name: 'Discovery (1–2 weeks)', scope: 'Product brief, tech plan, estimate, concepts', price: '$4k–$12k (one-time fee)', hours: 'N/A' },
        { name: 'MVP (8–12 weeks)', scope: 'Core features; product for internal use/testing', price: '$25k–$65k (one-time fee)', hours: '360 hours (est.)' },
        { name: 'Standard (12–20 weeks)', scope: 'Complete initial build; viable public access product', price: '$60k–$150k (one-time fee)', hours: '960 hours (est.)' },
        { name: 'Enterprise (20–36+ weeks)', scope: 'Complete initial build; third-party integrations; real-time intercommunication; encryption', price: '$150k–$400k (one-time fee)', hours: '2400 hours (est.)' },
        { name: 'Maintenance (20–60 hrs/month)', scope: 'Crash fixes; OS updates; general bug fixes', price: '$2k–$10k per month', hours: 'N/A' },
    ];

    return (
        <section id="services" className="section-muted">
            <div className="w-full">
                <h2 className="text-3xl font-black tracking-tight">Service Offerings</h2>
                <div className="mt-6 overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="text-left bg-white">
                            <tr>
                                <th className="p-3 font-semibold">Service package</th>
                                <th className="p-3 font-semibold">Scope</th>
                                <th className="p-3 font-semibold">Pricing (USD)</th>
                                <th className="p-3 font-semibold">Development hours</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {rows.map((r, i) => (
                                <tr key={i} className="border-t">
                                    <td className="p-3 font-medium">{r.name}</td>
                                    <td className="p-3 text-slate-700">{r.scope}</td>
                                    <td className="p-3">{r.price}</td>
                                    <td className="p-3">{r.hours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
function Rates() {
    const rows = [
        ['Development', '$85–$140 /hour'],
        ['Design/Branding/UI', '$80–$130 /hour'],
        ['QA', '$65–$100 /hour'],
    ];

    return (
        <section id="rates" className="section">
            <div className="w-full">
                <h2 className="text-3xl font-black tracking-tight">Rate Cards</h2>
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                    {rows.map(([dept, price], i) => (
                        <div key={i} className="rounded-2xl border border-slate-200 p-5 bg-white">
                            <div className="text-sm text-slate-500">Department</div>
                            <div className="font-bold">{dept}</div>
                            <div className="mt-2 text-sm text-slate-500">Pricing</div>
                            <div className="font-semibold">{price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
function Contracts() {
    return (
        <section id="contracts" className="section-muted">
            <div className="w-full">
                <h2 className="text-3xl font-black tracking-tight">Contracts & Payments</h2>
                <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
                    <li>Change Requests are billable at department rate card.</li>
                    <li>Payment milestones: 30% deposit (non-refundable), 30% mid-build, 30% code-complete, 10% release/launch.</li>
                    <li>IP: Deliverables and final product are owned by client. Libraries and code are owned by QuickFox.</li>
                    <li>Kill fee: 20% of remaining payments is required to cancel project.</li>
                    <li>Late fees: 1.5–2% /month or service pause after 10 business days.</li>
                </ul>
            </div>
        </section>
    );
}
function Maintenance() {
    const tiers = [
        ['Basic', '3 business days', '$2k /month', '20 hours'],
        ['Standard', '1 business days', '$4k /month', '40 hours'],
        ['Premium', 'Same day', '$8.5k /month', '80 hours'],
    ];

    return (
        <section className="section">
            <div className="w-full">
                <h2 className="text-3xl font-black tracking-tight">Maintenance</h2>
                <div className="mt-6 overflow-x-auto">
                    <table className="min-w-full text-sm bg-white">
                        <thead className="text-left">
                            <tr>
                                <th className="p-3 font-semibold">Tier</th>
                                <th className="p-3 font-semibold">Response Time</th>
                                <th className="p-3 font-semibold">Pricing</th>
                                <th className="p-3 font-semibold">Time Estimate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tiers.map((r, i) => (
                                <tr key={i} className="border-t">
                                    <td className="p-3 font-medium">{r[0]}</td>
                                    <td className="p-3">{r[1]}</td>
                                    <td className="p-3">{r[2]}</td>
                                    <td className="p-3">{r[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
function CTA() {
    return (
        <section id="contact" className="section">
            <div className="w-full max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-black tracking-tight">Book a 20 minute scoping call</h2>
                <p className="mt-3 text-slate-600">We’ll map a timeline and price range on the call.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href={`mailto:${BRAND.email}?subject=Project%20Inquiry`}
                        className="btn-primary"
                    >
                        Email us
                    </a>
                </div>

                {/* Example of a contextual link sitting on a light background */}
                <p className="mt-6 text-sm text-slate-600">
                    Prefer to chat?{" "}
                    <a href={BRAND.socials.linkedin} className="link-on-light">
                        Connect on LinkedIn
                    </a>
                </p>
            </div>
        </section>
    );
}
function Footer() {
    return (
        <footer className="border-t border-slate-200">
            <div className="w-full px-6 md:px-10 lg:px-14 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex items-center gap-3">
                    <Logo className="h-6 w-6" />
                    <span className="font-bold">QuickFox Interactive</span>
                </div>
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} QuickFox Interactive. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
function MockPhone() {
    return (
        <div className="mx-auto w-full max-w-sm">
            <div className="aspect-[9/19] rounded-[2.2rem] border border-slate-300 shadow-md p-3 bg-white">
                <div className="h-full rounded-[1.8rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 flex flex-col">
                    <div className="mx-auto w-12 h-1.5 bg-white/30 rounded-full mb-5" />
                    <div className="flex items-center gap-3">
                        <Logo className="h-8 w-8" />
                        <div className="font-bold">QuickFox Interactive</div>
                    </div>
                    <div className="mt-6 text-sm text-white/80 leading-relaxed">
                        Cross-platform mobile apps made with Unity
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="rounded-2xl bg-white/10 backdrop-blur p-3">
                                <div className="text-xs text-white/70">Metric {i}</div>
                                <div className="text-xl font-black">
                                    {Math.round(100 * Math.sin(i)) + 120}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto flex gap-2">
                        <button className="flex-1 btn-primary">Action</button>
                        <button className="flex-1 btn-ghost-light">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}