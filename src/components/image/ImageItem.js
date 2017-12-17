import React from 'react'
import CommentExample from './CommentBox'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ModalExampleControlled from './ModalExample'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import { addComment } from '../../actions/image'
class ImageItem extends React.Component {

	state={
		clicked: false,
		opened:false
	}

	render(){
		//console.log(this.props)
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
			     
			  </div>
			  
			  <div className="image-overlay">
	          <div className="text">
	          	<div className="imageText">{this.props.image.title.slice(0,20)}...</div>
	            <a><ModalExampleControlled img={displayImage} title={this.props.image.title}/></a>
	            <div className="imageTextSmall">{this.props.image.comments.length} comments</div>
	          </div>
	      </div>
			</div>
			
		)
	}
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addComment: (stuff) => {
//                 /// action creator from './actions/images'
//       dispatch(addComment(stuff))
//     }
//   }
// }


export default ImageItem

// <Link to={"/images/" + imageId} >add a comment</Link>