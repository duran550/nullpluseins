import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Program from "../src/pages/Program/Program";
import classes from "./App.module.scss";
import FirstOverlay from "../src/components/overlay/overlay01";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
      <div className={classes.App}>
        <div className={classes.FirstOverlay}>
          <FirstOverlay />
        </div>
        <div className={classes.SecondOverlay}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Program />} />
          </Routes>
          <Footer />
        </div>
      </div>
  );
}

export default App;
