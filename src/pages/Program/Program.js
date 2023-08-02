import React from "react";
import classes from "./Program.module.scss";
import data from "../../components/json/data.json";

function Program() {
  const contents = data;

  return (
    <div className={classes.pageContent}>
      <div className={classes.contentContainer}>
        {contents?.map((content) => {
          return (
            <div className={classes.contentCentered}>
              <div className={classes.contentDiv01}>
                <i>
                  <h4>{content.name}</h4>
                </i>
                <i>
                  <h5>{content.title}</h5>
                </i>
              </div>
              <div className={classes.contentDiv02}>
                <img src={content.img} alt="Not Found..." />
                <i>
                  <h5>{content.date}</h5>
                </i>
              </div>
              <div className={classes.contentDiv03}>
                <h5>{content.des}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Program;
