import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import "./Header.css"
import { useStateValue } from './StateProvider'

function Header() {

    const [state,dispatch]=useStateValue();
    return (
        <nav className="header">
        <Link to="/">
      
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
      
        </Link>
        <div className="header__search">
        <input type="text"className="header__searchInput"/>
        <SearchIcon className="header__searchicon"></SearchIcon>
        </div>
        <div className="header__nav">
          <Link to="/login" className="header__link">
              <div className="header__option">
                  <span  className="header__optionlineone">Hello</span>
                  <span className="header__optionlinetwo">Sign In</span>
              </div>
          </Link>
          <Link to="/" className="header__link">
              <div className="header__option">
                  <span className="header__optionlineone">Returns</span>
                  <span className="header__optionlinetwo">& Order</span>
              </div>
          </Link>
          <Link to="/" className="header__link">
              <div className="header__option">
                  <span className="header__optionlineone">Your</span>
                  <span className="header__optionlinetwo">Prime</span>
              </div>
          </Link>
          <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                  <ShoppingBasketIcon/>
    <span className="header__optionlinetwo header__basketCount">{state.basket?.length}</span>
              </div>
          </Link>
         </div>

        </nav>
    //
    //npm install @material-ui/icons
    // {}
    );
}

export default Header