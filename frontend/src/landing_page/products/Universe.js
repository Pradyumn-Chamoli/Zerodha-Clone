import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 universe-section">
      <div className="row text-center">

        <div className="col-12">
          <h1 className="mb-3">The Zerodha Universe</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {/* PLATFORM CARDS */}

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img src="media/images/smallcaseLogo.png" alt="smallcase" className="universe-logo" />
          <p className="text-muted small mt-2">Thematic investment platform</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img src="media/images/streakLogo.png" alt="streak" className="universe-logo" />
          <p className="text-muted small mt-2">Algo & strategy platform</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img src="media/images/sensibullLogo.svg" alt="sensibull" className="universe-logo" />
          <p className="text-muted small mt-2">Options trading platform</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img src="media/images/zerodhaFundhouse.png" alt="fundhouse" className="universe-logo" />
          <p className="text-muted small mt-2">Asset Management</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img src="media/images/goldenpiLogo.png" alt="goldenpi" className="universe-logo" />
          <p className="text-muted small mt-2">Bonds trading platform</p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 p-4 mt-4">
          <img src="media/images/dittoLogo.png" alt="ditto" className="universe-logo" />
          <p className="text-muted small mt-2">Insurance platform</p>
        </div>

        {/* BUTTON */}

        <div className="col-12 mt-4">
          <Link to="/signup" className="text-decoration-none">
            <button className="btn btn-primary btn-lg universe-btn">
              Sign up Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Universe;