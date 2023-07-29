import React from "react";
import FirstOverlay from "./overlay01";
import classes from "./overlay02.module.scss";
// import logo from './logo.svg';

function SecondOverlay() {
  return (
    <div className={classes.container}>
      <div className={classes.overlays}>
        <FirstOverlay />
        <div className={classes.APIContent}>
          <div className={classes.header}>
            <div className={classes.headerLogo}>
              <img src="icon/logo.svg" alt="Logo not found" />
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>
            <div className={classes.headerLinks}>
              <h3>Programm</h3>
              <h3>Expert*innen</h3>
              <h3>Info</h3>
              <h3>Kontakt</h3>
              <h3>Archiv</h3>
            </div>
          </div>
          <div className={classes.pageContent}>
            {/* <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p>
            <p>
              Hello there Benson my name is jason statam and i am the CEO of the
              banks of the united states plus i do not really care about fishes.
              i eat meat only
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondOverlay;
