/* eslint-disable react/prop-types */
import Todo from "./Todo.jsx";
export default function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div className="w-full h-full flex flex-col gap-5 items-center pt-[4rem]">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </div>
  );
}
