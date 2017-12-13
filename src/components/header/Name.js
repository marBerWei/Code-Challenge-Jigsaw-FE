import React from 'react'
import { NavLink } from 'react-router-dom'

const Name = (props) => {
	return(
	  <NavLink className="name" to="/about">PIC<strong>STY</strong></NavLink>
	)
}

export default Name