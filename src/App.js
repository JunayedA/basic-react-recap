import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent brand="Apple" price="50000"></MyComponent>
      <MyComponent brand="Samsung" price="10000"></MyComponent>
      <MyComponent brand="RayBan" price="500"></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}

function MyComponent(props){

  const [points,setPoints]= useState(1);

  const myStyle ={
    backgroundColor:'#61dafb'
  }

  const handleAddPoints =() =>{
    const newPoints= points * 2;
    setPoints(newPoints);
  }
  return(
    <div style={myStyle}>
      <h1>Brand:{props.brand}</h1>
      <h4>Price:{props.price}</h4>
      <h3>I have points:{points}</h3>
      <button onClick={handleAddPoints}>Add Points</button>
    </div>
  )
}

export default App;
