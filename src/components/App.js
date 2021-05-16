import React from 'react';
import Login from "./Login";
import Signup from "./Signup";
import NewWarehouse from "./NewWarehouse";
import Landing from "./Landing";
import WarehouseList from "./WarehouseList";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Navbar';
// import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/Login"><Login /></Route>
        <Route path="/NewWarehouse"><NewWarehouse /></Route>
        <Route path="/WarehouseList"><WarehouseList /></Route>
        <Route path="/Profile"><Profile /></Route>
        <Route path="/"><Landing /></Route>
      </Switch>
    </Router>
    

  )
}

export default App;
