import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import classes from "../src/pages/Program/Program.module.scss";
import "./App.scss";
import FirstOverlay from "./components/overlay/overlay01";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Program from "./pages/Program/Program";

function App() {
  return (
    <div className="App">
      <>
        <div className="container">
          <div className="overlays">
            <FirstOverlay />
            <div className="Content">
              <Header />
              <div className="Links">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/program" element={<Program />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
