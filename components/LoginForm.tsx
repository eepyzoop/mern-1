"use client";

import { useState, useTransition, type FormEvent } from "react";
import Script from "next/script";
import { login } from "@/app/login/actions";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      if (!window.grecaptcha || !SITE_KEY) {
        setError("Could not verify you're human. Please refresh and try again.");
        return;
      }
      const token = await new Promise<string>((resolve) => {
        window.grecaptcha!.ready(() => {
          window.grecaptcha!.execute(SITE_KEY, { action: "login" }).then(resolve);
        });
      });
      formData.set("recaptchaToken", token);

      const result = await login(formData);
      if (result) setError(result);
    });
  }

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} strategy="afterInteractive" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="••••••••" required />
        <button className="btn btn-primary btn-full" type="submit" disabled={pending}>
          {pending ? "Signing in…" : "Sign in →"}
        </button>
        {error && (
          <p className="form-note" style={{ color: "#E24B4A" }}>
            {error}
          </p>
        )}
        <p className="form-note">Protected by reCAPTCHA.</p>
      </form>
    </>
  );
}
