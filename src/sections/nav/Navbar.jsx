import React from 'react'
import './navbar.css'
import data from './data.js'
import {IoIosColorPalette} from 'react-icons/io'

function Navbar() {
  return (
   <nav>
    <div id='container nav__container'>
      <a href='' className='nav__logo'>
        {/* <h4>Boyani</h4> */}
      </a>
      
      <ul id='nav__menu'>
      
        {
          data.map(item => <li key={item.id}><a href={item.link}>{item.title}
          </a></li>)
        }
        <button id='theme__icon'><IoIosColorPalette/></button>
      </ul>
      
      
    </div>

   </nav>
  )
}

export default Navbar