export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <a
          href="/"
          className="text-2xl font-semibold tracking-[0.2em]"
        >
          TONVANA
        </a>

        <nav className="hidden items-center gap-10 md:flex">

          <a href="#services">Services</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>

          <a
            href="#contact"
            className="rounded-full bg-[var(--forest)] px-6 py-3 text-white"
          >
            Book Service
          </a>

        </nav>

      </div>
    </header>
  );
}