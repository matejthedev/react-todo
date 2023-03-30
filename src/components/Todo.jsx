import React from 'react'

const Todo = ({todo, deleteTodo, index}) => {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => deleteTodo(index)}>Del</button>
    </div>
  )
}

export default Todo