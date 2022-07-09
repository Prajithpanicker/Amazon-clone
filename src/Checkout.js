import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_add' src='https://images-na.ssl-images-amazon.com/images/G/01/credit/PLCC/YACC/YACC_non-prime_desktop_noSBCC.png' alt=''/>

        <div>
          <h2 className='checkout_title' >
          Shopping cart
          </h2>
        </div>
      </div>
      <div className='checkout_right' >
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout;