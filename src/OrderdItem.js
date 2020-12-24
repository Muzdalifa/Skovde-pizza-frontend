import React, { useState } from 'react';
import './OrderdItem.css'

const OrderdItem = (props)=>{
//currentOrderdItemInfo: it's an object 
  const sum = (accumulator, currentOrderdItemInfo) =>{ 
    
    return accumulator + currentOrderdItemInfo.item.cost * currentOrderdItemInfo.count
   } 
  console.log(props.orderdItems);
  return <div className='rightNav'>
    {
      props.orderdItems.map(
        (orderItemInfo,index)=><div key={index} className='rightNavUp' >
          <label>{orderItemInfo.item.name}</label>
          <label>å{orderItemInfo.item.cost}</label>
          <label onClick={()=>props.removeOrderdItem(orderItemInfo.item)}>-</label>
          <label >{orderItemInfo.count}</label>
          <label onClick={()=>props.addOrderdItem(orderItemInfo.item)}>+</label>
          <label>{orderItemInfo.item.cost*orderItemInfo.count}:-</label>
          <button onClick={()=>props.removeOrderdItem(orderItemInfo.item, true)}>Remove</button>
        </div>              
      )
    }
    <div>
    Total: {props.orderdItems.reduce(sum,0)}    
    </div>
    <div className='rightNavDown'>

    </div>
  </div>
}
export default OrderdItem