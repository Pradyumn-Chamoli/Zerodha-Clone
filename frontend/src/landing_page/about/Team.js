import React from "react";

function Team() {
  return (
    <div className="container team-section">

      {/* TITLE */}
      <div className="row py-5 mt-5 border-top">
        <div className="col-12">
          <h1 className="text-center">People</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="row py-5 align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >

        {/* IMAGE COLUMN */}
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid team-img"
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        {/* TEXT COLUMN */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none">Homepage</a> /{" "}
            <a href="#" className="text-decoration-none">TradingQnA</a> /{" "}
            <a href="#" className="text-decoration-none">Twitter</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;