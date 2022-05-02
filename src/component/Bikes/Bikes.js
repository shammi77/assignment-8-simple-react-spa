import React from 'react';
import {useState, useEffect} from 'react';
import { Button, Card } from 'react-bootstrap';
import Bike from '../Bike/Bike';
import './Bikes.css'


const Bikes = () => {
    const [bikes,setBikes] = useState([]);
   


useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setBikes(data))
} ,[])

    return (
        <div className ='col-lg-10'>
            <div className='row'>
         { bikes.map(bike => <Bike 
                   bike={bike} 
                   key={bike.id}
                   ></Bike>)
           }
           </div> 
           <div className="col-lg-2">
               <Card>
                   <Card.Body>
                       <h2>Selected bike</h2>
                       <p>Name: {}</p>
                   </Card.Body>
               </Card>
               <Button>Choose Again</Button>
             
                
           </div></div>     
    );
};

export default Bikes;