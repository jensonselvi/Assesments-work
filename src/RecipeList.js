import React from "react";
import RecipeRow from "./RecipeRow";
import RecipeCreate from "./RecipeCreate";

function RecipeList({ recipes, setRecipes }) {

  function handleDelete(indexToDelete) {
    const updatedRecipes = recipes.filter(
      (_, index) => index !== indexToDelete
    );
    setRecipes(updatedRecipes);
  }

  function handleCreate(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeRow
              key={index}
              recipe={recipe}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      <RecipeCreate handleCreate={handleCreate} />
    </div>
  );
}

export default RecipeList;