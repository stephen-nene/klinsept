import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../components/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import LoginModal from "../auth/LoginModal";

const Checkout = ({ cartItems, currency }) => {
  const { pathname } = useLocation();
  let cartTotalPrice = 0;
  const [userData, setUserData] = useState(false);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    street: "",
    postcode: "",
    orderNotes: "",
    products: cartItems,
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (!userData) {
        setOrderDetails(formData); // Set the order details for logging
        console.log("Order Details:", formData, orderDetails);
      } else {
        setShow(!show);
      }
    }
    setValidated(true);
  };

  return (
    <div className="mt-90">
      <MetaTags>
        <title> Klinsept | Checkout</title>
        <meta
          name="description"
          content="Checkout page of react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Checkout
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Delivery Details</h3>
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                              as="select"
                              required
                              value={formData.country}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  country: e.target.value,
                                })
                              }
                            >
                              <option value="">Select a country</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Congo">Congo</option>
                              <option value="DRC">DRC</option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Tanzania">Tanzania</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please select a country.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <Form.Group controlId="state">
                            <Form.Label>State / County</Form.Label>
                            <Form.Control
                              type="text"
                              required
                              value={formData.state}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  state: e.target.value,
                                })
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              State cannot be empty.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <Form.Group controlId="city">
                            <Form.Label>Town / City</Form.Label>
                            <Form.Control
                              type="text"
                              required
                              value={formData.city}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  city: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <Form.Group controlId="street">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="House number and street name"
                              required
                              value={formData.street}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  street: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <Form.Group controlId="postcode">
                            <Form.Label>Postcode / ZIP</Form.Label>
                            <Form.Control
                              type="text"
                              required
                              value={formData.postcode}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  postcode: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </div>
                      </div>

                      <div className="additional-info-wrap">
                        <h4>Additional information</h4>
                        <div className="additional-info">
                          <Form.Group controlId="orderNotes">
                            <Form.Label>Order notes</Form.Label>
                            <Form.Control
                              as="textarea"
                              placeholder="Notes about your order, e.g. special notes for delivery."
                              value={formData.orderNotes}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  orderNotes: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </div>
                      </div>

                      <div className="place-order mt-25">
                        <Button type="submit" variant="primary">
                          <Link to="/payment">Proceed to payment</Link>
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const convertedPrice = currency.selectedCurrency
                                ? (
                                    cartItem.price *
                                    currency.selectedCurrency.rates
                                  ).toFixed(2)
                                : cartItem.price;

                              cartTotalPrice +=
                                convertedPrice * cartItem.quantity;

                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {currency.selectedCurrency.symbol +
                                      (
                                        convertedPrice * cartItem.quantity
                                      ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        {/* <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div> */}
                        <div className="your-order-bottom total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {show && (
          <LoginModal show={show} setShow={setShow} setUserData={setUserData} />
        )}
      </LayoutOne>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
  };
};

export default connect(mapStateToProps)(Checkout);
