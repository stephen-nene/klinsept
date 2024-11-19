import React, { useState } from "react";
import {Tab, Nav} from "react-bootstrap";
import ShopProducts from "./ShopProducts";
import SectionTitle from "../../components/SectionTitle";
import { useTranslation } from "react-i18next";
const TabProductSixteen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Antiseptics");

  const { t } = useTranslation();

  const tabConfig = [
    { key: "Antiseptics", label: "Antiseptics" },
    { key: "Disinfectants", label: "Disinfectants" },
    { key: "Detergents", label: "Detergents" },
    { key: "Handwash", label: "Handwash" },
  ];

  return (
    <div className={`product-are a py-5`}>
      <div className=" ">
        <SectionTitle
          titleText={t("Our Products")}
          subtitleText={t("Explore our wide range of high-quality products tailored to meet your needs.")}
          subtitleColorClass="text-muted"
          positionClass="text-center"
          spaceClass="mb-30"
        />

        <Tab.Container
          activeKey={selectedCategory}
          onSelect={(key) => setSelectedCategory(key)}
        >
          <Nav
            variant="pills"
            className={`product-tab-list-5 mb-60 justify-content-center`}
          >
            {tabConfig.map((tab) => (
              <Nav.Item key={tab.key}>
                <Nav.Link eventKey={tab.key}>
                  <h4>{tab.label}</h4>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content>
            {tabConfig.map((tab) => (
              <Tab.Pane eventKey={tab.key} key={tab.key}>
                <div className="ro w">
                  <ShopProducts
                    category={selectedCategory}
                    type={tab.key}
                    limit={8}
                    spaceBottomClass="mb-25"
                    colorClass="pro-puce-color"
                  />
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};


export default TabProductSixteen;
