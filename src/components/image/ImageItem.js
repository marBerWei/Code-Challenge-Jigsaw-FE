import React from 'react'
import CommentExample from './CommentBox'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ModalExampleControlled from './ModalExample'

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
		
		let displayImage = ''
		if(this.props.image.images){
			//console.log(this.props.image.images)
			displayImage = this.props.image.images[0].link
		} else {
			//console.log("no nesting")
			displayImage = this.props.image.link
		}
		return(

			<div className="item">

		     <img onClick={this.handleClick}  className="thumb" src={displayImage}/>
		     <p>{this.props.image.title}</p>
		       <div className="image-overlay">
                <div className="text">
                	<a> <ModalExampleControlled img={displayImage}/> </a>
                </div>
               </div>
              

			</div>
		)
	}
}

export default ImageItem