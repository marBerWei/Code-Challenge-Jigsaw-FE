import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class CommentForm extends React.Component {
	state = {
		name: '',
		comment: ''
	}

	onNameChange = (event) => {
		event.preventDefault()
		this.setState({
			name: event.target.value
		})
		
	}

	onCommentChange = (event) => {
		event.preventDefault()
		this.setState({
			comment: event.target.value
		})
		
	}

	onSubmit= (event) => {
		event.preventDefault()
		const image = this.props.images.filter(image => image.id === this.props.id)
		console.log(this.props)
		console.log(this.state)
		console.log(this)
		console.log('name:', this.state.name, 'comment:', this.state.comment)
		image[0].comments.push(this.state)
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

export default connect(mapStateToProps)(CommentForm)
