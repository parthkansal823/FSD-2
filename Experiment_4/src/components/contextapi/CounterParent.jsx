import { useContext } from "react";
import { CounterContext } from "./CounterContextApi";

function ParentCounter(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h3>{props.cno} : Global State (Context API) Count: {count}</h3>

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