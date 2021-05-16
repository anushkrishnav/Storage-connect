import React from "react";
import { NavLink } from "react-router-dom";
import werewolf from './imgs/werewolf.png'


export default function NavBar() {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
        <img className="logl" src={werewolf} alt="Logo" />
          <NavLink
            to="/"
            className="inline-flex items-center py-3 px-2 my-6 rounded text-red-200 hover:text-yellow-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/WarehouseList"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-600"
            
          >
            Warehouse
          </NavLink>
          <NavLink
            to="/Profile"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-600"
            
          >
            Profile
          </NavLink>
          <NavLink
            to="/Login"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-600"
            
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}