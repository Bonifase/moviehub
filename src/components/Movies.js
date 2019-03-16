import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Card, CardText, CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';
import SearchArea from './SearchArea';

class Movies extends Component {
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
        console.log(data)
        const movieItems = data.map((d) => <li key={d.id}>
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(`${process.env.REACT_APP_API_URL}movie/upcoming{d.backdrop_path}?api_key=${process.env.REACT_APP_API_KEY}`) center / cover'}}>{d.title}</CardTitle>
                    
                            <CardText>
                            <div>Number of votes: {d.vote_count}</div>
                            <div>Average Votes: {d.vote_average}</div>
                            <div>Release Date: {d.release_date}</div>
                            <div>Overview: {d.overview}</div>
                            <div>backdrop_path: `${process.env.REACT_APP_API_URL}movie/upcoming{d.backdrop_path}?api_key=${process.env.REACT_APP_API_KEY}`</div>
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card></li>);
        return (
            <div>
                <SearchArea />
                { movieItems }
            </div>
        );
    }
}

export default Movies;