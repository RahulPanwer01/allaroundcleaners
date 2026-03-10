import Link from "next/link";
import { companyContact, footerGroups } from "@/data/site";
import { ButtonLink } from "@/components/shared/button-link";

export function Footer() {
  return (
    <footer className="border-t border-mist bg-ink text-white">
      <div className="container-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <h2 className="font-serif text-3xl font-semibold">All Around Cleaners</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              Professional residential and commercial cleaning services across Canada, with dependable crews, clear pricing, and fast quote support.
            </p>
            <div className="mt-6 rounded-4xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold">Service hours</p>
              <p className="mt-2 text-sm text-white/75">{companyContact.hours}</p>
              <p className="mt-4 text-sm font-semibold">Fastest way to reach us</p>
              <p className="mt-2 text-sm text-white/75">{companyContact.responseTime}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href={companyContact.primaryCta.href} className="bg-white text-ink hover:bg-mint hover:text-white">
                  {companyContact.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={companyContact.secondaryCta.href} variant="ghost" className="border border-white/15 text-white hover:bg-white/10 hover:text-white">
                  {companyContact.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
          {Object.entries(footerGroups).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{group}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p>Serving major cities across Canada with locally dispatched cleaning teams.</p>
          <p>English-language booking and quote support for Canadian residential and commercial properties.</p>
        </div>
      </div>
    </footer>
  );
}
