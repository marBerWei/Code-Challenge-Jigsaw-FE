import React from 'react'
import ImageList from './ImageList'
import { fetchImages, searchImages } from '../../actions/image'
import ImageSearch from './ImageSearch'
import { connect } from 'react-redux'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import ModalExampleControlled from './ModalExample'

class ImageContainer extends React.Component {

	state ={
		clicked: false
	}
	
	componentDidMount() {
    	this.props.fetchImages("cat")
  	}

  	onClick = () => {
		this.setState({ clicked: true })
		console.log(this.state.clicked)
	}
	render(){
		return(
			<div className="container">
			  <ImageList onClick={this.onClick} images={this.props.images}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    images: state.list,
    isFetching: state.isFetching
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchImages: () => {
                /// action creator from './actions/images'
      dispatch(fetchImages())
    },
    searchImages: (title) => {
                /// action creator from './actions/images'
      dispatch(searchImages(title))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)