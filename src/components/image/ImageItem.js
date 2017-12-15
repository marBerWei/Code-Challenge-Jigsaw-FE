import React from 'react'
import CommentExample from './CommentBox'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ModalExampleControlled from './ModalExample'
import { Link } from 'react-router-dom'

class ImageItem extends React.Component {

	state={
		clicked: false,
		opened:false
	}

	// handleClick = (event) => {
	// 	event.preventDefault()
	// }

	// popUp = (event) =>{
	// 	event.preventDefault()
	// 	this.setState({opened:true})
	// }

	render(){
		let imageId = ''
		let displayImage = ''
		if(this.props.image.images){
			//console.log(this.props.image.images)
			displayImage = this.props.image.images[0].link
			imageId = this.props.image.images[0].id
		} else {
			//console.log("no nesting")
			displayImage = this.props.image.link
			imageId = this.props.image.id
		}

		//console.log(imageId)
		return(

			
			<div className="item">
				<div className="itemBackground">
			     <img onClick={this.handleClick}  className="thumb" src={displayImage}/>
			     <div className="imageText">{this.props.image.title}</div>
			  </div>
			  
			  <div className="image-overlay">
	          <div className="text">
	            <a><ModalExampleControlled img={displayImage}/></a>
	            <Link to={"/images/" + imageId} >add a comment</Link>
	          </div>
	      </div>
			</div>
			
		)
	}
}

export default ImageItem