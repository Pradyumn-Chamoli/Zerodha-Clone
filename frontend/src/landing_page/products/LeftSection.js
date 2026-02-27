import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 product-section">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid product-img"
          />
        </div>

        {/* CONTENT */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <h1 className="mb-3">{productName}</h1>

          <p className="text-muted">{productDescription}</p>

          <div className="d-flex flex-column flex-md-row gap-3 mt-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>
          </div>

          <div className="mt-4 d-flex flex-column flex-md-row gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="store-badge"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                alt="App Store"
                className="store-badge"
              />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LeftSection;