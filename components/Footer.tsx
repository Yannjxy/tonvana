import Link from "next/link";

import { siteConfig } from "@/lib/config/site";
import { navigation } from "@/lib/config/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-10 md:flex-row md:items-start md:text-left">
        {/* Brand */}

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold tracking-[0.15em] text-[var(--brand-green)]">
            {siteConfig.name.toUpperCase()}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-7 text-stone-600">
            {siteConfig.slogan}
          </p>
        </div>

        {/* Contact */}

        <div className="space-y-2 text-center text-sm text-stone-600 md:text-left">
          <p>
            📍 {siteConfig.city}, {siteConfig.province}
          </p>

          <p>
            <a
              href={siteConfig.phoneHref}
              className="transition-colors hover:text-[var(--brand-gold)]"
            >
              {siteConfig.phone}
            </a>
          </p>

          <p>
            <a
              href={siteConfig.emailHref}
              className="transition-colors hover:text-[var(--brand-gold)]"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>

        {/* Navigation */}

        <nav className="flex flex-wrap justify-center gap-6 text-sm md:justify-end">
          {navigation
            .filter((item) => item.showInNavbar)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--brand-gold)]"
              >
                {item.label}
              </Link>
            ))}
        </nav>
      </div>

      {/* Copyright */}

      <div className="border-t border-stone-200 py-5 text-center text-sm text-stone-500">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}