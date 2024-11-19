import PropTypes from "prop-types";
import React, {useState, Fragment} from "react";
import { connect } from "react-redux";
// import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "../../components/product/ProductImageGallery";
// import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const ProductImageDescription = ({
  product,
  currency,
  cartItems,
  wishlistItems,
  compareItems,
}) => {
  const wishlistItem = wishlistItems.filter(
    (wishlistItem) => wishlistItem.id === product.id
  )[0];
  const compareItem = compareItems.filter(
    (compareItem) => compareItem.id === product.id
  )[0];
  // const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const [quantityCount, setQuantityCount] = useState(1);

  return (
    <div className={`shop-area pt-100 pb-100`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}

            <ProductImageGallery product={product} />
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <div className="product-details-content ml-70">
              <h2>{product.name}</h2>
              <div className="product-details-price">
                {discountedPrice !== null ? (
                  <Fragment>
                    <span>
                      {currency.currencySymbol + finalDiscountedPrice}
                    </span>{" "}
                    <span className="old">
                      {currency.currencySymbol + finalProductPrice}
                    </span>
                  </Fragment>
                ) : (
                  <span>{currency.currencySymbol + finalProductPrice} </span>
                )}
              </div>

              <div className="pro-details-list">
                <p>{product.description}</p>
              </div>

              {
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : 1
                        )
                      }
                      className="dec qtybutton"
                    >
                      -
                    </button>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      value={quantityCount}
                      readOnly
                    />
                    <button
                      onClick={() => setQuantityCount(quantityCount + 1)}
                      className="inc qtybutton"
                    >
                      +
                    </button>
                  </div>
                  <div className="pro-details-cart btn-hover">
                    <button
                      onClick={() =>
                        toast.success("added to cart")
                        // addToCart(product, addToast, quantityCount)
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="pro-details-wishlist">
                    <button
                      className={wishlistItem !== undefined ? "active" : ""}
                      // disabled={wishlistItem !== undefined}
                      title={
                        wishlistItem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => 
                        toast.error("added to wishlist")
                        // addToWishlist(product, addToast)
                      }
                    >
                      <i className="pe-7s-like" />
                    </button>
                  </div>
                  <div className="pro-details-compare">
                    <button
                      className={compareItem !== undefined ? "active" : ""}
                      // disabled={compareItem !== undefined}
                      title={
                        compareItem !== undefined
                          ? "Added to compare"
                          : "Add to compare"
                      }
                      onClick={() => 
                        toast.error("added to compare")
                        // addToCompare(product, addToast)
                      }
                    >
                      <i className="pe-7s-shuffle" />
                    </button>
                  </div>
                </div>
              }
              {product.category ? (
                <div className="pro-details-meta">
                  <span>Categories :</span>
                  <ul>
                    {product.category.map((single, key) => {
                      return (
                        <li key={key}>
                          <Link to={process.env.PUBLIC_URL + "/products"}>
                            {single}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <ProductDescriptionInfo
              product={product}
              discountedPrice={discountedPrice}
              currency={currency}
              finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
              addToast={addToast}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  galleryType: PropTypes.string,
  product: PropTypes.object,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
  };
};


export default connect(mapStateToProps)(ProductImageDescription);
