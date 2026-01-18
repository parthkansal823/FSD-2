import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={toggleTheme}>
        Toggle Dark / Light Mode
      </button>
    </>
  );
}
