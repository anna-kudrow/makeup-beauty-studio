import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PortfolioCarousel } from "./components/MainSection/Portfolio/PortfolioCarousel/PortfolioCarousel.tsx";
import { MainSection } from "./components/MainSection/MainSection.tsx";
import { Layout } from './layout/Layout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "/portfolio/:category",
        element: <PortfolioCarousel />,
      },
      // {
      //   path: "/#about",
      //   element: <PortfolioCarousel />,
      // },

    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
