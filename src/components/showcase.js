import React from "react";

const showCase = () => {
  return (
    <div className="showcase-wrapper container">
      <div className="row">
        <div className="col-sm-6 col-md-7">
          <div className="slider p-5 mt-5 border">
            <h1>slide</h1>
          </div>
        </div>
        <div className="col-sm-4 offset-sm-2 col-md-5 offset-md-0 ">
          <div className="featured-product  mt-5 border d-flex flex-column align-self-start">
            <h2 className="p-3">Featured products</h2>
            <div className="feature-inner">
              <div className="row">
                <div className="col">image</div>
                <div className="col"> image</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showCase;
