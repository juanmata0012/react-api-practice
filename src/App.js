import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResult: "",
      apiTitle: ""
    }
  }
  componentWillMount() {
    // Make a request for a user with a given ID
axios.get('https://api.nasa.gov/planetary/apod?api_key=gWqPuLvkWkZRIaWFw76qxLLTsNlsJeYycY6wY2Ec')
  .then((response) => {
    console.log(response);
    this.setState({apiResult: response.data.hdurl})
    this.setState({apiTitle: response.data.title})
  })
  .catch((error) => {
    console.log(error);
  });


  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.state.apiResult} className="App-logo" alt="logo" />
          <h2>{this.state.apiTitle}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
