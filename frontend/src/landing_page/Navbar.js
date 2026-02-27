import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom fixed-top"
        style={{
          backgroundColor: "#FFF",
          zIndex: 1000,
          height: "70px"
        }}
      >
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              style={{ width: "140px" }}
              alt="Logo"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/signup" ? "fw-bold text-primary" : ""
                  }`}
                  to="/signup"
                >
                  SignUp
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/login" ? "fw-bold text-primary" : ""
                  }`}
                  to="/login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "fw-bold text-primary" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/product" ? "fw-bold text-primary" : ""
                  }`}
                  to="/product"
                >
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/pricing" ? "fw-bold text-primary" : ""
                  }`}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/support" ? "fw-bold text-primary" : ""
                  }`}
                  to="/support"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't go under navbar */}
      <div style={{ height: "70px" }}></div>
    </>
  );
}

export default Navbar;