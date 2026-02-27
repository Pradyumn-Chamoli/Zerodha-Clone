import React from "react";

function CreateAccount() {
  return (
    <div className="container create-account-section">
      <div className="row py-5 mt-5 mb-5">

        <div className="col-12 mb-4">
          <h1 className="fs-2 text-center text-md-start">
            To create a ticket, select a relevant topic
          </h1>
        </div>

        {/* COLUMN 1 */}
        <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3">
          <h4>
            <i className="fa-solid fa-circle-plus me-2"></i>
            Account Opening
          </h4>

          <div className="d-flex flex-column topic-links">
            <a href="#">Online Account Opening</a>
            <a href="#">Offline Account Opening</a>
            <a href="#">Company, Partnership and HUF Account</a>
            <a href="#">Opening</a>
            <a href="#">NRI Account Opening</a>
            <a href="#">Charges at Zerodha</a>
            <a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
            <a href="#">Getting Started</a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3">
          <h4>
            <i className="fa-solid fa-user me-2"></i>
            Your Zerodha Account
          </h4>

          <div className="d-flex flex-column topic-links">
            <a href="#">Login Credentials</a>
            <a href="#">Account Modification and Segment Addition</a>
            <a href="#">DP ID and bank details</a>
            <a href="#">Your Profile</a>
            <a href="#">Transfer and conversion of shares</a>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3">
          <h4>
            <i className="fa-solid fa-chart-simple me-2"></i>
            Trading & Platforms
          </h4>

          <div className="d-flex flex-column topic-links">
            <a href="#">Margin/leverage, Product and Order types</a>
            <a href="#">Kite Web and Mobile</a>
            <a href="#">Trading FAQs</a>
            <a href="#">Corporate Actions</a>
            <a href="#">Sentinel</a>
            <a href="#">Kite API</a>
            <a href="#">Stockreports+</a>
            <a href="#">GTT</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;