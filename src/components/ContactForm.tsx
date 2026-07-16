"use client";

import { useState, FormEvent } from "react";
import { site } from "@/data/site";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdngjyg";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={status === "sending"}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-card px-4 py-2.5 text-white outline-none ring-accent focus:ring-2 disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === "sending"}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-card px-4 py-2.5 text-white outline-none ring-accent focus:ring-2 disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={status === "sending"}
          className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-card px-4 py-2.5 text-white outline-none ring-accent focus:ring-2 disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" ? (
        <p className="text-sm text-accent" role="status">
          Thanks — your message was sent. I&apos;ll get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-400" role="alert">
          Something went wrong. Please try again or email{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
