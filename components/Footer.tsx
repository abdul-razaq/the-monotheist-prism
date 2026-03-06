import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/videos", label: "Videos" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const connectLinks = [
  { name: "YouTube", href: "https://youtube.com", icon: "▶" },
  { name: "Twitter", href: "https://twitter.com/MonotheistPrism", icon: "𝕏" },
  { name: "Instagram", href: "https://instagram.com/monotheist.prism", icon: "📷" },
  { name: "Email", href: "mailto:contact@themonotheistprism.com", icon: "✉" },
];

const contentLinks = [
  { href: "/videos", label: "Videos" },
  { href: "/articles", label: "Articles" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1F2937] bg-[#000000] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3 columns: Brand | Quick Links + Content | Connect */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 - Brand */}
          <div>
            <p className="font-heading text-lg font-bold text-[#D4AF37]">
              THE MONOTHEIST PRISM
            </p>
            <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
              Viewing modern confusion through absolute monotheism
            </p>
          </div>

          {/* Column 2 - Quick Links & Content */}
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                Quick Links
              </p>
              <ul className="mt-3 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-[#D4AF37]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                Content
              </p>
              <ul className="mt-3 space-y-2">
                {contentLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-[#D4AF37]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Connect
            </p>
            <ul className="mt-3 space-y-2">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-[#D4AF37]"
                    aria-label={link.name}
                  >
                    <span aria-hidden>{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-12 border-t border-[#1F2937] pt-8 text-center">
          <p className="text-sm text-[#9CA3AF]">
            © 2025 The Monotheist Prism
          </p>
        </div>
      </div>
    </footer>
  );
}
