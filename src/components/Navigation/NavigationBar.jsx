import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function NavigationBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Handler to close the menu when a link is clicked
  const handleNavLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning sticky-top shadow">
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold fs-2 shadow px-3 rounded-4"
          to="/"
          onClick={handleNavLinkClick}
        >
          Nestlise Foods
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <FaTimes size={28} color="#333" />
          ) : (
            <FaBars size={28} color="#333" />
          )}
        </button>

        <div
          className={`collapse navbar-collapse${isOpen ? " show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto fw-bold fs-5">
            <li className="nav-item mx-3">
              <Link
                className={`nav-link custom-nav-link${
                  location.pathname === "/" ? " active-nav" : ""
                }`}
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className={`nav-link custom-nav-link${
                  location.pathname === "/menu" ? " active-nav" : ""
                }`}
                to="/menu"
                onClick={handleNavLinkClick}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className={`nav-link custom-nav-link${
                  location.pathname === "/about" ? " active-nav" : ""
                }`}
                to="/about"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className={`nav-link custom-nav-link${
                  location.pathname === "/contact" ? " active-nav" : ""
                }`}
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
