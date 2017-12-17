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
	
	componentDidMount() {
    	this.props.fetchImages()
  }

  onClick = () => {
		this.setState({ clicked: true })
		//console.log(this.state.clicked)
	}

  isFiltered =() => {
    if(this.props.filter.isFiltered === true){
        console.log("true filter from the container")
    }
  }

  images = () => {
    return this.props.images.filter(image => image.type !== "video/mp4")
  }

	render(){
    
		return(
      <div>
			<Route exact path="/images" render={(props) => <ImageList images={this.props.images} {...props} />}/>
        <Route path="/images/:id" render={(routeProps) => {         
          const id = routeProps.match.params.id
          const image = this.props.images.filter((image) => {
            if(image.images){
              return image.images[0].id === id
            } else {
              return image.id === id
            }
          })
          console.log(image)
          return <ImageDetails image={image} {...routeProps} />
      }} />
      </div>
		)
	}
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
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



// <ImageList onClick={this.onClick} images={images}/>

