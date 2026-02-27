import React from "react";

function Education() {
  return (
    <div className="container education-section py-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid education-img"
          />
        </div>

        {/* CONTENT */}
        <div className="col-lg-6 col-md-12">
          <h1 className="mb-3 fs-2">
            Free and open market education
          </h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <a
            href="https://zerodha.com/varsity/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            Varsity{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="https://tradingqna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            TradingQ&A{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;