import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
      />
      </Link>

      <div className="header_search">
        <input className="header_searchinput"
         type="text" />
     <SearchIcon className="header_searchicon"/>
      </div>

      <div className="header_nav">
        <div className="header_option" >
            <span className="header_optionlineone" >
                Hello guest
            </span>
            <span className="header_optionlinetwo" >
                sign in
            </span>
        </div>
        <div className="header_option" >
        <span className="header_optionlinethree" >
                Returns
            </span>
            <span className="header_optionlinefour" >
            & orders
            </span>
        </div>
        <div className="header_option" >
        <span className="header_optionlinefive" >
                your
            </span>
            <span className="header_optionlinesix" >
            Prime
            </span>
        </div>
        <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon/>
          <span className="header_optionlineseven 
            header_basketcount">0</span>
        </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
