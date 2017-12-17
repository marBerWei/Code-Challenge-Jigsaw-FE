import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'

// var data = [
//       {author: "Pete Hunt", text: "This is one comment", time:'Thu Dec 14 2017 09:46:12 GMT-0500 (EST)'},
//       {author: "Jordan Walke", text: "This is *another* comment", time:'Thu Dec 13 2017 10:46:12 GMT-0500 (EST)'}
// ];

class CommentBox extends React.Component {
  render(){
    console.log(this.props)
    return(
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.props.image[0].comments}/>
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
