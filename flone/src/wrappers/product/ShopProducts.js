import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import { deleteFromWishlist } from "../../redux/actions/wishlistActions";
// import { deleteFromCompare } from "../../redux/actions/compareActions";
// import {
//   AiOutlineShoppingCart,
//   AiOutlineEye,
//   AiOutlineSwap,
//   AiOutlineCloseCircle,
// } from "react-icons/ai";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
// import { ProductModal } from "../../components/ProductModal";
import { toast } from "react-hot-toast";
import "../../assets/css/ProductCard.css";

import { FaShoppingCart } from "react-icons/fa";

const ShopProducts = ({
  products,
  currentData,
  currency,
  addToCart,
  // addToCompare,
  wishlistItems,
  // compareItems,
}) => {
  // const [modalShow, setModalShow] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const finalProducts = currentData || products;

  const dispatch = useDispatch();
  return (
    <>
      <Fragment>
        <div className="products-container justify-content-center flex-wrap">
          {finalProducts.map((product, index) => {
            //  console.log(finalProducts)
            const priceConverter = (price) => {
              let convertedPrice = price;
              let currencySymbol = "$";

              if (currency?.selectedCurrency) {
                const { rates, symbol } = currency.selectedCurrency;
                convertedPrice = (price * rates).toFixed(2);
                currencySymbol = symbol || "$";
              }

              // Format the price with commas
              convertedPrice = parseFloat(convertedPrice).toLocaleString();

              return { convertedPrice, currencySymbol };
            };

            let variation =
              product.variations[
                Math.floor(Math.random() * product.variations.length)
              ];

            const { convertedPrice, currencySymbol } = priceConverter(
              variation?.price || 0
            );
            const convertedDiscount = priceConverter(
              variation?.discount || 0
            ).convertedPrice;

            // const isProductInCompare = compareItems.some(
            //   (item) => item.id === product.id
            // );
            const isProductInWishlist = wishlistItems.some(
              (item) => item.id === product.id
            );
            return (
              <Card key={index} className="product-car mb-3">
                <div className="image-container">
                  <img
                    src={
                      product.images[0]?.image ||
                      "/assets/img/banner/KlinSav.jpg"
                    }
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />
                  <div className="overlay-icons">
                    {isProductInWishlist ? (
                      <FcLike
                        onClick={() =>
                          dispatch(deleteFromWishlist(product, toast))
                        }
                        className="heart-icon active"
                        title="Remove from Wishlist"
                      />
                    ) : (
                      <FcLikePlaceholder
                        onClick={() => dispatch(addToWishlist(product, toast))}
                        className="heart-icon"
                        title="Add to Wishlist"
                      />
                    )}
                  </div>
                </div>

                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <Card.Title className="product-name">
                      <Card.Link href={`/product/${product.id}`}>
                        {product.name}
                      </Card.Link>
                    </Card.Title>{" "}
                    {/* description */}
                    {/* <Card.Text>{product?.description}</Card.Text> */}
                    <Card.Text className="product-description text-primary fw-bold">
                      {variation?.size}
                    </Card.Text>
                  </div>

                  <div className="d-flex justify-content-between">
                    {variation?.discount > 0 && (
                      <Card.Text
                        className="text-muted"
                        style={{ textDecoration: "line-through" }}
                      >
                        {currencySymbol} {convertedPrice}
                      </Card.Text>
                    )}

                    <Card.Text className="text-success">
                      {currencySymbol}{" "}
                      {variation?.discount > 0
                        ? convertedDiscount
                        : convertedPrice}
                    </Card.Text>
                  </div>
                  <div className="mt-3">
                    <Button
                      className=""
                      onClick={() => {
                        addToCart(product, 1, variation.size, "Retail");
                      }}
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        {/* <ProductModal
          show={modalShow}
          handleClose={() => setModalShow(false)}
          productData={selectedProduct}
        /> */}
      </Fragment>
    </>
  );
};

ShopProducts.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productData.products,
      ownProps.category,
      ownProps.type,
      ownProps.limit
    ),
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(deleteFromWishlist(item, addToast));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
// const VariationSelector = ({ product, priceConverter, onVariationSelect }) => {
//   const [selectedVariation, setSelectedVariation] = useState(
//     () =>
//       product.variations[Math.floor(Math.random() * product.variations.length)]
//   );
//   useEffect(() => {
//     // Notify parent with the initial selected variation
//     onVariationSelect(selectedVariation);
//   }, [selectedVariation]); // Only run if selectedVariation changes

// // console.log(product.variations[Math.floor(Math.random() * product.variations.length)])
//   const handleVariationClick = (variation) => {
//     console.log("child",variation)
//     setSelectedVariation(variation);
//     // onVariationSelect(selectedVariation);
//   };

//   // Convert price based on the selected variation
//   const { convertedPrice, currencySymbol } = priceConverter(
//     selectedVariation?.price || 0
//   );

//   return (
//     <>
//       <div className="row my-3">
//         {/* {product.variations.map((variation, index) => (
//           <div key={index} className="col-auto">
//             <Card.Text
//               onClick={() => handleVariationClick(variation)}
//               className={`product-description ${
//                 selectedVariation === variation ? "text-primary fw-bold" : ""
//               }`}
//               style={{ cursor: "pointer" }}
//             >
//               {variation.size}
//             </Card.Text>
//           </div>
//         ))} */}
//       </div>
//       <Card.Text className="text-left product-price">
//         {currencySymbol} {convertedPrice}
//       </Card.Text>
//     </>
//   );
// };
