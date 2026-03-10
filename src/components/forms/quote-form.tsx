"use client";

import { useState } from "react";
import { Button } from "@/components/shared/button-link";
import { FormField, inputClassName } from "@/components/forms/form-field";
import { submitToFormspree } from "@/components/forms/formspree";

const categories = [
  "Custom Residential",
  "Commercial Cleaning",
  "Post-Renovation",
  "Heavy-Duty / Hoarder Cleanup",
  "Pressure Washing",
  "Multi-Property Portfolio",
];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    serviceCategory: "",
    urgency: "",
    city: "",
    propertyDetails: "",
    callbackTime: "",
    photoNotes: "",
    contactName: "",
    email: "",
    phone: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.serviceCategory || !form.contactName || !form.email) {
      setStatus("error");
      setMessage("Please complete the quote request fields before submitting.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await submitToFormspree({
        formType: "Quote Request",
        _subject: `Quote request from ${form.contactName}`,
        ...form,
      });
      setStatus("success");
      setMessage("Quote request sent. A coordinator will review the scope and follow up soon.");
      setStep(1);
      setForm({
        serviceCategory: "",
        urgency: "",
        city: "",
        propertyDetails: "",
        callbackTime: "",
        photoNotes: "",
        contactName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send quote request.");
    }
  }

  return (
    <form className="card-surface p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="mb-8 flex items-center gap-3">
        {[1, 2].map((item) => (
          <div key={item} className={`h-2 flex-1 rounded-full ${step >= item ? "bg-teal" : "bg-mist"}`} />
        ))}
      </div>
      {step === 1 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Service category" htmlFor="serviceCategory">
            <select
              id="serviceCategory"
              className={inputClassName}
              value={form.serviceCategory}
              onChange={(event) => setForm({ ...form, serviceCategory: event.target.value })}
            >
              <option value="">Select category</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Urgency" htmlFor="urgency">
            <select
              id="urgency"
              className={inputClassName}
              value={form.urgency}
              onChange={(event) => setForm({ ...form, urgency: event.target.value })}
            >
              <option value="">Select urgency</option>
              <option>Same day</option>
              <option>This week</option>
              <option>Within 2 weeks</option>
              <option>Flexible</option>
            </select>
          </FormField>
          <FormField label="City" htmlFor="city">
            <input
              id="city"
              className={inputClassName}
              value={form.city}
              onChange={(event) => setForm({ ...form, city: event.target.value })}
            />
          </FormField>
          <FormField label="Preferred callback time" htmlFor="callbackTime">
            <input
              id="callbackTime"
              className={inputClassName}
              placeholder="Morning / Afternoon / Evening"
              value={form.callbackTime}
              onChange={(event) => setForm({ ...form, callbackTime: event.target.value })}
            />
          </FormField>
          <div className="sm:col-span-2">
            <FormField label="Project details" htmlFor="propertyDetails" hint="Describe the property, condition, square footage, and target outcome.">
              <textarea
                id="propertyDetails"
                className={`${inputClassName} min-h-40`}
                value={form.propertyDetails}
                onChange={(event) => setForm({ ...form, propertyDetails: event.target.value })}
              />
            </FormField>
          </div>
          <div className="sm:col-span-2 flex justify-end">
            <Button type="button" onClick={() => setStep(2)}>
              Continue
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Contact name" htmlFor="contactName">
            <input
              id="contactName"
              className={inputClassName}
              value={form.contactName}
              onChange={(event) => setForm({ ...form, contactName: event.target.value })}
            />
          </FormField>
          <FormField label="Email" htmlFor="email">
            <input
              id="email"
              type="email"
              className={inputClassName}
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </FormField>
          <FormField label="Phone" htmlFor="phone">
            <input
              id="phone"
              className={inputClassName}
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
            />
          </FormField>
          <div className="sm:col-span-2">
            <FormField label="Project photos or reference link" htmlFor="photoNotes" hint="Paste a shared drive link or tell us you have photos ready to send after we reply.">
              <textarea
                id="photoNotes"
                className={`${inputClassName} min-h-28`}
                value={form.photoNotes}
                onChange={(event) => setForm({ ...form, photoNotes: event.target.value })}
              />
            </FormField>
          </div>
          <div className="sm:col-span-2 flex flex-wrap justify-between gap-3">
            <Button type="button" variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Quote Request"}
            </Button>
          </div>
        </div>
      )}
      {message ? (
        <p className={`mt-5 text-sm ${status === "success" ? "text-mint" : "text-red-600"}`}>{message}</p>
      ) : null}
    </form>
  );
}
