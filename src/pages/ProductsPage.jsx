import React from "react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useNavigation } from "../context/NavigationContext";

export function ProductsPage() {
  const { selectedCategory, setSelectedCategory, searchQuery } = useNavigation();

  const list = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      (p.name + " " + p.category + " " + p.size)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="rise font-display text-5xl font-bold text-foreground">Our products</h1>
      {searchQuery && (
        <p className="mt-2 text-sm text-muted-foreground">
          Showing results for: <span className="font-semibold text-foreground">"{searchQuery}"</span>
        </p>
      )}
      <div className="mt-8 flex flex-wrap gap-3">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className={c === selectedCategory ? "chip chip-active" : "chip"}
          >
            {c}
          </button>
        ))}
      </div>
      <div key={selectedCategory + searchQuery} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.length > 0 ? (
          list.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)
        ) : (
          <div className="col-span-full py-16 text-center text-muted-foreground">
            No products found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
