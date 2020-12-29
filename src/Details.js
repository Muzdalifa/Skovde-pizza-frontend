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
          <>
            <div className='details'>
              <img src={props.selectedItem.image} />
              <label>{props.selectedItem.name}</label>
              <label>{props.selectedItem.cost}:-</label>
              <button onClick={()=>props.addOrderdItem(props.selectedItem) } className='addOrderBtn'>Add</button>
            </div>
            <div className='recTitle'>Tillval</div >
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
          </>
        : <div className='frontImage'>
            <img src='./asset/logo/4.jpg' ></img>
            <p>Välkomen till Skövde pizza! Du kan vänligen välja din favoritpizza från pizzamenyn till vänster.  </p>
          </div>
      } 
    </div>
  )
  
};

export default Details;