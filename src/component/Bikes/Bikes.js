import React from 'react';
import {useState, useEffect} from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css'
import {Card}  from 'react-bootstrap';

const Bikes = () => {
    const [bikes,setBikes] = useState([]);


useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setBikes(data))
} ,[])
    return (
        <div className='col-lg-10'>
            <div className='row'>
         { bikes.map(bike => <Bike 
                   bike={bike} 
                   key={bike.id}
                   ></Bike>)
           }
           </div>
           
           <div className="col-lg-2">
               <h2>Selected Item</h2>
           </div></div>
      
      
    );
};

export default Bikes;