import React from 'react'
import {addComment} from '../../actions/image'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class CommentForm extends React.Component {
	state = {
		author: '',
		text: '',
		time: Date.now()
	}

	onNameChange = (event) => {
		event.preventDefault()
		this.setState({
			author: event.target.value
		})
		
	}

	onCommentChange = (event) => {
		event.preventDefault()
		this.setState({
			text: event.target.value
		})
		
	}

	onSubmit= (event) => {
		event.preventDefault()
		
		const currImage = this.props.images.filter(img => {
		  return img.id === this.props.image[0].id
		})
		// currImage.comments.push("something")
		console.log(currImage)
		this.props.addComment(this.state)
	}

  render(){

	return(
      <form onSubmit={this.onSubmit} className="commentForm">
        <input 
        	className="nameForm" 
        	type="text" 
        	placeholder="Your name" 
        	onChange={this.onNameChange}
        />
        <input 
        	className="textForm" 
        	type="text" 
        	placeholder="Say something..."
        	onChange={this.onCommentChange} 
        />
        <input type="submit" />
      </form>
  	)
	}
}

function mapStateToProps(state) {
  return {
    images: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment) => {
                /// action creator from './actions/images'
      dispatch(addComment(comment))
    }
  
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
