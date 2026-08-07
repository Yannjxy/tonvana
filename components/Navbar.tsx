"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo */}

        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.18em] transition-opacity hover:opacity-70 md:text-2xl md:tracking-[0.2em]"
        >
          TONVANA
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/#services"
            className="transition-colors hover:text-[var(--brand-gold)]"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="transition-colors hover:text-[var(--brand-gold)]"
          >
            About
          </Link>

          <a
            href="tel:4317288688"
            className="transition-colors hover:text-[var(--brand-gold)]"
          >
            Contact
          </a>

          <Link
            href="/book"
            className="rounded-full bg-[var(--brand-green)] px-6 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
          >
            Book a Service
          </Link>
        </nav>

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="transition-transform duration-300 hover:scale-105 md:hidden"
        >
          <div className="transition-all duration-300">
            {open ? <X size={28} /> : <Menu size={28} />}
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}

      {open && (
        <nav
          className="
            animate-in
            fade-in
            slide-in-from-top-2
            duration-300
            border-t
            border-stone-200
            bg-white/95
            backdrop-blur-xl
            md:hidden
          "
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 transition-colors hover:bg-stone-50"
          >
            Home
          </Link>

          <Link
            href="/#services"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 transition-colors hover:bg-stone-50"
          >
            Services
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 transition-colors hover:bg-stone-50"
          >
            About
          </Link>

          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="
              mx-6
              my-4
              block
              rounded-full
              bg-[var(--brand-green)]
              py-3
              text-center
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:opacity-95
            "
          >
            Book a Service
          </Link>

          <a
            href="tel:4317288688"
            className="block border-t border-stone-200 px-6 py-5 transition-colors hover:bg-stone-50"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-stone-500">
              Call
            </div>

            <div className="mt-1 text-lg font-semibold text-stone-900">
              431-728-8688
            </div>
          </a>
        </nav>
      )}
    </header>
  );
}