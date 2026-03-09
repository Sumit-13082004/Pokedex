import AboutPage from "./pages/AboutPage.tsx";
import ComparePage from "./pages/ComparePage.tsx";
import MyListPage from "./pages/MyListPage.tsx";
import PokemonPage from "./pages/PokemonPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import Background from "./sections/Background.tsx";
import Footer from "./sections/Footer.tsx";
import Header from "./sections/Header.tsx";
import Wrapper from "./sections/Wrapper.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {

  return (
    <div className="main-container relative min-h-screen overflow-hidden">
      <Background />
      <BrowserRouter>
        <div className="app z-1 bg-[rgb(4,6,20)]/85 min-h-screen backdrop-blur-[50px] grid grid-rows-[10vh_auto_10vh] grid-cols-1">
          <Header />
          <Wrapper>
            <Routes>
               <Route path="/" element={<Navigate to="/pokemon/1" replace />} />

              <Route element={<SearchPage />} path="/search" />
              <Route element={<AboutPage />} path="/about" />
              <Route element={<ComparePage />} path="/compare" />
              <Route element={<PokemonPage />} path="/pokemon/:id" />
              <Route element={<MyListPage />} path="/list" />
              
              <Route path="*" element={<Navigate to="/pokemon/1" replace />} />
            </Routes>
          </Wrapper>
          <Footer />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App