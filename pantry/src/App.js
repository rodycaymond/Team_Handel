import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        <Link to="/" className="title">
          <h1>Pantry</h1>
        </Link>
      </div>
      <NavBar state={setState}/>
        <div className="body">
          <Route exact path="/" component={Home}/>
          <Route path="/Pantry" component={props=><PantryBody state={state}/>}/>
          <Route path="/Recipes" component={props=><RecipeBody state={state}/>}/>
          <Route path="/Grocery" component={props=><GroceryBody state={state}/>}/>
        </div>
      </div>
    </Router>
  );
}

function Home(){
  return (
    <p>Welcome to your Pantry &reg;</p>
  )
};

export default App;
