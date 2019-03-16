import React, { Component } from 'react';
import Axios from 'axios';
import SearchArea from './SearchArea';
import Movie from './Movie';

class Movies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [],
            response: 'got reponse',
            searchTerm: ""
        }
        this.baseURL = process.env.REACT_APP_API_URL
        this.apiKey = process.env.REACT_APP_API_KEY
    }
    componentDidMount() {
        Axios.get(`${this.baseURL}movie/upcoming?api_key=${this.apiKey}`)
        .then(res => {
            let movies = res.data.results;
            this.setState({ data: movies })
            // console.log(movies);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(">>>>>>>", this.state.searchTerm)
        fetch(`${this.baseURL}search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`).then(data => data.json())
        .then(data => {
            console.log(">>>>>>search", data.results)
            this.setState({movies: data.results})
        })
    }
    onChange = e => {
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        let data = this.state.data
        console.log("after search", data)
        const movieItems = data.map((d) => <li key={d.id}>
        <Movie d={d}/>
        </li>);
        return (
            <div>
                <SearchArea 
                handleSubmit={this.handleSubmit}
                onChange={this.onChange}
                searchValue={this.state.searchTerm}
                />
                { movieItems }
            </div>
        );
    }
}

export default Movies;