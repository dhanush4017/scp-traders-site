import React from "react";
import containers from "../assets/containers.jpg";

const stats = [
  ["15+", "Years"],
  ["5000+", "Clients"],
  ["200+", "Products"],
  ["28", "States served"],
];

export function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="rise">
          <h1 className="font-display text-5xl font-bold text-foreground leading-tight">
            Crafted in Madurai, trusted across India.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We manufacture food-grade PET jars, bottles and containers for food, pharma,
            cosmetics and household brands — with in-house moulding, strict quality checks and
            wholesale pricing.
          </p>
        </div>
        <img
          src={containers}
          alt="Packaging range"
          loading="lazy"
          width={816}
          height={816}
          className="rise rounded-3xl shadow-xl w-full object-cover"
        />
      </div>
      <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map(([n, l], i) => (
          <div
            key={l}
            className="rise rounded-2xl bg-secondary p-8 text-center"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <p className="font-display text-4xl font-bold text-primary">{n}</p>
            <p className="text-sm text-muted-foreground mt-1">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
