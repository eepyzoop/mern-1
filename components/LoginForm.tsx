"use client";

import { useActionState } from "react";
import { login } from "@/app/login/actions";

export default function LoginForm() {
  const [error, formAction, pending] = useActionState(login, null);

  return (
    <form action={formAction}>
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
    </form>
  );
}
