import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container open-account-section py-5">
      <div className="row text-center justify-content-center">

        <div className="col-lg-8 col-md-12">
          <h1 className="mt-4 mb-3">
            Open a Zerodha account
          </h1>

          <p className="text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
            and F&O trades.
          </p>

          <Link to="/signup" className="text-decoration-none">
            <button className="btn btn-primary btn-lg mt-3 open-btn">
              Sign up Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default OpenAccount;