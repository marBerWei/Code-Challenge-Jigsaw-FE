import React from 'react'
import ImageItem from './ImageItem'

class ImageList extends React.Component {

	render(){
	console.log(this.props)
    const images = this.props.images
	const imageItems = images.map((image, index) => {
	   					return (
	   					<ImageItem 
	   						onClick={this.props.onClick} 
	   						key={index} 
	   						image={image}
	   					/>
	  				  )})
	return(
		<div className="List section flex-container">{imageItems}</div>
	  )
	}
}

export default ImageList