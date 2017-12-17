import React from 'react'
import ImageList from './ImageList'
import { fetchImages, searchImages } from '../../actions/image'
import ImageSearch from './ImageSearch'
import { connect } from 'react-redux'
import ImageDetails from './ImageDetails'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import ModalExampleControlled from './ModalExample'

class ImageContainer extends React.Component {

	state ={
		clicked: false
	}
	
	// componentDidMount() {
 //    	this.props.fetchImages()
 //  }

  onClick = () => {
		this.setState({ clicked: true })
		//console.log(this.state.clicked)
	}

  isFiltered =() => {
    if(this.props.filter !== undefined){
      console.log(this.props.filter.type)
    }
    //this.images(this.props.filter.type)
  }

	render(){

    let images = ''
    if(this.props.filter.type === 'nsfw'){
      images = this.props.images.filter(image => image.nsfw === true)
    } else if (this.props.filter.type === 'pix') {
      images = this.props.images.filter(image => image.type === "image/png")
    } else if (this.props.filter.type === 'gif') {
      images = this.props.images.filter(image => image.images[0].type === "image/gif")
    } else {
      images = this.props.images
    }

		return(
      <div>
			 <ImageList images={images} />
      </div>
		)
	}
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
    images: state.originalList,
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



// <ImageList onClick={this.onClick} images={images}/>

