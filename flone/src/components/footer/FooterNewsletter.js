import React, { useState } from "react";
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FooterNewsletter = () => {
  const { t } = useTranslation();
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
        throw new Error(t("Subscription failed. Please try again.")); // Translated error message
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
    <div className={`footer-widget mb-30 `}>
      <div className="subscribe-style">
        <p>{t("Get E-mail updates about our latest shop and special offers.")}</p>

        {/* Subscription form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder={t("Enter email")}
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
                &nbsp; {t("Submitting...")}
              </>
            ) : (
              t("Subscribe")
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
            {t("Thank you for subscribing!")}
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

export default FooterNewsletter;
