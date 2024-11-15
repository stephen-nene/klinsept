import PropTypes from "prop-types";
import React, {  } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import ProductGridSingleTwo from "../../components/product/ProductGridSingleTwo";

const ShopProducts = ({
  products,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems
}) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row grid three-column`}>
        {products.map(product => {
          return (
            <ProductGridSingleTwo 
              product={product}
              currency={currency}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              addToCompare={addToCompare}
              cartItem={
                cartItems.filter(cartItem => cartItem.id === product.id)[0]
              }
              wishlistItem={
                wishlistItems.filter(
                  wishlistItem => wishlistItem.id === product.id
                )[0]
              }
              compareItem={
                compareItems.filter(
                  compareItem => compareItem.id === product.id
                )[0]
              }
              key={product.id}
            />
          );
        })}
      </div>
    </div>
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
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array,
  layout: PropTypes.string
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
