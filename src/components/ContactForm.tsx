"use client";

import { useState, FormEvent } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
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
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-card px-4 py-2.5 text-white outline-none ring-accent focus:ring-2"
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
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-card px-4 py-2.5 text-white outline-none ring-accent focus:ring-2"
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
          className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-card px-4 py-2.5 text-white outline-none ring-accent focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-8"
      >
        Send message
      </button>
      {status === "sent" ? (
        <p className="text-sm text-accent" role="status">
          Thanks — your message was recorded locally. Wire this form to your API or
          email service to go live. Meanwhile, email{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
