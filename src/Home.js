import React from "react";
import "./Home.css";
import Product from './Product'
import Endcontainer from "./Endcontainer";
function home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SamratPrithviraj/3000x1200_Hero-Tall_NP._CB633864038_.jpg"  alt="" />

        <div className="home_row">
       <Product
       id="1"
        title="Redgear Shadow Blade Mechanical Keyboard"
       price="2,199"
       image="https://m.media-amazon.com/images/I/61NKGdlO36L._SL1500_.jpg"
       rating={5}
       />


       <Product 
       id="2"
       title="OnePlus 9RT 5G (Hacker Black, 12GB RAM, 256GB Storage)"
       price="46,999"
       image="https://m.media-amazon.com/images/I/61KnXoTQQ4L._SX522_.jpg"
       rating={4}
       />
       <Product
       id="3"
       title="boAt Bassheads 242 in Ear Wired Earphones with Mic(Active Black)"
       price="549.00"
       image="https://m.media-amazon.com/images/I/61+tzvHZi+L._SX522_.jpg"
       rating={3}
       />
        </div>
        <div className="home_row">
       <Product
       id="4"
       title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
       price="3,999"
       image="https://m.media-amazon.com/images/I/41FgiLFNhFL.jpg"
       rating={4}
       />

      <Product
      id="5"
      title="Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular"
      price="28,400"
      image="https://m.media-amazon.com/images/I/71Pln-8awPL._SX679_.jpg"
      rating={5}
      />
       
          </div>
        <div className="home_row">
          <Product
          id='6'
          title="Samsung 123.9cm (49) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate  LC49G95TSSWXXL"
          price="1,48,500."
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          rating={5}
          />

          <Product
          id='7'
          title="ASUS TUF Gaming F15 (2021), 15.6 (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GTX 1650 4GB Graphics, Gaming Laptop"
           price="57,990"
          image="https://m.media-amazon.com/images/I/710NRdecQtL._SL1000_.jpg"
          rating={4}
          />

          <Product
          id="8"
          title="Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones with Mic for PC"
          price="799"
          image="https://m.media-amazon.com/images/I/61O0rXhhP6L._SL1500_.jpg"
          rating={3}
          />
        </div>
      <Endcontainer/>
      </div>
    </div>
   
  );
}

export default home;
