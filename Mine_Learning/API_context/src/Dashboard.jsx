import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <h3>Not Logged In</h3>;

  return (
    <>
      <h2>Welcome {user}</h2>
      <button onClick={logout}>Logout</button>
    </>
  );
}
