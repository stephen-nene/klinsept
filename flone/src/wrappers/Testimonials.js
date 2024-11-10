import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import testimonialData from "../data/testimonial/testimonial-three.json";

const Testimonials = () => {
  // Swiper slider settings
  const settings = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <div
      className="testimonial-area mt-195"
    >
      <div className="container p-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="testimonial-active-2">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => (
                    <div
                      key={key}
                      className={`single-testimonial-2 text-center swiper-slide`}
                    >
                      <p>{single.content}</p>
                      <div className="client-info">
                        <i className="fa fa-map-signs" />
                        <h5>{single.customerName}</h5>
                        <span>{single.title}</span>
                      </div>
                    </div>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="testimonial-img-1">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => (
                    <img
                      key={key}
                      className="wow fadeInUp"
                      src={process.env.PUBLIC_URL + single.image}
                      alt="Testimonial"
                    />
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop validation
Testimonials.propTypes = {
  testimonialData: PropTypes.array,
};

export default Testimonials;
