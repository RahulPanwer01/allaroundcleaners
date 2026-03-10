import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type BaseCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: BaseCardProps) {
  return (
    <Link
      href={href}
      className="card-surface group flex h-full flex-col justify-between p-6 hover:-translate-y-1"
    >
      <div>
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate">{description}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
        Explore service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

type PricingCardProps = {
  label: string;
  price: number | null;
  lead: string;
  features: string[];
};

export function PricingCard({ label, price, lead, features }: PricingCardProps) {
  return (
    <div className="card-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-ink">{label}</h3>
          <p className="mt-2 text-sm text-slate">{lead}</p>
        </div>
        <div className="rounded-3xl bg-mist px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Starting at</p>
          <p className="mt-1 text-2xl font-semibold text-ink">
            {price ? formatCurrency(price) : "Custom"}
          </p>
        </div>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-slate">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 text-mint" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type LocationCardProps = {
  title: string;
  description: string;
  href: string;
};

export function LocationCard({ title, description, href }: LocationCardProps) {
  return (
    <Link href={href} className="card-surface block p-6 hover:border-teal/40">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-teal/10 p-2 text-teal">
          <MapPin className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate">{description}</p>
    </Link>
  );
}

type BlogCardProps = {
  title: string;
  description: string;
  href: string;
  meta: string;
};

export function BlogCard({ title, description, href, meta }: BlogCardProps) {
  return (
    <Link href={href} className="card-surface block overflow-hidden">
      <div className="h-44 bg-gradient-to-br from-teal/15 via-mist to-mint/20" />
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{meta}</p>
        <h3 className="mt-3 text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate">{description}</p>
      </div>
    </Link>
  );
}
