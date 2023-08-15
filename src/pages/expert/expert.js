import React from "react";
import Partners from "./expertData";
import classes from "./expert.module.scss";
import { Link } from "react-router-dom";

function Expert() {
    console.log(Partners)

  return (
    <div className={classes.container}>
        <div className={classes.partners}>
            {Partners.map((partner) => (
                <Link>
                    <div className={classes.allPartners}>
                        <div className={classes.partners_scale}>
                            <div className={classes.image_name}>
                                <img src={partner.img} alt={partner.picture}/>
                                <h3>{partner.name}</h3>
                            </div>
                            <div className={classes.txt}>
                                <h4>{partner.des}</h4>
                                <h4>{partner.picture}</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
}

export default Expert;
