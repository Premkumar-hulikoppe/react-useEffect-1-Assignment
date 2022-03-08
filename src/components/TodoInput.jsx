
import { useState } from "react";

export const TodoInput = ({ sendTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="inputBox">
      <input
        onInput={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        placeholder="Please enter your todo here.."
      />
      <button
        onClick={() => {
          sendTodo(todo);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
