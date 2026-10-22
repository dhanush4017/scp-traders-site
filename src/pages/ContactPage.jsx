import React, { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/products";

export function ContactPage() {
  const [f, setF] = useState({ name: "", phone: "", msg: "" });

  const send = (e) => {
    e.preventDefault();
    const text = `Enquiry from ${f.name} (${f.phone}): ${f.msg}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-2">
      <div className="rise">
        <h1 className="font-display text-5xl font-bold text-foreground">Let's talk packaging.</h1>
        <p className="mt-4 text-muted-foreground">
          Bulk orders, custom sizes or samples — we reply within a few hours.
        </p>
        <div className="mt-8 space-y-3 text-sm text-foreground">
          <p className="flex items-center gap-2"><span>📍</span> Madurai, Tamil Nadu</p>
          <p className="flex items-center gap-2"><span>📞</span> +91 98765 43210</p>
          <p className="flex items-center gap-2"><span>✉️</span> sales@scptraders.in</p>
        </div>
      </div>
      <form onSubmit={send} className="rise space-y-4 rounded-3xl border border-border bg-card p-8 shadow-sm">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Your Name</label>
          <input
            required
            placeholder="Your name"
            className="field"
            value={f.name}
            onChange={(e) => setF({ ...f, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Phone Number</label>
          <input
            required
            placeholder="Phone"
            className="field"
            value={f.phone}
            onChange={(e) => setF({ ...f, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Requirement</label>
          <textarea
            required
            placeholder="What do you need?"
            rows={4}
            className="field"
            value={f.msg}
            onChange={(e) => setF({ ...f, msg: e.target.value })}
          />
        </div>
        <button type="submit" className="btn-primary w-full text-center">
          Send on WhatsApp
        </button>
      </form>
    </section>
  );
}
