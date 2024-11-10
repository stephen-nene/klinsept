import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import FooterOne from "../wrappers/FooterOne";

const LayoutOne = ({ children, headerTop, headerPositionClass }) => {
  return (
    <Fragment>
      <HeaderOne top={headerTop} headerPositionClass={headerPositionClass} />
      {children}
      <FooterOne />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string,
};

export default LayoutOne;
