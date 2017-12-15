import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
      	<NavLink activeClassName="active" className="navItem" to="/about">About</NavLink>
        <NavLink activeClassName="active" className="navItem" to="/images">Browse</NavLink>
        <NavLink activeClassName="active" className="navItem" to="/">Home</NavLink>
      </div>
    )
  }
}


export default NavBar