import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-xs text-neutral-500 tracking-widest uppercase">
            Surrey, BC, Canada
          </p>
          <p className="text-xs text-neutral-600 mt-1 italic">
            "I don't like staying up late, but I would do that for music."
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/chinh_dan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-neutral-500 hover:text-cream transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@chinh_dan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-neutral-500 hover:text-cream transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://tiktok.com/@chinh_dan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-neutral-500 hover:text-cream transition-colors"
          >
            TikTok
          </a>
        </div>

        <p className="text-xs text-neutral-600">
          © 2025 Chinh Dan
        </p>
      </div>
    </footer>
  );
}
