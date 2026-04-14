import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Chinh Dan",
  description: "Get in touch with Chinh Dan for session work and bookings.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="section-title">Contact</p>
        <h1 className="text-4xl md:text-5xl font-light text-cream mb-4">
          Get in Touch
        </h1>
        <p className="text-neutral-500 mb-16 leading-relaxed">
          Available for session work, collaborations, and live bookings. Reach
          out via email or phone.
        </p>

        <div className="space-y-4 mb-16">
          <a
            href="mailto:danvuong6@gmail.com"
            className="flex items-center justify-between border border-white/10 p-6 hover:border-accent/30 transition-colors group"
          >
            <div>
              <p className="text-xs tracking-widest uppercase text-neutral-600 mb-1">
                Email
              </p>
              <p className="text-cream group-hover:text-accent transition-colors">
                danvuong6@gmail.com
              </p>
            </div>
            <span className="text-neutral-600 group-hover:text-accent transition-colors">
              →
            </span>
          </a>

          <a
            href="tel:+12367770048"
            className="flex items-center justify-between border border-white/10 p-6 hover:border-accent/30 transition-colors group"
          >
            <div>
              <p className="text-xs tracking-widest uppercase text-neutral-600 mb-1">
                Phone
              </p>
              <p className="text-cream group-hover:text-accent transition-colors">
                (236) 777-0048
              </p>
            </div>
            <span className="text-neutral-600 group-hover:text-accent transition-colors">
              →
            </span>
          </a>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-600 mb-6">
            Social Media
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                name: "Instagram",
                handle: "@chinh_dan",
                url: "https://instagram.com/chinh_dan",
              },
              {
                name: "YouTube",
                handle: "@chinh_dan",
                url: "https://youtube.com/@chinh_dan",
              },
              {
                name: "TikTok",
                handle: "@chinh_dan",
                url: "https://tiktok.com/@chinh_dan",
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 p-5 text-center hover:border-accent/30 transition-colors group"
              >
                <p className="text-xs tracking-widest uppercase text-accent mb-2">
                  {s.name}
                </p>
                <p className="text-sm text-neutral-500 group-hover:text-cream transition-colors">
                  {s.handle}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8">
          <p className="text-xs text-neutral-600 text-center">
            Based in Surrey, BC, Canada · Available for remote session work
          </p>
        </div>
      </div>
    </div>
  );
}
