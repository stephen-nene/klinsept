import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Form, Alert, Spinner } from "react-bootstrap";

const FooterNewsletter = ({ sideMenu }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);
    setError(null); // Clear any previous errors

    try {
      // Simulate a backend call
      const response = await fakeBackendCall(email);

      if (response.ok) {
        console.log("Subscribed Email:", email);
        setShowSuccess(true);
        setEmail(""); // Clear the email field
      } else {
        // Simulate backend error
        throw new Error("Subscription failed. Please try again.");
      }
    } catch (err) {
      setError(err.message); // Set the error message
    } finally {
      setIsLoading(false);
    }
  };

  // Simulated backend call function
  const fakeBackendCall = (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulating an error 50% of the time
        if (Math.random() > 0.5) {
          resolve({ ok: true });
        } else {
          resolve({ ok: false });
        }
      }, 1500);
    });
  };

  return (
    <div className={`footer-widget mb-30 ${sideMenu ? "ml-ntv5" : "ml-70"}`}>
      <div className="footer-title">
        <h3>SUBSCRIBE</h3>
      </div>
      <div className="subscribe-style">
        <p>Get E-mail updates about our latest shop and special offers.</p>

        {/* Subscription form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                &nbsp; Submitting...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </Form>

        {/* Success message */}
        {showSuccess && (
          <Alert
            variant="success"
            onClose={() => setShowSuccess(false)}
            dismissible
            className="mt-3"
          >
            Thank you for subscribing!
          </Alert>
        )}

        {/* Error message */}
        {error && (
          <Alert
            variant="danger"
            onClose={() => setError(null)}
            dismissible
            className="mt-3"
          >
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

FooterNewsletter.propTypes = {
  sideMenu: PropTypes.bool,
};

export default FooterNewsletter;
