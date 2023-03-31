import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, markAsDone }) => {
  return (
    <div>
      {todos.length &&
        todos.map(({ name, id, done }) => (
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
