import React, {useState} from 'react';
import data from './data';
import Order from './Order';

const App = () => {
  //const [orders,setOrders] = useState(data);
  return (
    <section className="App">
      {data.map((order)=>{
        return <Order key={order.orderId} {...order} />
      })}
    </section>
  )
  }
export default App;
