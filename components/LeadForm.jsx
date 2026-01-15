"use client";

import { useState } from "react";

export default function LeadForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    function handleNewMessage() {
      setSuccess(false);
      setError("");
    }

    async function handleSubmit(e) {
      e.preventDefault();
      setError("");
      setSuccess(false);

      if (!name.trim()) {
        alert("Name is required");
        return;
      }

      if (!email.trim()) {
        alert("Email is required");
        return;
      }

      if (!phone.trim()) {
        alert("Phone number is required");
        return;
      }

      const digitsOnlyPhone = phone.replace(/\D/g, "");

      if (digitsOnlyPhone.length < 10) {
        alert("Please enter a valid phone number");
        return;
      }

      const MAX_MESSAGE_LENGTH = 500;

      if (message.length > MAX_MESSAGE_LENGTH) {
        alert(`Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`);
        return;
      }

      if (message && message.trim().length < 10) {
        alert("Please provide a bit more detail about your situation");
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
    Thank you — your message has been received.
  </h3>
  <p className="mt-2 text-sm text-brand-gray">
    A member of our legal team will review your information and contact you shortly.
  </p>
</div>
        </div>
      );
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-brand-gray w-full">
              Name 
              <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              onInput={(e) => setName(e.target.value)}
              className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-white px-3 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30"
              />
            </label>

            <label className="block text-sm font-medium text-brand-gray">
                Email
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onInput={(e) => setEmail(e.target.value)}
                className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-white px-3 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30"
                />
            </label>

            <label className="block text-sm font-medium text-brand-gray">
                Phone
                <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onInput={(e) => setPhone(e.target.value)}
                className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-white px-3 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30"
                />
            </label>

            <label className="block text-sm font-medium text-brand-gray">
                What happened?
                <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onInput={(e) => setMessage(e.target.value)}
                rows={4}
                maxLength={500}
                className="mt-1 w-full min-h-[120px] rounded-md border border-gray-300 bg-white px-3 py-3 outline-none transition focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 resize-none"
                />
                <p className="mt-2 text-right text-xs text-brand-gray/80">
                  {message.length}/500 characters
                </p>
            </label>
            <p className="mt-3 rounded-md bg-brand-gray/5 px-3 py-2 text-sm text-brand-gray">
            Help is available. Let’s take the next step together.
            </p>
            
            <button type="submit" 
            className="mt-3 w-full inline-flex justify-center rounded-md bg-brand-purple px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-purple/90 focus:outline-none focus:ring-2 focus:ring-brand-purple/40 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}