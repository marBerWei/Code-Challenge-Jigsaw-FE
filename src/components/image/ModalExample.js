import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react'

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<div className="modalButton" onClick={this.handleOpen}>
        Click to Expand
        </div>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        // size='Large'
      >
        <Modal.Content image>
          <Image className="modalPic" src={this.props.img}/>
        </Modal.Content>
        <Modal.Actions>
          
        </Modal.Actions>
      </Modal>
    )
  }
}