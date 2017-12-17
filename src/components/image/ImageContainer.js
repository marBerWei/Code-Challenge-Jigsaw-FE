import React from 'react'
import ImageList from './ImageList'
import ErrorPage from './ErrorPage'
import ImageSearch from './ImageSearch'
import { connect } from 'react-redux'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import ModalExampleControlled from './ModalExample'

class ImageContainer extends React.Component {

	render(){
    let filteredImages = this.props.images.filter(image => image.images !== undefined)
    console.log(filteredImages)
    let images = ''
    if(this.props.filter.type === 'NSFW'){
      images = filteredImages.filter(image => image.nsfw === true )
    } else if(this.props.filter.type === 'PIX'){
      images = filteredImages.filter(image => image.images[0].type === "image/jpeg")
    } else if(this.props.filter.type === 'GIFS') {
      images = filteredImages.filter(image => image.images[0].animated === true)
    } else {
      images = filteredImages
    }

    if(images.length > 0){
      return(
        <div>
        <ImageList images={images} />
        </div>
      )

    } else {
      return (
        <ErrorPage/>
      )
    }

		
	}
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
    images: state.originalList
  }
}


export default connect(mapStateToProps)(ImageContainer)