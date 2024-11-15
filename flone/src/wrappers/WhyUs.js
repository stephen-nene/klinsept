import React from "react";
import SectionTitle from "../components/SectionTitle";
import { Row, Col, Container } from 'react-bootstrap';
import '../assets/css/whyus.css';
import { AiOutlineGlobal } from "react-icons/ai";
import { FcAssistant, FcInTransit, FcApproval, FcMoneyTransfer } from "react-icons/fc";
import { useTranslation } from "react-i18next";

const serviceData = [
  {
    id: 1,
    image: <FcInTransit className="animate" size={40} />,
    title: "Fast Shipping",
    description: "Enjoy free delivery for orders over $30, ensuring you get your products delivered quickly."
  },
  {
    id: 2,
    image: <FcAssistant size={40} />,
    title: "24/7 Support",
    description: "Our customer service is available online around the clock. We're here to help anytime."
  },
  {
    id: 3,
    image: <FcMoneyTransfer size={40} />,
    title: "Money Back",
    description: "We offer a 100% refund guarantee. If you're not satisfied, we'll refund your money."
  },
  {
    id: 4,
    image: <AiOutlineGlobal size={40} />,
    title: "Regional Delivery",
    description: "Prompt delivery within specific regions, ensuring fast service to your location."
  },
  {
    id: 5,
    image: <FcApproval size={40} />,
    title: "Top Quality",
    description: "Premium products with quality assurance. Expect only the best from us."
  }
];

const WhyUs = () => {
  const { t } = useTranslation();

  const translatedServiceData = serviceData.map((data) => ({
    ...data,
    title: t(data.title), // Translate title
    description: t(data.description), // Translate description
  }));

  return (
    <div className="support-area py-5">
      <SectionTitle
        titleText={t("Why Choose Us")}
        subtitleText={t("We are committed to delivering tailored cleaning and disinfectant solutions that meet the unique needs of your business.")}
        subtitleColorClass="text-muted"
        positionClass="text-center"
        spaceClass="mb-30"
      />
      <Container>
        <Row className="justify-content-center">
          {translatedServiceData.map((data) => (
            <Col lg={4} md={6} sm={12} key={data.id} className="mb-4">
              <div className="support-wrap-4">
                <div className="support-icon-4">
                  {data.image}
                </div>
                <div className="text">
                  <h5>{data.title}</h5>
                  <p>{data.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
