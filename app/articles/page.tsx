import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | The Monotheist Prism",
  description: "Articles and essays from The Monotheist Prism.",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading mb-12 text-3xl font-bold text-white">
        Articles
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder grid for future blog posts */}
      </div>
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-gray-800 bg-gray-900/20 py-16 text-center">
        <p className="text-lg text-gray-400">Articles coming soon</p>
        <p className="mt-2 text-sm text-gray-500">
          Written content will appear here as we publish.
        </p>
      </div>
    </div>
  );
}
