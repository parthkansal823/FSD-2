import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { dark } = useContext(ThemeContext);

  return (
    <h1>{dark ? "About (Dark Mode)" : "About (Light Mode)"}</h1>
  );
}
