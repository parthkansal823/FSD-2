import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://two3bis70035-experiment-10.onrender.com";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, {
        username,
        password
      });

      setRole(res.data.role);
      setMsg("Login Success");
    } catch {
      setMsg("Login Failed");
    }
  };

  const callAPI = async (endpoint) => {
    try {
      const res = await axios.get(`${BASE_URL}/${endpoint}`, {
        headers: { role }
      });

      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="app">
      <h2>RBAC System</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={login}>Login</button>

      <p>Role: {role}</p>

      <hr />

      <button onClick={() => callAPI("read")}>Read</button>
      <button onClick={() => callAPI("write")}>Write</button>
      <button onClick={() => callAPI("delete")}>Delete</button>

      <h3>{msg}</h3>
    </div>
  );
}

export default App;