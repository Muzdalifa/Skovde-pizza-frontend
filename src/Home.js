import React from 'react'
import './Home.css'
const Home = () =>{
  return <div className='home-main-content'>
    <img className='home-image' src='./asset/logo/home_page_img.jpg' ></img>
    <div>
      <p className='home-info'>Skövde Pizza är en familjeägt och drivs restaurang belägen i Skövde Centrum.
      Vi är specialiserade på djuprätt och traditionell skorpa på västkusten,
      serverad med en rad färska sallader, aptitretare och smörgåsar - allt 
      från grunden varje dag.<br />
      Njut av vår varma och välkomnande atmosfär på vår expansiva uteplats eller i vår vackra fullservice matsal.</p>
    </div>
  </div>
}

export default Home