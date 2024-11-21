import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../components/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Form, Button } from "react-bootstrap";

const Payment = ({ cartItems, currency }) => {
  const [validated, setValidated] = useState(false);
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

  const [paymentDetails, setPaymentDetails] = useState({
    mpesaNumber: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      console.log("Order Details:", formData);
    }
    setValidated(true);
  };

  const renderPaymentFields = () => {
    switch (formData.country) {
      case "Mpesa":
        return (
          <Form.Group controlId="mpesaNumber">
            <Form.Label>M-Pesa Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter M-Pesa number"
              value={paymentDetails.mpesaNumber}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  mpesaNumber: e.target.value,
                })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid M-Pesa number.
            </Form.Control.Feedback>
          </Form.Group>
        );

      case "Card":
        return (
          <>
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 5678 9012 3456"
                value={paymentDetails.cardNumber}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    cardNumber: e.target.value,
                  })
                }
                required
              />
            </Form.Group>
            <div className="d-flex">
              <Form.Group controlId="cardExpiry" className="mr-3">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/YY"
                  value={paymentDetails.cardExpiry}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      cardExpiry: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group controlId="cardCVC">
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="123"
                  value={paymentDetails.cardCVC}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      cardCVC: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  const renderFinishBtn = () => {
    switch (formData.country) {
      case "Mpesa":
        return (
          <Button type="submit" variant="primary">
            Initiate STK
          </Button>
        );
      case "Card":
        return (
          <Button type="submit" variant="primary">
            Charge Card
          </Button>
        );
      case "PoD":
        return (
          <Button type="submit" variant="primary">
            Place Order
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-90">
      <MetaTags>
        <title>Klinsept | Payment</title>
        <meta
          name="description"
          content="Checkout page of react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <BreadcrumbsItem to="/checkout">Checkout</BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="checkout-area pt-50 p mb-50">
          <div className="container">
            {cartItems.length > 0 ? (
              <div className="row">
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

                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>
                                  <span className="order-price">
                                    {currency.currencySymbol +
                                      (
                                        convertedPrice * cartItem.quantity
                                      ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartItems
                                  .reduce(
                                    (total, item) =>
                                      total +
                                      ((currency.selectedCurrency.rates*item.price) ) *
                                        item.quantity,
                                    0
                                  )
                                  .toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Payment Details</h3>
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <Form.Group controlId="country">
                        <Form.Label>Payment Method</Form.Label>
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
                          <option value="">Select a Payment method</option>
                          <option value="PoD">Pay on Delivery</option>
                          <option value="PoD">Mpesa</option>
                          <option value="PoD">Card</option>
                        </Form.Control>
                      </Form.Group>

                      {renderPaymentFields()}
                      {renderFinishBtn()}
                    </Form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <i className="pe-7s-cash mb-30"></i>
                    <p>No items found in cart to checkout</p>
                    <Link to="/shop-grid-standard">Shop Now</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </div>
  );
};

Payment.propTypes = {
  cartItems: PropTypes.array.isRequired,
  currency: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cartItems: state.cartData,
  currency: state.currencyData,
});

export default connect(mapStateToProps)(Payment);
