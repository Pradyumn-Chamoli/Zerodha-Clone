import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container hero-section py-5">
      <div className="row text-center align-items-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid hero-img mb-4"
          />

          <h1 className="fw-bold mt-4">Invest in everything</h1>

          <p className="text-muted px-md-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary btn-lg mt-3 hero-btn">
              Sign up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;