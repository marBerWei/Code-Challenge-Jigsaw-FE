import React from 'react'
import NavBar from './NavBar'
import Name from './Name'
import ImageSearch from '../image/ImageSearch'

class Header extends React.Component {
	render(){
		return(
		  <div className="header">
			  <Name />
			  <ImageSearch/>
			  <NavBar/>
		  </div>
		)
	}
}

export default Header

