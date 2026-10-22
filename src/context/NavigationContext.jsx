import React, { createContext, useContext, useState, useEffect } from "react";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const getInitialRoute = () => {
    const path = window.location.pathname.replace(/^\//, "").toLowerCase();
    if (["products", "about", "contact", "cart"].includes(path)) {
      return path;
    }
    return "home";
  };

  const [route, setRoute] = useState(getInitialRoute);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getInitialRoute());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to, category = null) => {
    const cleanPath = to.replace(/^\//, "").toLowerCase() || "home";
    setRoute(cleanPath);
    if (category) {
      setSelectedCategory(category);
    }
    const urlPath = cleanPath === "home" ? "/" : `/${cleanPath}`;
    window.history.pushState(null, "", urlPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavigationContext.Provider
      value={{
        route,
        navigate,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}

export function Link({ to, category, className, style, children, onClick }) {
  const { navigate } = useNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to, category);
  };

  return (
    <a href={to} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
