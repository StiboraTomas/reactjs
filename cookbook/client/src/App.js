import "./App.css";
import ShowHeader from "./bricks/Header";
import VypisRecepty from "./bricks/RecipeList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useEffect } from "react";
import styles from "./css/header.module.css";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";




function App() {
  const [recipeLoadCall, setRecipeLoadCall] = useState({
    state: "pending",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/recipe/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setRecipeLoadCall({ state: "error", error: responseJson });
      } else {
        setRecipeLoadCall({ state: "success", data: responseJson });
      }
    });
  }, []); 

  function getIngredients() {
    switch (recipeLoadCall.state) {
      case "pending":
        return (
          <div recipeName={styles.loading}>
            <Icon size={2} path={mdiLoading} spin={true} />
          </div>
        );
      case "success":
        return (
          <>
            <ShowHeader recipe={recipeLoadCall.data} />
            <VypisRecepty recipe={recipeLoadCall.data} />
          </>
        );
      case "error":
        return (
          <div className={styles.error}>
            <div>Nepodařilo se načíst data o receptu.</div>
            <br />
            <pre>{JSON.stringify(recipeLoadCall.error, null, 2)}</pre>
          </div>
        );
      default:
        return null;
    }
  }
  
  

  return <div className="App">{getIngredients()}</div>;
}

export default App; 