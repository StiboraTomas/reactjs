import React from "react";
import ReceptSimple from "./RecipeSimple";

function RecipeSimplifiedList(props) {
  return props.recipeData.map((recept) => {
    return <ReceptSimple key={recept.id} recept={recept} />;
  });
}

export default RecipeSimplifiedList;