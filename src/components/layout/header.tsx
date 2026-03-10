import Link from "next/link";
import { navLinks } from "@/data/site";
import { ButtonLink } from "@/components/shared/button-link";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-white/90 backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-mint font-serif text-lg font-semibold text-white">
            AC
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">All Around Cleaners</p>
            <p className="text-xs text-slate">allaroundcleaners.ca</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink hover:text-teal">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/book-now" variant="secondary">
            Book Online
          </ButtonLink>
          <ButtonLink href="/quote">Get a Free Quote</ButtonLink>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
