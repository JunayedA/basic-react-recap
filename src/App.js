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
  const myStyle ={
    backgroundColor:'blue'
  }
  return(
    <div style={myStyle}>
      <h1>Brand:{props.brand}</h1>
      <h4>Price:{props.price}</h4>
    </div>
  )
}

export default App;
