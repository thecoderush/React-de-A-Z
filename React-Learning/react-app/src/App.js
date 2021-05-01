function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <input type="text"/>
      <input type="text"/>
      <br/>
      <button>Changer le state</button>
      {true ? 1000 : "abc"}
    </div>

  //  return React.createElement(
  //   'div',
  //   {className: 'App'},
  //   React.createElement('h1', null, 'Hello World!'
  //   )
  //    )
);
}

export default App;
