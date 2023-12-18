import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactPlayer from 'react-player'

const Title =  (props)=>{
      return (
        <Card style={{ width: '18rem' }}>
        
      <ListGroup variant="flush">
        <ListGroup.Item> <strong>"description":</strong>{props.pages.description}</ListGroup.Item>
        <ListGroup.Item><Card.Img variant="top" src={props.pages.postURL}  /></ListGroup.Item>
        <ListGroup.Item><strong>"title":</strong>{props.pages.title}</ListGroup.Item>
        <ListGroup.Item><strong>"rate":</strong>{props.pages.rate}</ListGroup.Item>
        <ListGroup.Item><ReactPlayer url={props.pages.src} /></ListGroup.Item>
      </ListGroup>
    </Card>
      );


}
export default Title;