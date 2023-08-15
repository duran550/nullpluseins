import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Programs.module.scss";
import products from "../../components/json/data";
import { Link } from "react-router-dom";

function Programs() {
  const programs = products;
  const params = useParams();

  return (
    <div className={classes.pagecontent}>
      <div className={classes.programs}>
        {programs.map((program) => (
          <div key={program.id} className={classes.program}>
            <Link to={`/programs/${program.id}`}>
            {/* <Link to={`programs/${params.programId}`}> */}
              <div className={classes.program_content}>
                <div className={classes.program_date_time}>
                  <h3>{program.date}</h3>
                  <h3>{program.time}</h3>
                </div>
                <div className={classes.program_image}>
                  <img
                    src={program.img}
                    alt={`${program.place} view not found`}
                  />
                </div>
                <div className={classes.program_address_caption}>
                  <div className={classes.program_address}>
                    <h4>{program.category}</h4>
                    <h4>{program.place}</h4>
                  </div>
                  <div className={classes.program_caption}>
                    <h2>{program.caption}</h2>
                    <button
                      className={classes.program_signup}
                      style={{ textDecoration: "none" }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
