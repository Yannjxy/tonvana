import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link
          href="/"
          className="text-2xl font-semibold tracking-[0.2em]"
        >
          TONVANA
        </Link>

        <nav className="hidden items-center gap-10 md:flex">

          <a href="#services">Services</a>

          <a href="/about">About</a>

          <a href="#contact">Contact</a>

          <Link
            href="/book"
            className="rounded-full bg-[var(--forest)] px-6 py-3 text-white transition hover:opacity-90"
          >
            Book a Service
          </Link>

        </nav>

      </div>
    </header>
  );
}