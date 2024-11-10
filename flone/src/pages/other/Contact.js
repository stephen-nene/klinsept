import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import { useLocation } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data on submit
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Klinsept | Contact us</title>
        <meta
          name="description"
          content="Contact us page of Klinsept. Get the location and send us a message with your queries."
        />
      </MetaTags>
      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>Contact</BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap
                latitude="-3.3508766806768415"
                longitude="29.363613291290164"
              />
            </div>
            <div className="row">
              {/* Contact Info Cards */}
              <div className="col-lg-4 col-md-5">
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Phone</Card.Title>
                    <Card.Text>+257 79 076 198</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Email</Card.Title>
                    <Card.Text>
                      <a href="mailto:info@klinsept.com">info@klinsept.com</a>
                    </Card.Text>
                    <Card.Text>
                      <a href="//klinsept.com">klinsept.com</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Address</Card.Title>
                    <Card.Text>
                      22 Av. Nyabisindu, Ngagara Q10, BP 7037, BUJUMBURA,
                      BURUNDI.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Follow Us</Card.Title>
                      <div className="contact-social text-center">
                        <ul>
                          <li>
                            <a href="//facebook.com">
                              <FaFacebook size={30} />
                            </a>
                          </li>
                          <li>
                            <a href="//pinterest.com">
                              <FaLinkedinIn size={30} />
                            </a>
                          </li>
                          <li>
                            <a href="//twitter.com">
                              <FaTwitter size={30} />
                            </a>
                          </li>
                        </ul>
                      </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="col-lg-8 col-md-7">
                <Card>
                  <Card.Body>
                    <Card.Title>Get In Touch</Card.Title>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          placeholder="Enter subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          placeholder="Write your message here"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        SEND
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
