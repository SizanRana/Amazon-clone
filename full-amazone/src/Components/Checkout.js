import React from "react";
import "../CSS/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../RCAPI/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/30711/16299536_139965099844515_3394161382916099311_n.jpg?w=660"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => {
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />;
          })}
        </div>
      </div>
      2:55:21
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
