import ParentCounter from "./components/CounterParent";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Shopping Cart Indicator</h2>

      <div>
        <ParentCounter cno="Counter 1" />
        <ParentCounter cno="Counter 2" />
      </div>
    </div>
  );
}

export default App;