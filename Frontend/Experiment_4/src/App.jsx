import CounterReduxParent from "./components/redux/CounterGlobalReduxParent";
import LocalCounter from "./components/localstate/CounterState";
import ParentCounter from "./components/contextapi/CounterParent";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Experiment 4 : State Management</h1>

      <div style={{ backgroundColor: "#e3f2fd", padding: "10px" }}>
        <LocalCounter cno="Counter 1" />
        <LocalCounter cno="Counter 2" />
      </div>

      <div style={{ backgroundColor: "#e8f5e9", padding: "10px" }}>
        <ParentCounter cno="Counter 1" />
        <ParentCounter cno="Counter 2" />
      </div>

      <div style={{ backgroundColor: "#fff3e1", padding: "10px" }}>
        <CounterReduxParent cno="Counter 1" />
        <CounterReduxParent cno="Counter 2" />
      </div>
    </div>
  );
}

export default App;