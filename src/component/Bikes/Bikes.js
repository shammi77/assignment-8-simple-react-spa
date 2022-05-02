import React from 'react';
import {useState, useEffect} from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes,setBikes] = useState([]);


useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setBikes(data))
} ,[])
    return (
        <div>
           
            {
                bikes.map(bike => <Bike name ={bike.name}></Bike>)
            }
        </div>
    );
};

export default Bikes;