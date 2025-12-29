"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

// Apps data
const apps = [
  {
    name: "KEMMI",
    href: "/kemmi",
    icon: "/images/KEMMISITE.png",
    description: "Meet Haru, your AI companion - Available in 57 languages",
    comingSoon: false,
    isNew: true,
  },
  {
    name: "CalculX",
    href: "/calculx",
    icon: "/images/calculx.png",
    description: "Advanced calculator with privacy features and secure messaging",
    comingSoon: false,
    isNew: false,
  },
  {
    name: "LotteryAI",
    href: "/lotteryai",
    icon: "/images/lotteryai.png",
    description: "AI-powered lottery number predictions and statistical analysis",
    comingSoon: false,
    isNew: false,
  },
  {
    name: "BookAI",
    href: "/bookai",
    icon: "/images/bookai.png",
    description: "AI-powered accounting and bookkeeping automation",
    comingSoon: true,
    isNew: false,
  },
  {
    name: "Zodiac",
    href: "/zodiac",
    icon: "/images/zodiac.png",
    description: "Discover your cosmic compatibility with AI astrology",
    comingSoon: true,
    isNew: false,
  },
];

// Features data
const features = [
  {
    icon: "💡",
    title: "Innovation",
    description: "Cutting-edge technology and AI-powered solutions that push the boundaries of mobile applications.",
  },
  {
    icon: "🔒",
    title: "Security",
    description: "Your data privacy is our priority. End-to-end encryption and secure authentication protocols.",
  },
  {
    icon: "✨",
    title: "Design",
    description: "Beautiful, intuitive interfaces crafted with attention to detail for the best user experience.",
  },
];

export default function Home() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center justify-center px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan/50 rounded-full animate-pulse" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 animate-fadeIn">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60">
              Welcome to Digital App LLC
            </span>
          </div>

          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-cyan via-green to-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Innovative
            </span>
            <br />
            <span className="text-white">Mobile Applications</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fadeInUp animation-delay-200">
            Digital App LLC creates cutting-edge mobile applications that enhance your daily life through innovative technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <Button href="#apps" variant="primary">
              Explore Apps
            </Button>
            <Button href="/services" variant="secondary">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* OUR APPLICATIONS SECTION */}
      <section className="py-24 px-4" id="apps">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-cyan">Applications</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Discover our suite of innovative mobile applications designed to enhance your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => (
              <Link href={app.href} key={app.name} className="group">
                <div className={`relative p-6 rounded-2xl bg-white/5 border transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20 h-full flex flex-col hover:-translate-y-1 hover:scale-[1.02] ${
                  app.isNew
                    ? 'border-cyan/30 shadow-md shadow-cyan/10'
                    : 'border-white/10 hover:border-cyan/50'
                }`}>
                  {/* NEW Badge */}
                  {app.isNew && (
                    <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-cyan/20 border border-cyan/30">
                      <span className="text-xs text-cyan font-medium">NEW</span>
                    </div>
                  )}

                  {/* Coming Soon Badge */}
                  {app.comingSoon && (
                    <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-green/20 border border-green/30">
                      <span className="text-xs text-green font-medium">Coming Soon</span>
                    </div>
                  )}

                  {/* App Icon */}
                  <div className="mb-4 relative">
                    <div className={`absolute inset-0 bg-cyan/20 rounded-2xl blur-xl transition-opacity duration-300 ${
                      app.isNew ? 'opacity-50' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                    <div className="relative w-20 h-20 mx-auto">
                      <Image
                        src={app.icon}
                        alt={app.name}
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  </div>

                  {/* App Info */}
                  <h3 className={`font-orbitron text-xl font-semibold mb-2 text-center transition-colors duration-300 ${
                    app.isNew ? 'text-cyan' : 'group-hover:text-cyan'
                  }`}>
                    {app.name}
                  </h3>
                  <p className="text-white/60 text-sm text-center mb-4 flex-grow">
                    {app.description}
                  </p>

                  {/* Learn More */}
                  <div className="text-center text-sm font-medium text-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="py-24 px-4 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green/5 to-transparent" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
              Need a{" "}
              <span className="bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
                Custom Solution
              </span>
              ?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We build mobile apps and websites for businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mobile Apps Card */}
            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20 hover:-translate-y-1 hover:scale-[1.02]">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <h3 className="font-orbitron text-2xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                Mobile Apps
              </h3>
              <p className="text-white/60 leading-relaxed">
                Custom iOS and Android applications tailored to your business needs. Beautiful design, powerful features, AI integration.
              </p>
            </div>

            {/* Websites Card */}
            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-green/20 hover:-translate-y-1 hover:scale-[1.02]">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🌐
              </div>
              <h3 className="font-orbitron text-2xl font-semibold mb-3 group-hover:text-green transition-colors">
                Websites
              </h3>
              <p className="text-white/60 leading-relaxed">
                Modern, responsive websites and web applications. Landing pages, e-commerce, dashboards, and more.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button href="/services" variant="primary">
              Get a Free Quote →
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 px-4 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
              Why <span className="text-green">Choose Us</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We combine innovation, security, and design excellence to deliver exceptional mobile experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan/30 transition-all duration-300 text-center h-full hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-semibold mb-3 group-hover:text-cyan transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green/10 rounded-full blur-3xl" />

            <div className="relative text-center">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
                Get in <span className="text-cyan">Touch</span>
              </h2>

              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Have a question or want to collaborate? We&apos;d love to hear from you.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-white/70">
                  <span className="text-cyan">📧</span>
                  <a href="mailto:info@digitalappusa.com" className="hover:text-cyan transition-colors">
                    info@digitalappusa.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                  <span className="text-green">📍</span>
                  <span>30 N Gould St, STE R, Sheridan, WY 82801, USA</span>
                </div>
              </div>

              <Button href="mailto:info@digitalappusa.com" variant="primary">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
