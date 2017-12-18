// The Image Container 
// AKA The smartest component of all

import React from 'react'
import ImageList from './ImageList'
import ErrorPage from './ErrorPage'
import { connect } from 'react-redux'

class ImageContainer extends React.Component {

	render(){
    let filteredImages = this.props.images.filter(image => image.images !== undefined).filter(image => parseInt(image.cover_width)/parseInt(image.cover_height) > .8)
    let type = this.props.filter.type // from redux
    let images = ''

    if(type === 'NSFW'){
      images = filteredImages.filter(image => image.nsfw === true )
    } else if(type === 'PIX'){
      images = filteredImages.filter(image => image.images[0].type === "image/jpeg")
    } else if(type === 'GIFS') {
      images = filteredImages.filter(image => image.images[0].animated === true)
    } else {
      images = filteredImages
    }

    // make sure there are images to show!
    if(images.length > 0){
      return(
        <div>
          <div className="resultsContainer">
            <div className="results">
              {images.length} results for "{this.props.results}" {this.props.filter.type !== undefined ? this.props.filter.type : ''} 
            </div>
          </div>
          <ImageList images={images} />
        </div>
      )

    // that whale tho
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
    images: state.originalList,
    results: state.searchTerm
  }
}


export default connect(mapStateToProps)(ImageContainer)