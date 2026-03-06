import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | The Monotheist Prism",
  description: "Video content from The Monotheist Prism.",
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading mb-12 text-3xl font-bold text-white">
        Videos
      </h1>
      {/* Grid for future YouTube embeds; empty state below when no videos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"></div>
      {/* Empty state */}
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-gray-800 bg-gray-900/20 py-16 text-center">
        <p className="text-lg text-gray-400">
          Videos coming soon during Ramadan 2025
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Subscribe or check back later for new content.
        </p>
      </div>
    </div>
  );
}
