import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container mt-5 border-top pt-5 footer-section">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 col-12">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="img-fluid footer-logo mb-3"
            />
            <p className="text-muted small">
              © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold">Company</p>
            <div className="d-flex flex-column gap-1">
              <Link to="/about" className="text-muted text-decoration-none">About</Link>
              <Link to="/product" className="text-muted text-decoration-none">Products</Link>
              <Link to="/pricing" className="text-muted text-decoration-none">Pricing</Link>
              <Link to="/" className="text-muted text-decoration-none">Referral programme</Link>
              <Link to="/" className="text-muted text-decoration-none">Careers</Link>
              <Link to="/" className="text-muted text-decoration-none">Zerodha.tech</Link>
              <Link to="/" className="text-muted text-decoration-none">Press & media</Link>
              <Link to="/" className="text-muted text-decoration-none">Zerodha cares (CSR)</Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold">Support</p>
            <div className="d-flex flex-column gap-1">
              <Link to="/support" className="text-muted text-decoration-none">Contact</Link>
              <Link to="/support" className="text-muted text-decoration-none">Support Portal</Link>
              <Link to="/" className="text-muted text-decoration-none">Z-connect blog</Link>
              <Link to="/pricing" className="text-muted text-decoration-none">List of charges</Link>
              <Link to="/" className="text-muted text-decoration-none">Downloads & resources</Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p className="fw-bold">Account</p>
            <div className="d-flex flex-column gap-1">
              <Link to="/signup" className="text-muted text-decoration-none">Open an account</Link>
              <Link to="/dashboard" className="text-muted text-decoration-none">Fund transfer</Link>
              <Link to="/" className="text-muted text-decoration-none">60 day challenge</Link>
            </div>
          </div>

        </div>

        <div className="mt-5 text-muted footer-text">
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;