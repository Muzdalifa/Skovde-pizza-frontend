import React from 'react';
import './Header.css'

const Header = ()=>{
  return <header>
    <h3>Skövde Pizza</h3>
    <div className='nav'>
      <a>Hem</a>
      <a>Om Oss</a>
      <a>Kontakt</a>      
    </div>
  </header>
}
export default Header