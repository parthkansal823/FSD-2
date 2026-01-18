import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Contact() {
  const { dark } = useContext(ThemeContext);

  return (
    <h1>{dark ? "Contact (Dark Mode)" : "Contact (Light Mode)"}</h1>
  );
}
