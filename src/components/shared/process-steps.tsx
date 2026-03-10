type Step = {
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.title} className="card-surface p-6">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal text-lg font-semibold text-white">
            {index + 1}
          </span>
          <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
