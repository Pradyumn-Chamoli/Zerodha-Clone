import React from "react";

function Hero() {
  return (
    <div className="container product-hero border-bottom mb-5">
      <div className="row text-center mt-5 py-4">
        <div className="col-12">

          <h1 className="fw-semibold">Zerodha Products</h1>

          <h3 className="text-muted mt-3 fs-5">
            Sleek, modern, and intuitive trading platforms
          </h3>

          <p className="mt-3 mb-4">
            Check out our{" "}
            <a href="#" className="text-decoration-none">
              investment offerings{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;