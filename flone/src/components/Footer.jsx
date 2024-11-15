import React from "react";
import {
  FaTiktok,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import FooterNewsletter from "./footer/FooterNewsletter";
import "../assets/css/Footer.css";

import { useTranslation } from "react-i18next";

export default function Footer({ darkMode = !true }) {
  const { t } = useTranslation();

  return (
    <footer className={darkMode ? "bg-dark" : "bg-light"}>
      <div className="container">
        <div className="footer-grid">
          <div className="section-links">
            <h2 className="section-title">{t("Company")}</h2>
            <NavLink to="/about">{t("About Us")}</NavLink>
            <NavLink to="/contact">{t("Contact Us")}</NavLink>
            <NavLink to="/products">{t("Products")}</NavLink>
            <NavLink to="/blogs">{t("Blogs")}</NavLink>
            <Link href="/">{t("FAQs")}</Link>
          </div>
          <div className="work-hours">
            <h2 className="section-title">{t("Working Hours")}</h2>
            <div>
              <p>{t("Monday to Friday")}: </p>
              <span className="text-success">9:00 AM - 5:00 PM</span>
            </div>
            <div>
              <p>{t("Saturday")}: </p>
              <span className="text-warning">10:00 AM - 4:00 PM</span>
            </div>
            <div>
              <p>{t("Sunday")}: </p>
              <span className="text-danger">{t("Closed")}</span>
            </div>
          </div>

          <div className="section-links">
            <h2 className="section-title">{t("Categories")}</h2>
            <Link to="/products">{t("Antiseptics")}</Link>
            <Link to="/products">{t("Detergents")}</Link>
            <Link to="/products">{t("Handwash")}</Link>
            <Link to="/products">{t("Disinfectants")}</Link>
          </div>
          <div>
            <h3 className="section-title">{t("SUBSCRIBE")}</h3>
            <FooterNewsletter />
          </div>
        </div>
        <div className="footer">
          <div className="text-center flex justify-between items-center">
            <span className="copyright">
              © 2024 <Link to="/">Klinsept sprl</Link>. {t("All Rights Reserved")}
            </span>
            <div className="social-icons">
              <Link to="/" target="_blank">
                <FaFacebookF />
              </Link>
              <Link to="/" target="_blank">
                <FaInstagram />
              </Link>
              <Link target="_blank">
                <FaXTwitter />
              </Link>
              <Link to="/" target="_blank">
                <FaGithub />
              </Link>
              <Link to="/" target="_blank">
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
