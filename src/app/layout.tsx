import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, getLocalBusinessSchema } from "@/lib/schemas";

export const metadata: Metadata = buildMetadata({
  title: "Professional Cleaning Services Across Canada | All Around Cleaners",
  description:
    "Reliable residential and commercial cleaning services across Canada. Book move-out cleaning, deep cleaning, post-renovation cleanup, maid services, and more.",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={getLocalBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
