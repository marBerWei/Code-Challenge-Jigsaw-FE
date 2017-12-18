// Stateful Modal component that renders Comment Container

import React, { Component } from 'react'
import { Modal, Image } from 'semantic-ui-react'
import CommentContainer from './CommentContainer'

class ImageModal extends Component {
  
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    //console.log(this.props)
    return (
      <Modal
        trigger={<div className="modalButton" onClick={this.handleOpen}>Click to Expand</div>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
      >
        <Modal.Content image>
          <Image className="modalPic" src={this.props.img}/>
        </Modal.Content>
        <Modal.Content>
          <div className="textModal">"{this.props.title}"</div>
        </Modal.Content>
        <Modal.Content image>
          <CommentContainer image={this.props.img}/>
        </Modal.Content>

      </Modal>
    )
  }
}

export default ImageModal