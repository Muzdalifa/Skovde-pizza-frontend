import React from 'react';
import './Details.css'
import rekommendation_data from './rekommendation'
const Details = (props)=>{
  const rekommendation = rekommendation_data;
  return (
    <div className='orderList'>
      <div className='details'>
        {
          props.selectedItem.id !== ''
          ? 
          <>
            <div>
                <img src={props.selectedItem.image} />
                <label>Pizza name: {props.selectedItem.name}</label>
                <label>Cost: {props.selectedItem.cost}</label>
                <button onClick={()=>props.addOrderdItem(props.selectedItem)}>Add</button>
              </div>
            </>
          : null
        } 
      </div>
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