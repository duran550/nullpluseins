import React from "react";
import classes from "./overlay01.module.scss";

function FirstOverlay() {
  return (
    <div className={classes.container}>
      <div className={classes.bgContainer}>
        <div className={classes.bgCircle}></div>
      </div>
      <div className={classes.squares}>
        <div className={classes.squaresDiv1}>
          <div className={classes.squaresDiv001} style={{ backgroundColor: "#2DA785" }}></div>
          <div className={classes.squaresDiv002} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv003} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv004} style={{ backgroundColor: "#2DA785" }}></div>
          <div className={classes.squaresDiv005} style={{ backgroundColor: "#007FFF" }}></div>
          <div className={classes.squaresDiv006} style={{ backgroundColor: "#007FFF" }}></div>
          <div className={classes.squaresDiv007} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv008} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv009} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv010} style={{ backgroundColor: "#FF00FF" }}></div>
        </div>
        <div className={classes.squaresDiv2}>
          <div className={classes.squaresDiv021} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv022} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv023} style={{ backgroundColor: "#2D5BE3" }}></div>
          <div className={classes.squaresDiv024} style={{ backgroundColor: "#007FFF" }}></div>
          <div className={classes.squaresDiv025} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv026} style={{ backgroundColor: "#FF00FF" }}></div>
          <div className={classes.squaresDiv027} style={{ backgroundColor: "#FF00FF" }}></div>
        </div>
      </div>
    </div>
  );
}

export default FirstOverlay;
