import React from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "./Toast";

export function ProductCard({ p, i = 0 }) {
  const { add } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    add(p.id);
    showToast(`${p.name} added to enquiry`);
  };

  return (
    <div
      className="group card-lift rise overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
      style={{ animationDelay: `${i * 80}ms` }}
    >
      <div className="overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={816}
          height={816}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.category}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{p.name}</h3>
        <p className="text-sm text-muted-foreground">{p.size}</p>
        <div className="mt-4 flex justify-end">
          <button onClick={handleAdd} className="btn-primary">
            Add to enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
