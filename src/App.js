import logo from './logo.svg';
import './App.css';

import { Card } from 'react-bootstrap';
import Bikes from './component/Bikes/Bikes';

function App() {


  return (
    <div>
      <h1 className="text-warning text-center w-100">Bike Store</h1>
  <Bikes></Bikes>

  <footer>
        <h2>Question and answer</h2>
        <h3>1.Difference between props and state</h3>
        <h5>ans: <br />
          Props are read-only. Props can not be modified.props are stateless. props are presentational component. State changes can be asynchronous. State can be modified using (this.setState).If we do action then , state will be change.</h5>

        <h3>2. How react Works?</h3>
        <h5>ans: <br /> React works by creating a virtual DOM.React is Javascript's library, that creates user interfaces in efficient way use declarative code. Creates a list of  changes that need to be made to the actual DOM and then does it all in one single process. Learn once , Write everywhere. It is component-based.
        </h5>
      </footer>
    </div>
  );
}

export default App;
