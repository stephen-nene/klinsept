import React, { useState, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { useLocation } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";

const About = () => {
  const pathname = useLocation();
  const [activeKey, setActiveKey] = useState("antiseptics");

  return (
    <Fragment>
      <MetaTags>
        <title>Klinsept | About us</title>
        <meta
          name="description"
          content="About page of  react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        About us
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <div className={`welcome-are a pt-100 pb-95`}>
          <div className="container">
            <div className="welcome-content text-center">
              {/* <h5>Who Are We</h5> */}
              <h1>Who We Are </h1>
              <p>
                KLINSEPT is a janitorial and disinfectant products manufacturing
                company located in Bujumbura-Burundi. KLINSEPT began operation
                in May 2022 having fulfilled the entire registration
                requirements. We got a clean bill of health from BBN.
              </p>
              <p>
                We officially introduced our products into the market in August
                2022 and within four months; we were able to achieve the minimum
                sales that enabled us to be enlisted among organizations that
                have to submit TVA to OBR meaning our products were appreciated
                in the local market.
              </p>
            </div>
          </div>
        </div>
        {/* text grid */}
        <TextGridOne />

        {/* fun fact */}
        <FunFactOne />

        <div className="welcome-area pt-100 pb-95">
          <div className="container">
            <div className="welcome-content text-center mb-50">
              <SectionTitleTwo
                titleText="Our Products"
                subTitleText="We manufacture a wide range of products:"
                positionClass="text-center"
                spaceClass="mb-60"
              />
              <p>
                We can deliver a wide range of fragrances, and packaging volumes
                as per the client’s requirement.
              </p>
              <p>
                We have a well-equipped laboratory ensuring the quality of our
                products meets the required standards.
              </p>
              <p>
                It is our endeavor to get associated with organizations that
                have the urge to improve not only in their price of procuring
                but also to develop new and genuinely good products. We believe
                in a long-term relationship, which is more like a partnership;
                we manufacture & you cater the products.
              </p>
            </div>

            <Tab.Container
              className=""
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
            >
              <Nav
                variant="pills"
                className={`product-tab-list-7 mb-40 justify-content-center `}
              >
                <Nav.Item>
                  <Nav.Link eventKey="antiseptics">
                    <h4>Antiseptics</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disinfectants">
                    <h4>Disinfectants</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="detergents">
                    <h4>Detergents</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="handwash">
                    <h4>Handwash</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="antiseptics">
                  Antiseptics kill microorganisms on your skin.
                </Tab.Pane>
                <Tab.Pane eventKey="disinfectants">
                  Disinfectants are used to kill germs on nonliving surfaces.
                </Tab.Pane>
                <Tab.Pane eventKey="detergents">
                  Intended for washing and cleaning processes.
                </Tab.Pane>
                <Tab.Pane eventKey="handwash">
                  Promotes hand hygiene by removing
                  viruses/bacteria/microorganisms, dirt, grease, or other
                  harmful and unwanted substances stuck to the hands.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>

        {/* team member */}
        <TeamMemberOne />

        {/* brand logo slider */}
        <BrandLogoSliderOne />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
