import React, { useState } from "react";
import { products, WHATSAPP_NUMBER } from "../data/products";
import { useCart } from "../context/CartContext";
import { Link } from "../context/NavigationContext";
import { useToast } from "../components/Toast";

export function CartPage() {
  const { items, set, clear } = useCart();
  const { showToast } = useToast();
  const [info, setInfo] = useState({ name: "", phone: "", address: "" });

  const lines = products
    .filter((p) => items[p.id])
    .map((p) => ({ p, q: items[p.id] ?? 0 }));

  const order = (e) => {
    e.preventDefault();
    const text = [
      `New order enquiry from ${info.name} (${info.phone})`,
      `Delivery Address: ${info.address}`,
      `Items:`,
      ...lines.map((l) => `• ${l.p.name} (${l.p.size}) x ${l.q}`),
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    showToast("Enquiry sent! Opening WhatsApp...");
    clear();
  };

  if (!lines.length) {
    return (
      <section className="mx-auto max-w-xl px-5 py-32 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Your enquiry list is empty</h1>
        <p className="mt-3 text-muted-foreground">Select products from the catalogue to request bulk wholesale quotation.</p>
        <Link to="/products" className="btn-primary mt-8 inline-block">
          Browse products
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr]">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground">Your enquiry list</h1>
        <div className="mt-8 space-y-4">
          {lines.map(({ p, q }) => (
            <div
              key={p.id}
              className="rise flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <img src={p.image} alt={p.name} className="h-20 w-20 rounded-xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.size}</p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-xs text-muted-foreground font-semibold">Qty:</label>
                <input
                  type="number"
                  min={0}
                  value={q}
                  onChange={(e) => set(p.id, Number(e.target.value))}
                  className="field w-20 text-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={order} className="h-fit space-y-4 rounded-3xl bg-secondary p-8 border border-border/50">
        <p className="font-display text-2xl font-bold text-primary">We'll send you a quote</p>
        <p className="text-sm text-muted-foreground">Fill in your contact details to receive wholesale pricing directly on WhatsApp.</p>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Name</label>
          <input
            required
            placeholder="Name"
            className="field"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Phone</label>
          <input
            required
            placeholder="Phone"
            className="field"
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Delivery Address</label>
          <textarea
            required
            placeholder="Delivery address"
            rows={3}
            className="field"
            value={info.address}
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
          />
        </div>
        <button type="submit" className="btn-accent w-full text-center">
          Send enquiry via WhatsApp
        </button>
      </form>
    </section>
  );
}
