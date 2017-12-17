import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink activeClassName="active" className="navItem" to="/">Browse</NavLink>
      </div>
    )
  }
}


export default NavBar