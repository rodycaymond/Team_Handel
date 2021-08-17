import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import PantryBody from './components/Pantry.js';
import RecipeBody from './components/Recipe.js';
import GroceryBody from './components/Grocery.js';

function App() {

  const [state, setState] = useState(null)

  return (
    <Router>
    <div className="App" >
      <div className="title">
        <h1>Pantry</h1>
      </div>
      <NavBar state={setState}/>
      <div className="body">
        <p>this is the body</p>
        <Route path="/Pantry" component={props=><PantryBody state={state}/>}/>
        <Route path="/Recipes" component={props=><RecipeBody state={state}/>}/>
        <Route path="/Grocery" component={props=><GroceryBody state={state}/>}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
