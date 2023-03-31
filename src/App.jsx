import "./App.css";
import Todos from "./components/Todos";
import View from "./components/View";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
      <View/>
    </div>
  );
}

export default App;