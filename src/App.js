import Home from "./pages/Home/Home";
import Programs from "../src/pages/Programs/Programs";
import classes from "./App.module.scss";
import FirstOverlay from "../src/components/overlay/overlay01";
import RootLayout from "./pages/Root";
import Footer from "../src/components/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProgramDetail from "./components/ProgramDetail/ProgramDetail";
import Expert from "./pages/expert/expert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "programs",
        children: [
          {
            index: true,
            element: <Programs />,
          },
          {
            path: ":programId",
            element: <ProgramDetail />,
            // loader: ProgramDetailLoader,
          },
        ],
      },
      { path: "experts", element: <Expert /> },
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
