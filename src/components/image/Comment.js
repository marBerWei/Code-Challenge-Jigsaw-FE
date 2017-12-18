// Individual comment with text-decoration

import React from 'react'

class Comment extends React.Component {

  render(){
  
  var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '#hello, markdown!',
    html      = converter.makeHtml(text);
  var rawMarkup = converter.makeHtml(this.props.children.toString());

    return(
         <div className="comment">
          <h3 className="commentAuthor">
            {this.props.author}
          </h3>
          <div className="commentContent">
         	  <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
         	</div>
         </div>
    )
}
}

export default Comment
