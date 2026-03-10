"use client";

import { useState } from "react";
import { Button } from "@/components/shared/button-link";
import { FormField, inputClassName } from "@/components/forms/form-field";
import { submitToFormspree } from "@/components/forms/formspree";

export function JoinForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    availability: "",
    experience: "",
    employmentType: "Contractor",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.city) {
      setStatus("error");
      setMessage("Please complete the required application fields.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await submitToFormspree({
        formType: "Join Us",
        _subject: `Cleaner application from ${form.fullName}`,
        ...form,
      });
      setStatus("success");
      setMessage("Application sent successfully.");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        availability: "",
        experience: "",
        employmentType: "Contractor",
      });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send application.");
    }
  }

  return (
    <form className="card-surface p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full name" htmlFor="fullName">
          <input id="fullName" className={inputClassName} value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} />
        </FormField>
        <FormField label="Email" htmlFor="joinEmail">
          <input id="joinEmail" type="email" className={inputClassName} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        </FormField>
        <FormField label="Phone" htmlFor="joinPhone">
          <input id="joinPhone" className={inputClassName} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
        </FormField>
        <FormField label="Preferred city" htmlFor="joinCity">
          <input id="joinCity" className={inputClassName} value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} />
        </FormField>
        <FormField label="Availability" htmlFor="availability">
          <input id="availability" className={inputClassName} placeholder="Weekdays, evenings, weekends" value={form.availability} onChange={(event) => setForm({ ...form, availability: event.target.value })} />
        </FormField>
        <FormField label="Contractor or employee interest" htmlFor="employmentType">
          <select id="employmentType" className={inputClassName} value={form.employmentType} onChange={(event) => setForm({ ...form, employmentType: event.target.value })}>
            <option>Contractor</option>
            <option>Employee</option>
            <option>Open to either</option>
          </select>
        </FormField>
        <div className="sm:col-span-2">
          <FormField label="Cleaning experience" htmlFor="experience">
            <textarea id="experience" className={`${inputClassName} min-h-32`} value={form.experience} onChange={(event) => setForm({ ...form, experience: event.target.value })} />
          </FormField>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Submit Application"}
        </Button>
        {message ? (
          <p className={`text-sm ${status === "success" ? "text-mint" : "text-red-600"}`}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}
