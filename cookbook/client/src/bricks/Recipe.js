import React from "react";

function Recipe(props) {
  return (
    <div key={props.recipe.name}>
      <div>{props.recipe.description}</div>
      <div>{props.recipe.imgUri}</div>
    </div>
  );
}

export default Recipe;