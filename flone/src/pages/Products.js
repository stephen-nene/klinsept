import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Paginator from "react-hooks-paginator";
import { connect } from "react-redux";
import { getSortedProducts } from "../helpers/product";
import LayoutOne from "../components/LayoutOne";
import ShopSidebar from "../wrappers/product/ShopSidebar";
import ShopProducts from "../wrappers/product/ShopProducts";

const Products = ({ products }) => {
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 15;

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <div className="mt-100">
      <MetaTags>
        <title>Klinsept</title>
        <meta
          name="description"
          content="Shop page of  react minimalist eCommerce template."
        />
      </MetaTags>

      <LayoutOne headerTop="visible">
        <div className="shop-area pt-105 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                <ShopSidebar
                  products={products}
                  getSortParams={getSortParams}
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="shop-top-bar mb-35">
                  <div className="select-shoing-wrap">
                    <div className="shop-select">
                      <select
                        onChange={(e) =>
                          getFilterSortParams("filterSort", e.target.value)
                        }
                      >
                        <option value="default">Default</option>
                        <option value="priceHighToLow">
                          Price - High to Low
                        </option>
                        <option value="priceLowToHigh">
                          Price - Low to High
                        </option>
                      </select>
                    </div>
                    <p>
                      Showing {currentData.length} of {products.length} result
                    </p>
                  </div>
                </div>

                {/* shop page content default */}
                <ShopProducts
                  products={currentData}
                  currentData={currentData}
                />
                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(Products);
