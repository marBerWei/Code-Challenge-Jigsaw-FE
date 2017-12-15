import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'

class CommentBox extends React.Component {
  render(){

    return(
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.props.comment}/>
            <CommentForm image={this.props.image}/>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    comment: state.comment
  }
}

export default connect(mapStateToProps)(CommentBox)
