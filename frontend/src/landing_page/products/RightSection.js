import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 product-section">
      <div className="row align-items-center flex-lg-row flex-column-reverse">

        {/* TEXT SECTION */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <h1 className="mb-3">{productName}</h1>

          <p className="text-muted">{productDescription}</p>

          <div className="mt-3">
            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid product-img"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;