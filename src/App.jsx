import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import View from './components/View'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if(!newTodo) return
    setTodos([...todos, newTodo])
    setNewTodo("")
  }

  const newTodoHandler = (e) => {
    setNewTodo(e.target.value)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => todos.indexOf(todo) !== id))
  }

  const markAsDone = (id) => {
    
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} setNewTodo={setNewTodo} newTodoHandler={newTodoHandler} newTodo={newTodo}/>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
      <View />
    </div>
  )
}

export default App
