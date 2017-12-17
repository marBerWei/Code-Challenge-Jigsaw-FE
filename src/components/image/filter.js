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
			type: 'nsfw'
		})
		// connect to state and filter
		// this.props.images by "nsfw" in
		// metadata
		// action filterImages needs to set the filtered
		//images category in the store and then pass that
		// to the displayImages action or something
	}

	onMouseOver2 = () => {
		console.log("hello from pix")
		this.setState({
			clicked: true,
			type: 'pix'
		})
	}

	onMouseOver3 = () => {
		console.log("hello from gifs")
		this.setState({
			clicked: true,
			type: 'gifs'
		})
	}

	onMouseOver4 = () => {
		console.log("hello from all")
		this.setState({
			clicked: true,
			type: 'all'
		})
	}

	onClick = () => {
		this.props.filterImages(this.state)
		this.props.searchImages(this.props.searchTerm)
	}

	render(){
		return (
	   <div className="dropdown">
		  <button className="dropbtn">Filter</button>
		  <div className="dropdown-content">
		    <a onMouseOver={this.onMouseOver1} onClick={this.onClick}>NSFW</a>
		    <a onMouseOver={this.onMouseOver2} onClick={this.onClick}>PIX</a>
		    <a onMouseOver={this.onMouseOver3} onClick={this.onClick}>GIFS</a>
		    <a onMouseOver={this.onMouseOver4} onClick={this.onClick}>ALL</a>
		  </div>
		</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    images: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterImages: (filter) => {
                /// action creator from './actions/images'
      dispatch(filterImages(filter))
    },
    searchImages: (title) => {
                /// action creator from './actions/images'
      dispatch(searchImages(title))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Filter)
