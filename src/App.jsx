import React from "react";
import Logo from "./components/Logo";
import { BRAND } from "./config";
import { Icon } from '@iconify/react';
export default function App() {
    return (
        <div className="min-h-screen w-full bg-white flex flex-col">
            <Header />
            <main className="flex-1">
                <Hero />
                <Services />
                <Rates />
                <ITServices />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-dcol">
            <div className="w-full px-6 md:px-8 lg:px-14 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Logo className="h-9 w-9" />
                    <div className="flex gap-1">
                        <span className="text-hs text-bold text-pcol">QuickFox</span>
                        <span className="text-hs text-bold text-scol">Interactive</span>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#services" className="text-bs text-medium text-dcol-hov">Services</a>
                    <a href="#rates" className="text-bs text-medium text-dcol-hov">Rates</a>
                    <a href="#contracts" className="text-bs text-medium text-dcol-hov">Contracts</a>
                    <a href="#contact" className="btn-primary">Book a Call</a>
                </nav>
            </div>
        </header>
    );
}
function Hero() {
    return (
        <section className="relative overflow-hidden bg-offwhite">
            <div className="mb-8 mt-8 w-full px-6 md:px-8 text-justified">
                <div>
                    <h1 className="text-hm text-xbold text-dcol">
                        We ship polished mobile apps and games in as little as 12 weeks
                    </h1>
                </div>
            </div>
        </section>
    );
}
/*function Hero() {
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
}*/
function Services() {
    const rows = [
        { name: 'Discovery (1-2 weeks)', scope: 'layout project scope, recommended package, timeline and pricing', price: '$0', hours: 'N/A' },
        { name: 'MVP (8–12 weeks)', scope: 'Minimum viable product for internal use/testing', price: '$17,000–$65,000', hours: '360 hours (est.)' },
        { name: 'Standard (12–20 weeks)', scope: 'Complete project viable for public release', price: '$44,000–$173,000', hours: '960 hours (est.)' },
        { name: 'Enterprise (20–36+ weeks)', scope: 'Same as standard, third-party integrations, real-time intercommunication, encryption', price: '$108,000–$432,000', hours: '2400 hours (est.)' },
        { name: 'Maintenance (10–120 hrs/month)', scope: 'Crash fixes, OS updates, bug fixes, general maintenance', price: '$500–$22,000 per month', hours: 'N/A' },
    ];

    return (
        <section id="services" className="section bg-offwhite">
            <div className="w-full">
                <div className="flex items-baseline justify-between">
                    <span className="text-hs text-xbold text-dcol"> Services </span>
                </div>
                <div className="text-right">
                    <span className="text-bxs text-medium text-dcol text-right"> Pricing is shown for 1 dev - 4 devs (does NOT include other departments)</span>
                </div>
                <div className="overflow-x-auto border">
                    <table className="min-w-full text-bxs text-dcol">
                        <thead className="text-left bg-white">
                            <tr>
                                <th className="p-3 text-bold border-r">Service</th>
                                <th className="p-3 text-bold border-r">Scope</th>
                                <th className="p-3 text-bold border-r">Pricing (CAD)</th>
                                <th className="p-3 text-bold">Development hours</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {rows.map((r, i) => (
                                <tr key={i} className="border-t odd:bg-[var(--color-grey)] even:bg-white">
                                    <td className="p-3 text-sbold text-dcol border-r">{r.name}</td>
                                    <td className="p-3 text-dcol border-r">{r.scope}</td>
                                    <td className="p-3 text-sbold text-pcol border-r border-dcol">{r.price}</td>
                                    <td className="p-3 text-sbold text-scol">{r.hours}</td>
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
        ['Management', '$85 /hour'],
        ['Development', '$45 /hour'],
        ['Design/Branding/UI', '$40 /hour'],
        ['QA', '$32 /hour'],
    ];
    return (
        <section id="rates" className="section bg-offwhite">
            <div className="w-full">
                <h2 className="text-hs text-xbold text-dcol">Rate Cards</h2>
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                    {rows.map(([dept, price], i) => (
                        <div key={i} className="rounded-2xl border border-dcol p-5 bg-white">
                            <div className="text-bxs text-dcol">Department</div>
                            <div className="text-bm text-bold text-dcol">{dept}</div>
                            <div className="mt-2 text-bxs text-dcol">Pricing</div>
                            <div className="text-bm text-bold text-pcol">{price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
function ITServices() {
    const tiers = [
        ['Basic', '3 business days', '$500 /month', '10 hours'],
        ['Standard', '1 business day', '$2,000 /month', '40 hours'],
        ['Premium', 'Same day', '$4,000 /month', '80 hours'],
        ['Enterprise', 'Same day', '$6,000 /month', '120 hours'],
    ];

    return (
        <section className="section bg-offwhite">
            <div className="w-full">
                <h2 className="text-hs text-xbold text-dcol">IT Services</h2>
                <div className="mt-6 overflow-x-auto">
                    <table className="min-w-full text-sm bg-white border">
                        <thead className="text-left">
                            <tr>
                                <th className="p-3 text-bs text-bold text-dcol border-r">Tier</th>
                                <th className="p-3 text-bs text-bold text-dcol border-r">Response Time</th>
                                <th className="p-3 text-bs text-bold text-dcol border-r">Pricing</th>
                                <th className="p-3 text-bs text-bold text-dcol">Time Estimate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tiers.map((r, i) => (
                                <tr key={i} className="border-t odd:bg-[var(--color-grey)] even:bg-white">
                                    <td className="p-3 text-bxs text-sbold text-dcol border-r">{r[0]}</td>
                                    <td className="p-3 text-bxs text-normal text-dcol border-r">{r[1]}</td>
                                    <td className="p-3 text-bxs text-sbold text-pcol border-r border-dcol">{r[2]}</td>
                                    <td className="p-3 text-bxs text-sbold text-scol">{r[3]}</td>
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
        <section id="contact" className="section bg-offwhite">
            <div className="w-full mx-auto text-center">
                <h2 className="text-hm text-xbold text-dcol">Book a 20 minute scoping call</h2>
                <p className="mt-3 text-normal text-dcol">We’ll map a timeline and price range on the call.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <a href={`mailto:${BRAND.email}?subject=Project%20Inquiry`} className="btn-primary"> Email us </a>
                </div>
                <p className="mt-8 text-bxs text-normal text-dcol">Prefer to chat?</p>
                <a href={BRAND.socials.linkedin} className="inline-flex items-center gap-2 text-bxs text-normal text-tcol">
                    <Icon icon="logos:linkedin-icon" width="20" height="20" />
                    Connect on LinkedIn
                </a>
                <p className="mb-2 text-bxs text-sbold text-dcol text-left">Follow us on social media</p>
                
                <a href={BRAND.socials.X} className="mb-1 flex items-center gap-2 text-bxs text-normal text-tcol text-left">
                    <Icon icon="simple-icons:x" width="20" height="20" className="text-black"/>
                    Twitter/X
                </a>

                <a href={BRAND.socials.YouTube} className="mb-1 flex items-center gap-2 text-bxs text-normal text-tcol text-left">
                    <Icon icon="logos:youtube-icon" width="20" height="20" />
                    YouTube
                </a>

                <a href={BRAND.socials.Instagram} className="mb-1 flex items-center gap-2 text-bxs text-normal text-tcol text-left">
                    <Icon icon="logos:instagram-icon" width="20" height="20" />
                    Instagram
                </a>

                <a href={BRAND.socials.TikTok} className="flex items-center gap-2 text-bxs text-normal text-tcol text-left">
                    <Icon icon="logos:tiktok-icon" width="20" height="20" />
                    TikTok
                </a>
            </div>
        </section>
    );
}
function SocialLinks({ BRAND }) {
    return (
        <div className="space-y-2">
            <p className="text-bxs text-normal text-dcol text-left">Follow us on social media</p>

            <a href={BRAND.socials.X} className="flex items-center gap-2 text-bxs text-normal text-left">
                <Icon icon="simple-icons:x" width="20" height="20" />
                Twitter/X
            </a>

            <a href={BRAND.socials.YouTube} className="flex items-center gap-2 text-bxs text-normal text-left">
                <Icon icon="logos:youtube-icon" width="20" height="20" />
                YouTube
            </a>

            <a href={BRAND.socials.Instagram} className="flex items-center gap-2 text-bxs text-normal text-left">
                <Icon icon="logos:instagram-icon" width="20" height="20" />
                Instagram
            </a>

            <a href={BRAND.socials.TikTok} className="flex items-center gap-2 text-bxs text-normal text-left">
                <Icon icon="logos:tiktok-icon" width="20" height="20" />
                TikTok
            </a>
        </div>
    );
}
function Footer() {
    return (
        <footer className="border-t  border-dcol">
            <div className="w-full px-6 md:px-10 lg:px-14 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex items-center gap-3">
                    <Logo className="h-6 w-6" />
                    <div className="flex items-center gap-1">
                        <span className="text-bm text-bold text-pcol">QuickFox</span>
                        <span className="text-bm text-bold text-scol">Interactive</span>
                    </div>
                </div>
                <p className="text-bxs text-dcol">
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