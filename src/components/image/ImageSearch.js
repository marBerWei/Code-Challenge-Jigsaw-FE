import React from 'react'
import { fetchImages, searchImages } from '../../actions/image'
import { connect } from 'react-redux'

class ImageSearch extends React.Component {

	state = {
		searchParams: ''
	}

	onChange = (event) => {
		event.preventDefault()
		if(!event.target.value){
			this.setState({
				searchParams: "everything"
			})
		} else {
			this.setState({
				searchParams: event.target.value
			})
		}
		
	}

	onSubmit= (event) => {
		event.preventDefault()
		this.props.searchImages(this.state.searchParams)
	}


	render(){
		return(
			
			
				<div className="search">
					<form onSubmit= {this.onSubmit}>
						<div className="searchButton">
						<input className="searchBox" onChange={this.onChange} placeholder="Search..."/>
						
						</div>
					</form>
				</div>
			
			
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchImages: () => {
                /// action creator from './actions/images'
      dispatch(fetchImages())
    },
    searchImages: (title) => {
                /// action creator from './actions/images'
      dispatch(searchImages(title))
    }
  }
}

export default connect(null, mapDispatchToProps) (ImageSearch)