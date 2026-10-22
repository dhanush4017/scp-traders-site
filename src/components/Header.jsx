import React from "react";
import { ShoppingCart, ChevronDown, Search, Headphones, Truck, Smartphone, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigation, Link } from "../context/NavigationContext";
import { categories, products } from "../data/products";
import logo from "../assets/logo.png";

export function Header() {
  const { count } = useCart();
  const { route, navigate, searchQuery, setSearchQuery } = useNavigation();

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      navigate("/products");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Banner Micro-bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl justify-between px-5 py-2 text-xs font-semibold">
          <div className="flex gap-6">
            <Link to="/contact" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
              <Headphones className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
            <span className="flex items-center gap-1.5 opacity-80 cursor-default">
              <Truck className="h-4 w-4" />
              <span>Track Order</span>
            </span>
          </div>
          <span className="flex items-center gap-1.5 opacity-80 cursor-default">
            <Smartphone className="h-4 w-4" />
            <span>Get App</span>
          </span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3">
        <Link to="/">
          <img src={logo} alt="SCP Traders" width={120} height={66} className="h-14 w-auto object-contain" />
        </Link>

        {/* Search Input */}
        <div className="relative hidden flex-1 md:block md:max-w-lg md:ml-auto">
          <Search
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground cursor-pointer"
            onClick={handleSearchSubmit}
          />
          <input
            placeholder="Search products by names, needs, categories..."
            className="field pl-11"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchSubmit}
          />
        </div>

        {/* Enquiry Cart Icon */}
        <Link
          to="/cart"
          className="relative ml-auto p-2 transition-transform hover:scale-110 md:ml-0"
          aria-label="Enquiry Cart"
        >
          <ShoppingCart className="h-6 w-6 text-foreground" />
          <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-xs font-bold text-accent-foreground">
            {count}
          </span>
        </Link>

        {/* Login Button */}
        <span className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 font-semibold sm:flex cursor-pointer hover:bg-secondary transition-colors">
          <User className="h-4 w-4" />
          <span>Login</span>
        </span>
      </div>

      {/* Navigation Bar */}
      <nav className="border-t border-border">
        <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-5 text-sm md:overflow-visible">
          <Link
            to="/"
            className={`nav-link py-3 ${route === "home" ? "text-primary font-bold" : ""}`}
          >
            Home
          </Link>

          {/* All Products + Mega Dropdown */}
          <div className="group relative">
            <Link
              to="/products"
              className={`nav-link flex items-center gap-1 py-3 ${route === "products" ? "text-primary font-bold" : ""}`}
            >
              <span>All Products</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="dropdown absolute left-0 top-full w-[30rem] rounded-2xl border border-border bg-card p-6 shadow-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Product categories</p>
              <div className="grid grid-cols-2 gap-1">
                {categories.map((c) => (
                  <Link
                    key={c}
                    to="/products"
                    category={c}
                    className="flex justify-between rounded-md px-3 py-2 text-muted-foreground transition-all hover:translate-x-1 hover:bg-secondary hover:text-primary"
                  >
                    <span>{c}</span>
                    <span className="text-xs bg-muted/60 px-2 py-0.5 rounded-full font-medium">
                      {products.filter((p) => p.category === c).length}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/products"
            className={`nav-link py-3 ${route === "products" ? "text-primary font-bold" : ""}`}
          >
            Categories
          </Link>

          <Link
            to="/about"
            className={`nav-link py-3 ${route === "about" ? "text-primary font-bold" : ""}`}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className={`nav-link py-3 ${route === "contact" ? "text-primary font-bold" : ""}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
