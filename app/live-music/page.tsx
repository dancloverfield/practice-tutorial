import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Music — Chinh Dan",
  description: "Live performances and music videos by Chinh Dan.",
};

const performances = [
  {
    project: "UBC AMS Clubs Fair 2025",
    date: "September 25, 2025",
    venue: "AMS Student Nest",
    tracks: [
      "Thinking Out Loud (Cover)",
      "Ain't As Pretty A Blue (Original)",
    ],
  },
  {
    project: "Brown Sugar",
    date: "August 24, 2025",
    venue: "Vancouver Indonesian Festival",
    tracks: [
      "High School in Jakarta",
      "Brown Sugar",
      "Original compositions",
    ],
  },
  {
    project: "Sadó",
    date: "August 16, 2025",
    venue: "Capybakery Pop-up",
    tracks: ["Sing a Prayer (Original Song)"],
  },
  {
    project: "King McGill",
    date: "May 1–13, 2025",
    venue: "Trees Granville & Studio",
    tracks: [
      "Late Have I Loved You (Original)",
      "Nebraska (Original)",
      "EP Behind-the-Scenes",
    ],
  },
];

export default function LiveMusicPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-title">Live Music</p>
        <h1 className="text-4xl md:text-5xl font-light text-cream mb-4">
          Performances
        </h1>
        <p className="text-neutral-500 mb-16 max-w-lg leading-relaxed">
          A collection of live shows, festival sets, and intimate performances
          across Vancouver and beyond.
        </p>

        <div className="space-y-px">
          {performances.map((perf, i) => (
            <div
              key={i}
              className="border border-white/10 p-8 hover:border-accent/30 transition-colors duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs tracking-widest uppercase text-accent mb-2">
                    {perf.date}
                  </p>
                  <h2 className="text-xl text-cream font-medium mb-1 group-hover:text-accent transition-colors">
                    {perf.project}
                  </h2>
                  <p className="text-sm text-neutral-500 mb-4">{perf.venue}</p>
                  <ul className="space-y-1">
                    {perf.tracks.map((track) => (
                      <li key={track} className="text-sm text-neutral-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent/50 inline-block" />
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-600 mt-12 italic">
          Follow{" "}
          <a
            href="https://youtube.com/@chinh_dan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            @chinh_dan on YouTube
          </a>{" "}
          for full performance videos.
        </p>
      </div>
    </div>
  );
}
