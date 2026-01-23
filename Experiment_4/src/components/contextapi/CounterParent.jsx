import { useContext } from "react";
import { CounterContext } from "./CounterContextApi";

function ParentCounter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h2>Context API Working</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default ParentCounter;