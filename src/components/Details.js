import React from 'react';
import rekommendation_data from '../rekommendation'
import './Details.css'

const Details = (props)=>{
  const rekommendation = rekommendation_data;
  return (
    <div className='details-orderlist'>
      {
        props.selectedItem.id !== ''
        ? 
          <>
            <div className='details-container'>
              <div className='details-image-info'>
                <img className="details-image" src={props.selectedItem.image} />
                {/* <p>Mozzarella, Fontina, Parmesan, Feta cheese, Mushrooms, Bell peppers,
                   Italian pepperoncini, sausage, black olives, Chopped fresh basil. 
                   Baby arugula, Pesto, Pepperoni, Onions or caramelized, Ham</p> */}
              </div>
              <label>{props.selectedItem.name}</label>
              <label>{props.selectedItem.cost}:-</label>
              <button onClick={()=>props.addOrderdItem(props.selectedItem) } className='details-add-orderbtn'>Lägg</button>
            </div>
            <div className='details-recommendation-title'>Tillval</div >
            <div className='details-recommendations'>        
              {
                rekommendation_data.map(
                  (item)=> <div className="details-recommended-item">
                    <img className='details-rekommend-image' src={item.image} />
                    <p>{item.name}</p>
                    <p>{item.cost}:-</p>
                    <button className='details-add-recommendation-btn' onClick={()=>props.addOrderdItem(item)}>+</button>
                  </div>
                )
              }
            </div>
          </>
        : <div className="details-default-img-div">
            <img src='./asset/logo/4.jpg' className='details-front-image'></img>
            <p className="details-default-p">Välkomen till Skövde pizza! Du kan vänligen välja din favoritpizza från pizzamenyn till vänster.  </p>
          </div>
      } 
    </div>
  )
  
};

export default Details;