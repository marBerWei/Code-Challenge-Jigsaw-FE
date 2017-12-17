import React from 'react'
import NavBar from './NavBar'
import Name from './Name'
import ImageSearch from '../image/ImageSearch'
import Filter from '../image/filter'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

class Header extends React.Component {
	render(){
		return(
		  <div className="header">
			  <Name />
			  <ImageSearch routeProps= { Route, Link, Switch, Redirect }/>
			  <Filter />
		  </div>
		)
	}
}

export default Header

// <ImageRadioButton/>