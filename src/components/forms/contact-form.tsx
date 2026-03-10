"use client";

import { useState } from "react";
import { Button } from "@/components/shared/button-link";
import { FormField, inputClassName } from "@/components/forms/form-field";
import { submitToFormspree } from "@/components/forms/formspree";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setMessage("Please complete the required contact fields.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await submitToFormspree({
        formType: "Contact",
        _subject: `Contact request from ${form.name}`,
        ...form,
      });
      setStatus("success");
      setMessage("Message sent successfully.");
      setForm({ name: "", email: "", phone: "", city: "", message: "" });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  }

  return (
    <form className="card-surface p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name">
          <input id="name" className={inputClassName} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        </FormField>
        <FormField label="Email" htmlFor="email">
          <input id="email" type="email" className={inputClassName} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        </FormField>
        <FormField label="Phone" htmlFor="phone">
          <input id="phone" className={inputClassName} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
        </FormField>
        <FormField label="City" htmlFor="city">
          <input id="city" className={inputClassName} value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} />
        </FormField>
        <div className="sm:col-span-2">
          <FormField label="How can we help?" htmlFor="message">
            <textarea id="message" className={`${inputClassName} min-h-36`} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          </FormField>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
        {message ? (
          <p className={`text-sm ${status === "success" ? "text-mint" : "text-red-600"}`}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}
