import { createStore } from "redux";
import { CounterReducer } from "./CounterReducer.jsx";

export const store = createStore(CounterReducer);
