import { List } from './List';
import './App.css';
import image from './pen.png';

function App() {
  return (
    <div>
      <div className="container">
        <h1>To Do List</h1>
      </div>
      <div className="container">
        <img src= {image} width= "120px" alt="pen"/>
      </div>
      
      <List />
      
    </div>
  );
}

export default App;
