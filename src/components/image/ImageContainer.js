import React from 'react'
import ImageList from './ImageList'
//import { fetchImages, searchImages } from '../../actions/image'
import ImageSearch from './ImageSearch'
import { connect } from 'react-redux'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import ModalExampleControlled from './ModalExample'

class ImageContainer extends React.Component {

	render(){

    let images = ''
    if(this.props.filter.type === 'nsfw'){
      images = this.props.images.filter(image => image.nsfw === true)
    } else if (this.props.filter.type === 'pix') {
      images = this.props.images.filter(image => image.type === "image/png")
    } else if (this.props.filter.type === 'gif') {
      images = this.props.images.filter(image => image.images[0].animated !== false)
      // this shit aint working
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
    images: state.originalList
  }
}


export default connect(mapStateToProps)(ImageContainer)