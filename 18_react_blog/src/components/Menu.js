import React from 'react'
import { NavLink, Switch } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </div>
  )
}

export default Menu
