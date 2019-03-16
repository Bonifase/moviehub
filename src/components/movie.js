import React from 'react'
import { Button, Card, CardText, CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';

export default function movie(props) {
  return (
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(`${process.env.REACT_APP_API_URL}movie/upcoming{props.backdrop_path}?api_key=${process.env.REACT_APP_API_KEY}`) center / cover'}}>{props.title}</CardTitle>
            
                <CardText>
                <div>Number of votes: {props.d.vote_count}</div>
                <div>Average Votes: {props.vote_average}</div>
                <div>Release Date: {props.release_date}</div>
                <div>Overview: {props.overview}</div>
                <div>backdrop_path: `${process.env.REACT_APP_API_URL}movie/upcoming{props.backdrop_path}?api_key=${process.env.REACT_APP_API_KEY}`</div>
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
        </Card>
      
  )
}
