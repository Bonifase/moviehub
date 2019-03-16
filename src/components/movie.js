import React from 'react'
import { Button, Card, CardText, CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';

export default function movie(props) {
    let imagePath = process.env.REACT_APP_IMAGE_URL + props.d.backdrop_path;
  return (
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${imagePath}) center / cover`}}>{props.d.title}</CardTitle>
            
                <CardText>
                <div><strong>Number of votes:</strong> {props.d.vote_count}</div>
                <div><strong>Average Votes:</strong> {props.d.vote_average}</div>
                <div><strong>Release Date:</strong> {props.d.release_date}</div>
                <div><strong>Overview:</strong> {props.d.overview}</div>
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
