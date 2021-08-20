import { useState, useEffect} from 'react';
import './NavBar.css'
import Select, { NonceProvider } from 'react-select';
import { Link, useHistory } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';



function Navbar (props) {
    const history = useHistory();
    //useHistory like LINK for react router DOM, without a link. URL Manipulation, appends at end to render right thing
    const pantry = [
        {value: 'All', label: 'My Pantry'},
        // {value: 'Reserved', label: 'Reserved'},
        // {value: 'Unreserved', label: 'Unreserved'}
    ];
    const recipes = [
        {value: 'Create', label: 'Create'},
        {value: 'All', label: 'All'}];
    const groceryList = [
        {value: 'NewList', label: 'My List'}
        ];
        const [selectedValuePantry, setSelectedValuePantry] = useState('Pantry')
        const [selectedValueRecipes, setSelectedValueRecipes] = useState('Recipes')
        const [selectedValueGrocery, setSelectedValueGrocery] = useState('Grocery')
        function handleChangePantry(event){
            setSelectedValuePantry(event.value);
            props.state(event.value)
            history.push(`/Pantry`);
        }
        function handleChangeRecipes(event){
            setSelectedValueRecipes(event.value);
            props.state(event.value)
            history.push(`/Recipes`);
        }
        function handleChangeGrocery(event){
            setSelectedValueGrocery(event.value);
            props.state(event.value)
            history.push(`/Grocery`);
        }

    return (
        <div className="NavBar" aria-label="navbar">
            <Select placeholder="Pantry"  aria-label="Pantry" style={{color: 'grey'}} className="select" value={selectedValuePantry} options={pantry} onChange={handleChangePantry}>
            </Select>
            <Select placeholder="Recipes" aria-label="Recipes" style={{color: 'grey'}} className="select" value={selectedValueRecipes} options={recipes} onChange={handleChangeRecipes}>
            </Select>
            <Select placeholder="Grocery List" aria-label="Grocery List" style={{color: 'grey'}} className="select" value={selectedValueGrocery} options={groceryList} onChange={handleChangeGrocery}>
            </Select>
            <button type="button" value='expired' className="expired">Expired</button>
        </div>
    )
}

export default Navbar;