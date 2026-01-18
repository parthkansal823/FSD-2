import React from "react";
import ReactDOM from "react-dom/client";
import SinglePageApp from "./components/Spa";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SinglePageApp />
  </ThemeProvider>
);
