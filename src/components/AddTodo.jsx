import React from 'react'

const AddTodo = ({addTodo, newTodoHandler, newTodo}) => {
  return (
    <div>
      <input type="text" onChange={newTodoHandler} value={newTodo}/>
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default AddTodo