import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container pricing-section py-5">
      <div className="row align-items-center">

        {/* LEFT SIDE */}
        <div className="col-lg-4 col-md-12 mb-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <Link to="/pricing" className="text-decoration-none">
            See Pricing{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        {/* SPACER (Desktop Only) */}
        <div className="col-lg-2 d-none d-lg-block"></div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6 col-md-12">
          <div className="row text-center">

            <div className="col-md-6 col-12 p-3 border pricing-card">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>

            <div className="col-md-6 col-12 p-3 border pricing-card">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;