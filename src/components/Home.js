import React, { Component } from 'react'
import Axios from 'axios';

export default class Home extends Component {
    componentDidMount() {
        Axios.get('https://api.themoviedb.org/3/movie?api_key=396b426ebe69b6ba34b1950dd878055e')
        .then(res => {
            console.log(res)
        })
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
