import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SinglePageApp() {
  const { dark } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          background: dark ? "#121212" : "#ffffff",
          color: dark ? "#ffffff" : "#000000",
          padding: "20px"
        }}
      >
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
