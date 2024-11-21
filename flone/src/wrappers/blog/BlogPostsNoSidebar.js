import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Define blog post data in an array of objects
const blogPosts = [
  {
    id: 1,
    date: "15 March, 2023",
    comments: 6,
    title: "Eco-Friendly Cleaning: Safe and Effective Solutions",
    description: "Discover how our eco-friendly cleaning products are formulated to be tough on dirt but gentle on the environment. Learn tips on sustainable cleaning practices for your home and business.",
    imgUrl: "/assets/img/blog/eco-friendly-cleaning.jpg",
    linkUrl: "/blog-details-eco-friendly-cleaning",
  },
  {
    id: 2,
    date: "02 April, 2023",
    comments: 8,
    title: "The Importance of Proper Disinfection in Public Spaces",
    description: "In light of recent health concerns, effective disinfection is more crucial than ever. We discuss how our powerful disinfectants help maintain hygiene in high-traffic areas, from offices to gyms.",
    imgUrl: "/assets/img/blog/disinfection-public-spaces.jpg",
    linkUrl: "/blog-details-disinfection-public",
  },
  {
    id: 3,
    date: "18 April, 2023",
    comments: 5,
    title: "How to Choose the Right Detergent for Your Needs",
    description: "Not all detergents are created equal! Learn how to pick the perfect detergent based on your specific cleaning needs, from laundry to kitchen surfaces and everything in between.",
    imgUrl: "/assets/img/blog/choosing-right-detergent.jpg",
    linkUrl: "/blog-details-choose-detergent",
  },
  {
    id: 4,
    date: "05 May, 2023",
    comments: 10,
    title: "Tips for Stain Removal: A Guide to Spotless Fabrics",
    description: "Tough stains don’t stand a chance! Here are professional tips for removing stubborn stains from clothing, upholstery, and carpets using our specially formulated cleaning products.",
    imgUrl: "/assets/img/blog/stain-removal-tips.jpg",
    linkUrl: "/blog-details-stain-removal",
  },
  {
    id: 5,
    date: "20 May, 2023",
    comments: 7,
    title: "Why Natural Ingredients Matter in Household Cleaners",
    description: "Many conventional cleaners contain harsh chemicals. Learn about the benefits of natural ingredients in our products and how they can help you maintain a healthier home environment.",
    imgUrl: "/assets/img/blog/natural-ingredients-cleaners.jpg",
    linkUrl: "/blog-details-natural-cleaners",
  },
  {
    id: 6,
    date: "10 June, 2023",
    comments: 12,
    title: "The Role of Proper Handwashing in Preventing Illness",
    description: "Handwashing is one of the most effective ways to prevent illness. Learn the science behind it and how our handwashing products offer added protection with moisturizing benefits.",
    imgUrl: "/assets/img/blog/handwashing-benefits.jpg",
    linkUrl: "/blog-details-handwashing",
  },
  {
    id: 7,
    date: "22 June, 2023",
    comments: 3,
    title: "Keeping Your Kitchen Germ-Free with the Right Products",
    description: "The kitchen is often a hotspot for bacteria. Discover how to keep your kitchen surfaces clean and hygienic with our specially formulated cleaning solutions.",
    imgUrl: "/assets/img/blog/kitchen-cleaning.jpg",
    linkUrl: "/blog-details-kitchen-cleaning",
  },
];



const BlogPostsNoSidebar = () => {
  return (
    <Fragment>
      {blogPosts.map((post) => (
     <div key={post.id} className="col-lg-4 col-md-6 col-sm-12">
     <div className="blog-wrap-2 mb-30">
       <div className="blog-img-2">
         <Link to={process.env.PUBLIC_URL + post.linkUrl}>
           <img src={process.env.PUBLIC_URL + post.imgUrl} alt="" />
         </Link>
       </div>
       <div className="blog-content-2">
         <div className="blog-meta-2">
           <ul>
             <li>{post.date}</li>
             <li>
               <Link to={process.env.PUBLIC_URL + post.linkUrl}>
                 {post.comments} <i className="fa fa-comments-o" />
               </Link>
             </li>
           </ul>
         </div>
         <h4>
           <Link to={process.env.PUBLIC_URL + post.linkUrl}>{post.title}</Link>
         </h4>
         <p>{post.description}</p>
         <div className="blog-share-comment">
           <div className="blog-btn-2">
             <Link to={process.env.PUBLIC_URL + post.linkUrl}>read more</Link>
           </div>
           <div className="blog-share">
             <span>share :</span>
             <div className="share-social">
               <ul>
                 <li>
                   <a className="facebook" href="//facebook.com">
                     <i className="fa fa-facebook" />
                   </a>
                 </li>
                 <li>
                   <a className="twitter" href="//twitter.com">
                     <i className="fa fa-twitter" />
                   </a>
                 </li>
                 <li>
                   <a className="instagram" href="//instagram.com">
                     <i className="fa fa-instagram" />
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
      ))}
    </Fragment>
  );
};

export default BlogPostsNoSidebar;
