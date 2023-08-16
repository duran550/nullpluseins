import React from "react";
import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../useContext/useContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Header() {
  const { show, toggleLogo, handleShowNavbar, showNavbar, setShowNavbar } =
    useGlobalContext();

  return (
    <div className={classes.header}>
      <div className={classes.header_content}>
        <NavLink to="/" style={{ textDecoration: "none" }} onClick={toggleLogo}>
          <div className={classes.headerLogo}>
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
        </NavLink>
        <div className={classes.menu_icon} onClick={handleShowNavbar}>
          {showNavbar ? <FaTimes /> : <GiHamburgerMenu />}
        </div>
        <div
          className={`${classes.headerLinks} ${showNavbar && classes.active}`}
        >
          <ul className={classes.list}>
            <li>
              <NavLink
                to="programs"
                style={{listStyleType:"none"}}
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
                onClick={() => setShowNavbar(false)}
              >
                Program
              </NavLink>
            </li>
            <li>
              <NavLink
                to="experts"
                className={({ isActive }) => (isActive ? classes.active : "")}
                onClick={() => setShowNavbar(false)}
              >
                Expert*innen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Info"
                // className={classes.header_Links}
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
                onClick={() => setShowNavbar(false)}
              >
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                // className={classes.header_Links}
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
                onClick={() => setShowNavbar(false)}
              >
                Kontakt
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Archiv"
                // className={classes.header_Links}
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
                onClick={() => setShowNavbar(false)}
              >
                Archiv
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
