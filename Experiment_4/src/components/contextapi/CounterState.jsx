import { useState } from "react"; 

export default function LocalCounter() {
  const [count, setCount] = useState(0);

  // Event handler functions for click Event
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>

      <h3>Local Count: {count}</h3>
      {/* Binding event handlers to buttons  */}
      <button onClick={increaseCount}>
        Increase
      </button>

      <button onClick={decreaseCount}>
        Decrease
      </button>

    </div>
  );
}