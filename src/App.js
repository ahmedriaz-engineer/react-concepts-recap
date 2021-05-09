import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(()=>{
    // fetch("https://randomuser.me/api/")
    // .then(response => response.json())
    // .then(data => setUser(data.results[0].name.first))
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setNayoks(data))
  }, [])
  //  const nayoks = [{name: user},{name: "joshim", age: 45}, {name: "shakib khan", age: 40}, {name: "Rajjak", age: 70}, {name: "Salman Shah", age: 60}];
  
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nayok => <Nayok name ={nayok.name} key = {nayok.id} age = {nayok.age}></Nayok>)
      }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

const Nayok = (props) => {
  // console.log(props);
  const nayokStyle = {
    border: "2px solid purple",
    borderRadius: "20px",
    margin: "20px",
    padding: "20px",
    boxShadow: "5px 5px 10px gray",
    backgroundColor: "#282c34",
    color: "salmon"
  }
  return <div style={nayokStyle}>
    <h1>Ami Nayok {props.name}..</h1>
    <h3>I have done 5 movies in {props.age} Years</h3>
  </div>
}

const MovieCounter = () =>{
  
  let [count, setCount] = useState(10);
  const handleClick = () => setCount(count + 1)

  return(
    <div>
      <button onClick = {handleClick}>Add Movie</button>
      <h5>Number of Movies {count}</h5>
      <MoviesDisplay movies = {count}></MoviesDisplay>
      <MoviesDisplay movies = {count + 10}></MoviesDisplay>
      <MoviesDisplay movies = {count + 5}></MoviesDisplay>
    </div>
  )
}

function MoviesDisplay(props){
  // console.log(props);
  return (
    <h4>Movies I have Acted {props.movies}</h4>

  )
}
export default App;
