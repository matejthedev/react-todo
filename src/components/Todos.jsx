import React from 'react'
import Todo from './Todo'

const Todos = ({todos, deleteTodo}) => {
  return (
    <div>
      {
        todos.length && todos.map((todo, index) => <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo}/>)
      }
    </div>
  )
}

export default Todos