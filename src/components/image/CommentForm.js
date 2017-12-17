import React from 'react'
import {addComment} from '../../actions/image'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
class CommentForm extends React.Component {
	state = {
		author: '',
		text: '',
		imgIndex: ''
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

		const currImage = this.props.images.filter(img => {
		  return img.cover === this.props.image.slice(20,27)
		})
		const currIndex = this.props.images.indexOf(currImage[0])
		// now use the currIndex to add this.state to the comment array
		// in the redux store
		// this action should take in an index and a comment 
		console.log(currIndex)
		this.setState({
			imgIndex: currIndex
		})
		
	}


	onSubmit= (event) => {
		event.preventDefault()
		this.props.addComment(this.state)
		this.props.history.push(this.props.location)
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm))
