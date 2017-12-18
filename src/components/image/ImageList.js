import React from 'react'
import ImageItem from './ImageItem'

const ImageList = (props) => {

	
  const images = props.images
	const imageItems = images.map((image, index) => {
	   					return (
	   					<ImageItem 
	   						onClick={props.onClick} 
	   						key={index} 
	   						image={image}
	   					/>
	  		)})
	return(
		<div className="List section flex-container">{imageItems}</div>
	  )
}

export default ImageList