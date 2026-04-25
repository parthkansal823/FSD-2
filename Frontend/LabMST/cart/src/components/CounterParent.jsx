import { useContext } from "react";
import { CounterContext } from "./CounterCartApi";

export default function ParentCounter({cno}) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h3>{cno} : Total products in Cart: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add Item</button>
    </div>
  );
}