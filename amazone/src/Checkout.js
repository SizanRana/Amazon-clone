import React from 'react';
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import CurrencyFormat from "./react-currency-format";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/30711/16299536_139965099844515_3394161382916099311_n.jpg?w=660" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items. Click "Add to basket" next to the item.</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* List out all of the checkout products */}
                    {basket.map(item=> (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
