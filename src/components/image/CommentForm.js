//Comment Form 

import React from 'react'
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
		this.setState({ author: event.target.value })
	}

	onCommentChange = (event) => {
		event.preventDefault()
		
		this.setState({text: event.target.value})

		const currImage = this.props.images.filter(img => img.cover === this.props.image.slice(20,27))
		const currIndex = this.props.images.indexOf(currImage[0])
		this.setState({ imgIndex: currIndex })
		
	}

	onSubmit= (event) => {
		event.preventDefault()
		if(!this.state.author || !this.state.text){
			alert("please enter valid info")
		} else {
			this.props.onCommentSubmit(this.state)
		}
		
		document.getElementById("myForm").reset();
	}

  render(){

	return(
      <form id="myForm" onSubmit={this.onSubmit} className="commentForm">
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
        <div className="buttonBackground">
        <input className="submitButton" type="submit" />
        </div>
      </form>
  	)
	}
}

function mapStateToProps(state) {
  return {
    images: state.currentList
  }
}



export default withRouter(connect(mapStateToProps)(CommentForm))
