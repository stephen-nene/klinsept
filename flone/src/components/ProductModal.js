import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  FaHeart,
  FaShoppingCart,
  FaAngleRight,
  FaAngleLeft,
  FaExchangeAlt,
} from "react-icons/fa";
export const ProductModal = ({ show, handleClose, productData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the next and previous slide
  const nextSlide = () => {
    if (currentIndex < productData.image.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(productData.image.length - 1);
    }
  };

  if (!productData) {
    return null; // or render a loading indicator
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{productData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-fle">
        <div className="custom-carousel-container">
          <FaAngleLeft onClick={prevSlide} />

          <img
            className="custom-carousel-image"
            src={productData.image[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
          />

          <FaAngleRight onClick={nextSlide} />
        </div>

        {/* Spacing between the carousel and product details */}
        <div className="ml-4">
          <p>{productData.description}</p>
          <p> ${productData.price}</p>
          <div className="modal-btns d-flex ">
            <Button variant="light" onClick={() => alert("Liked!")}>
              <FaHeart size={20} />
            </Button>
            <Button variant="light" onClick={() => alert("Added to cart!")}>
              <FaShoppingCart size={20} />
            </Button>
            <Button variant="light" onClick={() => alert("Compared!")}>
              <FaExchangeAlt size={20} />
            </Button>
          </div>
          <p> {productData.category.join(", ")}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex align-items-center justify-content-between w-100">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert("Added to cart!")}>
            Add to Cart
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
