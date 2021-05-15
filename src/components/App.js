import React from 'react';
import SignInSide from "./Login";
import Signup from "./Signup";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
       <div>
         <Signup />
       </div>
     </Container>
    //<Router>
    //  <Link to="/">Home</Link>
    //  <Link to="SignUp">Sign Up</Link>
    //  <Link to="SignInSide">Sign In</Link>
    // </Router>

  )
}

export default App;
