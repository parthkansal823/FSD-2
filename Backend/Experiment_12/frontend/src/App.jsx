import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

// 🔥 Backend URL from environment
const socket = io(import.meta.env.VITE_BACKEND_URL, {
  transports: ["polling", "websocket"],
  reconnection: true,
});

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  // Unique user id
  const [userId] = useState(() =>
    Math.random().toString(36).slice(2)
  );

  // -------------------------
  // SOCKET LISTENERS
  // -------------------------
  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected");
    });

    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receive_message");
    };
  }, []);

  // -------------------------
  // AUTO SCROLL
  // -------------------------
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // -------------------------
  // SEND MESSAGE
  // -------------------------
  const sendMessage = () => {
    if (message.trim()) {
      const msgData = {
        text: message,
        sender: userId,
        time: new Date().toLocaleTimeString(),
      };

      socket.emit("send_message", msgData);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // -------------------------
  // UI
  // -------------------------
  return (
    <div className="container">
      <div className="card">
        <h2>WebSocket Chat</h2>

        <div className="chat-box">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === userId ? "self" : "other"
              }`}
            >
              <span>{msg.text}</span>
              <small>{msg.time}</small>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="input-row">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;