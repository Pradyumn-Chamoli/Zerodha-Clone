import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container stats-section py-5">
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid stats-img"
          />

          <div className="mt-4 d-flex flex-column flex-md-row justify-content-center gap-3">
            
            <Link to="/product" className="text-decoration-none">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>

            <Link to="/signup" className="text-decoration-none">
              Try Kite demo{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;