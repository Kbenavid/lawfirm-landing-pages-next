"use client";

import { useState } from "react";

export default function LeadForm({ t }){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const copy = {
      labels: {
        name: t?.leadForm?.labels?.name ?? "Name",
        email: t?.leadForm?.labels?.email ?? "Email",
        phone: t?.leadForm?.labels?.phone ?? "Phone",
        message: t?.leadForm?.labels?.message ?? "What happened?",
      },
      placeholders: {
        name: t?.leadForm?.placeholders?.name ?? "Your full name",
        email: t?.leadForm?.placeholders?.email ?? "you@example.com",
        phone: t?.leadForm?.placeholders?.phone ?? "(555) 555-5555",
        message:
          t?.leadForm?.placeholders?.message ??
          "Briefly describe what happened and how you were injured",
      },
      errors: {
        nameRequired: t?.leadForm?.errors?.nameRequired ?? "Name is required",
        emailRequired: t?.leadForm?.errors?.emailRequired ?? "Email is required",
        phoneRequired: t?.leadForm?.errors?.phoneRequired ?? "Phone number is required",
        phoneInvalid:
          t?.leadForm?.errors?.phoneInvalid ?? "Please enter a valid phone number",
        messageTooLong:
          t?.leadForm?.errors?.messageTooLong ?? "Message cannot exceed 500 characters",
        messageTooShort:
          t?.leadForm?.errors?.messageTooShort ??
          "Please provide a bit more detail about your situation",
      },
      helperText:
        t?.leadForm?.helperText ?? "Help is available. Let’s take the next step together.",
      submit: {
        idle: t?.leadForm?.submit?.idle ?? "Submit",
        loading: t?.leadForm?.submit?.loading ?? "Submitting...",
      },
      success: {
        title:
          t?.leadForm?.success?.title ?? "Thank you — your message has been received.",
        body:
          t?.leadForm?.success?.body ??
          "A member of our legal team will review your information and contact you shortly.",
      },
    };

    function handleNewMessage() {
      setSuccess(false);
      setError("");
    }

    async function handleSubmit(e) {
      e.preventDefault();
      setError("");
      setSuccess(false);

      if (!name.trim()) {
        alert(copy.errors.nameRequired);
        return;
      }

      if (!email.trim()) {
        alert(copy.errors.emailRequired);
        return;
      }

      if (!phone.trim()) {
        alert(copy.errors.phoneRequired);
        return;
      }

      const digitsOnlyPhone = phone.replace(/\D/g, "");

      if (digitsOnlyPhone.length < 10) {
        alert(copy.errors.phoneInvalid);
        return;
      }

      const MAX_MESSAGE_LENGTH = 500;

      if (message.length > MAX_MESSAGE_LENGTH) {
        alert(copy.errors.messageTooLong);
        return;
      }

      if (message && message.trim().length < 10) {
        alert(copy.errors.messageTooShort);
        return;
      }

      setIsSubmitting(true);

      try {
        const res = await fetch("/api/leads",
            {
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                name, 
                email, 
                phone: digitsOnlyPhone, message,
            }),
        });

        if (!res.ok) { 
            throw new Error("Request failed");
        }

        const data = await res.json();

        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

    } catch (err) {
        setError(err.message);
     } finally {
        setIsSubmitting(false);
      }
    }
    if (success) {
      return (
        <div className="space-y-4">
          <div className="rounded-xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
  <h3 className="text-lg font-semibold text-brand-purple">
    {copy.success.title}
  </h3>
  <p className="mt-2 text-sm text-brand-gray">
    {copy.success.body}
  </p>
</div>
        </div>
      );
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-brand-gray w-full">
              {copy.labels.name}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onInput={(e) => setName(e.target.value)}
                className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-white px-3 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30"
                placeholder={copy.placeholders.name}
              />
            </label>

            <label className="block text-sm font-medium text-brand-gray">
                {copy.labels.email}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onInput={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-white px-3 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30"
                  placeholder={copy.placeholders.email}
                />
            </label>

            <label className="block text-sm font-medium text-brand-gray">
                {copy.labels.phone}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onInput={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-white px-3 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30"
                  placeholder={copy.placeholders.phone}
                />
            </label>

            <label className="block text-sm font-medium text-brand-gray">
                {copy.labels.message}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onInput={(e) => setMessage(e.target.value)}
                  rows={4}
                  maxLength={500}
                  className="mt-1 w-full min-h-[120px] rounded-md border border-gray-300 bg-white px-3 py-3 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 resize-none"
                  placeholder={copy.placeholders.message}
                />
                <p className="mt-2 text-right text-xs text-brand-gray/80">
                  {message.length}/500 characters
                </p>
            </label>
            <p className="mt-3 rounded-md bg-brand-gray/5 px-3 py-2 text-sm text-brand-gray">
              {copy.helperText}
            </p>
            
            <button type="submit" 
            className="mt-3 w-full inline-flex justify-center rounded-md bg-brand-purple px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-purple/90 focus:outline-none focus:ring-2 focus:ring-brand-purple/40 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            >
                {isSubmitting ? copy.submit.loading : copy.submit.idle}
            </button>
        </form>
    );
}