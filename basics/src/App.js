
import './App.css';
import PackingList from "./components/conditional-rendering/PackingList";
import DrinkingList from "./components/conditional-rendering/DrinkingList";
import PersonList from "./components/list-rendering/PersonList";
import RecipesList from "./components/list-rendering/NestedList";
import Scoreboard from "./components/updating-objects-in-state/ScoreBoard";
import Canvas from "./components/updating-objects-in-state/Canvas";
import ShoppingCart from "./components/updating-arrays-in-state/ShoppingCart";
import TaskApp from "./components/updating-arrays-in-state/TaskApp";
import ManagingState from "./components/managing-state/ManagingState";

function App() {
  return (
      <>
        <PackingList/>
        <DrinkingList/>
          <PersonList/>
          <RecipesList/>
          <Scoreboard/>
          <ShoppingCart/>
          <TaskApp/>
          <ManagingState/>
          <Canvas/>
      </>

  );
}

export default App;
