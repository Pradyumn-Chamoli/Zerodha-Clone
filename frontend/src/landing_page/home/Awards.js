import React from "react";

function Awards() {
  return (
    <div className="container mt-5 awards-section">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* CONTENT */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <h1 className="fw-bold mb-4">
            Largest stock broker in India
          </h1>

          <p className="mb-4 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Groups</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid press-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;