import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  return (
    <div>
      <h1 className="app-title">Delicious Food Recipes</h1>
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default App;