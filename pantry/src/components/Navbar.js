import { useState, useEffect } from 'react';
import './NavBar.css'
import Select from 'react-select';


function Navbar () {
    const pantry = [
        {value: 'All', label: 'All'},
        {value: 'Reserved', label: 'Reserved'},
        {value: 'Unreserved', label: 'Unreserved'}];
    const recipes = [
        {value: 'All', label: 'All'},
        {value: 'Lists', label: 'Lists'},];
    const groceryList = [
        {value: 'New List', label: 'Created Lists'},
        ];

    return (
        <div className="NavBar">
            <Select placeholder="Pantry" className="select" options={pantry}>
            </Select>
            <Select placeholder="Recipes" className="select" options={recipes}>
            </Select>
            <Select placeholder="Grocery List" className="select" options={groceryList}>
            </Select>
            <div className="select">Expired</div>
        </div>
    )
}

export default Navbar;