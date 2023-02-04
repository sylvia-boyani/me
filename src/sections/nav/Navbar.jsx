import React from 'react'
import './navbar.css'
import data from './data.js'

function Navbar() {
  return (
    <nav>
      <div id='container nav__container'>
        <ul id='nav__menu'>

          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}
            </a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar