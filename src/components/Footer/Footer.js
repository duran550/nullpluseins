import classes from "./Footer.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
// import { useGlobalContext } from "../../useContext/useContext";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.footer_txt}>
          <NavLink to="/imprint"><h4>Impressum</h4></NavLink>
          <NavLink><h4>Datenschutz</h4></NavLink>
          <NavLink><h4>Archiv</h4></NavLink>
      </div>
    </div>
  );
}

export default Footer;

{/* <NavLink
  to="programs"
  style={{ listStyleType: "none" }}
  className={({ isActive }) => (isActive ? classes.active : "")}
  end
  onClick={() => setShowNavbar(false)}
>
  Program
</NavLink>; */}
