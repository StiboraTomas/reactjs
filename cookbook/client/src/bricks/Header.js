import React from "react";
import styles from "../css/header.module.css";

function ShowHeader(props) {

  return(
    <h1>
    <span className={styles.headerStyle}>
      {props.header.nadpis}
    </span>
  </h1>
  );

  
}

export default ShowHeader;