import PropTypes from "prop-types";
import React from "react";
import { getIndividualCategories } from "../../helpers/product";
import { setActiveSort } from "../../helpers/product";

const ShopSidebar = ({ products, getSortParams }) => {
  const categories = getIndividualCategories(products);
  // const uniqueColors = getIndividualColors(products);

  return (
    <div className={`sidebar-style mr-30`}>


      {/* filter by categories */}
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Categories </h4>
        <div className="sidebar-widget-list mt-30">
          {categories ? (
            <ul>
              <li>
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={(e) => {
                      getSortParams("category", "");
                      setActiveSort(e);
                    }}
                    >
                    <span className="checkmark" /> All Categories
                  </button>
                </div>
              </li>
              {categories.map((category, key) => {
                return (
                  <li key={key}>
                    <div className="sidebar-widget-list-left">
                      <button
                        onClick={(e) => {
                          console.log(category)
                          getSortParams("category", category);
                
                          setActiveSort(e);
                        }}
                      >
                        {" "}
                        <span className="checkmark" /> {category}{" "}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            "No categories found"
          )}
        </div>
      </div>
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
};

export default ShopSidebar;
