import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function SubTotal() {
    const [state,dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
              renderText={(value)=>(
                  <>
                  <p>
                      Subtotal ({state.basket?.length} items):<strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                      <input type="checkbox"></input>
                      this order contails a gift
                  </small>
                  </>
              )}
              decimalScale={2}
              value={getBasketTotal(state.basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />   
            <button>Proceed to CheckOut</button>         
        </div>
    )
}

export default SubTotal
