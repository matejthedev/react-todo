import React from 'react'

const Todo = ({name, deleteTodo, id, markAsDone, done}) => {
  return (
    <div>
      <span onClick={() => markAsDone(id)} style={{textDecoration: done ? "line-through" : "none"}}>{name}</span>
      <button onClick={() => deleteTodo(id)}>Del</button>
    </div>
  )
}

export default Todo