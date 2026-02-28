import React, { useState } from "react";

function RecipeCreate({ handleCreate }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCreate(formData);
    setFormData(initialFormState);
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine"
      />

      <input
        name="photo"
        value={formData.photo}
        onChange={handleChange}
        placeholder="URL"
      />

      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
      />

      <textarea
        name="preparation"
        value={formData.preparation}
        onChange={handleChange}
        placeholder="Preparation"
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;