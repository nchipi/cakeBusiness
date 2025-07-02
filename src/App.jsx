import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar.jsx";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
      <Footer />
    </>
  );
}

export default App;
