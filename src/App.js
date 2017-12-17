import React, { Component } from 'react';
import './App.css';
import About from './components/about/about'
import { fetchImages, searchImages, currentList } from './actions/image'
import ImageContainer from './components/image/ImageContainer'
import Header from './components/header/Header'
import { Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
      this.props.fetchImages()
  }

  setCurrentList = () => {
    this.props.currentList(this.props.originalList)
  }

  render() {
    return (
      <div className="App">
	       <div className="headerContainer">
	       	<Header />
	       </div>
	       <div className="container">
         	<Route exact path="/" render={(props) => <ImageContainer currentList={this.setCurrentList()} {...props} /> } />
	       </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
    images: state.currentList,
    isFetching: state.isFetching,
    originalList: state.originalList,
    currentList: state.currentList
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchImages: () => {
                /// action creator from './actions/images'
      dispatch(fetchImages())
    },
    currentList: (images) => {
                /// action creator from './actions/images'
      dispatch(currentList(images))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
