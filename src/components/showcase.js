import React from "react";
import Banner1 from "../Assets/slides/Banner-1.png";
import Banner2 from "../Assets/slides/Banner-2.png";
import FeatureImage1 from "../Assets/products/ft1.jpg";
import FeatureImage2 from "../Assets/products/img-6527.jpg";
const showCase = () => {
  return (
    <div className="showcase-wrapper">
      <div className="row">
        <div className="col-sm-6 col-md-7">
          <div className="slider">
            <h1>
              <img src={Banner1} alt="" className="img-fluid" />
            </h1>
          </div>
        </div>
        <div className="col-sm-4 offset-sm-2 col-md-5 offset-md-0 ">
          <div className="featured-product d-flex flex-column align-self-start">
            <div className="feature-inner">
              <div className="row">
                <div className="col">
                  <img
                    src={FeatureImage1}
                    alt=""
                    className="img-fluid border"
                  />
                </div>
                <div className="col">
                  {" "}
                  <img
                    src={FeatureImage2}
                    alt=""
                    className="img-fluid border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showCase;
