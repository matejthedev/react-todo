// import React from 'react'
// import { addTodo, newTodo } from '../redux/todos'

// const AddTodo = ({addTodo, newTodo}) => {
//   const newTodoHandler = (e) => {
//     setNewTodo({ name: e.target.value, id: Date.now(), done: false });
//   };

//   return (
//     <div>
//       <input type="text" onChange={newTodoHandler} value={newTodo ? newTodo.name : ""}/>
//       <button onClick={addTodo}>Add</button>
//     </div>
//   )
// }

// export default AddTodo


import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos';

function AddTodo() {
  const [newTodo, setNewTodo] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch(addTodo({
      name: newTodo,
      id: Date.now(),
      done: false,
    }));
    setNewTodo('');
  };

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
