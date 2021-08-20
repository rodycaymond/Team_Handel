import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import PantryBody from './components/Pantry.js';
import RecipeBody from './components/Recipe.js';
import GroceryBody from './components/Grocery.js';

function App() {

  const [state, setState] = useState(null)
  const [userId, setUserId] = useState(null)

  return (
    <Router>
    <div className="App" >
      <div className="title">
        <Link to="/Home" className="title">
          <h1>Pantry</h1>
        </Link>
      </div>
      <NavBar state={setState}/>
        <div className="body">
          <Route exact path="/" component={props=><Login setId={setUserId}/>}/>
          <Route exact path="/Home" component={Home}/>
          <Route path="/Pantry" component={props=><PantryBody userId={userId} identifier={state}/>}/>
          <Route path="/Recipes" component={props=><RecipeBody state={state} userId={userId}/>}/>
          <Route path="/Grocery" component={props=><GroceryBody state={state}/>}/>
        </div>
      </div>
    </Router>
  );
}

function Home(){
  return (
    <p aria-label="Home">Welcome to your Pantry &reg;</p>
  )
};

function Login (props){
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){
    fetch(`http://localhost:8080/login?name=${username}&password=${password}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      props.setId(data.[0].pantry_id);
      console.log(data.[0].pantry_id)
      history.push('/Home');
    })
    // to chain two fetches, we need to return a second fetch invoked fetch, then .then chain to complete it
    .catch(err=>{
      console.log(err)
      alert('no username and password combination found')
    })
  }
  function handleCreate(){
    fetch(`http://localhost:8080/createuser`, {method: 'POST', body: {name:username, password:password}})
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    .catch(err=>console.log(err));
  }
  return (
    <div className="login" aria-label="login">
      <h4>Login or Create an Account</h4>
      <div className="login-flex">
        <p>Username:</p>
        <input value={username} placeholder="username" type="text" onChange={(event)=>setUsername(event.target.value)}></input>
        <p>Password:</p>
        <input value={password} placeholder="password" type="text" onChange={(event)=>setPassword(event.target.value)}></input><br></br>
      </div>
      <button onClick={handleLogin}>Login</button><button onClick={handleCreate}>Create Account</button>
    </div>
  )
}

export default App;
