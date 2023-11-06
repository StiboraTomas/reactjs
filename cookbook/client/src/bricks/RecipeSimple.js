import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../css/kartaMala.module.css";

function ReceptSimple(props) {
  return (
    
    <Card className={styles.kartaMala}>
      <Card.Img src={props.recept.imgUri}/>
      <Card.Body >

    <Card.Text>{props.recept.name}</Card.Text>
        {/* <Card.Text>{props.recept.name.length<20 ? `${props.recept.name}` */}
                {/* : `${props.recept.name.substring(0, 45)+"..."}`}</Card.Text> */}
        <p></p>
        <Card.Text>{props.recept.description.length<20 ? `${props.recept.description}`
                : `${props.recept.description.substring(0, 25)+"..."}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReceptSimple; 

//<Icon path={mdiChefHat} size={1} color="grey"></Icon>{" "+props.recept.name+" "}<Icon path={mdiChefHat} size={1} color="grey"></Icon>