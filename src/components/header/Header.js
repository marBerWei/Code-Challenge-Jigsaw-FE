import React from 'react'
import NavBar from './NavBar'
import Name from './Name'
import ImageSearch from '../image/ImageSearch'
import ImageRadioButton from '../image/ImageRadioButtons'

class Header extends React.Component {
	render(){
		return(
		  <div className="header">
			  <Name />
			  <ImageSearch/>
			  <ImageRadioButton/>
			  <NavBar/>
		  </div>
		)
	}
}

export default Header

