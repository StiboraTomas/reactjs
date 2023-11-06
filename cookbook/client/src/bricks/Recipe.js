import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import { mdiChefHat } from '@mdi/js';
import styles from "../css/karta.module.css";

function Recept(props) {
  return (
    <Card className={styles.karta}>
      <Card.Img src={props.recept.imgUri}/>
      <Card.Body >
        <Card.Title><Icon path={mdiChefHat} size={1} color="grey"></Icon>{" "+props.recept.name+" "}<Icon path={mdiChefHat} size={1} color="grey"></Icon></Card.Title>
        <p></p>
        <Card.Text>{props.recept.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Recept; 

