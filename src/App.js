
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
import RoutesWrap from './components/RouterV6/RoutesWrap'
import { PaginationTable } from "./components/Table/PaginationTable";
// import Form from './components/Form/Form'
import { ReactTable } from "./components/Table/ReactTable";

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
      <RoutesWrap />
      {/* <Form /> */}
      {/* <PaginationTable /> */}
      <ReactTable />
    </div>
  );
}

export default App;
