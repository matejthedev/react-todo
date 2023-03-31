import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import View from './components/View'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState(null)

  const addTodo = () => {
    if(!newTodo) return
    setTodos([...todos, newTodo])
    setNewTodo(null)
  }

  const newTodoHandler = (e) => {
    setNewTodo({name: e.target.value, id: Date.now(), done: false})
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(({id}) => id !== todoId))
  }

  const markAsDone = (todoId) => {
    setTodos(todos.map(todo => {
      if(todo.id === todoId) {
        todo.done = !todo.done
      }
      return todo
    })
  )}

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} setNewTodo={setNewTodo} newTodoHandler={newTodoHandler} newTodo={newTodo}/>
      <Todos todos={todos} deleteTodo={deleteTodo} markAsDone={markAsDone}/>
      <View />
    </div>
  )
}

export default App
