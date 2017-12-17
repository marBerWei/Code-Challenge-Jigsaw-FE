import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'

var data = [
      {author: "Pete Hunt", text: "This is one comment", time:'Thu Dec 14 2017 09:46:12 GMT-0500 (EST)'},
      {author: "Jordan Walke", text: "This is *another* comment", time:'Thu Dec 13 2017 10:46:12 GMT-0500 (EST)'}
];

class CommentBox extends React.Component {
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
          <CommentForm image={this.props.image}/>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    images: state.list
  }
}

export default connect(mapStateToProps)(CommentBox)



