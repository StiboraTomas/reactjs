import React from "react";
import Recept from "./Recipe";

function VypisRecepty(props) {
  function nactiRecepty(recipeData) {
    return recipeData.map((recept) => {
      return <Recept key={recept.id} recept={recept} />;
    });
  }

  return nactiRecepty(props.recipeData);
}

export default VypisRecepty;

