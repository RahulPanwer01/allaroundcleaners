type Stat = {
  value: string;
  label: string;
  description: string;
};

export function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card-surface p-8">
              <p className="text-4xl font-semibold text-ink">{stat.value}</p>
              <h3 className="mt-4 text-lg font-semibold text-ink">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
