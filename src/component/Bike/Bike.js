import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Bike = (props) => {
    const {name,price,img}=props.bike;
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">  
      <div className="card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> Name: {name}</Card.Title>
        <Card.Text>Price : {price}</Card.Text>
        
        <Button variant="primary"> choose  </Button>
      </Card.Body>
      
      </div>
  
    </div>
    ); 
};

export default Bike;