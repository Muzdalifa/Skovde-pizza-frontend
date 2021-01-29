import React, {useState} from 'react';
import './Payment.css'

import { useLocation } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import {useHistory} from 'react-router-dom';

//This is your test publishable API key.
const stripePromise = loadStripe('pk_test_51I6bvkHTHUtbDw8mPtB00mwyaUd9vgLez02Sc7bbRZLYcLYKeGeH1z2Y8Qy0AKVndZuutOVBjOIp8eVhEc6cqGKA00GxO7hHfT');

const checkout = async(orderNumber, cost)=>{
  // Get Stripe.js instance
  const stripe = await stripePromise;
  // Call backend to create the Checkout Session
  const response = await fetch(
    "https://localhost:44375/api/Payments",
    { 
      method:"post", 
      body: JSON.stringify({orderNumber, cost}),
      headers: {
        "Content-Type": "application/json",
      }
    }
  );

  const session = await response.json();
  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout(session);
}

const onRadioChange = (e) =>{
  console.log(e.target.value)
}

const Payment = ()=>{
  const history = useHistory();
  const {state} = useLocation();
  console.log(state.orderItems);

  const [selfPickup, setSelfPickup] = useState(true);

  return <div className="row payment-container">
    <label className="payment-order-number">Order number <b>:</b> {state.orderNum}</label>
    <div className="payment-take-choice">
      <label for="restaurant">
        <input type="radio" checked={selfPickup} onClick={()=>setSelfPickup(true)}/>Hämta själv
      </label><br />
      <label for="hem">
        <input type="radio" checked={!selfPickup} onClick={()=>setSelfPickup(false)}/>Hemleverans
      </label>
      </div>
      <div className='payment-info'>
        {
          selfPickup
          ? <form className='form-container'>
              <fieldset>
                <legend>Vänligen reservera ditt beställningsnummer</legend>
                <h1 className="payment-order-number-checked">{state.orderNum}</h1>
              </fieldset>
            </form>          
          : <form className='form-container'>
              <fieldset>
                <legend>Vänligen ge oss din information så att vi kan nå dig</legend>
                <input type ='text' placeholder='Mobil Number' ></input>
                <input type ='text' placeholder='Address' ></input>
              </fieldset>
            </form> 
        }

      <div className='payment-item'>
        <h4>Köpta produkter</h4>
        {
          state.orderItems.map(
            (orderItemInfo,index)=><div key={index} className='payment-order-item'>
              <label>{orderItemInfo.item.name}</label>
              <label className='order-item-numericcell'>{orderItemInfo.item.cost}x{orderItemInfo.count}</label> 
              <label className='order-item-numericcell'>{orderItemInfo.item.cost*orderItemInfo.count}:-</label>
            </div>              
          )
        }
        <div key={state.orderItems.length} className='payment-order-item'>
              <label className="payment-total">Total betalning:</label>
              <label ></label> 
              <label className="order-item-numericcell payment-total">{state.cost}:-</label>
        </div> 
        
        <div className="payment-btn">
          <button className=" payment-backbtn" id="checkout-button" onClick={()=> history.push('/order') }>Tillbaka</button>
          <button className=" payment-paybtn" id="checkout-button" onClick={()=> checkout(state.orderNum.toString(), state.cost)}>Betala</button>
        </div>
      </div>
    </div>
  </div>
}

export default Payment