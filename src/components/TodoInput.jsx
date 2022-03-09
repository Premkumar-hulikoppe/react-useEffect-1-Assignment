
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
        placeholder="Please enter your item here.."
      />
      <button
        onClick={() => {
          sendTodo(todo);
        }}
      >
        Add Item
      </button>
    </div>
  );
};
