import React from 'react'
import "./subtotal.css";
import { Currency } from 'react-tender';
import { Button } from '@mui/material';
import { CheckBox, CheckCircle } from '@mui/icons-material';




function Subtotal() {
  return (
    <div className='subtotal' >
     <p>Subtotal(0 items ):</p>
     
      <button>Proceed to checkout</button>
        
    </div>
  )
}

export default Subtotal;