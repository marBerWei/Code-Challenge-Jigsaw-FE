// Filter Dropdown Component in Header

import React from 'react'
import { connect } from 'react-redux'
import { filterImages, searchImages} from '../../actions/image'

class Filter extends React.Component { 

	state ={
		clicked: false,
		type: ''
	}

	onMouseOver1 = () => {
		console.log("hello from nsfw")
		this.setState({
			clicked: true,
			type: 'NSFW'
		})
	}

	onMouseOver2 = () => {
		console.log("hello from pix")
		this.setState({
			clicked: true,
			type: 'PIX'
		})
	}

	onMouseOver3 = () => {
		console.log("hello from gifs")
		this.setState({
			clicked: true,
			type: 'GIFS'
		})
	}

	onMouseOver4 = () => {
		console.log("hello from none")
		this.setState({
			clicked: true,
			type: ''
		})
	}

	onClick = () => {
		this.props.filterImages(this.state)
		this.props.searchImages(this.props.searchTerm)
	}

	render(){
		return (
	   <div className="dropdown">
		  <button className="dropbtn">{this.props.filter.type ? this.props.filter.type : 'FILTER'}</button>
		  <div className="dropdown-content">
		    <a onMouseOver={this.onMouseOver1} onClick={this.onClick}>NSFW</a>
		    <a onMouseOver={this.onMouseOver2} onClick={this.onClick}>PIX</a>
		    <a onMouseOver={this.onMouseOver3} onClick={this.onClick}>GIFS</a>
		    <a onMouseOver={this.onMouseOver4} onClick={this.onClick}>NO FILTER</a>
		  </div>
		</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterImages: (filter) => {
      dispatch(filterImages(filter))
    },
    searchImages: (title) => {
      dispatch(searchImages(title))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Filter)
