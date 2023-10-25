import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState, useMemo } from "react";
import RecipeGridList from "./RecipeGridList";
import RecipeTableList from "./RecipeTableList";
import Icon from "@mdi/react";
import { mdiTable, mdiViewGridOutline, mdiMagnify } from "@mdi/js";


function VypisRecepty(props) {
  const [viewType, setViewType] = useState("grid");
  const isGrid = viewType === "grid";
  const [searchBy, setSearchBy] = useState("");

  const filteredRecipeList = useMemo(() => {
    return props.recipeData.filter((item) => {
      return (
        item.name.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase()) ||
        item.description.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase())
      );
    });
  }, [searchBy]);

  function handleSearch(event) { // the function that we will run when the form is "submitted"- i.e. when the search button is pressed
    event.preventDefault();
    setSearchBy(event.target["searchInput"].value);
  }
  
  function handleSearchDelete(event) { // a function that will run when the lookup input value changes
    if (!event.target.value) setSearchBy(""); // if there is no value in the input (user presses x), the search will be canceled
  }

  return (
    <div>
      <Navbar>
        <div className="container-fluid">
          <Navbar.Brand>Seznam Receptů</Navbar.Brand>

          <div>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                id={"searchInput"}
                style={{ maxWidth: "150px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchDelete}
              />
              <Button
                style={{ marginRight: "8px" }}
                variant="outline-dark"
                type="submit"
              >
                <Icon size={1} path={mdiMagnify} />
              </Button>

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
          </Form>
          </div>
        </div>
      </Navbar>
      {isGrid ? (
        <RecipeGridList recipeData={filteredRecipeList} />
      ) : (
        <RecipeTableList recipeData={filteredRecipeList} />
      )}
    </div>
  );
}
export default VypisRecepty;