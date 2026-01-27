import CounterReduxParent from "./components/Redux/CounterGlobalReduxParent";
import LocalCounter from "./components/localstate/CounterState";
import ParentCounter from "./components/contextapi/CounterParent"
function App() {
  return (
    <div>
      <h2>Experiment 4 : State Management using Redux</h2>
      <LocalCounter cno="Counter 1"/>
      <LocalCounter cno="Counter 2"/>

      <ParentCounter cno="Counter 1"/>
      <ParentCounter cno="Counter 2"/>
      
      <CounterReduxParent cno="Counter 1" />
      <CounterReduxParent cno="Counter 2" />
    </div>
  );
}

export default App;
