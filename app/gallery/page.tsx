import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Chinh Dan",
  description: "Photos and moments from Chinh Dan's performances and projects.",
};

const items = [
  {
    title: "Vancouver Indonesian Festival",
    date: "August 2025",
    description: "Festival performance featuring original and collaborative songs.",
  },
  {
    title: "Capybakery Pop-up",
    date: "August 2025",
    description: "Intimate set at the Capybakery pop-up event in Vancouver.",
  },
  {
    title: "King McGill EP",
    date: "2025",
    description: "Behind-the-scenes and release imagery for the King McGill EP.",
  },
  {
    title: "Trees Granville",
    date: "May 2025",
    description: "Live performance of original songs at Trees Granville.",
  },
  {
    title: "UBC UMI",
    date: "2024–2025",
    description: "University of British Columbia music initiative documentation.",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-title">Gallery</p>
        <h1 className="text-4xl md:text-5xl font-light text-cream mb-4">
          Moments
        </h1>
        <p className="text-neutral-500 mb-4 max-w-2xl leading-relaxed italic text-lg">
          "The best part about music is in sharing with others: to play for
          others, to play with others, and to listen to others."
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group border border-white/10 hover:border-accent/30 transition-colors duration-300 overflow-hidden"
            >
              {/* Placeholder image area */}
              <div className="aspect-square bg-white/5 flex items-center justify-center">
                <span className="text-4xl text-neutral-700">♪</span>
              </div>
              <div className="p-5">
                <p className="text-xs tracking-widest uppercase text-accent mb-1">
                  {item.date}
                </p>
                <h3 className="text-cream text-sm font-medium mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-600 mt-12">
          More photos on{" "}
          <a
            href="https://instagram.com/chinh_dan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Instagram @chinh_dan
          </a>
        </p>
      </div>
    </div>
  );
}
