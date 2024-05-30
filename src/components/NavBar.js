import React from 'react'
import { Link } from 'react-router-dom'
import './static/NavBar.css'
import logo from '../images/download.jpg'
import home from '../images/homeicon.png'

function NavBar() {
  return (
    <div className='navbar'>

      <div className='logo-name'>
        <img src={logo}></img>
        <h2>VidyaSindhu</h2>
      </div>

      <div className='homelink'>
        <a href="/">
        <img src={home} alt="home" />
        </a>
      </div>
    </div>
  )
}

export default NavBar