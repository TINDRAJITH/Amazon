import React from 'react'
import "./Checkout.css"
import SubTotal from './SubTotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>

                <div>
                    <h1 className="checkout__title">Your Shopping Basket</h1>
                </div>


            </div>
            <div className="ckeckout__right">
                <SubTotal></SubTotal>
            </div>
        </div>
    )
}

export default Checkout
