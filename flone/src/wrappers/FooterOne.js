import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterNewsletter from "../components/footer/FooterNewsletter";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterOne = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer className={`footer-area bg-gray pt-100 pb-5`}>
      <div className={`container`}>
        <div className="row">
          <div
            className="
            col-lg-2 col-sm-4
            "
          >
            {/* footer copyright */}
            <div className={`copyright mb-30`}>
              <div className="footer-logo d-flex justify-content-center">
                <Link to={"/"}>
                  <img
                    alt="Company Logo"
                    src={"/assets/img/logo/logo.png"}
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Link>
              </div>

              <p>
                © 2020{" "}
                <a
                  href="https://www.klinsept.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Klinsept
                </a>
                .<br /> All Rights Reserved
              </p>
            </div>
          </div>
          <div
            className={`col-lg-2 col-sm-4`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={"/about"}>About us</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Store location</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"#/"}>Orders tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-2 col-sm-4`}
          >
            <div
              className={`footer-widget mb-30 ml-50`}
            >
              <div className="footer-title">
                <h3>CATEGORIES</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={"/products"}>Antiseptics</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>Detergents</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>Disinfectants</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>Handwash</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-2 col-sm-6`}
          >
            <div
              className={`footer-widget mb-30 ml-75`}
            >
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF size={20}/>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={20}/>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={20}/>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn size={20}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-4 col-sm-6`}
          >
            {/* footer newsletter */}
            <FooterNewsletter />
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};


export default FooterOne;
