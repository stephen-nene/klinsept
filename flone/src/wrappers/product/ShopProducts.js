import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
  AiOutlineSwap,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { Card } from "react-bootstrap";
import { ProductModal } from "../../components/ProductModal";
import { useToasts } from "react-toast-notifications";
import { toast } from "react-hot-toast";
import "../../assets/css/ProductCard.css";

const ShopProducts = ({
  products,
  currentData,
  currency,
  addToCart,
  addToCompare,
  wishlistItems,
  compareItems,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const { addToast } = useToasts();
  const finalProducts = currentData || products;
  return (
    <Fragment>
      <div className="products-container justify-content-center flex-wrap">
        {finalProducts.map((product, index) => {
          // Calculate converted price
          const convertedPrice = currency.currencyRate
            ? (product.price * currency.currencyRate).toFixed(2)
            : product.price; // Use default price if no rate
          const isProductInCompare = compareItems.some(
            (item) => item.id === product.id
          );

          return (
            <Card key={index} className="product-car mb-3">
              <div className="image-container">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="product-image"
                />
                <div className="overlay-icons">
                  <AiOutlineShoppingCart className="icon" title="Add to Cart" />
                  <AiOutlineEye
                    onClick={() => {
                      setSelectedProduct(product);
                      setModalShow(true);
                    }}
                    className="icon"
                    title="View Details"
                  />
                  {isProductInCompare ? (
                    <AiOutlineCloseCircle
                      onClick={() => {
                        toast.error("Item is already in compare");
                      }}
                      className="icon compare-icon active"
                      title="Already in Compare"
                    />
                  ) : (
                    <AiOutlineSwap
                      onClick={() => {
                        addToCompare(product, addToast);
                      }}
                      className="icon"
                      title="Add to Compare"
                    />
                  )}
                </div>
              </div>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                  <Card.Title className="product-name">
                    <Card.Link href={`product/${product.id}`}>
                      {product.name}
                    </Card.Link>
                  </Card.Title>
                  <AiOutlineHeart
                    className="heart-icon"
                    title="Add to Wishlist"
                  />
                </div>

                <Card.Text className="text-left product-price">
                  {currency.currencySymbol || "$"} {convertedPrice}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <ProductModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        productData={selectedProduct}
      />
    </Fragment>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
