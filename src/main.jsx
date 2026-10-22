import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CartProvider } from "./context/CartContext";
import { NavigationProvider } from "./context/NavigationContext";
import { ToastProvider } from "./components/Toast";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationProvider>
      <CartProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </CartProvider>
    </NavigationProvider>
  </React.StrictMode>
);
