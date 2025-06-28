import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar.jsx";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
