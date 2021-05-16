import React from "react";
import { NavLink } from "react-router-dom";
import werewolf from './imgs/werewolf.png'

export default function NavBar() {
  return (
    <header style={{background:"#03a9f4"}}>
      <div className="container mx-auto flex justify-between h-24">
        <nav className="flex">
        <img className="logl" src={werewolf} alt="Logo" />
          <NavLink
            to="/"
            className="inline-flex items-center py-3 px-8 my-6 rounded text-red-200 text-3xl hover:text-yellow-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/WarehouseList"
            className="inline-flex items-center py-3 px-8 my-6 rounded text-red-200 text-3xl hover:text-yellow-600"
            
          >
            Warehouse
          </NavLink>
          <NavLink
            to="/Profile"
            className="inline-flex items-center py-3 px-8 my-6 rounded text-red-200 text-3xl hover:text-yellow-600"
            
          >
            Profile
          </NavLink>
          <NavLink
            to="/Login"
            className="inline-flex items-center py-3 px-8 my-6 rounded text-red-200 text-3xl hover:text-yellow-600"
            
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}