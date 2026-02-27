import React from "react";

function Hero() {
  return (
    <section className="container-fluid support-hero" id="supportHero">

      {/* TOP BAR */}
      <div className="d-flex justify-content-between align-items-center px-4 py-4 support-wrapper">
        <h4 className="mb-0">Support Portal</h4>
        <a href="#" className="text-decoration-none">
          Track Tickets
        </a>
      </div>

      {/* MAIN CONTENT */}
      <div className="container py-5">
        <div className="row align-items-start">

          {/* LEFT SIDE */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h1 className="fs-4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg. how do I activate F&O"
              className="form-control mb-3 support-input"
            />

            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-decoration-none">Track account opening</a>
              <a href="#" className="text-decoration-none">Track segment activation</a>
              <a href="#" className="text-decoration-none">Intraday margins</a>
              <a href="#" className="text-decoration-none">Kite user manual</a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-5 col-md-12 offset-lg-1">
            <h1 className="fs-4 mb-3">Featured</h1>

            <ol className="ps-3">
              <li>
                <a href="#" className="text-decoration-none">
                  Current Takeovers and Delisting - January 2026
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;