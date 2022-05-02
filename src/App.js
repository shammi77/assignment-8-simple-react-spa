import logo from './logo.svg';
import './App.css';

import { Card } from 'react-bootstrap';
import Bikes from './component/Bikes/Bikes';

function App() {


  return (
    <div>
      <h1 className="text-warning text-center w-50">Bike Store</h1>
  <Bikes></Bikes>
    </div>
  );
}

export default App;
