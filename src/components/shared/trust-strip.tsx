import { socialProof } from "@/data/site";

export function TrustStrip() {
  return (
    <section className="border-y border-mist bg-sand">
      <div className="container-shell grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {socialProof.map((item) => (
          <div key={item.label}>
            <p className="text-2xl font-semibold text-ink">{item.value}</p>
            <p className="mt-1 text-sm text-slate">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
