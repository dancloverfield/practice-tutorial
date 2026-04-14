import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discography — William",
  description: "Releases and recordings by William.",
};

const releases = [
  {
    title: "King McGill",
    year: "2025",
    type: "EP",
    description:
      "An original EP featuring intimate guitar-driven compositions. Performed live at Trees Granville in May 2025.",
    tracks: ["Late Have I Loved You", "Nebraska"],
  },
  {
    title: "Sadó",
    year: "2025",
    type: "Single / Project",
    description:
      "A heartfelt original project debuted at the Capybakery Pop-up, featuring the track 'Sing a Prayer'.",
    tracks: ["Sing a Prayer"],
  },
];

export default function DiscographyPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-title">Discography</p>
        <h1 className="text-4xl md:text-5xl font-light text-cream mb-4">
          Releases
        </h1>
        <p className="text-neutral-500 mb-16 max-w-lg leading-relaxed">
          Original compositions and projects spanning indie, RnB, and
          alternative sounds.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {releases.map((release) => (
            <div
              key={release.title}
              className="border border-white/10 p-8 hover:border-accent/30 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent mb-2">
                    {release.year} · {release.type}
                  </p>
                  <h2 className="text-2xl font-light text-cream group-hover:text-accent transition-colors">
                    {release.title}
                  </h2>
                </div>
                {/* Placeholder art */}
                <div className="w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-neutral-600">♪</span>
                </div>
              </div>

              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                {release.description}
              </p>

              <div>
                <p className="text-xs tracking-widest uppercase text-neutral-600 mb-3">
                  Tracks
                </p>
                <ul className="space-y-2">
                  {release.tracks.map((track, i) => (
                    <li key={track} className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="text-xs text-neutral-600 w-4">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {track}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-white/10 p-8 text-center">
          <p className="text-sm text-neutral-500 mb-4">
            Stream and follow on your preferred platform
          </p>
          <div className="flex items-center justify-center gap-8">
            {[
              { name: "YouTube", url: "https://youtube.com/@chinh_dan" },
              { name: "Instagram", url: "https://instagram.com/chinh_dan" },
              { name: "TikTok", url: "https://tiktok.com/@chinh_dan" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-neutral-400 hover:text-accent transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
