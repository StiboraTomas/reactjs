import React from "react";
import Recept from "./Recipe";


function RecipeGridList(props) {
  return (
  <div class="row">
    {props.recipeData.map((recept) => {
      return (
        <div
        class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
            style={{ paddingBottom: "16px" }}
          >
            <Recept key={recept.id} recept={recept} />
          </div>

      );
})}
  </div>
  );
}
   

export default RecipeGridList;