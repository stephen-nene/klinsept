import PropTypes from "prop-types";
import React, { Fragment } from "react";
// import Header from "../components/header/Header";
// import FooterOne from "../wrappers/FooterOne";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LanguageCurrencyChanger from "./LanguageCurrencyChanger.j";
import { FaWhatsapp } from "react-icons/fa";

const LayoutOne = ({ children, headerTop, headerPositionClass }) => {
  return (
    <Fragment>
      <div className="language-currency-container">
        <LanguageCurrencyChanger />
      </div>
      <Navbar />
      <a
        href="https://wa.me/yourwhatsappnumber" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp size={40} color="#fff" />
      </a>
      {/* <Header top={headerTop} headerPositionClass={headerPositionClass} /> */}
      {children}
      <Footer />
      {/* <FooterOne /> */}
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
