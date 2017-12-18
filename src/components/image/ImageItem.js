// Image Item Presentational Component

import React from 'react'
import ImageModal from './ImageModal'
import { connect } from 'react-redux'

const ImageItem = (props) => {

		const displayImage = props.image.images[0].link

		return(
			<div className="item">
				<div className="itemBackground">
			     <img className="thumb" src={displayImage}/>
			  </div>
			  <div className="image-overlay">
	        <div className="text">
          	<div className="imageText">{props.image.title.slice(0,20)}...</div>
            	<a><ImageModal img={displayImage} title={props.image.title}/></a>
            <div className="imageTextSmall">{props.image.comments.length} comments</div>
	        </div>
	      </div>
			</div>
			
		)
}

export default ImageItem