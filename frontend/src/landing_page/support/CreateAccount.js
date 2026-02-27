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
            <button className="link-btn">Online Account Opening</button>
            <button className="link-btn">Offline Account Opening</button>
            <button className="link-btn">Company, Partnership and HUF Account</button>
            <button className="link-btn">Opening</button>
            <button className="link-btn">NRI Account Opening</button>
            <button className="link-btn">Charges at Zerodha</button>
            <button className="link-btn">Zerodha IDFC FIRST Bank 3-in-1 Account</button>
            <button className="link-btn">Getting Started</button>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3">
          <h4>
            <i className="fa-solid fa-user me-2"></i>
            Your Zerodha Account
          </h4>

          <div className="d-flex flex-column topic-links">
            <button className="link-btn">Login Credentials</button>
            <button className="link-btn">Account Modification and Segment Addition</button>
            <button className="link-btn">DP ID and bank details</button>
            <button className="link-btn">Your Profile</button>
            <button className="link-btn">Transfer and conversion of shares</button>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3">
          <h4>
            <i className="fa-solid fa-chart-simple me-2"></i>
            Trading & Platforms
          </h4>

          <div className="d-flex flex-column topic-links">
            <button className="link-btn">Margin/leverage, Product and Order types</button>
            <button className="link-btn">Kite Web and Mobile</button>
            <button className="link-btn">Trading FAQs</button>
            <button className="link-btn">Corporate Actions</button>
            <button className="link-btn">Sentinel</button>
            <button className="link-btn">Kite API</button>
            <button className="link-btn">Stockreports+</button>
            <button className="link-btn">GTT</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;