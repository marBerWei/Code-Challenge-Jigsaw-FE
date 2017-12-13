import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react'

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<h1 onClick={this.handleOpen}>Click to Expand</h1>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='Fullscreen'
      >
        <Modal.Content image className="modalPic">
          <Image wrapped src={this.props.img}/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}