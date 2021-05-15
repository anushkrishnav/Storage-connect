import React from 'react';
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/Login"><Login /></Route>
      </Switch>
     </Router>
    

  )
}

export default App;
