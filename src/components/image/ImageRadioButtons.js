import React from 'react'
import { filterImages, searchImages} from '../../actions/image'
import { connect } from 'react-redux'
import { Form, Radio } from 'semantic-ui-react'

class ImageRadioButtons extends React.Component {

	state = {value:''}

  handleChange = (e, { value }) => {
  	this.setState({ value })
  	console.log(this.state)
  }

  onClick = () => {
  	// this.props.filterImages(this.state.value)
    this.props.searchImages(this.state.value)
	}

	render(){
		console.log(this.props.searchTerm + 'nsfw')
		return(
			<div className="radioButtonContainer">
			<Form onClick={this.onClick} className="radioButtonForm">
        <Form.Field >
          <Radio
          	className="radio"
           	label='NSFW'
            name='radioGroup'
            value='nsfw'
            checked={this.state.value === 'nsfw'}
            onChange={this.handleChange}
            onClick={this.onClick(this.props.searchTerm + 'nsfw')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
          	className="radio"
            label='CUTE'
            name='radioGroup'
            value='cute'
            checked={this.state.value === 'cute'}
            onChange={this.handleChange}
            onClick={this.onClick('cute')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
          	className="radio"
            label='NONE'
            name='radioGroup'
            value={this.props.searchTerm}
            checked={this.state.value === this.props.searchTerm}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterImages: (filter) => {
                /// action creator from './actions/images'
      dispatch(filterImages(filter))
    },
    searchImages: (title) => {
                /// action creator from './actions/images'
      dispatch(searchImages(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ImageRadioButtons)