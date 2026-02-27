import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container about-hero">

      {/* TOP HEADING */}
      <div className="row py-5 mt-5 mb-4">
        <div className="col-12">
          <h1 className="fs-2 text-center fw-semibold">
            We pioneered the discount broking model in India.
            <br className="d-none d-md-block" />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div
        className="row py-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company Zerodha,
            a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <Link to="/" className="text-decoration-none">
              Rainmatter
            </Link>, our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on the
            latest updates on our blog or see what the media is saying about us
            or learn more about our business and product philosophies.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Hero;