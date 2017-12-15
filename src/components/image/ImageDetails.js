import React from 'react'
import CommentBox from './CommentBox'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
class ImageDetails extends React.Component {

  render() {

  	
  	console.log(this.props)
  	let displayImage = ''
		if(!this.props.image[0]){
			this.props.history.push("/images")
		} else if(this.props.image[0]) {
			displayImage = this.props.image[0]
		} else {
			displayImage = this.props.image[0].images[0]
		}

		const width = displayImage.width
  	
    return (
    	<div className="detailItem">
    		<div className="backToSearch"><Link to="/images">Back to Browse</Link></div>
	      <div className="imageBackground">
	      	<div className="imageDetails">
		        <img className="detailImage" src={displayImage.link}/>
		        <h1>{displayImage.title}</h1>
		      </div>
		      <div className="imageItem-overlay">
		        <div className="text">
		          	
		        </div>
		      </div>
	 	      <CommentBox image={this.props.image}/>
	        
	      </div>
      </div>
    )
  }
}
export default ImageDetails

// <h2 className="title">{this.props.image.title}</h2>
//         <p className="body">{this.props.image.body}</p>





