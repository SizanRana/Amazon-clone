import React from "react";
import "../CSS/CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  console.log(image);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
