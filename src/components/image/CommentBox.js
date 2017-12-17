import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { addComment } from '../../actions/image'
import { connect } from 'react-redux'

class CommentBox extends React.Component {


  onCommentSubmit = (stuff) => {
      this.props.addComment(stuff)
      this.forceUpdate();
  }

  render(){

    

    let currentId = this.props.image.slice(20,27)
    const currImage = this.props.images.filter(img => {
      return img.cover === currentId
    })
    const currIndex = this.props.images.indexOf(currImage[0])
    console.log('current index', currIndex)
    console.log('currentId', currentId)
    console.log('all images accessed at id', this.props.images[currIndex].comments)
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
    images: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (stuff) => {
      dispatch(addComment(stuff))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)



