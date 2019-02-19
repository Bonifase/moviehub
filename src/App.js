import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Home from './components/Home';

class App extends Component {
  componentDidMount() {
    Axios.get(`${process.env.REACT_APP_API_URL}movie/550?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        console.log(res)
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Home />
        </header>
      </div>
    );
  }
}

export default App;
