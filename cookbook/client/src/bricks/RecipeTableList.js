import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

function RecipeTableList(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Pokrm</th>
          <th>Postup</th>
          <th>Ukázka</th>
        </tr>
      </thead>
      <tbody>
        {props.recipeData.map((recept) => {
          return (
            <tr key={recept.id}>
              <td>{recept.name}</td>
              <td>{recept.description}</td>
              <td><Card.Img src={recept.url}/></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default RecipeTableList;