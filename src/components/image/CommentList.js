// Presentational Comment List component

import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

	 const commentNodes = props.data.map(function (comment) {
	    return (
	      <Comment author={comment.author}>
	        {comment.text}
	      </Comment>
	    )
	  })

	return(
	    <div className="commentList">
	      {commentNodes}
	    </div>
	  )
}

export default CommentList
