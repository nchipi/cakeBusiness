import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css"; // Import the CSS file for styles

function NavigationBar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning sticky-top shadow">
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold fs-2 shadow px-3 rounded-4"
          to="/"
        >
          SweetCrumbs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto fw-bold fs-5">
            <li className="nav-item mx-3">
              <Link
                className={`nav-link custom-nav-link${
                  location.pathname === "/" ? " active-nav" : ""
                }`}
                to="/"
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
