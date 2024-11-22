import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PortfolioCarousel } from "./components/MainSection/Portfolio/PortfolioCarousel/PortfolioCarousel.tsx";
import { MainSection } from "./components/MainSection/MainSection.tsx";
import { HairServicePrice } from './components/MainSection/Price/HairServicePrice.tsx';
import { MakeUpPrice } from './components/MainSection/Price/MakeUpPrice.tsx';
import { PhotoshootPrice } from './components/MainSection/Price/PhotoshootPrice.tsx';
import { Header } from './components/Header/Header.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { Reviews } from './components/Reviews/Reviews.tsx';

function App() {
  const redirectPath = window.location.search.slice(2); // Убираем "?/" из начала

  if (redirectPath) {
    window.history.replaceState({}, "", redirectPath); // Заменяем URL без перезагрузки
  }
  return (
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/:category" element={<PortfolioCarousel />} />
            <Route path="/hair-price" element={<HairServicePrice />} />
            <Route path="/makeup-price" element={<MakeUpPrice />} />
            <Route path="/photoshoot-price" element={<PhotoshootPrice />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        <Footer/>
    </Router>
  )
}

export default App;
