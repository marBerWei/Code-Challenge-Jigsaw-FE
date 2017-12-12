import React from 'react'

class ImageItem extends React.Component {
	render(){
		let displayImage = ''
		if(this.props.image.images){
			console.log(this.props.image.images)
			displayImage = this.props.image.images[0].link
		} else {
			console.log("no nesting")
			displayImage = this.props.image.link
		}
		return(
		 <div>
		 <img className="image" src={displayImage}/>
		 <p>{this.props.image.title}</p>
		 </div>
		)
	}
}

export default ImageItem