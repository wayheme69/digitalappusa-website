import Link from "next/link";

const appLinks = [
  { href: "/calculx", label: "CalculX" },
  { href: "/lotteryai", label: "LotteryAI" },
  { href: "/bookai", label: "BookAI" },
  { href: "/zodiac", label: "Zodiac" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-orbitron text-xl font-bold bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
                DIGITALAPP
              </span>
            </Link>
            <p className="text-white/60 text-sm max-w-md">
              Digital App LLC creates innovative mobile applications that enhance your daily life through technology.
            </p>
            <div className="mt-4 text-white/40 text-xs">
              <p>Digital App LLC</p>
              <p>30 N Gould St, STE R</p>
              <p>Sheridan, WY 82801, USA</p>
            </div>
          </div>

          {/* Apps */}
          <div>
            <h3 className="font-orbitron text-sm font-semibold text-white mb-4">Our Apps</h3>
            <ul className="space-y-2">
              {appLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-cyan transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-orbitron text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-cyan transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Digital App LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
