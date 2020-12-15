import React, {useState} from 'react';
import data from './data';
import Menu from './Menu';
import Header from './Header'
import OrderdItem from './OrderdItem'
import Details from './Details';
import './App.css'


const App = () => {

  const [selectedItem, setSelectedItem] = useState({id: '',image:'',name:'', Time:''});
  const [orderdItems,setOrderdItems] = useState([]);

  const addOrderdItem=(item)=>{
    orderdItems.push(item);
    setOrderdItems([...orderdItems]);
  }

  const removeOrderdItem=(item)=>{
    const itemIndex = orderdItems.findIndex((x)=>x.id===item.id)
    orderdItems.splice(itemIndex,1)
    setOrderdItems([...orderdItems])
  }

  const menuProps = { data, selectedItem, setSelectedItem }
  const detailsProps = { selectedItem, addOrderdItem }
  const orderdItemsProps = {orderdItems,setOrderdItems,removeOrderdItem}

  return (
    <div className='container'>
      <header>
        <h3>Skövde Pizza</h3>
      </header>
      <div className='middleContent'>
        <Menu { ...menuProps}   />
        <Details className='orderList' {...detailsProps}  />
        <OrderdItem {...orderdItemsProps}/>
      </div>
      <footer>
        Skövde Pizza
      </footer> 
    </div>
  )
  }
export default App;
