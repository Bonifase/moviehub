import React, { Component } from 'react';
import './App.css';
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Home from './components/Home';

class App extends Component {
 

  render() {
    
    return (
      <div >
            <Home />
      </div>
    );
  }
}

export default App;
