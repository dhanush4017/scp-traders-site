import React from "react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">SCP Traders</p>
          <p className="mt-2 text-sm opacity-75">
            Manufacturer of PET jars, bottles & packaging. Madurai, Tamil Nadu.
          </p>
        </div>
        <div className="text-sm opacity-80">
          <p className="font-semibold">Contact</p>
          <p className="mt-2">+91 98765 43210</p>
          <p>sales@scptraders.in</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="font-semibold">Pan-India delivery</p>
          <p className="mt-2">Bulk & wholesale orders welcome.</p>
        </div>
      </div>
    </footer>
  );
}
