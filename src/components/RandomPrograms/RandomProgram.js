import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./RandomProgram.module.scss";

const RandomProgram = ({ randomPrograms }) => {

  return (
    <Fragment>
      <div className={classes.container}>
        <h2>Other Events</h2>
        <div className={classes.randomEvents}>
          {randomPrograms?.map((program) => (
            <Link to={`/programs/${program.id}`} key={program.id}>
              <div>
                <h5>{program.category}</h5>
                <img src={`/${program.img}`} alt={program.caption} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default RandomProgram;
