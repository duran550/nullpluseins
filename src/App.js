import Home from "./pages/Home/Home";
import Programs from "../src/pages/Programs/Programs";
import classes from "./App.module.scss";
import FirstOverlay from "../src/components/overlay/overlay01";
import RootLayout from "./pages/Root";
import Footer from "../src/components/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProgramDetail from "./components/ProgramDetail/ProgramDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "programs", element: <Programs /> },
      { path: "Programs/:ProgramId", element: <ProgramDetail /> },
    ],
  },
]);

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.FirstOverlay}>
        <FirstOverlay />
      </div>
      <div className={classes.SecondOverlay}>
        <RouterProvider router={router} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
