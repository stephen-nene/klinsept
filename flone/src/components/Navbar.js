import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaCartShopping,
  // FaRegHeart,
  FaCodeCompare,
  // FaRegUser,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Form, Button, Alert } from "react-bootstrap";
import Logo from "../assets/logo.png";
import "../assets/css/Navbar.css";
import { useTranslation } from "react-i18next";
// import { isAuthenticated } from "../helpers/backendFectch";
import { FaBars } from "react-icons/fa6";


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"))
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const navigationRef = useRef();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const cartData = useSelector((state) => state.cartData);
  const compareData = useSelector((state) => state.compareData);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // console.log(localStorage.getItem("userData"));
  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedSearch = searchValue.trim();

    if (!trimmedSearch) {
      setError("Search cannot be empty");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (trimmedSearch.length < 3) {
      setError("Search must be at least 3 characters");
      setTimeout(() => setError(""), 3000);
      return;
    }

    navigate(`/search/${trimmedSearch}`);
    setError("");
    setShowSearch(false);
  };

  

  return (
    <>
      {error && (
        <Alert className="alert-custom" variant="danger">
          {error}
        </Alert>
      )}

      <div className={`fixed-top ${toggleMenu && "toggled"}`}>
        <nav>
          <div className="nav-inner-container">
            <div className="logo-container">
              <Link to="/" className="logo-link text-center">
                <img src={Logo} alt="klinset logo" />
              </Link>
            </div>
            <div className="primary-nav">
              <NavLink to="/">{t("Home")}</NavLink>
              <NavLink to="/about">{t("About Us")}</NavLink>
              <NavLink to="/products">{t("Products")}</NavLink>
              <NavLink to="/blogs">{t("Blogs")}</NavLink>
              <NavLink to="/contact">{t("Contact Us")}</NavLink>
              {/* <NavLink to={loggedIn ? "/my-account" : "/login"}>
                    <FaRegUser size={24} />
                  </NavLink> */}
            </div>

            <div className="secondary-nav">
              <div className="search-container">
                {!showSearch && (
                  <FaMagnifyingGlass
                    size={20}
                    onClick={() => setShowSearch(!showSearch)}
                    className="search-icon"
                  />
                )}
                {showSearch && (
                  <Form onSubmit={handleSearch} className="search-form">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      isInvalid={!!error}
                    />
                    <Button
                      variant="outline-secondary"
                      type="submit"
                      onClick={handleSearch}
                    >
                      <FaMagnifyingGlass />
                    </Button>
                    <IoClose
                      className="close-icon"
                      onClick={() => setShowSearch(!showSearch)}
                    />
                  </Form>
                )}
              </div>
              <NavLink className="icon-with-badge" to="/cart">
                <FaCartShopping size={20} />
                <span className="badge badge-info">
                  {cartData?.length || 0}
                </span>
              </NavLink>
              {/* <NavLink to="/wishlist">
                  <FaRegHeart size={25} />
                  <span className="badge badge-info">
                  {wishlistData?.length || 0}
                  </span>
                  </NavLink> */}
              <NavLink to="/compare">
                <FaCodeCompare size={20} />
                <span className="badge badge-danger">
                  {compareData?.length || 0}
                </span>
              </NavLink>
              
              <NavLink to={userData !== null ? "/my-account" : "/login"} className="login-btn"
              >
                {/* <FaRegUser size={25} />  */}
                {t("Login")}
              </NavLink>

              <div
                className="menu-toggle"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {!toggleMenu ? (
                  <FaBars size={20} />
                ) : (
                  <IoClose size={20} />
                )}
              </div>
            </div>
          </div>

          <div
            className={`mobile-nav ${toggleMenu ? "expanded" : "collapsed"}`}
          >
            <div className="mobile-menu-links">
              <NavLink to="/">{t("Home")}</NavLink>
              <NavLink to="/about">{t("About Us")}</NavLink>
              <NavLink to="/products">{t("Products")}</NavLink>
              <NavLink to="/blogs">{t("Blogs")}</NavLink>
              <NavLink to="/contact">{t("Contact Us")}</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
