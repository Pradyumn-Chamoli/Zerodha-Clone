import React from "react";

function Hero() {
  return (
    <section className="container-fluid support-hero" id="supportHero">

      {/* TOP BAR */}
      <div className="d-flex justify-content-between align-items-center px-4 py-4 support-wrapper">
        <h4 className="mb-0">Support Portal</h4>
        <button className="link-btn">
          Track Tickets
        </button>
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
              <button className="link-btn">Track account opening</button>
              <button className="link-btn">Track segment activation</button>
              <button className="link-btn">Intraday margins</button>
              <button className="link-btn">Kite user manual</button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-5 col-md-12 offset-lg-1">
            <h1 className="fs-4 mb-3">Featured</h1>

            <ol className="ps-3">
              <li>
                <button className="link-btn">
                  Current Takeovers and Delisting - January 2026
                </button>
              </li>
              <li>
                <button className="link-btn">
                  Latest Intraday leverages - MIS & CO
                </button>
              </li>
            </ol>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;