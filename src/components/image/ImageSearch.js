import React from 'react'
import { fetchImages, searchImages, searchTerm } from '../../actions/image'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

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
		this.props.searchTerm(this.state.searchParams)
		// filter over the searchedImages and set the currentList
		// based on the filters
		this.props.history.push('/images')
		console.log(this.props.images)
	}


	render(){
		//console.log(this.props)
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

function mapStateToProps(state) {
  return {
    filter: state.filter,
    images: state.currentList
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
    },
    searchTerm: (term) => {
      dispatch(searchTerm(term))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (ImageSearch))