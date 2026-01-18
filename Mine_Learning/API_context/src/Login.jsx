import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  return (
    <button onClick={() => login("Parth Kansal")}>Login</button>
  );
}
