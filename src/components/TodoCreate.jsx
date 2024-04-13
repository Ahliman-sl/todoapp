import { useState, useEffect } from "react";
import TodoList from "./TodoList.jsx";

export default function TodoCreate() {
  const [todos, setNewTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setNewTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(newTodo) {
    setNewTodos([...todos, newTodo]);
  }

  function clearInput() {
    setNewTodo("");
  }

  function removeTodo(id) {
    setNewTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  function updateTodo(newTodo) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setNewTodos([...updatedTodos]);
  }

  function createTodo() {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 9999999999),
      content: newTodo,
    };
    addTodo(request);
    clearInput();
  }

  return (
    <div className="w-[60rem] h-[40rem] flex flex-col">
      <div className="w-full h-max flex items-center justify-center gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter todo"
          className="w-[30rem] rounded-md h-[2.2rem] pl-2 bg-sky-900 shadow-lg text-sky-400 font-bold outline-none
             placeholder:text-sky-600 transition duration-300"
        />
        <button
          className="w-[10rem] h-[2.2rem] rounded-md bg-rose-600 text-stone-50
         hover:bg-rose-700 transition duration-300 "
          onClick={createTodo}
        >
          Create todo
        </button>
      </div>
      <TodoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}
