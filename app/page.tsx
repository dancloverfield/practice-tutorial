import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-6">
          Session Musician · Recording Artist
        </p>
        <h1 className="text-6xl md:text-8xl font-light tracking-tight text-cream mb-6">
          William
        </h1>
        <p className="max-w-lg text-neutral-400 leading-relaxed mb-10">
          I'm a session musician who specializes in guitar, bass, vocals, and
          songwriting, based in Vancouver, BC, Canada. Drawing inspiration from
          RnB, indie, and alternative genres—performing both covers and original
          compositions.
        </p>
        <div className="flex gap-6">
          <Link
            href="/live-music"
            className="text-xs tracking-widest uppercase border border-accent text-accent px-6 py-3 hover:bg-accent hover:text-charcoal transition-all duration-200"
          >
            Live Music
          </Link>
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase border border-white/20 text-neutral-400 px-6 py-3 hover:border-cream hover:text-cream transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-neutral-300 leading-relaxed italic">
            "I don't like staying up late, but I would do that for music."
          </blockquote>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-title text-center">Instruments & Skills</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Guitar", "Bass", "Vocals", "Songwriting"].map((skill) => (
              <div
                key={skill}
                className="border border-white/10 p-6 text-center hover:border-accent/50 transition-colors duration-200"
              >
                <p className="text-sm tracking-widest uppercase text-neutral-300">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent highlights */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-title text-center">Recent Highlights</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "UBC AMS Clubs Fair",
                date: "Sept 2025",
                desc: "Performed covers including 'Thinking Out Loud' and originals at AMS Student Nest.",
              },
              {
                title: "Vancouver Indonesian Festival",
                date: "Aug 2025",
                desc: "Featured performance with 'High School in Jakarta' and other original songs.",
              },
              {
                title: "King McGill EP",
                date: "May 2025",
                desc: "Original compositions 'Late Have I Loved You' and 'Nebraska' performed at Trees Granville.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/10 p-6 hover:border-accent/30 transition-colors duration-200"
              >
                <p className="text-xs tracking-widest uppercase text-accent mb-1">
                  {item.date}
                </p>
                <h3 className="text-cream font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
