import React, { Component } from 'react';
import './App.css';
import About from './components/about/about'
import ImageContainer from './components/image/ImageContainer'
import Header from './components/header/Header'
import { Route, Redirect} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
	       <div className="headerContainer">
	       	<Header />
	       </div>
	       <div className="container">
         	<Route path="/images" render={(props) => <ImageContainer {...props} /> } />
          <Route path="/about" component={About} />
	       </div>
      </div>
    );
  }
}

export default App;
