/* eslint-disable react/prop-types */
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit, FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [editTodo, setEditTodo] = useState(content);

  function removeTodoDisplay() {
    onRemoveTodo(id);
  }

  function updateTodo() {
    const request = {
      id: id,
      content: editTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div className="w-full h-max flex items-center justify-center">
      <div className="w-[30rem] h-[2.2rem] rounded-md flex items-center justify-center bg-violet-600 shadow-md text-stone-50 font-semibold">
        {editable ? (
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="w-[30rem] rounded-md h-[2.2rem] pl-2 bg-sky-900 shadow-lg text-sky-400 font-bold outline-none
               placeholder:text-sky-600 transition duration-300"
          />
        ) : (
          `${content}`
        )}
      </div>
      <div className="w-max h-max flex items-center justify-center gap-2 ml-4 ">
        {editable ? (
          <FaCheck
            onClick={updateTodo}
            className="text-[25px] text-green-500 cursor-pointer transition duration-300 hover:scale-[1.1] hover:text-green-700"
          />
        ) : (
          <FaEdit
            onClick={() => setEditable(true)}
            className="text-[25px] text-green-500 cursor-pointer transition duration-300 hover:scale-[1.1] hover:text-green-700"
          />
        )}
        <RiDeleteBin5Fill
          onClick={removeTodoDisplay}
          className="text-[25px] text-rose-500 cursor-pointer  transition duration-300 hover:scale-[1.1] hover:text-red-700"
        />
      </div>
    </div>
  );
}
