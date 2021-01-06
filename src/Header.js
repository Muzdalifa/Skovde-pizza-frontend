import React from 'react';
import './Header.css'
import {Link, useLocation} from 'react-router-dom'

const Header = ()=>{
  const {pathname} = useLocation()

  return <header>
    <h3>Skövde Pizza</h3>
    <div className='header-nav'>
      <div>
          <Link className= {`header-link ${pathname==='/'? 'header-link-active':'' }`} to='/' >Hem </Link>
        </div>
        <div>
          <Link className={`header-link ${pathname==='/order'? 'header-link-active':'' }`} to='/order' >Beställa</Link>
        </div>
        <div>
          <Link className= {`header-link ${pathname==='/kontakt'? 'header-link-active':'' }`} to='/kontakt'  >Kontakt</Link>  
        </div>
    </div>
  </header>
}
export default Header