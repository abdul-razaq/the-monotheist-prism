import type { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

export default function ContactCard({ icon, label, children }: ContactCardProps) {
  return (
    <div className="rounded-lg border border-[#1F2937] bg-[#111827] p-6 transition-colors duration-300 hover:border-[#D4AF37]/30">
      <div className="flex items-start gap-4">
        <span className="text-2xl text-[#D4AF37]" aria-hidden>
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {label}
          </p>
          <div className="mt-2 text-[#9CA3AF]">{children}</div>
        </div>
      </div>
    </div>
  );
}
