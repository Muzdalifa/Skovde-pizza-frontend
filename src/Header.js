import React from 'react';
import './Header.css'
import {Link, useLocation} from 'react-router-dom'

const Header = ()=>{
  const {pathname} = useLocation()

  return <header>
    <h3>Skövde Pizza</h3>
    <div className='header-nav'>
      <div>
          <Link className= {`header-link ${pathname==='/'? 'header-link-active':'' }`} to='/'  style={{ textDecoration: 'none' }}>Hem </Link>
        </div>
        <div>
          <Link className={`header-link ${pathname==='/main'? 'header-link-active':'' }`} to='/main'  style={{ textDecoration: 'none' }} >Meny</Link>
        </div>
        <div>
          <Link className= {`header-link ${pathname==='/omoss'? 'header-link-active':'' }`} to='/omoss'  style={{ textDecoration: 'none' }}>Om Oss</Link>
        </div>
        <div>
          <Link className= {`header-link ${pathname==='/kontakt'? 'header-link-active':'' }`} to='/kontakt'  style={{ textDecoration: 'none' }}>Kontakt</Link>  
      </div>   
    </div>
  </header>
}
export default Header