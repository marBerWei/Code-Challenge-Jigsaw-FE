import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

var data = [
      {author: "Pete Hunt", text: "This is one comment", time:'Thu Dec 14 2017 09:46:12 GMT-0500 (EST)'},
      {author: "Jordan Walke", text: "This is *another* comment", time:'Thu Dec 13 2017 10:46:12 GMT-0500 (EST)'}
];

class CommentBox extends React.Component {
  render(){

    return(
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={data}/>
            <CommentForm id={this.props.id}/>
        </div>
      )
  }
}

export default CommentBox
