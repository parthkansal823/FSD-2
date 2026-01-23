import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const obj1 = { count, setCount }
  
  // const obj2 = { 
  //   "count" : count, 
  //   "setCount" : setCount 
  // }

  return (
    <CounterContext.Provider value={obj1}>
      {children}
    </CounterContext.Provider>
  );
}
export default CounterProvider;