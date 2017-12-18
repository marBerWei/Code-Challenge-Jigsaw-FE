// Your Friendly Neighborhood Whale Error Page

import React from 'react'

const ErrorPage = () => {
	return(
		<div className="errorPage">
			<img className="whale_pic" src={require('./whale.png')}/>
			<h1> No results found.</h1>
			<h2> Oh fooey.</h2> 
			<h2> No worries! Just try another search term ; ) </h2>
		</div>
	)
}

export default ErrorPage