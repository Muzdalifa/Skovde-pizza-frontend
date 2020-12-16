import React, {useState} from 'react';
import data from './data';
import Menu from './Menu';
import Header from './Header';
import OrderdItem from './OrderdItem';
import Details from './Details';
import './App.css'
import Footer from './Footer';


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
      < Header/>
      <div className='main'>
        <Menu { ...menuProps}   />
        <Details {...detailsProps}  />
        <OrderdItem {...orderdItemsProps}/>
      </div>
      <Footer/>
    </div>
  )
  }
export default App;
