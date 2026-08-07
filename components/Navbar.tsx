"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = navigation.filter(
    (item) => item.label !== "Book"
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.18em] transition-opacity hover:opacity-70 md:text-2xl md:tracking-[0.2em]"
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--brand-gold)]"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={siteConfig.phoneHref}
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="transition-transform duration-300 hover:scale-105 md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-stone-200 bg-white/95 backdrop-blur-xl md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 transition-colors hover:bg-stone-50"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="mx-6 my-4 block rounded-full bg-[var(--brand-green)] py-3 text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
          >
            Book a Service
          </Link>

          <a
            href={siteConfig.phoneHref}
            className="block border-t border-stone-200 px-6 py-5 transition-colors hover:bg-stone-50"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-stone-500">
              Call
            </div>

            <div className="mt-1 text-lg font-semibold text-stone-900">
              {siteConfig.phone}
            </div>
          </a>

          <a
            href={siteConfig.emailHref}
            className="block border-t border-stone-200 px-6 py-5 transition-colors hover:bg-stone-50"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-stone-500">
              Email
            </div>

            <div className="mt-1 text-base font-medium text-stone-900 break-all">
              {siteConfig.email}
            </div>
          </a>
        </nav>
      )}
    </header>
  );
}