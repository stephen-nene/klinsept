import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../components/SectionTitle";
import ShopProducts from "./ShopProducts";
import { useTranslation } from "react-i18next";
const ProductSlider = ({  category }) => {
  const { t } = useTranslation();
  const settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div
      className={`related-product-area `}
    >
      <div className="container">
        <SectionTitle
          titleText="Top Products"
          subtitleText="Discover our most popular items"
          subtitleColorClass="text-dark" 
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />

        <div className="row">
          <Swiper {...settings}>
            <ShopProducts
              category={category}
              limit={6}
              sliderClassName="swiper-slide"
              colorClass="pro-puce-color"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

ProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductSlider;
