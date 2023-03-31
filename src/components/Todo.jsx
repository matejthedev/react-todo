import React from 'react'
import { markAsDone, deleteTodo } from '../redux/todos'
import { useDispatch } from "react-redux";

const Todo = ({name, id, done}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <span onClick={() => dispatch(markAsDone(id))} style={{textDecoration: done ? "line-through" : "none"}}>{name}</span>
      <button onClick={() => dispatch(deleteTodo(id))}>Del</button>
    </div>
  )
}

export default Todo