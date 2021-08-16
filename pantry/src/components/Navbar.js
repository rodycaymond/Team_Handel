import { useState, useEffect } from 'react';
import './NavBar.css'
import Select from 'react-select';


function Navbar () {
    return (
        <div className="NavBar">
            <Select placeholder="Pantry" className="select">
                <option>All</option>
                <option>Reserved</option>
                <option>Unreserved</option>
            </Select>
            <Select placeholder="Recipes">
                <options></options>
                <options></options>
            </Select>
            <div>Grocery List</div>
            <div>Expired</div>
        </div>
    )
}

export default Navbar;