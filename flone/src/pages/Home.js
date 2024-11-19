import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../components/LayoutOne";
import HeroSlider from "../wrappers/HeroSlider";
import Banner from "../wrappers/banner/Banner";
import WhyUs from "../wrappers/WhyUs";
import TabProductSixteen from "../wrappers/product/TabProductSixteen";
import BlogFeaturedFour from "../wrappers/blog-featured/BlogFeaturedFour";
import Testimonial from "../wrappers/Testimonials2";
import Gallery from "../wrappers/banner/Gallery";
import ProductSlider from "../wrappers/product/ProductSlider";

const Home = () => {
  return (
    
    <div className="mt-90">

    <Fragment>
      <MetaTags>
        <title>Klinsept | Home</title>
        <meta
          name="description"
          content="Home page of Klinsept eCommerce website."
        />
      </MetaTags>

      <LayoutOne  >
        {/* hero slider */}
        <HeroSlider />
        {/* banner */}
        <Banner />
        {/* Good Services */}
        <WhyUs />
        {/* Our product */}
        <TabProductSixteen  />
        {/* gallery */}
        <Gallery />
        {/* product slider */}
        <ProductSlider category="Handwash" />
        {/* blog */}
        <BlogFeaturedFour />

        {/* testimonials */}
        <Testimonial/>
        
        {/* contact */}
      </LayoutOne>
    </Fragment>
    </div>
  );
};

export default Home;
