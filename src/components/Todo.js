import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
       <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
    {todo && todo.completed ? <button>delete</button> : <button>save</button>}
 
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);
