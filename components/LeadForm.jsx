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

    async function handleSubmit(e) {
      e.preventDefault();
      setError("");
      setSuccess("");

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
  
          // ===============================
      // TEMP DEBUG STYLES (REMOVE LATER)
      // ===============================
      const debugStyles = {
        form: {
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: "20px",
          maxWidth: "600px",
          borderRadius: "8px",
        },
        label: {
          display: "block",
          marginBottom: "12px",
        },
        input: {
          display: "block",
          width: "100%",
          marginTop: "4px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        },
        button: {
          marginTop: "16px",
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "#ffffff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        },
      };
    return (
        <form onSubmit={handleSubmit} style={debugStyles.form}>
            <label style={debugStyles.label}>
              Name 
              <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={debugStyles.input}
              />
            </label>

            <label style={debugStyles.label}>
                Email
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={debugStyles.input}
                />
            </label>

            <label style={debugStyles.label}>
                Phone
                <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={debugStyles.input}
                />
            </label>

            <label style={debugStyles.label}>
                What happened?
                <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                maxLength={500}
                style={debugStyles.input}
                />
                <p style={{fontSize: "0.8rem", color: "#555"}}>
                    {message.length}/500 characters
                </p>
            </label>

            <button type="submit" style={debugStyles.button}
            disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}