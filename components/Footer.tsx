import Link from "next/link";

const socialLinks = [
  { name: "YouTube", href: "#", icon: "▶" },
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "Instagram", href: "#", icon: "📷" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-gold"
                aria-label={social.name}
              >
                <span className="text-xl" aria-hidden>
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            © 2026 The Monotheist Prism
          </p>
        </div>
      </div>
    </footer>
  );
}
