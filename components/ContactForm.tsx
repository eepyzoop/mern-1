"use client";

import { useState, type FormEvent } from "react";

const errorStyle = { borderColor: "#E24B4A" };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false, msg: false });
  const [sent, setSent] = useState(false);

  // TODO: swap this mailto: redirect for a POST to a Resend-powered /api/contact route once that's built.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();
    if (!trimmedName || !trimmedEmail || !trimmedMsg) {
      setErrors({ name: !trimmedName, email: !trimmedEmail, msg: !trimmedMsg });
      return;
    }
    const subject = encodeURIComponent("Portfolio contact from " + trimmedName);
    const body = encodeURIComponent(trimmedMsg + "\n\n— " + trimmedName + " (" + trimmedEmail + ")");
    window.location.href = "mailto:izmaq004@gmail.com?subject=" + subject + "&body=" + body;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sent" style={{ display: "block" }}>
        <div className="big">💌</div>
        <h3>Almost there</h3>
        <p>Your email app should have opened with the message ready; just hit send.</p>
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
      <button className="btn btn-primary btn-full" type="submit">
        Send message →
      </button>
      <p className="form-note">This opens your email app with the message pre-filled; no data is stored anywhere.</p>
    </form>
  );
}
