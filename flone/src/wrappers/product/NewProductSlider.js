import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../components/SectionTitle";
import ShopProducts from "./ShopProducts";

const NewProductSlider = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  limit
}) => {
  const settings = {
    loop: false,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  return (
    <div
      className={`new-product-area ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${spaceTopClass ? spaceTopClass : ""}`}
    >
      <div className="container">
        <SectionTitle
          titleText="New Products"
          positionClass="text-center"
          spaceClass="mb-60"
        />
        <div className="row">
          <Swiper {...settings}>
            <ShopProducts
              category={category}
              limit={limit}
              sliderClassName="swiper-slide"
              type="new"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

NewProductSlider.propTypes = {
  category: PropTypes.string,
  limit: PropTypes.number,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default NewProductSlider;
