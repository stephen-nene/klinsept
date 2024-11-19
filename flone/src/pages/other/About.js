import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../components/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/FunFactOne";
import TeamMember from "../../wrappers/TeamMember";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { useLocation } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  const pathname = useLocation();
  const [activeKey, setActiveKey] = useState("antiseptics");

  return (
    <div className="mt-90">
      <MetaTags>
        <title>{t("Klinsept | About us")}</title>
        <meta name="description" content={t("About page of react minimalist eCommerce template.")} />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{t("Home")}</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        {t("About us")}
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <div className="welcome-are a pt-100 pb-95">
          <div className="container">
            <div className="welcome-content text-center">
              <h1>{t("Who We Are")}</h1>
              <p>{t("KLINSEPT is a janitorial and disinfectant products manufacturing company located in Bujumbura-Burundi. KLINSEPT began operation in May 2022 having fulfilled the entire registration requirements. We got a clean bill of health from BBN.")}</p>
              <p>{t("We officially introduced our products into the market in August 2022 and within four months; we were able to achieve the minimum sales that enabled us to be enlisted among organizations that have to submit TVA to OBR meaning our products were appreciated in the local market.")}</p>
            </div>
          </div>
        </div>

        {/* text grid */}
        <TextGridOne t={t}/>

        {/* fun fact */}
        <FunFactOne />

        <div className="welcome-area pt-100 pb-95">
          <div className="container">
            <div className="welcome-content text-center mb-50">
              <SectionTitle
                titleText={t("Our Products")}
                subTitleText={t("We manufacture a wide range of products:")}
                positionClass="text-center"
                spaceClass="mb-60"
              />
              <p>{t("We can deliver a wide range of fragrances, and packaging volumes as per the client’s requirement.")}</p>
              <p>{t("We have a well-equipped laboratory ensuring the quality of our products meets the required standards.")}</p>
              <p>{t("It is our endeavor to get associated with organizations that have the urge to improve not only in their price of procuring but also to develop new and genuinely good products. We believe in a long-term relationship, which is more like a partnership; we manufacture & you cater the products.")}</p>
            </div>

            <Tab.Container className="" activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
              <Nav variant="pills" className="product-tab-list-7 mb-40 justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="antiseptics">
                    <h4>{t("Antiseptics")}</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disinfectants">
                    <h4>{t("Disinfectants")}</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="detergents">
                    <h4>{t("Detergents")}</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="handwash">
                    <h4>{t("Handwash")}</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="antiseptics">
                  {t("Antiseptics kill microorganisms on your skin.")}
                </Tab.Pane>
                <Tab.Pane eventKey="disinfectants">
                  {t("Disinfectants are used to kill germs on nonliving surfaces.")}
                </Tab.Pane>
                <Tab.Pane eventKey="detergents">
                  {t("Intended for washing and cleaning processes.")}
                </Tab.Pane>
                <Tab.Pane eventKey="handwash">
                  {t("Promotes hand hygiene by removing viruses/bacteria/microorganisms, dirt, grease, or other harmful and unwanted substances stuck to the hands.")}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>

        {/* team member */}
        <TeamMember />

        {/* brand logo slider */}
        <BrandLogoSliderOne />
      </LayoutOne>
    </div>
  );
};

export default About;
