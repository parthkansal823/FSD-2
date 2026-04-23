import { useContext } from "react";
import { CounterContext } from "./CounterContextApi";

export default function ParentCounter(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h3>{props.cno} : Global State (Context API) Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}