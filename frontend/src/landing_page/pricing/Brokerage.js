import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="container brokerage-section">
      <div className="row py-5 mt-5 text-center border-top align-items-start">

        {/* LEFT SECTION */}
        <div className="col-lg-8 col-md-12 p-lg-4 p-3">

          <Link to="/pricing" className="text-decoration-none">
            <h3 className="fs-5">Brokerage calculator</h3>
          </Link>

          <ul className="text-muted brokerage-list">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>

        </div>

        {/* RIGHT SECTION */}
        <div className="col-lg-4 col-md-12 p-lg-4 p-3 mt-4 mt-lg-0">

          <Link to="/charges" className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Brokerage;