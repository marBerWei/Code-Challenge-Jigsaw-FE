import React from 'react'

const ErrorPage = () => {
	return(
	<div className="errorPage">
		<img className="whale_pic" src={require('./whale.png')}/>
		<h1>No results found.</h1>
		<h3> Oh fooey.</h3> 
		<h3> No worries! Just try another search term ; )</h3>
	</div>
	)
}

export default ErrorPage