// Search Function Component in Header

import React from 'react'
import { searchImages, searchTerm, filterImages } from '../../actions/image'
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
		this.props.filterImages('')
		this.props.history.push('/')
		document.getElementById("mySearchForm").reset();
	}


	render(){

		return(
	
				<div className="search">
					<form id="mySearchForm" onSubmit= {this.onSubmit}>
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
    images: state.originalList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchImages: (title) => {
      dispatch(searchImages(title))
    },
    searchTerm: (term) => {
      dispatch(searchTerm(term))
    },
    filterImages: (state) => {
      dispatch(filterImages(state))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (ImageSearch))