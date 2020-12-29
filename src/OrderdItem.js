import React, { useState } from 'react';
import './OrderdItem.css'

const OrderdItem = (props)=>{
//currentOrderdItemInfo: it's an object 
  const sum = (accumulator, currentOrderdItemInfo) =>{ 
    
    return accumulator + currentOrderdItemInfo.item.cost * currentOrderdItemInfo.count
   } 
 
  return <div className='rightNav'>
    <h4>Köpta produkter</h4>
    {
      props.orderdItems.map(
        (orderItemInfo,index)=><div key={index} className='rightNavUp'>
          <label>{orderItemInfo.item.name}</label>
          <label className='numericCell'>å{orderItemInfo.item.cost}</label>
          <div className='orderCount'>
          <label className='labelbtn' onClick={()=>props.removeOrderdItem(orderItemInfo.item)}>-</label>
          <label className='countItem'>{orderItemInfo.count}</label>
          <label className='labelbtn' onClick={()=>props.addOrderdItem(orderItemInfo.item)}
            onMouseDown={(event)=>console.log('mouseDown',event.target.classList)}
            onMouseUp={(event)=>console.log('mouseUp',event.target)}
          >+</label>
          </div>
          <label className='numericCell'>{orderItemInfo.item.cost*orderItemInfo.count}:-</label>
          <button className='orderItemRemoveBtn' onClick={()=>props.removeOrderdItem(orderItemInfo.item, true)}>X</button>
        </div>              
      )
    }
    {
      (props.orderdItems.length === 0)
      ? <div>Varukorgen är tom</div>
      : <div key={-1} className='rightNavUp rightNavTotalPayment'>
          <label>Att betala:</label>
          <label className='hidden'>å67</label>
          <div className='orderCount hidden' >
            <label className='labelbtn hidden'>-</label>
            <label className='countItem hidden'></label>
            <label className='labelbtn hidden'>+</label>
          </div>
          <label className='numericCell'>{props.orderdItems.reduce(sum,0)}:-</label>
          <button className='orderItemRemoveBtn hidden' >X</button>
        </div> 
    }
  </div>
}
export default OrderdItem