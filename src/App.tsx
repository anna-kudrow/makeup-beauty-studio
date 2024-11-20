import './App.css';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { PortfolioCarousel } from "./components/MainSection/Portfolio/PortfolioCarousel/PortfolioCarousel.tsx";
import { MainSection } from "./components/MainSection/MainSection.tsx";
// import { Layout } from './layout/Layout.tsx';
import { HairServicePrice } from './components/MainSection/Price/HairServicePrice.tsx';
import { MakeUpPrice } from './components/MainSection/Price/MakeUpPrice.tsx';
import { PhotoshootPrice } from './components/MainSection/Price/PhotoshootPrice.tsx';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <MainSection />,
//       },
//       {
//         path: "/:category",
//         element: <PortfolioCarousel />,
//       },
//       {
//         path: "/hair-price",
//         element: <HairServicePrice />,
//       },
//       {
//         path: "/makeup-price",
//         element: <MakeUpPrice/>,
//       },
//       {
//         path: "/photoshoot-price",
//         element: <PhotoshootPrice/>,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    // <RouterProvider router={router} />
      <Router>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/:category" element={<PortfolioCarousel />} />
          <Route path="/hair-price" element={<HairServicePrice />} />
          <Route path="/makeup-price" element={<MakeUpPrice />} />
          <Route path="/photoshoot-price" element={<PhotoshootPrice />} />
        </Routes>
    </Router>
  )
}

export default App;
