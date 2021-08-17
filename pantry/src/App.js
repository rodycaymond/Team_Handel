
import './App.css';
import NavBar from './components/Navbar'

function App() {
  return (
    <div className="App" >
      <div className="title" style={{textDecoration: 'underline'}}>
        <h1>Title</h1>
      </div>
      <NavBar />
      <div className="body">
        <p>this is the body</p>
      </div>
    </div>
  );
}

export default App;
