import React, {useState} from "react";
import classes from "./Header.module.scss";
import {Link} from "react-router-dom";


function Header() {
    const [show, setShow] = useState(false);

  const toggleLogo = () => {
    setShow(!show);
  };

  return (
    <div className={classes.header}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={classes.headerLogo} onClick={toggleLogo}>
          <span>
            <div className={classes.logo}>
              <span className={classes.logoCircle}></span>
              <i>
                <span className={classes.logoPlus}>+</span> 1
              </i>
            </div>
            {show && (
              <div className={classes.txt}>
                <span className={classes.txt01}>Festival fur</span>
                <span className={classes.txt02}>Diversitat + </span>
                <span className={classes.txt03}>Komplexitat</span>
              </div>
            )}
          </span>
        </div>
      </Link>
      <div className={classes.headerLinks}>
        <Link to="/program" style={{ textDecoration: 'none' }}><h3>Programm</h3></Link>
        <h3>Expert*innen</h3>
        <h3>Info</h3>
        <h3>Kontakt</h3>
        <h3>Archiv</h3>
      </div>
    </div>
  );
}

export default Header;
