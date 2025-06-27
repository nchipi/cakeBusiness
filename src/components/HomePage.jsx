import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const bgImages = [
  "/cake_business/src/assets/cake-background.jpg",
  "/cake_business/src/assets/cake-background2.jpg",
  "/cake_business/src/assets/cake-background3.jpg",
];

function HomePage() {
  const [bgIndex, setBgIndex] = useState(0);
  const [prevBgIndex, setPrevBgIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevBgIndex(bgIndex);
      setFade(true);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % bgImages.length);
        setFade(false);
      }, 600); // Duration should match CSS transition
    }, 4000);
    return () => clearInterval(interval);
  }, [bgIndex]);

  return (
    <div>
      {/* Hero Section */}
      <header
        className={`bg-light text-center text-dark py-5 hero-bg`}
        style={{
          backgroundImage: `url(${bgImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fading overlay */}
        {fade && (
          <div
            className="hero-fade"
            style={{
              backgroundImage: `url(${bgImages[prevBgIndex]})`,
            }}
          />
        )}
        <div className="container">
          <h1 className="display-4 fw-bold">Sweet Crumbs Bakery</h1>
          <p className="lead fw-bold">
            Handcrafted cakes made with love and the finest ingredients
          </p>
          <Link to="/menu" className="btn btn-warning btn-lg mt-3 shadow">
            Explore Our Menu
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <img
              src="/cake_business/src/assets/cake-background.jpg"
              alt="Custom Cakes"
              className="mb-3"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h4>Custom Cakes</h4>
            <p>
              Designed to match your celebrations—birthdays, weddings & more.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="/cake_business/src/assets/cake-background2.jpg"
              alt="Fresh Daily"
              className="mb-3"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h4>Fresh Daily</h4>
            <p>Baked every morning to ensure melt-in-your-mouth freshness.</p>
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="/cake_business/src/assets/cake-background3.jpg"
              alt="Delivery"
              className="mb-3"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h4>Fast Delivery</h4>
            <p>
              On-time and safe delivery so your sweets arrive fresh and fast.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-warning text-dark text-center py-4">
        <div className="container">
          <h3 className="fw-bold">Ready to treat yourself?</h3>
          <Link to="/contact" className="btn btn-warning shadow fw-bold mt-3">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
