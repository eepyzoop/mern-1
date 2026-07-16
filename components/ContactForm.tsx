"use client";

import { useState, type FormEvent } from "react";

const errorStyle = { borderColor: "#E24B4A" };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false, msg: false });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();
    if (!trimmedName || !trimmedEmail || !trimmedMsg) {
      setErrors({ name: !trimmedName, email: !trimmedEmail, msg: !trimmedMsg });
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedMsg }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setSubmitError("Something went wrong sending your message. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="sent" style={{ display: "block" }}>
        <div className="big">💌</div>
        <h3>Message sent</h3>
        <p>Thanks for reaching out; I&rsquo;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form id="contactForm" noValidate onSubmit={handleSubmit}>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Ada Lovelace"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={errors.name ? errorStyle : undefined}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={errors.email ? errorStyle : undefined}
      />
      <label htmlFor="msg">Message</label>
      <textarea
        id="msg"
        name="message"
        placeholder="Hi Izma, I saw your SpendSmart project and…"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={errors.msg ? errorStyle : undefined}
      />
      <button className="btn btn-primary btn-full" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send message →"}
      </button>
      {submitError && <p className="form-note" style={{ color: "#E24B4A" }}>{submitError}</p>}
      <p className="form-note">Your message goes straight to Izma; she&rsquo;ll reply by email.</p>
    </form>
  );
}
