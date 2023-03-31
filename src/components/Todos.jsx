import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, markAsDone, showOnlyActive }) => {

  const filteredTodos = showOnlyActive ? todos.filter(todo =>  !todo.done) : todos
  return (
    <div>
      {todos.length > 0 &&
        filteredTodos.map(({ name, id, done }) => (
          <Todo
            key={id}
            id={id}
            name={name}
            deleteTodo={deleteTodo}
            markAsDone={markAsDone}
            done={done}
          />
        ))}
    </div>
  );
};

export default Todos;
