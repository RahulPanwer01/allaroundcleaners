import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-ink text-white hover:bg-teal focus-visible:outline-teal",
  secondary:
    "border border-mist bg-white text-ink hover:border-teal hover:text-teal focus-visible:outline-teal",
  accent:
    "bg-mint text-white hover:bg-teal focus-visible:outline-mint",
  inversePrimary:
    "bg-white text-ink hover:bg-sand focus-visible:outline-white",
  inverseSecondary:
    "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white focus-visible:outline-white",
  ghost:
    "text-ink hover:bg-teal/5 hover:text-teal focus-visible:outline-teal",
  inverseGhost:
    "text-white hover:bg-white/10 hover:text-white focus-visible:outline-white",
};

type Variant = keyof typeof variants;

type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const shared =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: LinkProps) {
  return (
    <Link href={href} className={cn(shared, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(shared, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
