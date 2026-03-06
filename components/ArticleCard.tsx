import Link from "next/link";

interface ArticleCardProps {
  title?: string;
  excerpt?: string;
  slug?: string;
  comingSoon?: boolean;
  placeholder?: boolean;
}

export default function ArticleCard({
  title = "Article title",
  excerpt = "Excerpt placeholder. In-depth analysis through the prism of absolute monotheism.",
  slug = "#",
  comingSoon = true,
  placeholder = true,
}: ArticleCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-[#1F2937] bg-[#111827] transition-all duration-300 hover:border-[#D4AF37]/50">
      {/* Featured image area */}
      <div className="relative aspect-[16/10] w-full bg-[#1F2937]" />
      <div className="p-4">
        {comingSoon && (
          <span
            className="mb-2 inline-block rounded bg-[#D4AF37] px-2 py-0.5 text-xs font-semibold text-[#000000]"
            aria-hidden
          >
            Coming Soon
          </span>
        )}
        <h3 className="font-heading font-semibold text-white line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-[#9CA3AF]">
          {excerpt}
        </p>
      </div>
      {!placeholder && slug !== "#" && (
        <Link
          href={slug}
          className="absolute inset-0 z-10"
          aria-label={`Read ${title}`}
        />
      )}
    </article>
  );
}
