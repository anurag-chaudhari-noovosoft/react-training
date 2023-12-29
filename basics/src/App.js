
import './App.css';
import PackingList from "./components/conditional-rendering/PackingList";
import DrinkingList from "./components/conditional-rendering/DrinkingList";
import PersonList from "./components/list-rendering/PersonList";
import RecipesList from "./components/list-rendering/NestedList";

function App() {
  return (
      <>
        <PackingList/>
        <DrinkingList/>
          <PersonList/>
          <RecipesList/>
      </>

  );
}

export default App;
