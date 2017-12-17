import React from 'react'
import { connect } from 'react-redux'
import { filterImages, searchImages} from '../../actions/image'

class Filter extends React.Component { 

	onClick1 = () => {
		console.log("hello from nsfw")
		// connect to state and filter
		// this.props.images by "nsfw" in
		// metadata
		// action filterImages needs to set the filtered
		//images category in the store and then pass that
		// to the displayImages action or something
	}

	onClick2 = () => {
		console.log("hello from pix")
	}

	onClick3 = () => {
		console.log("hello from gifs")
	}

	render(){
		return (
	   <div class="dropdown">
		  <button class="dropbtn">Filter</button>
		  <div class="dropdown-content">
		    <a onClick={this.onClick1}>NSFW</a>
		    <a onClick={this.onClick2}>PIX</a>
		    <a onClick={this.onClick3}>GIFS</a>
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
