import React from "react";
import { ChevronRight, PlayCircle } from "lucide-react";
import { categories, products } from "../data/products";
import { Link } from "../context/NavigationContext";

export function CategoryMenu() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="flex items-center gap-2 rounded-t-xl bg-accent px-5 py-3 font-display text-lg font-bold text-accent-foreground">
        <PlayCircle className="h-5 w-5" />
        <span>PET Jars and Bottles</span>
      </div>
      <div className="grid gap-x-8 gap-y-1 rounded-b-xl bg-primary px-5 pb-6 pt-2 text-primary-foreground sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <div key={c} className="group relative">
            <Link
              to="/products"
              category={c}
              className="flex items-center gap-1 border-b border-primary-foreground/60 py-3 text-sm font-bold transition-opacity hover:opacity-90"
            >
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              <span>{c}</span>
            </Link>
            <ul className="dropdown absolute left-0 top-full z-20 w-60 overflow-hidden rounded-b-lg bg-accent text-accent-foreground shadow-xl">
              {products
                .filter((p) => p.category === c)
                .map((p, i) => (
                  <li
                    key={p.id}
                    className="drop-item border-b border-accent-foreground/15 last:border-0"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <Link
                      to="/products"
                      category={c}
                      className="block px-4 py-2.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
