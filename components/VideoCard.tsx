import Link from "next/link";

interface VideoCardProps {
  title?: string;
  slug?: string;
  comingSoon?: boolean;
  placeholder?: boolean;
}

export default function VideoCard({
  title = "Video title",
  slug = "#",
  comingSoon = true,
  placeholder = true,
}: VideoCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-[#1F2937] bg-[#111827] transition-all duration-300 hover:border-[#D4AF37]/50">
      {/* 16:9 thumbnail area */}
      <div className="relative aspect-video w-full bg-[#1F2937]">
        {placeholder && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl text-[#374151]" aria-hidden>
              ▶
            </span>
          </div>
        )}
        {comingSoon && (
          <span
            className="absolute right-2 top-2 rounded bg-[#D4AF37] px-2 py-0.5 text-xs font-semibold text-[#000000]"
            aria-hidden
          >
            Coming Soon
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-white line-clamp-2">
          {placeholder ? title : title}
        </h3>
      </div>
      {!placeholder && slug !== "#" && (
        <Link
          href={slug}
          className="absolute inset-0 z-10"
          aria-label={`Watch ${title}`}
        />
      )}
    </article>
  );
}
