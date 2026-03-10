import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
};

export function FormField({ label, htmlFor, hint, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-slate">{hint}</p> : null}
    </div>
  );
}

export const inputClassName =
  "w-full rounded-2xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate focus:border-teal";
