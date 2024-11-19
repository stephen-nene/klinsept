import PropTypes from "prop-types";
import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Link, useNavigate } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../components/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import { Spinner, Nav, Form, Button, Alert } from "react-bootstrap";
import { LoginFetch } from "../../helpers/backendFectch";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Login = ({ authData }) => {
  const { pathname } = useLocation();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setLoading(true);
      try {
        await LoginFetch(loginData, dispatch, toast);
        setTimeout(() => {
          navigate("/my-account");
        }, 4000);
      } finally {
        setLoading(false);
      }
    }

    setValidated(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div className="mt-90">
      <MetaTags>
        <title>Klinsept | Login</title>
        <meta
          name="description"
          content="Login page of Klinsept eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Nav className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link>
                        <h4>Login</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleLoginSubmit}
                      >
                        {/* {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>} */}

                        <Form.Group controlId="formEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            required
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={loginData.email}
                            onChange={handleInputChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={loginData.password}
                            onChange={handleInputChange}
                            minLength="6"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a password with at least 6
                            characters.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <div className="button-box mt-4">
                          <div className="login-toggle-btn d-flex align-items-center justify-content-between mb-3">
                            <Form.Check
                              type="checkbox"
                              label="Remember me"
                              className="mb-0"
                            />
                            <Link
                              to={process.env.PUBLIC_URL + "/forgot"}
                              className="text-primary"
                              style={{ textDecoration: "underline" }}
                            >
                              Forgot Password?
                            </Link>
                          </div>

                          <div className="text-center mb-3">
                            <Link
                              to={process.env.PUBLIC_URL + "/register"}
                              className="text-muted"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Not registered?{" "}
                              <span className="text-primary">
                                Sign up here.
                              </span>
                            </Link>
                          </div>

                          <Button
                            type="submit"
                            variant="primary"
                            className="w-100"
                            style={{ fontWeight: "bold" }}
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  arai-hidden="true"
                                />
                                {"  "}
                                Logging in...
                              </>
                            ) : (
                              "Login"
                            )}
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </div>
  );
};

Login.propTypes = {
  location: PropTypes.object,
};

export default Login;
