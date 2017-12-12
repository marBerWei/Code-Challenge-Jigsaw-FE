import React from 'react'
import ImageItem from './ImageItem'

const ImageList = (props) => {
	const imageItems = props.images.map((image, index) => {
    return <ImageItem key={index} image={image}/>
  	})
	return(
		<div className="list">{imageItems}</div>
	)
}

export default ImageList