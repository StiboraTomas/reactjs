import React from "react";
import Recept from "./Recipe";

function RecipeGridList(props) {
  return props.recipeData.map((recept) => {
    return <Recept key={recept.id} recept={recept} />;
  });
}

export default RecipeGridList;