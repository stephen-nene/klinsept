import PropTypes from "prop-types";
import React from "react";

const BrandLogoOneSingle = ({ data, sliderClassName, spaceBottomClass }) => {
  return (
    <div
      className={`single-brand-logo ${sliderClassName ? sliderClassName : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <h4 className="ml-2">{data.title}</h4>
    </div>
  );
};

BrandLogoOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default BrandLogoOneSingle;
