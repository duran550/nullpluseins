// import Home from "./pages/Home/Home";
// import Programs from "../src/pages/Programs/Programs";
// import classes from "./App.module.scss";
// import FirstOverlay from "../src/components/overlay/overlay01";
// import RootLayout from "./pages/Root";
// import Footer from "../src/components/Footer/Footer";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import ProgramDetail from "./components/ProgramDetail/ProgramDetail";
// import Expert from "./pages/expert/expert";
// import Contact from "./pages/contact/Contact";
// import Imprint from "./pages/imprint/imprint";

import Home from "./pages/Home/Home";
import Programs from "../src/pages/Programs/Programs";
import classes from "./App.module.scss";
import FirstOverlay from "../src/components/overlay/overlay01";
import Footer from "../src/components/Footer/Footer";
import { Navigate, Route, Routes
 } from "react-router-dom";
import ProgramDetail from "./components/ProgramDetail/ProgramDetail";
import UberUns from "./pages/UberUns/UberUns";
import Header from "./components/Header/Header";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Expert from "./pages/expert/expert";
import Contact from "./pages/contact/Contact";
import Imprint from "./pages/imprint/Imprint";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: "programs",
//         children: [
//           {
//             index: true,
//             element: <Programs />,
//           },
//           {
//             path: ":programId",
//             element: <ProgramDetail />,
//             // loader: ProgramDetailLoader,
//           },
//         ],
//       },
//       { path: "experts", element: <Expert /> },
//       { path: "contact", element: <Contact /> },
//       { path: "imprint", element: <Imprint /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

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
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:programId" element={<ProgramDetail />} />
          <Route path="/UberUns" element={<UberUns />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/experts" element={<Expert />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
        <Footer />
    </div>
  </div>
  );
}

export default App;
