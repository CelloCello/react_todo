import React from 'react';
import { Link, IndexLink } from 'react-router';


const App = (props) => (
  <div>
    <center><h1>My APP</h1></center>
    <nav>
      <ul>
        <li><IndexLink to="/my" activeClassName="active">My</IndexLink></li>
        <li><Link to="todo" activeClassName="active">To-Do List</Link></li>
      </ul>
    </nav>

    <br/>
    {props.children}
  </div>
);


export default App;