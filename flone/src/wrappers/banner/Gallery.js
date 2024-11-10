import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/section-title/SectionTitle";
import '../../assets/css/gallery.css'

const banners = [
  {
    image: `/assets/img/banner/banner-4.jpg`,
    subtitle: "",
    discount: "Up To 40% Off",
    link: "/shop-grid-standard",
  },
  {
    image: `/assets/img/banner/banner-7.jpg`,
    subtitle: "Hand Gloves",
    discount: "Up To 30% Off",
    link: "/shop-grid-standard",
  },
  {
    image: `/assets/img/banner/banner-3.jpg`,
    subtitle: "Hand Sanitizer",
    discount: "Up To 40% Off",
    link: "/shop-grid-standard",
  },
];
const Gallery = () => {
  // Define banner data as an array of objects

  return (
    <div className={`banner-area`}>
      {/* Section Title */}
      <SectionTitle
        titleText="Gallery section"
        subtitleText=""
        subtitleColorClass="text-muted" // Optional custom class for subtitle
        positionClass="text-center"
        spaceClass="mb-30"
      />
      <div className="container-fluid p-70">
        <div className="row no-gutters">
          {banners.map((banner, index) => (
            <div
              className={`col-md-4 mb-4`} // Bootstrap grid: 3 columns for medium screens
              key={index}
            >
              <div className="single-banner mb-30 banner-card">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/klinsept">
                  <img src={banner.image} alt="" className="img-fluid" />
                </a>
                <div
                  className={`banner-content-33-2 banner-content-33-2`}
                >
                  {banner.title && <h4>{banner.title}</h4>}
                  <h2>
                    {/* {banner.subtitle} <br /> */}
                    {/* {banner.discount} */}
                  </h2>
                  <Link to={process.env.PUBLIC_URL + banner.link}>
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default Gallery;
