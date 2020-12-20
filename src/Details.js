import React from 'react';
import rekommendation_data from './rekommendation'
import './Details.css'

const Details = (props)=>{
  const rekommendation = rekommendation_data;
  return (
    <div className='orderList'>
      {
        props.selectedItem.id !== ''
        ? 
          <div className='details'>
            <img src={props.selectedItem.image} />
            <label>Pizza name: {props.selectedItem.name}</label>
            <label>Cost: {props.selectedItem.cost}</label>
            <button onClick={()=>props.addOrderdItem(props.selectedItem) } className='addOrderBtn'>Add</button>
        </div>
        : null
      } 
      <p>Recommendations</p>
      <div className='rekommendation'>        
        {
          rekommendation_data.map(
            (item)=> <div className="recommendedItem">
              <img className='rekommendImage' src={item.image} />
              <p>{item.name}</p>
              <p>{item.cost}</p>
              <button className='AddRekommendationBtn' onClick={()=>props.addOrderdItem(item)}>+</button>
            </div>
          )
        }
      </div>
    </div>
  )
  
};

export default Details;