import React from 'react'
import './Home.css'
import {useHistory} from 'react-router-dom';

const Home = () =>{
  
  const history = useHistory();

  return <div className='home-main-content'>
    <div className='home-left-div'>
      <div className='home-div-before-image'>
        <img className='home-image' src='./asset/logo/home_page_img.jpg' ></img>
      </div>
    </div>
    <div className='home-right-div'>
      <h1>Välkommen</h1>
      <div className='home-info'>      
        Skövde pizza är en familjeägt och drivs restaurang belägen i Skövde Centrum.
        Vi är speciapserade på djuprätt och traditionell skordiva på västkusten,
        serverad med en rad färska sallader, aptitretare och smörgåsar - allt 
        från grunden varje dag.<br />
        <b><i>Njut av vår varma och välkomnande atmosfär på vår expansiva uteplats eller i vår vackra fullservice matsal.</i></b>
      </div>
      <div>
        <h2>Öppettider</h2>
        <div className ='home-open-time'>
          <div className='home-open-day'>
            <div >Mån-Tors </div>
            <div>Fre </div>
            <div>Lör </div>
            <div>Sön </div>
          </div>
          <div className='home-open-hour'>
            <div>11.00&ensp;-&ensp;23.00</div>
            <div>11.00&ensp;-&ensp;22.00</div>
            <div>12.00&ensp;-&ensp;23.00</div>          
            <div>12.00&ensp;-&ensp;22.00</div>
        </div>
      </div>
    </div>
    <div className='home-button'>
      <button className='home-orderbtn' onClick={()=> history.push('/order')}>Beställa</button>
    </div>
    
    </div>
  </div>
}

export default Home