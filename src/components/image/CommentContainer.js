//Comment Container 
//Displays Comment Form and Comment List

import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { addComment } from '../../actions/image'
import { connect } from 'react-redux'

class CommentContainer extends React.Component {

  // pass this function down to Comment Form
  onCommentSubmit = (stuff) => {
      this.props.addComment(stuff)
      this.forceUpdate();
  }

  render(){

    // Find index of current image in images array from Redux store
    let currentId = this.props.image.slice(20,27)
    const currImage = this.props.images.filter(img => img.cover === currentId)
    const currIndex = this.props.images.indexOf(currImage[0])
    
    return(
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.props.images[currIndex].comments}/>
          <CommentForm onCommentSubmit={this.onCommentSubmit} image={this.props.image}/>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    images: state.currentList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (stuff) => {
      dispatch(addComment(stuff))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)



