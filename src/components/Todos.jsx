import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const {showOnlyActive} = useSelector(state => state.view);

  const filteredTodos = showOnlyActive ? todos.filter(todo => !todo.done) : todos;

  return (
    <div>
      {todos.length > 0 &&
        filteredTodos.map(({ name, id, done }) => (
          <Todo
            key={id}
            id={id}
            name={name}
            done={done}
          />
        ))}
    </div>
  );
};

export default Todos;
