import React from "react";
import "../CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../RCAPI/StateProvider";
import { getBasketTotal } from "../RCAPI/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  // For rendering the currency which also helps to render the decimals numbers we have to npm i react-currency-format
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
