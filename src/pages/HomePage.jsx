import React from "react";
import { Truck, ShieldCheck, Factory, Recycle } from "lucide-react";
import hero from "../assets/hero.jpg";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { CategoryMenu } from "../components/CategoryMenu";
import { Link } from "../context/NavigationContext";

const features = [
  { icon: Factory, t: "Direct manufacturer", d: "Factory prices, no middlemen" },
  { icon: ShieldCheck, t: "Food-grade PET", d: "Safe, crystal-clear quality" },
  { icon: Truck, t: "Pan-India delivery", d: "Fast shipping to your door" },
  { icon: Recycle, t: "100% recyclable", d: "Better for the planet" },
];

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={hero}
          alt="PET jars and bottles"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-60 hero-zoom"
        />
        <div className="absolute inset-0 hero-fade" />
        <div className="relative mx-auto max-w-7xl px-5 py-32 md:py-44">
          <p className="rise text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            India's premium packaging store
          </p>
          <h1
            className="rise mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Packaging that makes your product <span className="text-accent">shine.</span>
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg opacity-85"
            style={{ animationDelay: "240ms" }}
          >
            PET jars, bottles, containers and caps — made in Madurai, delivered across India.
          </p>
          <div
            className="rise mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <Link to="/products" className="btn-accent">
              Shop products
            </Link>
            <Link to="/contact" className="btn-ghost">
              Bulk enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="overflow-hidden border-y border-border bg-accent py-4 text-accent-foreground">
        <div className="marquee flex w-max gap-12 font-display text-lg font-semibold">
          {[...Array(2)].flatMap((_, k) =>
            [...categories, "Custom moulds", "Wholesale pricing"].map((c) => (
              <span key={k + c}>✦ {c}</span>
            ))
          )}
        </div>
      </div>

      {/* Category Dropdown Menu Section */}
      <CategoryMenu />

      {/* Features Grid */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={f.t}
            className="rise card-lift rounded-2xl border border-border bg-card p-6 shadow-sm"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <f.icon className="h-9 w-9 text-accent float" />
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{f.t}</h3>
            <p className="text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </section>

      {/* Best Sellers Grid */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl font-bold text-foreground">Best sellers</h2>
          <Link to="/products" className="nav-link">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </section>
    </>
  );
}
