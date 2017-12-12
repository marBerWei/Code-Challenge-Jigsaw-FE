import React from 'react'

class ImageSearch extends React.Component {

	state = {
		searchParams: ''
	}

	onChange = (event) => {
		event.preventDefault()
		this.setState({
			searchParams: event.target.value
		})
		this.props.searchImages(event.target.value)
		// console.log('etv is ',event.target.value)
		console.log('state is ',this.state.searchParams)
	}



	render(){
		return(
			<div className="search">
			<input className="searchBox" onChange={this.onChange}/>
			</div>
		)
	}
}

export default ImageSearch