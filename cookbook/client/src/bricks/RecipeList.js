import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import RecipeGridList from "./RecipeGridList";
import RecipeTableList from "./RecipeTableList";
import Icon from "@mdi/react";
import { mdiTable, mdiViewGridOutline } from "@mdi/js";

function VypisRecepty(props) {
  const [viewType, setViewType] = useState("grid");
  const isGrid = viewType === "grid";

  return (
    <div>
      <Navbar>
        <div className="container-fluid">
          <Navbar.Brand>Seznam Receptů</Navbar.Brand>
          <Button
            variant="outline-dark"
            onClick={() =>
              setViewType((currentState) => {
                if (currentState === "grid") return "table";
                else return "grid";
              })
            }
          >
            <Icon size={1} path={isGrid ? mdiTable : mdiViewGridOutline} />{" "}
            {isGrid ? "Změna zobrazení" : "Změna zobrazení"}
          </Button>
        </div>
      </Navbar>
      {isGrid ? (
        <RecipeGridList recipeData={props.recipeData} />
      ) : (
        <RecipeTableList recipeData={props.recipeData} />
      )}
    </div>
  );
}
export default VypisRecepty;