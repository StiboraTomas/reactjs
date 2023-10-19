import "./App.css";
import RecipeInfo from "./bricks/Recipes";
import RecipeList from "./bricks/RecipeList";

const recipe1 = {
  name: "Salát z naklíčené čočky",
};
const recipe2 = {
  name: "Ovesné placičky",
};

const recipeList1 = [
  {
    name: "Salát z naklíčené čočky",
    description: "Mrkev, okurku a papriku nakrájejte na malé kostičky a dejte do větší mísy spolu s naklíčenou čočkou. Cibuli nakrájejte najemno a přidejte k zelenině. Přisypte nasekanou petrželku. V misce nebo hrníčku důkladně promíchejte lák z okurek, olivový olej a med. Zálivku nalijte do mísy a důkladně promíchejte. Na závěr dochuťte solí a pepřem.",
  },
];
const recipeList2 = [
  {
    name: "Ovesné placičky",
    description: "Cibuli oloupejte a nastrouhejte nahrubo. Mrkev důkladně umyjte a nastrouhejte najemno spolu s česnekem. V míse smíchejte vločky, cibuli, mrkev, česnek a koření. Přidejte strouhanku a důkladně promíchejte, ideálně rukou tak, aby vznikla jednotná směs. Pokud je směs příliš suchá, přidejte trošku vody, pokud je příliš mokrá, přidejte trošku strouhanky. Na pánvi rozpalte olej, ze směsi vytvarujte malé placičky a smažte z obou stran dozlatova.",
  },
];


function App() {
  return (
    <div className="App">
      <RecipeInfo recipe={recipe1} />
      <RecipeList recipeList={recipeList1} />
      <p></p>
      <img src="https://zachranjidlo.cz/wp-content/uploads/dsc02309-1-e1652694711486-1024x433-1200x500-c-default.jpg" alt="Salát"/>
      <RecipeInfo recipe={recipe2} />
      <RecipeList recipeList={recipeList2} />
      <p></p>
      <img src="https://zachranjidlo.cz/wp-content/uploads/dsc-0516-1-1024x480-1200x500-c-default.jpg" alt="Placičky"/>
    </div>
  );
}

export default App;
