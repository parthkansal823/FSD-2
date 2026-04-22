import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await axios.post(`${API}/register`, { email, password });
    alert("Registered");
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/login`, { email, password });
      alert(res.data.message);
    } catch {
      alert("Failed");
    }
  };

  return (
    <div>
      <h2>Auth App</h2>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <br/><br/>
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;