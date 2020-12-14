import React, {useState}from 'react';
import './Menu.css';

const Menu = ()=>{
  const [pizza,setPizza] = useState(['Bacon tomato','OIP','Salami','Vegetarian','Shrimp','Pizza two in one','Pepperoni i tomatyi','OIP mix' ])
  
  return <div className='lefNav'>
    <h4>Menu</h4>
    {pizza.map((name)=><div className='navLink' >{name}</div>)}    
  </div>
}
export default Menu