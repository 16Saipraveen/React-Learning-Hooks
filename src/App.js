import "./App.css";
import ContextTutorial from "./components/Hooks/Context/ContextTutorial";
import EffectTutorial from "./components/Hooks/EffectTutorial";
import ImperativeHandle from "./components/Hooks/ImperativeHandle/ImperativeHandle";
import LayoutEffectTutorial  from "./components/Hooks/LayoutEffectTutorial";
import MemoTutorial from "./components/Hooks/MemoHook";
import ReducerTutorial from "./components/Hooks/ReducerTutorial";
import RefTutorial from "./components/Hooks/RefTutorial";
import StateTutorial from "./components/Hooks/StateTutorial";
import Parent from "./components/React_Memo/Parent";

console.log("App render");
function App() {
  return (
    <div className="App">
      <Parent />
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ImperativeHandle />
      <ContextTutorial  />
      <MemoTutorial />
    </div>
  );
}

export default App;
