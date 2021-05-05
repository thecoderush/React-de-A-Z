import '..//node_modules/bootstrap/dist/css/bootstrap.min.css'
import Item from './Components/Item'

function App() {
  return (
    <div className="App">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <button className="btn btn-danger">Hello World!</button>
      <h1 className="text-center mt-3">Todo-List</h1>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default App;
