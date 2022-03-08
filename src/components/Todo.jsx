import { useState, useEffect } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todosall, setTodosall] = useState([]);
  const [page, setPage] = useState(1);

  const getTodos = () => {
    fetch(`http://localhost:3004/Todos/`)
    .then((res) => res.json())
    .then((data) => {setTodosall(data)});

    fetch(`http://localhost:3004/Todos?_limit=3&_page=${page}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  const checkPagination = () => {
      todos.length === 0 ? setPage(page - 1) :
      todos[todos.length - 1].id === todosall[todosall.length - 1].id ? alert("This is the last page") : setPage(page + 1);
  };

  useEffect(() => {
    getTodos();
  }, [page]);

  const sendTodo = (task) => {
    const item = {
      title: task,
      done: false,
    };

    fetch("http://localhost:3004/Todos", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getTodos();
    });
  };

  const remove = (id) => {
    fetch(`http://localhost:3004/Todos/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getTodos();
    });
  };

  const togleTodo = (item) => {
    const updatedTodo = {
      title: item.title,
      status: item.status ? false : true,
      id: item.id,
    };
    fetch(`http://localhost:3004/Todos/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedTodo),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getTodos();
    });
  };
  return (
    <>
      <TodoInput sendTodo={sendTodo} />
      <TodoList togleTodo={togleTodo} remove={remove} data={todos} />
      <div className="pageBtns">
        <button
          onClick={() => {
            checkPagination();
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            page === 1 ? alert("This is the first page") : setPage(page - 1);
          }}
        >
          Previous
        </button>
        <h3>Page {page}</h3>
      </div>
    </>
  );
};
