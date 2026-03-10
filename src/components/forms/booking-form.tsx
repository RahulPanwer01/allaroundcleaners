"use client";

import { useMemo, useState } from "react";
import { addOns, pricingTiers } from "@/data/pricing";
import { Button } from "@/components/shared/button-link";
import { FormField, inputClassName } from "@/components/forms/form-field";
import { submitToFormspree } from "@/components/forms/formspree";
import { formatCurrency } from "@/lib/utils";

const serviceTypes = [
  "Move In / Move Out Cleaning",
  "Deep Cleaning",
  "Post Renovation Cleaning",
  "Pre Sale Cleaning",
  "Commercial Cleaning",
  "Maid Services",
];

const propertyTypes = ["Condo", "Apartment", "Townhouse", "Detached Home", "Office", "Retail"];

const cities = [
  "Toronto",
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Mississauga",
  "Winnipeg",
  "Halifax",
];

type FormState = {
  serviceType: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  propertySize: string;
  preferredDate: string;
  preferredTime: string;
  city: string;
  postalCode: string;
  extras: string[];
  contactName: string;
  email: string;
  phone: string;
  notes: string;
};

const initialState: FormState = {
  serviceType: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  propertySize: "",
  preferredDate: "",
  preferredTime: "",
  city: "",
  postalCode: "",
  extras: [],
  contactName: "",
  email: "",
  phone: "",
  notes: "",
};

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const estimate = useMemo(() => {
    const tier = pricingTiers.find((item) => item.label.toLowerCase().includes(form.bedrooms || "x"));
    const fallback =
      form.bedrooms === "0"
        ? pricingTiers[0]
        : form.bedrooms === "1"
          ? pricingTiers[1]
          : form.bedrooms === "2"
            ? pricingTiers[2]
            : form.bedrooms === "3"
              ? pricingTiers[3]
              : pricingTiers[4];
    const base = (tier ?? fallback).price ?? 0;
    const extras = addOns
      .filter((item) => form.extras.includes(item.label))
      .reduce((sum, item) => sum + item.price, 0);

    return { base, extras, total: base + extras };
  }, [form.bedrooms, form.extras]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.serviceType || !form.city || !form.contactName || !form.email || !form.phone) {
      setStatus("error");
      setMessage("Please complete the required booking fields.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await submitToFormspree({
        formType: "Book Now",
        _subject: `Booking request from ${form.contactName}`,
        ...form,
        estimatedPriceCad: estimate.total || "Custom quote required",
      });
      setStatus("success");
      setMessage("Booking request sent. A coordinator will confirm the scope and timing shortly.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit booking.");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <form className="card-surface p-6 sm:p-8" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Service type" htmlFor="serviceType">
            <select
              id="serviceType"
              className={inputClassName}
              value={form.serviceType}
              onChange={(event) => setForm({ ...form, serviceType: event.target.value })}
            >
              <option value="">Select a service</option>
              {serviceTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Property type" htmlFor="propertyType">
            <select
              id="propertyType"
              className={inputClassName}
              value={form.propertyType}
              onChange={(event) => setForm({ ...form, propertyType: event.target.value })}
            >
              <option value="">Select property type</option>
              {propertyTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Bedrooms" htmlFor="bedrooms">
            <select
              id="bedrooms"
              className={inputClassName}
              value={form.bedrooms}
              onChange={(event) => setForm({ ...form, bedrooms: event.target.value })}
            >
              <option value="">Select</option>
              <option value="0">Studio</option>
              <option value="1">1 bedroom</option>
              <option value="2">2 bedrooms</option>
              <option value="3">3+ bedrooms</option>
            </select>
          </FormField>
          <FormField label="Bathrooms" htmlFor="bathrooms">
            <input
              id="bathrooms"
              className={inputClassName}
              placeholder="e.g. 2"
              value={form.bathrooms}
              onChange={(event) => setForm({ ...form, bathrooms: event.target.value })}
            />
          </FormField>
          <FormField label="Property size" htmlFor="propertySize">
            <input
              id="propertySize"
              className={inputClassName}
              placeholder="Square feet"
              value={form.propertySize}
              onChange={(event) => setForm({ ...form, propertySize: event.target.value })}
            />
          </FormField>
          <FormField label="City" htmlFor="city">
            <select
              id="city"
              className={inputClassName}
              value={form.city}
              onChange={(event) => setForm({ ...form, city: event.target.value })}
            >
              <option value="">Choose city</option>
              {cities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Preferred date" htmlFor="preferredDate">
            <input
              id="preferredDate"
              type="date"
              className={inputClassName}
              value={form.preferredDate}
              onChange={(event) => setForm({ ...form, preferredDate: event.target.value })}
            />
          </FormField>
          <FormField label="Preferred time" htmlFor="preferredTime">
            <input
              id="preferredTime"
              type="time"
              className={inputClassName}
              value={form.preferredTime}
              onChange={(event) => setForm({ ...form, preferredTime: event.target.value })}
            />
          </FormField>
          <FormField label="Postal code" htmlFor="postalCode">
            <input
              id="postalCode"
              className={inputClassName}
              placeholder="A1A 1A1"
              value={form.postalCode}
              onChange={(event) => setForm({ ...form, postalCode: event.target.value })}
            />
          </FormField>
          <div className="sm:col-span-2">
            <FormField label="Add-ons" htmlFor="extras">
              <div className="grid gap-3 sm:grid-cols-2">
                {addOns.map((item) => (
                  <label
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-mist px-4 py-3 text-sm"
                  >
                    <span>{item.label}</span>
                    <input
                      type="checkbox"
                      checked={form.extras.includes(item.label)}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          extras: event.target.checked
                            ? [...form.extras, item.label]
                            : form.extras.filter((value) => value !== item.label),
                        })
                      }
                    />
                  </label>
                ))}
              </div>
            </FormField>
          </div>
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
            <FormField label="Notes" htmlFor="notes" hint="Access details, urgency, pets, parking, or anything the crew should know.">
              <textarea
                id="notes"
                className={`${inputClassName} min-h-32`}
                value={form.notes}
                onChange={(event) => setForm({ ...form, notes: event.target.value })}
              />
            </FormField>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit Booking Request"}
          </Button>
          <p className="text-sm text-slate">Book now, pay later. Final scope is confirmed before service.</p>
        </div>
        {message ? (
          <p className={`mt-4 text-sm ${status === "success" ? "text-mint" : "text-red-600"}`}>{message}</p>
        ) : null}
      </form>
      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <div className="card-surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Estimated summary</p>
          <div className="mt-6 space-y-3 text-sm text-slate">
            <div className="flex justify-between">
              <span>Base estimate</span>
              <span>{estimate.base ? formatCurrency(estimate.base) : "Custom"}</span>
            </div>
            <div className="flex justify-between">
              <span>Add-ons</span>
              <span>{estimate.extras ? formatCurrency(estimate.extras) : formatCurrency(0)}</span>
            </div>
            <div className="border-t border-mist pt-3 text-base font-semibold text-ink">
              <div className="flex justify-between">
                <span>Estimated total</span>
                <span>{estimate.total ? formatCurrency(estimate.total) : "Custom quote"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-surface p-6">
          <h3 className="text-lg font-semibold text-ink">Why clients book online</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            <li>Fast response from a real coordinator</li>
            <li>No upfront payment required to request service</li>
            <li>Scope and access details confirmed before dispatch</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
