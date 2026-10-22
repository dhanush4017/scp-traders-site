import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const save = (newItems) => {
    setItems(newItems);
    try {
      localStorage.setItem("cart", JSON.stringify(newItems));
    } catch {
      // ignore
    }
  };

  const add = (id, q = 1) => {
    save({ ...items, [id]: (items[id] || 0) + q });
  };

  const set = (id, q) => {
    const updated = { ...items };
    if (q <= 0) {
      delete updated[id];
    } else {
      updated[id] = q;
    }
    save(updated);
  };

  const clear = () => {
    save({});
  };

  const count = Object.values(items).reduce((a, b) => a + b, 0);

  return (
    <CartContext.Provider value={{ items, add, set, clear, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
