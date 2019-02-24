import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        data: [],
        response: 'got reponse'
    }
}
  componentDidMount() {
    Axios.get(`${process.env.REACT_APP_API_URL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        let movies = res.data.results;
        this.setState({ data: movies })
        // console.log(movies);
    })
}

  render() {
    let data = this.state.data
    const movieItems = data.map((d) => <li key={d.id}>{d.title}</li>);
    return (
      <div className="App">
        <header className="App-header">
         <Home />
         { movieItems }
        </header>
      </div>
    );
  }
}

export default App;
